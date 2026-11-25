export type AssessValues = Record<string, string>;

export type NumberField = {
  type: "number";
  id: string;
  group: string;
  label: string;
  unit?: string;
  min: number;
  max: number;
  step?: number;
  hint?: string;
};

export type SelectField = {
  type: "select";
  id: string;
  group: string;
  label: string;
  options: { value: string; label: string }[];
};

export type CheckField = {
  type: "check";
  id: string;
  group: string;
  label: string;
  hint?: string;
  basic?: boolean;
};

export type AssessField = NumberField | SelectField | CheckField;

export type AssessLine = { label: string; value: string };

export type AssessResult = {
  ready: boolean;
  tone: "pass" | "fail" | "pending";
  grade: string;
  summary: string;
  lines: AssessLine[];
  gaps: string[];
};

export type Assessment = {
  id: string;
  basis: string;
  fields: AssessField[];
  checkWords?: { yes: string; no: string; na: string };
  score: (values: AssessValues) => AssessResult;
};

const DISCLAIMER = "正式等級以主管機關、評定機構或認證單位核定為準。";

function fieldsOf(id: string): AssessField[] {
  return assessments.find((item) => item.id === id)?.fields ?? [];
}

function num(values: AssessValues, id: string): number | null {
  const raw = values[id];
  if (raw == null || String(raw).trim() === "") return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function bounded(values: AssessValues, field: NumberField): { value: number | null; over: boolean } {
  const value = num(values, field.id);
  if (value == null) return { value: null, over: false };
  if (value < field.min || value > field.max) return { value, over: true };
  return { value, over: false };
}

function missingNumbers(values: AssessValues, fields: NumberField[]): string[] {
  return fields.filter((field) => num(values, field.id) == null).map((field) => `尚未填寫${field.label}`);
}

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

function pct(value: number) {
  return `${round1(value)}%`;
}

function pending(gaps: string[], summary = "必填項目填完後即時試算。"): AssessResult {
  return { ready: false, tone: "pending", grade: "填寫中", summary, lines: [], gaps };
}

function eewhScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const numbers = fields.filter((field): field is NumberField => field.type === "number");
  const gaps = [
    ...missingNumbers(values, numbers),
    !values.owner ? "尚未選擇建築屬性" : "",
    !values.site ? "尚未選擇基地面積" : "",
  ].filter(Boolean);
  const over = numbers.flatMap((field) => {
    const read = bounded(values, field);
    return read.over ? [`${field.label}超出 0～${field.max}`] : [];
  });
  if (gaps.length || over.length) return pending([...gaps, ...over]);

  const scoreOf = (id: string) => num(values, id) ?? 0;
  const total = round1(scoreOf("bio") + scoreOf("retain") + scoreOf("energy") + scoreOf("carbon") + scoreOf("indoor") + scoreOf("water"));
  const publicBuilding = values.owner === "public";
  const energyNeed = publicBuilding ? 80 : 75;
  const energyPass = scoreOf("scoreee") >= energyNeed;
  const waterPass = scoreOf("water") >= 3.5;
  let grade = "合格級";
  if (total >= 71) grade = "鑽石級";
  else if (total >= 58) grade = "黃金級";
  else if (total >= 50) grade = "銀級";
  else if (total >= 42) grade = "銅級";

  const blocked = !energyPass || !waterPass;
  const reward: Record<string, number> = { 鑽石級: 10, 黃金級: 8, 銀級: 6, 銅級: 4, 合格級: 2 };
  const largeSite = values.site === "large";
  const rewardBlocked = largeSite && (grade === "銅級" || grade === "合格級");
  const rewardText = blocked
    ? "門檻未過，沒有等級與容積獎勵"
    : rewardBlocked
      ? "基地 500 m² 以上，銅級與合格級不計容積獎勵"
      : `都更、危老可試算基準容積 ${reward[grade]}%`;

  const failGaps = [
    !energyPass ? `建築能效得分 ${scoreOf("scoreee")}，未達${publicBuilding ? "公有 80" : "民間 75"}` : "",
    !waterPass ? `水資源 ${scoreOf("water")} 分，未達門檻 3.5 分` : "",
  ].filter(Boolean);

  return {
    ready: true,
    tone: blocked ? "fail" : "pass",
    grade: blocked ? "未達合格" : grade,
    summary: blocked ? "門檻指標未通過，總分再高也不能取得等級。" : `總分 ${total}，六項合計 100 分。`,
    lines: [
      { label: "總分", value: `${total} / 100` },
      { label: "能效門檻", value: energyPass ? "通過" : "未通過" },
      { label: "水資源門檻", value: waterPass ? "通過" : "未通過" },
      { label: "容積獎勵", value: rewardText },
    ],
    gaps: failGaps,
  };
}

function lebrGrade(rate: number) {
  if (rate >= 20) return "低碳 1+ 級";
  if (rate >= 16) return "第 1 級";
  if (rate >= 12) return "第 2 級";
  if (rate >= 8) return "第 3 級";
  if (rate > 3) return "第 4 級";
  return "第 5～7 級";
}

function lebrScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const numbers = fields.filter((field): field is NumberField => field.type === "number");
  const gaps = missingNumbers(values, numbers);
  if (gaps.length) return pending(gaps);
  const stages = ["make", "build", "repair", "demo"] as const;
  const base = stages.reduce((sum, id) => sum + (num(values, `b-${id}`) ?? 0), 0);
  const design = stages.reduce((sum, id) => sum + (num(values, `d-${id}`) ?? 0), 0);
  if (base <= 0) return pending(["基準案合計須大於 0"]);
  const rate = ((base - design) / base) * 100;
  const grade = lebrGrade(rate);
  const lowCarbon = rate > 3;
  return {
    ready: true,
    tone: lowCarbon ? "pass" : "fail",
    grade,
    summary: lowCarbon ? "減碳率超過 3%，達低碳建築門檻。" : "減碳率 3% 以下，未達低碳建築。",
    lines: [
      { label: "基準案", value: `${round1(base)}` },
      { label: "設計案", value: `${round1(design)}` },
      { label: "減碳率", value: pct(rate) },
      { label: "低碳建築", value: lowCarbon ? "第 4 級以上" : "未達" },
    ],
    gaps: design > base ? ["設計案碳排高於基準案，請確認數量與係數"] : [],
  };
}

function bersScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const direct = num(values, "eui");
  const area = num(values, "area");
  const kwh = num(values, "kwh");
  const baseline = num(values, "baseline");
  const computed = area != null && area > 0 && kwh != null ? kwh / area : null;
  const eui = direct ?? computed;
  const gaps = [
    eui == null ? "填寫耗電密度，或同時填寫樓地板面積與全年用電" : "",
    baseline == null ? "尚未填寫基準耗電密度" : "",
    baseline != null && baseline <= 0 ? "基準耗電密度須大於 0" : "",
    eui != null && eui < 0 ? "耗電密度不可為負" : "",
  ].filter(Boolean);
  if (gaps.length || eui == null || baseline == null || baseline <= 0) return pending(gaps.length ? gaps : ["資料不足"]);

  const saving = ((baseline - eui) / baseline) * 100;
  let band = "低於第 4 級常見的節能幅度";
  if (saving >= 50) band = "節能幅度達 1+ 級常見的約 50%";
  else if (saving >= 20) band = "節能幅度達第 4 級常見的約 20%";
  const existing = values.mode === "existing";
  const month = num(values, "monthVar");
  const year = num(values, "yearVar");
  const billMissing = existing
    ? [month == null ? "既有建築請填逐月用電變動率" : "", year == null ? "既有建築請填全年用電變動率" : ""].filter(Boolean)
    : [];
  if (billMissing.length) return pending(billMissing);
  const billGaps = existing
    ? [
        month != null && month > 50 ? "逐月變動率超過 50%，電費單可能不符 BERSe 正常營運條件" : "",
        year != null && year > 20 ? "全年變動率超過 20%，電費單可能不符 BERSe 正常營運條件" : "",
      ].filter(Boolean)
    : [];
  void fields;
  return {
    ready: true,
    tone: billGaps.length ? "fail" : saving >= 20 ? "pass" : "pending",
    grade: pct(saving),
    summary: `相對基準耗電密度${band}。1～7 級用動態評分尺度，本表不直接換算等級。`,
    lines: [
      { label: "耗電密度", value: `${round1(eui)} kWh/m²·年` },
      { label: "基準", value: `${round1(baseline)} kWh/m²·年` },
      { label: "節能率", value: pct(saving) },
      ...(computed != null && direct == null ? [{ label: "由用電量換算", value: `${round1(computed)} kWh/m²·年` }] : []),
    ],
    gaps: billGaps,
  };
}

function checklistScore(
  values: AssessValues,
  fields: AssessField[],
  titles: { pass: string; fail: string; empty: string },
): AssessResult {
  const checks = fields.filter((field): field is CheckField => field.type === "check");
  const unanswered = checks.filter((field) => !values[field.id]);
  const applicable = checks.filter((field) => values[field.id] && values[field.id] !== "na");
  const passed = applicable.filter((field) => values[field.id] === "yes");
  const basic = checks.filter((field) => field.basic);
  const basicFail = basic.filter((field) => values[field.id] !== "yes");
  const rate = applicable.length ? Math.round((passed.length / applicable.length) * 100) : 0;
  if (unanswered.length === checks.length) {
    return pending([titles.empty]);
  }
  const basicPass = basic.filter((field) => values[field.id] === "yes").length;
  const gaps = [
    ...basicFail.map((field) => (values[field.id] ? `基本項目未完成：${field.label}` : `基本項目未填：${field.label}`)),
    ...unanswered.filter((field) => !field.basic).map((field) => `尚未填寫${field.label}`),
  ];
  const ready = unanswered.length === 0;
  const ok = ready && basicFail.length === 0;
  return {
    ready,
    tone: !ready ? "pending" : ok ? "pass" : "fail",
    grade: ready ? (ok ? titles.pass : titles.fail) : "填寫中",
    summary: `適用項目 ${passed.length}／${applicable.length} 項完成，完成率 ${rate}%。`,
    lines: [
      { label: "完成率", value: `${rate}%` },
      { label: "基本項目", value: `${basicPass}／${basic.length}` },
      { label: "未填", value: `${unanswered.length} 項` },
    ],
    gaps: gaps.slice(0, 8),
  };
}

function housingScore(values: AssessValues): AssessResult {
  const ids = ["structure", "fire", "access", "air", "light", "sound", "save", "maintain"];
  const labels: Record<string, string> = {
    structure: "結構安全",
    fire: "防火安全",
    access: "無障礙環境",
    air: "空氣環境",
    light: "光環境",
    sound: "音環境",
    save: "節能省水",
    maintain: "住宅維護",
  };
  const gaps = ids.filter((id) => !values[id]).map((id) => `尚未選擇${labels[id]}等級`);
  if (gaps.length) return pending(gaps);
  const structureBonus: Record<string, number> = { "1": 6, "2": 4, "3": 2, "4": 0 };
  const accessBonus: Record<string, number> = { "1": 4, "2": 3, "3": 0, "4": 0 };
  const structure = structureBonus[values.structure] ?? 0;
  const access = accessBonus[values.access] ?? 0;
  return {
    ready: true,
    tone: "pass",
    grade: `結構 ${values.structure} 級`,
    summary: "八類等級已齊。容積獎勵只計結構安全與無障礙環境，其餘類別不給容積。",
    lines: [
      { label: "結構安全獎勵", value: structure ? `基準容積 ${structure}%` : "無" },
      { label: "無障礙環境獎勵", value: access ? `基準容積 ${access}%` : "無" },
      { label: "兩項合計", value: `${structure + access}%` },
      { label: "不得重複", value: "耐震標章 10%、無障礙住宅建築標章 5%" },
    ],
    gaps: [],
  };
}

function barrierScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const checks = fields.filter((field): field is CheckField => field.type === "check");
  const unanswered = checks.filter((field) => !values[field.id]);
  const units = num(values, "units");
  const passUnits = num(values, "passUnits");
  const gaps = [
    units == null ? "尚未填寫總戶數" : "",
    passUnits == null ? "尚未填寫符合戶數" : "",
    units != null && passUnits != null && passUnits > units ? "符合戶數不可大於總戶數" : "",
    ...unanswered.map((field) => `尚未填寫${field.label}`),
  ].filter(Boolean);
  if (gaps.length || units == null || passUnits == null) return pending(gaps.length ? gaps : ["資料不足"]);

  const shared = checks.filter((field) => field.group === "共用部分");
  const unitItems = checks.filter((field) => field.group === "住宅單位");
  const sharedOk = shared.every((field) => values[field.id] === "yes");
  const unitOk = unitItems.every((field) => values[field.id] === "yes");
  const ratio = units > 0 ? passUnits / units : 0;
  const apartment = values.kind === "apartment";
  const unitLabel = apartment ? sharedOk && passUnits >= 1 && unitOk : sharedOk && unitOk;
  const buildingLabel = apartment && sharedOk && unitOk && passUnits >= 3 && ratio >= 0.05;
  const grade = buildingLabel ? "可申請建築標章" : unitLabel ? "可申請單位標章" : "未達標章條件";
  return {
    ready: true,
    tone: unitLabel ? "pass" : "fail",
    grade,
    summary: apartment
      ? `符合 ${passUnits} 戶，占專有部分 ${pct(ratio * 100)}。`
      : "非公寓大廈只申請單位標章，全棟都要符合設計基準。",
    lines: [
      { label: "符合比例", value: units > 0 ? pct(ratio * 100) : "—" },
      { label: "共用部分", value: sharedOk ? "符合" : "未完成" },
      { label: "住宅單位", value: unitOk ? "符合" : "未完成" },
      { label: "容積獎勵", value: buildingLabel ? "危老、都更基準容積 5%" : "單位標章不計容積" },
    ],
    gaps: [
      apartment && passUnits < 3 ? "建築標章至少要 3 戶" : "",
      apartment && ratio < 0.05 ? "建築標章要達專有部分 5%" : "",
      !sharedOk ? "公寓大廈的共用部分都要符合" : "",
      !unitOk ? "住宅單位的檢核項目未完成" : "",
    ].filter(Boolean),
  };
}

function leedScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const numbers = fields.filter((field): field is NumberField => field.type === "number");
  const checks = fields.filter((field): field is CheckField => field.type === "check");
  const gaps = [
    ...missingNumbers(values, numbers),
    ...checks.filter((field) => !values[field.id]).map((field) => `尚未填寫${field.label}`),
  ];
  const over = numbers.flatMap((field) => (bounded(values, field).over ? [`${field.label}超出 0～${field.max}`] : []));
  if (gaps.length || over.length) return pending([...gaps, ...over]);
  const total = numbers.reduce((sum, field) => sum + (num(values, field.id) ?? 0), 0);
  const missed = checks.filter((field) => values[field.id] !== "yes");
  let grade = "未達認證級";
  if (total >= 80) grade = "白金級";
  else if (total >= 60) grade = "金級";
  else if (total >= 50) grade = "銀級";
  else if (total >= 40) grade = "認證級";
  const blocked = missed.length > 0;
  return {
    ready: true,
    tone: blocked || total < 40 ? "fail" : "pass",
    grade: blocked ? "先決條件未完成" : grade,
    summary: blocked ? `得分 ${total}，但先決條件未全部符合。` : `得分 ${total}／110。`,
    lines: [
      { label: "總分", value: `${total} / 110` },
      { label: "先決條件", value: blocked ? `${missed.length} 項未完成` : "全數符合" },
      { label: "距白金", value: total >= 80 ? "已達" : `還差 ${round1(80 - total)} 分` },
    ],
    gaps: missed.map((field) => field.label),
  };
}

function wellScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const numbers = fields.filter((field): field is NumberField => field.type === "number");
  const checks = fields.filter((field): field is CheckField => field.type === "check");
  const gaps = [
    ...missingNumbers(values, numbers),
    ...checks.filter((field) => !values[field.id]).map((field) => `尚未填寫${field.label}`),
  ];
  if (gaps.length) return pending(gaps);
  const points = numbers.map((field) => ({ label: field.label, value: num(values, field.id) ?? 0 }));
  const total = points.reduce((sum, item) => sum + item.value, 0);
  const missed = checks.filter((field) => values[field.id] !== "yes");
  const min = Math.min(...points.map((item) => item.value));
  let grade = "未達銅級";
  if (total >= 80 && min >= 3) grade = "白金級";
  else if (total >= 60 && min >= 2) grade = "金級";
  else if (total >= 50 && min >= 1) grade = "銀級";
  else if (total >= 40) grade = "銅級";
  const short = points.filter((item) => {
    if (total >= 80 && item.value < 3) return true;
    if (total >= 60 && item.value < 2) return true;
    if (total >= 50 && item.value < 1) return true;
    return false;
  });
  return {
    ready: true,
    tone: missed.length || grade === "未達銅級" ? "fail" : "pass",
    grade: missed.length ? "必要條件未完成" : grade,
    summary: `十大概念合計 ${total} 分，單一概念最低 ${min} 分。`,
    lines: [
      { label: "總分", value: `${total}` },
      { label: "概念最低分", value: `${min}` },
      { label: "必要條件", value: missed.length ? `${missed.length} 項未完成` : "全數符合" },
    ],
    gaps: [...missed.map((field) => field.label), ...short.map((item) => `${item.label}分數不足以支持目前總分對應的等級`)],
  };
}

function leedZeroScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const numbers = fields.filter((field): field is NumberField => field.type === "number");
  const gaps = missingNumbers(values, numbers);
  if (gaps.length) return pending(gaps);
  const pairs = [
    ["carbonUse", "carbonOff", "零碳", "排放", "抵銷"],
    ["energyUse", "energyMake", "零能耗", "源能源用量", "產生量"],
    ["waterUse", "waterAlt", "零水耗", "自來水用量", "替代水源"],
  ] as const;
  const lines: AssessLine[] = [];
  const fail: string[] = [];
  for (const [useId, offId, name] of pairs) {
    const use = num(values, useId) ?? 0;
    const off = num(values, offId) ?? 0;
    const ok = off >= use;
    lines.push({ label: name, value: ok ? "達成" : `還差 ${round1(use - off)}` });
    if (!ok) fail.push(`${name}尚未平衡`);
  }
  const waste = num(values, "waste") ?? 0;
  const diverted = num(values, "diverted") ?? 0;
  if (waste <= 0) return pending(["廢棄物總量須大於 0"]);
  const rate = (diverted / waste) * 100;
  const wasteOk = rate >= 90;
  lines.push({ label: "零廢棄物", value: wasteOk ? `達成 ${pct(rate)}` : pct(rate) });
  if (!wasteOk) fail.push("回收再利用率未達 90%");
  const passed = 4 - fail.length;
  return {
    ready: true,
    tone: fail.length ? "fail" : "pass",
    grade: `${passed}／4 項達成`,
    summary: "四項各自以最近 12 個月數據判斷，可分開申請。",
    lines,
    gaps: fail,
  };
}

function gnfzScore(values: AssessValues): AssessResult {
  const ids = ["s1", "s2", "s3", "cut", "offset"];
  const names: Record<string, string> = { s1: "範疇一", s2: "範疇二", s3: "範疇三", cut: "減量", offset: "抵銷" };
  const gaps = ids.filter((id) => num(values, id) == null).map((id) => `尚未填寫${names[id]}`);
  if (!values.plan) gaps.push("尚未填寫淨零計畫");
  if (gaps.length) return pending(gaps);
  const gross = (num(values, "s1") ?? 0) + (num(values, "s2") ?? 0) + (num(values, "s3") ?? 0);
  const net = gross - (num(values, "cut") ?? 0) - (num(values, "offset") ?? 0);
  const plan = values.plan === "yes";
  const offset = num(values, "offset") ?? 0;
  const cut = num(values, "cut") ?? 0;
  let grade = "評估證書";
  if (net <= 0 && plan) grade = "淨零排放證書";
  else if (cut > 0 && net > 0) grade = "淨零里程碑證書";
  else if (plan) grade = "淨零計畫證書";
  return {
    ready: true,
    tone: net <= 0 ? "pass" : "pending",
    grade,
    summary: "依目前填寫的 12 個月數據，對應已達到的證書階段。",
    lines: [
      { label: "盤查合計", value: `${round1(gross)}` },
      { label: "減量後淨額", value: `${round1(net)}` },
      { label: "淨零計畫", value: plan ? "已提出" : "未提出" },
      { label: "碳抵銷證書", value: offset > 0 ? "有抵銷量" : "尚未抵銷" },
    ],
    gaps: [
      !plan ? "還沒有淨零計畫，停在評估證書" : "",
      net > 0 ? `距離淨零還差 ${round1(net)}` : "",
    ].filter(Boolean),
  };
}

function gresbScore(values: AssessValues, fields: AssessField[]): AssessResult {
  const checks = fields.filter((field): field is CheckField => field.type === "check");
  const groups = ["管理", "資產性能", "開發"];
  const lines = groups.map((group) => {
    const items = checks.filter((field) => field.group === group);
    const applicable = items.filter((field) => values[field.id] && values[field.id] !== "na");
    const passed = applicable.filter((field) => values[field.id] === "yes");
    const rate = applicable.length ? Math.round((passed.length / applicable.length) * 100) : 0;
    return { label: group, value: applicable.length ? `${rate}%` : "未填" };
  });
  const answered = checks.filter((field) => values[field.id]).length;
  if (!answered) return pending(["勾選各項文件是否備齊"]);
  const open = checks.filter((field) => values[field.id] === "no").map((field) => `${field.group}／${field.label}`);
  return {
    ready: answered === checks.length,
    tone: open.length ? "pending" : "pass",
    grade: "文件完備率",
    summary: "星等依全球參與者排名，本表只計算文件是否備齊。",
    lines,
    gaps: open.slice(0, 8),
  };
}

function checks(group: string, items: [string, string, boolean?][]): CheckField[] {
  return items.map(([id, label, basic]) => ({ type: "check", id, group, label, basic }));
}

const gradeOptions = [
  { value: "1", label: "第一級" },
  { value: "2", label: "第二級" },
  { value: "3", label: "第三級" },
  { value: "4", label: "第四級" },
];

function gradeSelect(id: string, label: string, hintItems: string): SelectField {
  return {
    type: "select",
    id,
    group: "八大性能等級",
    label: `${label}（${hintItems}）`,
    options: gradeOptions,
  };
}

const yesNo = [
  { value: "yes", label: "已提出" },
  { value: "no", label: "尚未提出" },
];

function carbonFields(prefix: string, group: string): NumberField[] {
  const rows: [string, string][] = [
    ["make", "製造運輸"],
    ["build", "營建施工"],
    ["repair", "更新修繕"],
    ["demo", "拆除廢棄"],
  ];
  return rows.map(([id, label]) => ({
    type: "number",
    id: `${prefix}-${id}`,
    group,
    label,
    unit: "kgCO₂e",
    min: 0,
    max: 1_000_000_000,
    step: 0.1,
  }));
}

export const assessments: Assessment[] = [
  {
    id: "eewh",
    basis: "2026 年版基本型：六項配分合計 100 分。鑽石 71、黃金 58、銀 50、銅 42；建築能效與水資源為門檻。能效門檻用能效得分，民間 75、公有 80；水資源門檻 3.5 分。",
    fields: [
      {
        type: "select",
        id: "owner",
        group: "案件條件",
        label: "建築屬性",
        options: [
          { value: "private", label: "民間建築" },
          { value: "public", label: "公有建築" },
        ],
      },
      {
        type: "select",
        id: "site",
        group: "案件條件",
        label: "基地面積",
        options: [
          { value: "small", label: "未滿 500 m²" },
          { value: "large", label: "500 m² 以上" },
        ],
      },
      { type: "number", id: "bio", group: "指標得分", label: "生物多樣性", unit: "分", min: 0, max: 14, step: 0.1 },
      { type: "number", id: "retain", group: "指標得分", label: "基地保水", unit: "分", min: 0, max: 9, step: 0.1 },
      { type: "number", id: "energy", group: "指標得分", label: "建築能效計分", unit: "分", min: 0, max: 34, step: 0.1 },
      { type: "number", id: "scoreee", group: "指標得分", label: "建築能效得分", unit: "分", min: 0, max: 100, step: 0.1, hint: "用來判斷門檻，不重複加進總分" },
      { type: "number", id: "carbon", group: "指標得分", label: "低蘊含碳", unit: "分", min: 0, max: 18, step: 0.1 },
      { type: "number", id: "indoor", group: "指標得分", label: "室內環境", unit: "分", min: 0, max: 15, step: 0.1 },
      { type: "number", id: "water", group: "指標得分", label: "水資源", unit: "分", min: 0, max: 10, step: 0.1, hint: "門檻 3.5 分" },
    ],
    score: (values) => eewhScore(values, fieldsOf("eewh")),
  },
  {
    id: "intelligent-building",
    basis: "2024 年版六大指標。標示「基本」的項目未完成，就不列為可送審；其餘項目用來查看完成率。98 項配分以評估手冊為準，本表不換算鑽石到合格。",
    fields: [
      ...checks("基礎設施", [
        ["ib-wire", "綜合佈線", true],
        ["ib-net", "資訊通信", true],
        ["ib-int", "系統整合", true],
        ["ib-cell", "各樓層與電梯可行動通訊"],
      ]),
      ...checks("維運管理", [
        ["ib-plat", "智慧建築管理平台，可網頁操作", true],
        ["ib-cross", "跨系統整合", true],
        ["ib-alarm", "告警紀錄與趨勢圖"],
      ]),
      ...checks("安全防災", [
        ["ib-fire", "火災偵測、告警與連動", true],
        ["ib-leak", "漏水偵測"],
        ["ib-quake", "地震偵測"],
        ["ib-intrude", "入侵偵測"],
      ]),
      ...checks("節能管理", [
        ["ib-meter", "分項用電計量", true],
        ["ib-demand", "需量控制"],
      ]),
      ...checks("健康舒適", [
        ["ib-heat", "溫熱環境監測"],
        ["ib-air", "空氣品質監測"],
        ["ib-light", "光環境監測"],
      ]),
      ...checks("智慧創新", [
        ["ib-ai", "人工智慧或大數據應用"],
        ["ib-ev", "電動車充電樁"],
        ["ib-build", "智慧營造或智慧建材"],
      ]),
    ],
    score: (values) =>
      checklistScore(values, fieldsOf("intelligent-building"), {
        pass: "基本項目完成",
        fail: "基本項目未完成",
        empty: "依六大指標勾選現況",
      }),
  },
  {
    id: "lebr",
    basis: "減碳率＝（基準案－設計案）／基準案。20% 以上為 1+ 級，16% 以上第 1 級，12% 第 2 級，8% 第 3 級，超過 3% 第 4 級。只填地上層，地下層不納入分級。",
    fields: [...carbonFields("b", "基準案碳排"), ...carbonFields("d", "設計案碳排")],
    score: (values) => lebrScore(values, fieldsOf("lebr")),
  },
  {
    id: "bers",
    basis: "節能率＝（基準耗電密度－本案耗電密度）／基準耗電密度。約 20% 對應第 4 級常見水準，約 50% 對應 1+ 級常見水準。既有建築另檢核電費單變動率：逐月 50% 以內、全年 20% 以內。",
    fields: [
      {
        type: "select",
        id: "mode",
        group: "評估類型",
        label: "案件類型",
        options: [
          { value: "new", label: "新建建築（圖說模擬）" },
          { value: "existing", label: "既有建築（電費單）" },
        ],
      },
      { type: "number", id: "eui", group: "耗電", label: "本案耗電密度", unit: "kWh/m²·年", min: 0, max: 2000, step: 0.1, hint: "沒有密度時，可改填下面兩欄換算" },
      { type: "number", id: "baseline", group: "耗電", label: "基準耗電密度", unit: "kWh/m²·年", min: 0, max: 2000, step: 0.1 },
      { type: "number", id: "area", group: "用電量換算（可留空）", label: "樓地板面積", unit: "m²", min: 0, max: 1_000_000, step: 0.1 },
      { type: "number", id: "kwh", group: "用電量換算（可留空）", label: "全年用電", unit: "kWh", min: 0, max: 100_000_000, step: 1 },
      { type: "number", id: "monthVar", group: "既有建築電費單", label: "逐月用電變動率", unit: "%", min: 0, max: 300, step: 0.1 },
      { type: "number", id: "yearVar", group: "既有建築電費單", label: "全年用電變動率", unit: "%", min: 0, max: 300, step: 0.1 },
    ],
    score: (values) => bersScore(values, fieldsOf("bers")),
  },
  {
    id: "housing-performance",
    basis: "八大類別各評第一級到第四級，第一級最高。危老與都更：結構安全第一級 6%、第二級 4%、第三級 2%；無障礙環境第一級 4%、第二級 3%。",
    fields: [
      gradeSelect("structure", "結構安全", "結構設計、耐震設計"),
      gradeSelect("fire", "防火安全", "警報、滅火、避難、防延燒"),
      gradeSelect("access", "無障礙環境", "共用與專用部分"),
      gradeSelect("air", "空氣環境", "自然通風、機械通風"),
      gradeSelect("light", "光環境", "自然採光"),
      gradeSelect("sound", "音環境", "分戶牆、開口、樓板"),
      gradeSelect("save", "節能省水", "隔熱、熱水、省水、照明"),
      gradeSelect("maintain", "住宅維護", "共用與專用維護"),
    ],
    score: housingScore,
  },
  {
    id: "barrier-free",
    basis: "公寓大廈申請建築標章：共用部分全數符合，且至少 3 戶、專有部分 5% 以上符合。未達者改看單位標章。非公寓大廈只核發單位標章。",
    fields: [
      {
        type: "select",
        id: "kind",
        group: "申請類型",
        label: "建築物類型",
        options: [
          { value: "apartment", label: "公寓大廈" },
          { value: "other", label: "非公寓大廈" },
        ],
      },
      { type: "number", id: "units", group: "申請類型", label: "住宅單位總戶數", unit: "戶", min: 1, max: 5000, step: 1 },
      { type: "number", id: "passUnits", group: "申請類型", label: "符合設計基準戶數", unit: "戶", min: 0, max: 5000, step: 1 },
      ...checks("共用部分", [
        ["bf-path", "室外通路"],
        ["bf-entry", "主要出入口"],
        ["bf-corridor", "共用走廊"],
        ["bf-lift", "昇降設備"],
      ]),
      ...checks("住宅單位", [
        ["bf-indoor", "室內通路與出入口"],
        ["bf-bed", "臥室"],
        ["bf-bath", "浴廁"],
        ["bf-kitchen", "廚房"],
      ]),
    ],
    score: (values) => barrierScore(values, fieldsOf("barrier-free")),
  },
  {
    id: "leed",
    basis: "LEED v4 新建建築（BD+C）配分合計 110 分：認證 40、銀 50、金 60、白金 80。先決條件必須全數符合。2027 年 6 月 30 日後新案改用 v5，配分不同。",
    fields: [
      ...checks("先決條件", [
        ["p-ss", "施工污染防治"],
        ["p-we1", "室外節水"],
        ["p-we2", "室內節水"],
        ["p-we3", "建築層級用水計量"],
        ["p-ea1", "基本性能確認"],
        ["p-ea2", "最低能源效率"],
        ["p-ea3", "建築層級能源計量"],
        ["p-ea4", "冷媒管理"],
        ["p-mr1", "可回收物收集"],
        ["p-mr2", "營建廢棄物管理計畫"],
        ["p-eq1", "最低室內空氣品質"],
        ["p-eq2", "禁菸"],
      ]),
      { type: "number", id: "lt", group: "得分", label: "區位與交通", unit: "分", min: 0, max: 16, step: 1 },
      { type: "number", id: "ss", group: "得分", label: "永續基地", unit: "分", min: 0, max: 10, step: 1 },
      { type: "number", id: "we", group: "得分", label: "用水效率", unit: "分", min: 0, max: 11, step: 1 },
      { type: "number", id: "ea", group: "得分", label: "能源與大氣", unit: "分", min: 0, max: 33, step: 1 },
      { type: "number", id: "mr", group: "得分", label: "材料與資源", unit: "分", min: 0, max: 13, step: 1 },
      { type: "number", id: "eq", group: "得分", label: "室內環境品質", unit: "分", min: 0, max: 16, step: 1 },
      { type: "number", id: "ip", group: "得分", label: "整合設計", unit: "分", min: 0, max: 1, step: 1 },
      { type: "number", id: "inn", group: "得分", label: "創新", unit: "分", min: 0, max: 6, step: 1 },
      { type: "number", id: "rp", group: "得分", label: "區域優先", unit: "分", min: 0, max: 4, step: 1 },
    ],
    score: (values) => leedScore(values, fieldsOf("leed")),
  },
  {
    id: "leed-zero",
    basis: "以最近 12 個月營運數據，四項分開判斷：抵銷量達排放量為零碳，產生量達用量為零能耗，替代水源達自來水用量為零水耗，回收再利用達 90% 為零廢棄物。",
    fields: [
      { type: "number", id: "carbonUse", group: "零碳", label: "碳排放", unit: "tCO₂e", min: 0, max: 1_000_000, step: 0.1 },
      { type: "number", id: "carbonOff", group: "零碳", label: "碳抵銷", unit: "tCO₂e", min: 0, max: 1_000_000, step: 0.1 },
      { type: "number", id: "energyUse", group: "零能耗", label: "源能源用量", unit: "kWh", min: 0, max: 1_000_000_000, step: 1 },
      { type: "number", id: "energyMake", group: "零能耗", label: "再生能源產生量", unit: "kWh", min: 0, max: 1_000_000_000, step: 1 },
      { type: "number", id: "waterUse", group: "零水耗", label: "自來水用量", unit: "m³", min: 0, max: 1_000_000, step: 0.1 },
      { type: "number", id: "waterAlt", group: "零水耗", label: "替代水源", unit: "m³", min: 0, max: 1_000_000, step: 0.1 },
      { type: "number", id: "waste", group: "零廢棄物", label: "廢棄物總量", unit: "噸", min: 0, max: 1_000_000, step: 0.1 },
      { type: "number", id: "diverted", group: "零廢棄物", label: "回收再利用量", unit: "噸", min: 0, max: 1_000_000, step: 0.1 },
    ],
    score: (values) => leedZeroScore(values, fieldsOf("leed-zero")),
  },
  {
    id: "well",
    basis: "WELL v2：銅級 40 分、銀級 50 分且各概念至少 1 分、金級 60 分且至少 2 分、白金級 80 分且至少 3 分。各概念必要條件都要符合。",
    fields: [
      ...["空氣", "水", "營養", "光", "運動", "熱舒適", "聲環境", "材料", "精神", "社區"].map(
        (label, index): NumberField => ({
          type: "number",
          id: `well-${index}`,
          group: "概念得分",
          label,
          unit: "分",
          min: 0,
          max: 12,
          step: 1,
        }),
      ),
      ...checks("必要條件", [
        ["well-p-0", "空氣必要條件"],
        ["well-p-1", "水必要條件"],
        ["well-p-2", "營養必要條件"],
        ["well-p-3", "光必要條件"],
        ["well-p-4", "運動必要條件"],
        ["well-p-5", "熱舒適必要條件"],
        ["well-p-6", "聲環境必要條件"],
        ["well-p-7", "材料必要條件"],
        ["well-p-8", "精神必要條件"],
        ["well-p-9", "社區必要條件"],
      ]),
    ],
    score: (values) => wellScore(values, fieldsOf("well")),
  },
  {
    id: "gnfz",
    basis: "連續 12 個月的範疇一、二、三排放，減去減量與抵銷。有盤查為評估證書，提出計畫為淨零計畫證書，已減量但未淨零為里程碑證書，淨額為 0 以下為淨零排放證書。",
    fields: [
      { type: "number", id: "s1", group: "12 個月排放", label: "範疇一", unit: "tCO₂e", min: 0, max: 10_000_000, step: 0.1 },
      { type: "number", id: "s2", group: "12 個月排放", label: "範疇二", unit: "tCO₂e", min: 0, max: 10_000_000, step: 0.1 },
      { type: "number", id: "s3", group: "12 個月排放", label: "範疇三", unit: "tCO₂e", min: 0, max: 10_000_000, step: 0.1 },
      { type: "number", id: "cut", group: "減量與抵銷", label: "已減量", unit: "tCO₂e", min: 0, max: 10_000_000, step: 0.1 },
      { type: "number", id: "offset", group: "減量與抵銷", label: "抵銷量", unit: "tCO₂e", min: 0, max: 10_000_000, step: 0.1 },
      { type: "select", id: "plan", group: "減量與抵銷", label: "淨零計畫", options: yesNo },
    ],
    score: gnfzScore,
  },
  {
    id: "gresb",
    basis: "GRESB 分管理、資產性能、開發三部分。本表計算各部分文件完備率。1～5 星是全球排名，不是自評分數。",
    checkWords: { yes: "已備齊", no: "未備齊", na: "不適用" },
    fields: [
      ...checks("管理", [
        ["g-lead", "領導"],
        ["g-policy", "政策"],
        ["g-report", "報告"],
        ["g-risk", "風險管理"],
        ["g-stake", "利害關係人參與"],
      ]),
      ...checks("資產性能", [
        ["g-prisk", "風險評估"],
        ["g-target", "目標"],
        ["g-tenant", "租戶與社區"],
        ["g-energy", "能源數據"],
        ["g-ghg", "溫室氣體"],
        ["g-water", "水資源"],
        ["g-waste", "廢棄物"],
        ["g-data", "數據監測"],
        ["g-cert", "綠建築認證比例"],
      ]),
      ...checks("開發", [
        ["g-esg", "ESG 要求"],
        ["g-mat", "綠建材"],
        ["g-dcert", "開發案綠建築認證"],
        ["g-denergy", "能源"],
        ["g-dwater", "水資源"],
        ["g-dwaste", "廢棄物"],
        ["g-dstake", "利害關係人參與"],
      ]),
    ],
    score: (values) => gresbScore(values, fieldsOf("gresb")),
  },
];

export function getAssessment(id: string) {
  return assessments.find((item) => item.id === id);
}

export const assessmentNote = DISCLAIMER;
