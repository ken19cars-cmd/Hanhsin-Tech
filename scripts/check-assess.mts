import { getAssessment } from "../src/lib/labels/assessments.ts";
import type { AssessValues } from "../src/lib/labels/assessments.ts";

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message);
}

function line(values: { lines: { label: string; value: string }[] }, label: string) {
  return values.lines.find((item) => item.label === label)?.value ?? "";
}

const eewh = getAssessment("eewh");
if (!eewh) throw new Error("missing eewh");
const full: AssessValues = {
  owner: "private",
  site: "small",
  bio: "14",
  retain: "9",
  energy: "34",
  scoreee: "80",
  carbon: "18",
  indoor: "15",
  water: "10",
};
let result = eewh.score(full);
assert(result.grade === "鑽石級", `eewh diamond ${result.grade}`);
assert(line(result, "容積獎勵").includes("10%"), "eewh reward");

result = eewh.score({ ...full, scoreee: "70" });
assert(result.grade === "未達合格", `eewh threshold ${result.grade}`);

result = eewh.score({ ...full, owner: "public", scoreee: "75" });
assert(result.grade === "未達合格", "public energy gate");

result = eewh.score({
  ...full,
  bio: "8",
  retain: "4",
  energy: "16",
  carbon: "6",
  indoor: "5",
  water: "4",
  scoreee: "76",
  site: "large",
});
assert(result.grade === "銅級", `eewh copper ${result.grade}`);
assert(line(result, "容積獎勵").includes("不計"), "large site copper");

const lebr = getAssessment("lebr");
if (!lebr) throw new Error("missing lebr");
const carbon = (prefix: string, make: number) => ({
  [`${prefix}-make`]: String(make),
  [`${prefix}-build`]: "0",
  [`${prefix}-repair`]: "0",
  [`${prefix}-demo`]: "0",
});
const expectGrade: [number, string][] = [
  [80, "低碳 1+ 級"],
  [84, "第 1 級"],
  [88, "第 2 級"],
  [92, "第 3 級"],
  [96, "第 4 級"],
  [97, "第 5～7 級"],
];
for (const [design, grade] of expectGrade) {
  result = lebr.score({ ...carbon("b", 100), ...carbon("d", design) });
  assert(result.grade === grade, `lebr ${design} => ${result.grade}, want ${grade}`);
}

const barrier = getAssessment("barrier-free");
if (!barrier) throw new Error("missing barrier");
const yes = Object.fromEntries(
  barrier.fields.filter((field) => field.type === "check").map((field) => [field.id, "yes"]),
);
result = barrier.score({ ...yes, kind: "apartment", units: "100", passUnits: "5" });
assert(result.grade === "可申請建築標章", result.grade);
result = barrier.score({ ...yes, kind: "apartment", units: "100", passUnits: "4" });
assert(result.grade === "可申請單位標章", result.grade);
result = barrier.score({ ...yes, kind: "apartment", units: "10", passUnits: "2" });
assert(result.grade === "可申請單位標章", `two units ${result.grade}`);
result = barrier.score({ ...yes, kind: "other", units: "1", passUnits: "1" });
assert(result.grade === "可申請單位標章", `other ${result.grade}`);

const leed = getAssessment("leed");
if (!leed) throw new Error("missing leed");
const prereq = Object.fromEntries(
  leed.fields.filter((field) => field.type === "check").map((field) => [field.id, "yes"]),
);
const points = { lt: "16", ss: "10", we: "11", ea: "33", mr: "13", eq: "16", ip: "1", inn: "6", rp: "4" };
result = leed.score({ ...prereq, ...points });
assert(result.grade === "白金級", result.grade);
assert(line(result, "總分") === "110 / 110", line(result, "總分"));
result = leed.score({ ...prereq, ...points, ea: "0" });
assert(result.grade === "金級", `leed gold ${result.grade}`);
result = leed.score({ ...prereq, ...points, "p-ss": "no" });
assert(result.grade === "先決條件未完成", result.grade);

const well = getAssessment("well");
if (!well) throw new Error("missing well");
const concepts = Object.fromEntries(Array.from({ length: 10 }, (_, index) => [`well-${index}`, "9"]));
const wellPre = Object.fromEntries(Array.from({ length: 10 }, (_, index) => [`well-p-${index}`, "yes"]));
result = well.score({ ...concepts, ...wellPre, "well-0": "2" });
assert(result.grade === "金級", `well gold ${result.grade} ${result.summary}`);
result = well.score({ ...concepts, ...wellPre });
assert(result.grade === "白金級", `well platinum ${result.grade}`);

const zero = getAssessment("leed-zero");
if (!zero) throw new Error("missing leed zero");
result = zero.score({
  carbonUse: "10",
  carbonOff: "10",
  energyUse: "5",
  energyMake: "5",
  waterUse: "3",
  waterAlt: "3",
  waste: "10",
  diverted: "9",
});
assert(result.grade === "4／4 項達成", result.grade);
result = zero.score({
  carbonUse: "10",
  carbonOff: "9",
  energyUse: "5",
  energyMake: "5",
  waterUse: "3",
  waterAlt: "1",
  waste: "10",
  diverted: "8",
});
assert(result.grade === "1／4 項達成", result.grade);

const gnfz = getAssessment("gnfz");
if (!gnfz) throw new Error("missing gnfz");
result = gnfz.score({ s1: "10", s2: "20", s3: "30", cut: "60", offset: "0", plan: "yes" });
assert(result.grade === "淨零排放證書", result.grade);
result = gnfz.score({ s1: "10", s2: "20", s3: "30", cut: "10", offset: "0", plan: "yes" });
assert(result.grade === "淨零里程碑證書", result.grade);

const housing = getAssessment("housing-performance");
if (!housing) throw new Error("missing housing");
result = housing.score({
  structure: "1",
  fire: "4",
  access: "2",
  air: "3",
  light: "4",
  sound: "4",
  save: "4",
  maintain: "4",
});
assert(line(result, "結構安全獎勵").includes("6%"), line(result, "結構安全獎勵"));
assert(line(result, "無障礙環境獎勵").includes("3%"), line(result, "無障礙環境獎勵"));
assert(line(result, "兩項合計") === "9%", line(result, "兩項合計"));

const bers = getAssessment("bers");
if (!bers) throw new Error("missing bers");
result = bers.score({ mode: "new", eui: "80", baseline: "100" });
assert(result.grade === "20%", result.grade);
result = bers.score({ mode: "new", area: "1000", kwh: "50000", baseline: "100" });
assert(line(result, "耗電密度").startsWith("50"), line(result, "耗電密度"));
result = bers.score({ mode: "existing", eui: "80", baseline: "100", monthVar: "60", yearVar: "10" });
assert(result.tone === "fail", result.tone);

console.log("assess checks passed");
