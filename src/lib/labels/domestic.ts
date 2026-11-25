import type { LabelProfile } from "@/lib/service-types";

export const eewh: LabelProfile = {
  id: "eewh",
  name: "台灣 EEWH 綠建築標章",
  brief: "生物多樣性、基地保水、建築能效等六大指標",
  code: "EEWH Green Building Label",
  org: "內政部建築研究所制定，台灣建築中心評定",
  logo: "/systems/certs/eewh.png",
  fit: "公有新建建築、都更與危老容積獎勵",
  lead:
    "內政部建築研究所於 1999 年依臺灣亞熱帶氣候訂定的綠建築評估系統，由台灣建築中心評定、內政部認可核發。設計階段先取得候選綠建築證書，完工後經現場查核取得綠建築標章。",
  criteriaTitle: "2026 年版六大指標",
  criteria: [
    { title: "生物多樣性｜14 分", text: "生態綠網、植栽與棲地" },
    { title: "基地保水｜9 分", text: "透水鋪面與貯集滲透" },
    { title: "建築能效｜34 分", text: "外殼、空調、照明能效，門檻指標" },
    { title: "低蘊含碳｜18 分", text: "建材與施工的碳排" },
    { title: "室內環境｜15 分", text: "光、音、熱與空氣品質" },
    { title: "水資源｜10 分", text: "節水器具、雨水與中水，門檻指標" },
  ],
  levelsTitle: "等級",
  levelRows: [
    { title: "鑽石級", text: "71 分以上" },
    { title: "黃金級", text: "58 分以上" },
    { title: "銀級", text: "50 分以上" },
    { title: "銅級", text: "42 分以上" },
    { title: "合格級", text: "通過門檻指標" },
  ],
  rules: [
    "公有新建建築總工程建造經費 5,000 萬元以上，須取得合格級以上。",
    "都更與危老依候選證書等級給予基準容積 2%～10% 獎勵。",
    "2026 年版自 2030 年 7 月 1 日起強制適用，之前可選用 2023 年版。",
  ],
  process: [
    { title: "設計初評", items: ["確認手冊版本", "試算得分與門檻"] },
    { title: "候選綠建築證書", items: ["台灣建築中心評定", "內政部認可"] },
    { title: "施工管理", items: ["綠建材與變更追蹤", "施工照片與文件"] },
    { title: "綠建築標章", items: ["竣工現場查核", "內政部認可核發"] },
  ],
  validity: "候選證書與標章效期 5 年。",
  sources: [
    { label: "內政部建築研究所", url: "https://www.abri.gov.tw/cp.aspx?n=804" },
    { label: "台灣建築中心 綠建築標章", url: "https://gb.tabc.org.tw/" },
  ],
};

export const intelligentBuilding: LabelProfile = {
  id: "intelligent-building",
  name: "智慧建築標章",
  brief: "基礎設施、維運管理、安全防災等六大指標",
  code: "Intelligent Building Label",
  org: "內政部建築研究所制定，台灣建築中心評定",
  logo: "/systems/certs/smart.png",
  fit: "公有新建建築、商辦與園區、都更與危老",
  lead:
    "評估建築如何以資通訊技術整合管理、防災與節能系統，由台灣建築中心評定。現行 2024 年版手冊自 113 年 12 月 1 日起實施，共六大指標、98 項評估內容。",
  criteriaTitle: "2024 年版六大指標",
  criteria: [
    { title: "基礎設施", text: "佈線、通信與系統整合" },
    { title: "維運管理", text: "智慧建築管理平台" },
    { title: "安全防災", text: "火災、漏水、入侵偵測與連動" },
    { title: "節能管理", text: "用電計量與需量控制" },
    { title: "健康舒適", text: "溫熱、空氣與光環境監控" },
    { title: "智慧創新", text: "AI、大數據與智慧營造" },
  ],
  levelsTitle: "等級",
  levelRows: [
    { title: "鑽石級", text: "" },
    { title: "黃金級", text: "" },
    { title: "銀級", text: "" },
    { title: "銅級", text: "" },
    { title: "合格級", text: "" },
  ],
  levelsNote: "依各指標的基本規定與得分評定。",
  rules: [
    "都更與危老依候選證書等級給予容積獎勵，最高為基準容積 10%。",
    "達一定工程經費規模的公有新建建築，須取得候選證書與標章。",
  ],
  process: [
    { title: "系統規劃", items: ["訂定目標等級", "智慧化系統設計"] },
    { title: "候選智慧建築證書", items: ["圖說與 I/O 點數表評定"] },
    { title: "施工與整合", items: ["系統整合測試", "管理平台建置"] },
    { title: "智慧建築標章", items: ["現場勘查評定", "內政部認可核發"] },
  ],
  sources: [
    { label: "內政部建築研究所 智慧建築評估手冊", url: "https://www.abri.gov.tw/News_Content_Table.aspx?n=862&s=313673" },
    { label: "台灣建築中心 智慧建築標章", url: "https://ib.tabc.org.tw/" },
  ],
};

export const lebr: LabelProfile = {
  id: "lebr",
  name: "LEBR 低碳建築標示",
  brief: "建材生產到拆除的蘊含碳減碳率",
  code: "Low Embodied-carbon Building Rating",
  org: "內政部建築研究所制定，台灣建築中心評定",
  logo: "/systems/certs/lebr.png",
  fit: "公有新建建築、環評與都更審議案",
  lead:
    "參照 EN 15978 全生命週期碳足跡標準，自 113 年 7 月 1 日起推動。計算建材生產到拆除廢棄的蘊含碳，以設計案相較基準案的減碳率分級；營運用電的碳排則由建築能效標示評估。",
  criteriaTitle: "四個生命週期階段",
  criteria: [
    { title: "製造運輸", text: "建材開採、生產與運輸" },
    { title: "營建施工", text: "施工機具與能源" },
    { title: "更新修繕", text: "使用期間的構件更新" },
    { title: "拆除廢棄", text: "拆除與廢棄物處理" },
  ],
  levelsTitle: "依減碳率分級",
  levelRows: [
    { title: "1+ 級", text: "20% 以上" },
    { title: "第 1 級", text: "16%～20%" },
    { title: "第 2 級", text: "12%～16%" },
    { title: "第 3 級", text: "8%～12%" },
    { title: "第 4 級", text: "3%～8%" },
    { title: "第 5～7 級", text: "3% 以下" },
  ],
  levelsNote: "第 4 級以上為低碳建築；地下層碳排不納入分級。",
  rules: [
    "公有新建建築經費 5,000 萬元以上，自 116 年 7 月起分類組導入，119 年起須達 1 級。",
    "臺北市環評要求使用執照後 2 年內取得第 4 級以上。",
    "綠建築 2026 年版的低蘊含碳指標，以 LEBR 減碳率計分。",
  ],
  process: [
    { title: "設計試算", items: ["結構與建材方案比較"] },
    { title: "候選低碳建築證書", items: ["建照後申請評定", "內政部認可"] },
    { title: "施工", items: ["低碳建材佐證", "變更後更新計算"] },
    { title: "低碳建築標示", items: ["使照後評定與查核", "內政部認可核發"] },
  ],
  validity: "候選低碳建築證書效期 5 年。",
  sources: [
    { label: "內政部建築研究所 低碳建築標示", url: "https://www.abri.gov.tw/cp.aspx?n=20130" },
    { label: "台灣建築中心 LEBR", url: "https://lebr.tabc.org.tw/modules/cadch/lebr" },
  ],
};

export const bers: LabelProfile = {
  id: "bers",
  name: "建築能效評估標示（BERS）",
  brief: "依耗電密度評定 1+ 至 7 級",
  code: "Building Energy-efficiency Rating System",
  org: "內政部建築研究所制定，台灣建築中心評定",
  logo: "/systems/certs/bers.png",
  fit: "公有新建建築、既有大樓節能改善",
  lead:
    "自 111 年 1 月起實施，依外殼、空調與照明等耗能計算建築整體能源效率，分為 1+ 至 7 級。新建建築以圖說模擬評估，既有建築以電費單或專家現場診斷評估。",
  criteriaTitle: "評估系統",
  criteria: [
    { title: "新建建築 BERSn", text: "以圖說與設備規格模擬" },
    { title: "既有建築 BERSe", text: "以連續 24 個月電費單評定" },
    { title: "專家評估 E-BERSe", text: "現場診斷，用於改造前後" },
    { title: "住宅系統", text: "透天與集合住宅專用" },
  ],
  levelsTitle: "等級",
  levelRows: [
    { title: "零", text: "1+ 級加再生能源中和" },
    { title: "1+ 級", text: "近零碳，約節能 50%" },
    { title: "第 1～3 級", text: "優於綠建築合格水準" },
    { title: "第 4 級", text: "約為綠建築合格水準" },
    { title: "第 5～7 級", text: "待改善" },
  ],
  rules: [
    "2026 年 7 月 1 日起，公有新建建築申請綠建築標章時須達能效 1 級或 1+ 級。",
    "2026 年 4 月 1 日起，成屋不動產說明書須記載有無建築能效標示。",
    "臺北市對取得 1 級以上的建築，房屋標準單價減 5%，最長 10 年。",
  ],
  process: [
    { title: "能效評估", items: ["模擬或電費單分析", "找出耗能熱點"] },
    { title: "申請評定", items: ["台灣建築中心書面評定"] },
    { title: "現場查核", items: ["正式標示現場查核"] },
    { title: "內政部認可", items: ["核發候選證書或標示"] },
  ],
  validity: "候選證書與標示效期 5 年。",
  sources: [
    { label: "內政部建築研究所", url: "https://www.abri.gov.tw/cp.aspx?n=804" },
    { label: "台灣建築中心 建築能效標示", url: "https://gb.tabc.org.tw/" },
  ],
};

export const housingPerformance: LabelProfile = {
  id: "housing-performance",
  name: "新建住宅性能評估",
  brief: "結構、防火、光、音等八大居住性能",
  code: "Housing Performance Evaluation",
  org: "內政部主管，台灣建築中心為指定評估機構",
  logo: "/systems/certs/housing-performance.png",
  fit: "危老與都更容積獎勵、住宅產品說明",
  lead:
    "依《住宅法》與《住宅性能評估實施辦法》，由指定評估機構評估住宅的八大性能並分級標示，方便購屋者比較。新建住宅除結構安全可單獨申請外，八大類別應一併評估。",
  criteriaTitle: "八大性能類別",
  criteria: [
    { title: "結構安全", text: "結構與耐震設計" },
    { title: "防火安全", text: "警報、滅火、避難與防延燒" },
    { title: "無障礙環境", text: "共用與專用部分" },
    { title: "空氣環境", text: "自然與機械通風" },
    { title: "光環境", text: "自然採光" },
    { title: "音環境", text: "分戶牆、開口與樓板隔音" },
    { title: "節能省水", text: "隔熱、熱水、省水與照明" },
    { title: "住宅維護", text: "共用與專用部分維護" },
  ],
  levelsTitle: "等級",
  levelRows: [
    { title: "第一級", text: "" },
    { title: "第二級", text: "" },
    { title: "第三級", text: "" },
    { title: "第四級", text: "" },
  ],
  levelsNote: "八大類別分別評定等級，第一級為最高。",
  rules: [
    "危老與都更：結構安全第一級 6%、第二級 4%、第三級 2% 容積獎勵。",
    "無障礙環境第一級 4%、第二級 3%，與無障礙住宅標章擇一申請。",
    "申請容積獎勵者，須於使用執照後 2 年內通過評估。",
  ],
  process: [
    { title: "初步評估", items: ["使照前送評估機構", "取得初步評估通知書"] },
    { title: "施工", items: ["設計與施工差異追蹤"] },
    { title: "查核確認", items: ["使照後 2 年內送查核", "現場勘查與檢測"] },
    { title: "評估報告書", items: ["評估機構核發"] },
  ],
  validity: "也可在使用執照後 6 個月內直接申請評估。",
  sources: [
    { label: "住宅性能評估實施辦法", url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0070207" },
    { label: "台灣建築中心 住宅性能評估", url: "https://hpe.tabc.org.tw/" },
  ],
};

export const barrierFree: LabelProfile = {
  id: "barrier-free",
  name: "無障礙住宅標章",
  brief: "單位標章與建築標章，容積獎勵 5%",
  code: "Barrier-free Housing Label",
  org: "內政部主管，直轄市、縣（市）政府核發",
  logo: "/systems/certs/barrier-free.png",
  fit: "危老與都更、樂齡與全齡住宅",
  lead:
    "依《住宅法》第 46 條與《無障礙住宅設計基準及獎勵辦法》，鼓勵新建住宅的共用部分與住宅單位內都符合無障礙設計基準。起造人取得使用執照後，向直轄市、縣（市）主管機關申請核發。",
  criteriaTitle: "檢討範圍",
  criteria: [
    { title: "室外通路與出入口", text: "通路、坡道與主要出入口" },
    { title: "共用部分", text: "走廊、樓梯與昇降設備" },
    { title: "住宅單位", text: "室內通路、出入口與臥室" },
    { title: "浴廁與廚房", text: "使用空間與設備" },
  ],
  levelsTitle: "標章類別",
  levelRows: [
    { title: "建築標章", text: "單幢至少 3 戶且 5% 以上符合" },
    { title: "單位標章", text: "至少 1 戶符合" },
  ],
  rules: [
    "危老與都更取得建築標章，給予基準容積 5%，須於使用執照後 2 年內取得。",
    "標章效期 5 年，主管機關得不定期抽查。",
    "原有住宅改善無障礙設施可申請補助，以核准項目經費 45% 為上限。",
  ],
  process: [
    { title: "規劃設計", items: ["依設計基準檢討", "確認申請類別"] },
    { title: "施工", items: ["施工檢核與照片"] },
    { title: "竣工查驗", items: ["建築師查驗簽證"] },
    { title: "申請核發", items: ["地方主管機關審查", "核發並登錄"] },
  ],
  validity: "期滿前 90 日內可重新申請。",
  sources: [
    { label: "無障礙住宅設計基準及獎勵辦法", url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0070202" },
  ],
};
