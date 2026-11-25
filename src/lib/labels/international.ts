import type { LabelProfile } from "@/lib/service-types";

export const leed: LabelProfile = {
  id: "leed",
  name: "美國 LEED 綠建築認證",
  brief: "全球使用最廣的綠建築評估系統",
  code: "Leadership in Energy and Environmental Design",
  org: "美國綠建築協會 USGBC",
  logo: "/systems/certs/leed.png",
  fit: "企業總部、外商租戶、出口廠房",
  lead:
    "美國綠建築協會（USGBC）於 1998 年公布，是國際間使用最廣泛的綠建築評估系統，全球超過 180 個國家有認證案例。依建築類型分為新建（BD+C）、室內裝修（ID+C）、既有建築營運（O+M）等評估系統。",
  criteriaTitle: "評估面向",
  criteria: [
    { title: "區位與交通", text: "基地區位與大眾運輸" },
    { title: "永續基地", text: "雨水管理與熱島效應" },
    { title: "用水效率", text: "室內外節水與計量" },
    { title: "能源與大氣", text: "能源效率與再生能源" },
    { title: "材料與資源", text: "建材與營建廢棄物" },
    { title: "室內環境品質", text: "通風、低逸散與採光" },
  ],
  levelsTitle: "認證等級",
  levelRows: [
    { title: "白金級", text: "80 分以上" },
    { title: "金級", text: "60～79 分" },
    { title: "銀級", text: "50～59 分" },
    { title: "認證級", text: "40～49 分" },
  ],
  rules: [
    "跨國企業與外商租戶常將 LEED 列為選址與租賃條件。",
    "LEED v4／v4.1 新案註冊至 2027 年 6 月 30 日截止，之後採用 v5。",
  ],
  process: [
    { title: "註冊", items: ["訂定目標等級", "LEED Online 註冊"] },
    { title: "設計", items: ["得分策略與設計文件"] },
    { title: "設計送審", items: ["上傳文件與回覆意見"] },
    { title: "施工", items: ["綠建材與施工計畫"] },
    { title: "施工送審", items: ["上傳文件", "取得認證"] },
  ],
  sources: [{ label: "USGBC LEED", url: "https://www.usgbc.org/leed" }],
};

export const leedZero: LabelProfile = {
  id: "leed-zero",
  name: "LEED Zero 淨零排放認證",
  brief: "零碳、零能耗、零水耗、零廢棄物",
  code: "LEED Zero",
  org: "美國綠建築協會 USGBC",
  logo: "/systems/certs/leed-zero.png",
  fit: "已取得 LEED 的建築、企業淨零目標",
  lead:
    "針對已取得 LEED 認證或註冊 LEED O+M 的建築，以最近 12 個月的實際營運數據，驗證碳排、能源、水或廢棄物達到淨零。四項可依建築條件分別申請。",
  criteriaTitle: "四項淨零認證",
  criteria: [
    { title: "零碳 Zero Carbon", text: "能源與交通碳排免除或抵銷" },
    { title: "零能耗 Zero Energy", text: "產能與耗能達到平衡" },
    { title: "零水耗 Zero Water", text: "替代水源抵銷自來水用量" },
    { title: "零廢棄物 Zero Waste", text: "回收再利用率 90% 以上" },
  ],
  rules: ["可作為企業淨零承諾與再生能源成果的第三方驗證。"],
  process: [
    { title: "現況盤點", items: ["能源、水、廢棄物數據"] },
    { title: "減量", items: ["節能改善與再生能源"] },
    { title: "數據累積", items: ["連續 12 個月計量"] },
    { title: "送審認證", items: ["LEED Online 上傳", "取得認證"] },
  ],
  validity: "認證效期 3 年。",
  sources: [{ label: "USGBC LEED Zero", url: "https://www.usgbc.org/programs/leed-zero" }],
};

export const well: LabelProfile = {
  id: "well",
  name: "國際 WELL 健康建築認證",
  brief: "空氣、水、光等十大健康概念",
  code: "WELL Building Standard",
  org: "國際健康建築研究院 IWBI",
  logo: "/systems/certs/well.png",
  fit: "企業辦公空間、健康住宅、飯店",
  lead:
    "國際健康建築研究院（IWBI）制定，以建築使用者的健康為核心。完工後須由第三方實測空氣、水、光、聲與熱舒適等數據，確認空間實際達到標準。",
  criteriaTitle: "十大概念",
  criteria: [
    { title: "空氣", text: "通風與室內污染源" },
    { title: "水", text: "飲用水水質" },
    { title: "營養", text: "健康飲食環境" },
    { title: "光", text: "自然光與照明" },
    { title: "運動", text: "日常活動空間" },
    { title: "熱舒適", text: "溫控與熱環境" },
    { title: "聲環境", text: "噪音控制" },
    { title: "材料", text: "減少有害物質" },
    { title: "精神", text: "心理健康支持" },
    { title: "社區", text: "連結與參與" },
  ],
  levelsTitle: "認證等級",
  levelRows: [
    { title: "白金級", text: "80 分以上" },
    { title: "金級", text: "60 分以上" },
    { title: "銀級", text: "50 分以上" },
    { title: "銅級", text: "40 分以上" },
  ],
  rules: [
    "企業將 WELL 納入辦公室選址條件，用來照顧員工健康與留任。",
    "健康指標可對應 ESG 報告書的員工健康揭露。",
  ],
  process: [
    { title: "註冊", items: ["選擇產品與範圍"] },
    { title: "設計與文件", items: ["空調、照明與材料", "營運政策"] },
    { title: "施工", items: ["低逸散材料管理"] },
    { title: "性能驗證", items: ["第三方現場檢測"] },
    { title: "認證", items: ["每 3 年再認證"] },
  ],
  sources: [{ label: "IWBI WELL Certification", url: "https://www.wellcertified.com/" }],
};

export const gnfz: LabelProfile = {
  id: "gnfz",
  name: "GNFZ 全球淨零認證",
  brief: "建築、資產組合與企業的淨零認證",
  code: "Global Network for Zero",
  org: "Global Network for Zero",
  logo: "/systems/certs/gnfz.png",
  fit: "企業淨零路徑、集團資產組合",
  lead:
    "由美國綠建築協會前總裁 Mahesh Ramanujam 創立。依溫室氣體盤查議定書盤查範疇一、二、三排放，以里程碑證書逐步推進至淨零，適用建築、資產組合與企業。",
  criteriaTitle: "減碳三步驟",
  criteria: [
    { title: "碳盤查", text: "範疇一、二、三排放盤查" },
    { title: "碳減量", text: "能效改善與供應鏈減碳" },
    { title: "碳抵銷", text: "再生能源與抵換額度" },
  ],
  levelsTitle: "五種證書",
  levelRows: [
    { title: "評估證書", text: "完成 12 個月盤查" },
    { title: "淨零計畫證書", text: "提出減量時程" },
    { title: "碳抵銷證書", text: "報告抵銷進度" },
    { title: "淨零里程碑證書", text: "達成階段目標" },
    { title: "淨零排放證書", text: "達成淨零" },
  ],
  rules: ["達成淨零的建築須每年提交文件維持認證。"],
  process: [
    { title: "啟動", items: ["12 個月排放盤查"] },
    { title: "計畫", items: ["減量時程與目標"] },
    { title: "實施", items: ["減碳與再生能源"] },
    { title: "維持", items: ["每年提交文件"] },
  ],
  sources: [{ label: "Global Network for Zero", url: "https://www.globalnetworkforzero.com/" }],
};

export const gresb: LabelProfile = {
  id: "gresb",
  name: "國際不動產 GRESB 評鑑",
  brief: "不動產企業與基金的年度 ESG 評比",
  code: "Global Real Estate Sustainability Benchmark",
  org: "GRESB（荷蘭）",
  logo: "/systems/certs/gresb.png",
  fit: "上市建商、REITs、地產基金",
  lead:
    "2009 年成立於荷蘭，每年評比全球不動產與基礎建設企業的 ESG 表現。與單棟建築認證不同，GRESB 評估的是企業或基金的整體投資組合，許多機構投資人以評比結果作為投資依據。",
  criteriaTitle: "三個評估部分",
  criteria: [
    { title: "管理 Management", text: "政策、風險管理與利害關係人" },
    { title: "資產性能 Performance", text: "能源、碳排、水、廢棄物與綠建築認證" },
    { title: "開發 Development", text: "開發案的 ESG 要求與綠建材" },
  ],
  levelsTitle: "評比結果",
  levelRows: [
    { title: "GRESB Score", text: "年度總分" },
    { title: "1～5 星", text: "全球排名五分位，5 星為前 20%" },
  ],
  rules: ["機構投資人以 GRESB 結果作為投資與議合的依據。"],
  process: [
    { title: "範圍界定", items: ["參與的投資組合"] },
    { title: "資料蒐集", items: ["政策與資產數據"] },
    { title: "改善與文件", items: ["補強缺口"] },
    { title: "填報送審", items: ["年度期限內上傳"] },
  ],
  sources: [{ label: "GRESB", url: "https://www.gresb.com/" }],
};
