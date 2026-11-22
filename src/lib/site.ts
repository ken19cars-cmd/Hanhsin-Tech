export type Module = {
  title: string;
  text: string;
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  summary: string;
  lead: string;
  modules: Module[];
  deliverables: string[];
  boundary: string;
};

export const services: Service[] = [
  {
    slug: "pmis",
    index: "01",
    title: "PMIS 營建工程管理",
    short: "契約、進度、成本與品質放在同一份工程主檔。",
    summary: "多專案的營建管理資訊：進度、成本、品質、安衛與變更閉環。",
    lead: "開發、設計與營造若各看各的表，變更就會消失在信件裡。PMIS 把基地、契約、進度、成本與品質收成同一份工程主檔，讓落後與超支說得出原因。",
    modules: [
      {
        title: "專案與契約主檔",
        text: "基地、建照、契約工項、責任分工與圖說版次集中管理。一個案子一組編號，相關會議與變更都掛得回去。",
      },
      {
        title: "進度與要徑",
        text: "里程碑、要徑與落後原因分開記錄，區分設計、材料、審照與工地因素，避免所有延誤都被寫成工地問題。",
      },
      {
        title: "成本、變更與請款",
        text: "預算、變更設計、估驗與保留款放在同一條成本線上。差異要能對到契約項目，而不是只留一顆總價。",
      },
      {
        title: "品質、安衛與決議",
        text: "檢驗停留點、不符合事項、工安巡查與會議決議有關閉狀態。沒關的項目會留在週報，不會換一週就消失。",
      },
    ],
    deliverables: ["工程主檔目錄", "進度與落後說明", "成本差異對照", "未關閉事項清單"],
    boundary: "這裡整理的是管理資訊。結構安全、施工圖與簽證仍由建築師、專業技師與營造廠負責。",
  },
  {
    slug: "drawings",
    index: "02",
    title: "建築規劃設計圖面分析",
    short: "產權套繪、BIM 梁柱蘊含碳、CAD 物件辨識。",
    summary: "把地籍、設計圖與模型變成可核算的物件：權界、數量與結構體碳排。",
    lead: "圖檔要能回答登記與碳排，不能只是再存一份打不開的 DWG。我們把地籍、BIM 與 CAD 對到可統計的物件，供產權、數量與蘊含碳使用。",
    modules: [
      {
        title: "產權登記套繪",
        text: "地籍圖、建物測量成果與設計配置對位，標出權界、法定空地、共有部分，以及圖說和登記不一致的位置。",
      },
      {
        title: "BIM 梁柱蘊含碳",
        text: "以梁、柱構件的材料與體積，搭配可追溯的排放係數，估算結構體蘊含碳，並比較斷面或材料調整後的差異。係數來源隨案註明。",
      },
      {
        title: "CAD 物件辨識",
        text: "由 DWG 的圖層與幾何整理牆、柱、門窗、車位與機電末端，輸出可計數的清單，接面積、數量與後續碳排。",
      },
    ],
    deliverables: ["套繪差異標註", "梁柱構件數量", "蘊含碳試算與係數出處", "CAD 物件清單"],
    boundary: "辨識結果要由設計單位抽核。本服務不取代地政登記，也不出具正式測量或工程簽證。",
  },
  {
    slug: "green",
    index: "03",
    title: "綠建築與智慧建築指標",
    short: "綠建築、智慧建築、LEED、WELL、低碳與能效的送審前檢核。",
    summary: "六套制度的指標對照、證據清單與準備度檢核。正式分數仍由評定機構核定。",
    lead: "同一棟建築常常同時面對綠建築、智慧建築、能效、低碳，以及 LEED 或 WELL。送審前先對齊指標與證據，比取得標章後再補文件便宜。",
    modules: [
      {
        title: "制度對照",
        text: "對上台灣綠建築九大指標、智慧建築評估手冊 2024 年版六大指標、建築能效 1 至 7 級、LEED、WELL，以及建築蘊含碳排標示。",
      },
      {
        title: "證據清單",
        text: "每個指標對應圖說、計算書、設備規格與竣工紀錄。同一份資料在不同制度裡共用，但版本要鎖得住。",
      },
      {
        title: "分數檢核",
        text: "用公開的等級門檻檢查準備度與文件缺口。這是送審前的工作底稿，不是內政部、USGBC 或 IWBI 的正式計分。",
      },
    ],
    deliverables: ["指標對照表", "證據清單", "準備度檢核", "併案申請項目整理"],
    boundary: "正式綠建築標章、智慧建築標章、建築能效標示與國際認證，以主管機關和認證機構的現行手冊與評定結果為準。",
  },
  {
    slug: "esg",
    index: "04",
    title: "企業 ESG 與資產評價",
    short: "永續報告書、土開財務、不動產估價與資產評價共用一套數字。",
    summary: "讓揭露、財務與評價回溯到同一組基地、工程與能耗資料。",
    lead: "報告書上的能源、碳與資產數字，要回得去基地與工程。我們把永續揭露、土地開發財務和評價需要的資料放在同一條軌跡上。",
    modules: [
      {
        title: "永續報告書",
        text: "依 GRI、IFRS 永續揭露或主管機關要求的章節，整理能源、水、廢棄物、蘊含碳與治理資訊。每一顆數字留得出處。",
      },
      {
        title: "土開財務分析",
        text: "土地成本、建造成本、銷售或出租進度、資金堆疊與關鍵假設放在一起，看售價、工期或利率變動時的敏感度。",
      },
      {
        title: "不動產估價與資產評價",
        text: "整理比較、收益、成本三條路徑需要的市場、租金與建物資料，供持有資產與開發案對照。正式估價報告由不動產估價師簽證。",
      },
    ],
    deliverables: ["揭露資料軌跡", "財務假設與敏感性", "評價資料底稿", "資產清冊"],
    boundary: "本服務提供分析底稿與資料整理，不取代會計師簽證、估價師報告或法律意見。",
  },
  {
    slug: "gis",
    index: "05",
    title: "GIS 地理資訊加值",
    short: "地政資料介接、計畫疊圖與招商案件。",
    summary: "在合法資料範圍內，把地號、分區、限制與招商條件放到地圖上比較。",
    lead: "土地要不要進設計與財務，先看地圖。地政、使用分區與招商條件疊在一起，基地限制才不會等到送審才出現。",
    modules: [
      {
        title: "地政資料介接",
        text: "在開放資料與合法授權範圍內，整理地籍、土地與建物登記、公告地價等地政圖層，並保持資料時點。",
      },
      {
        title: "計畫疊圖",
        text: "使用分區、都市計畫與基地範圍套疊，把容積、退縮與限制條件標在空間位置上，而不是只寫在文字備註。",
      },
      {
        title: "招商案件資訊",
        text: "基地條件、交通、周邊供給與開發限制整理成可比較的案件卡，供土地開發與招商討論使用。",
      },
    ],
    deliverables: ["基地圖層", "分區與限制標註", "案件比較卡", "資料時點紀錄"],
    boundary: "不提供未經授權的個人登記資料查詢。地政謄本與個人資料依當事人授權及主管機關規定處理。",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const steps = [
  { index: "01", title: "土地", text: "地政、分區與招商條件先上圖。" },
  { index: "02", title: "圖面", text: "設計圖拆成產權、數量與碳排。" },
  { index: "03", title: "工程", text: "進度、成本與品質沿著主檔走。" },
  { index: "04", title: "指標", text: "綠建築、能效與國際認證對證據。" },
  { index: "05", title: "資產", text: "財務、估價與報告書共用數字。" },
];

export type ReviewItem = {
  id: string;
  label: string;
  note?: string;
};

export type ReviewGroup = {
  id: string;
  title: string;
  source: string;
  items: ReviewItem[];
};

export const reviewGroups: ReviewGroup[] = [
  {
    id: "eewh",
    title: "綠建築九大指標",
    source: "內政部綠建築評估手冊的指標架構。必過項目與計分依建築類型和手冊版本而定。",
    items: [
      { id: "eewh-bio", label: "生物多樣性" },
      { id: "eewh-green", label: "綠化量" },
      { id: "eewh-water-retain", label: "基地保水" },
      { id: "eewh-energy", label: "日常節能", note: "多數案件的核心指標" },
      { id: "eewh-co2", label: "二氧化碳減量" },
      { id: "eewh-waste", label: "廢棄物減量" },
      { id: "eewh-indoor", label: "室內環境" },
      { id: "eewh-water", label: "水資源", note: "多數案件的核心指標" },
      { id: "eewh-sewage", label: "污水垃圾改善" },
    ],
  },
  {
    id: "ib",
    title: "智慧建築六大指標",
    source: "智慧建築評估手冊 2024 年版。須符合全部基本規定，鼓勵項目另計等級。",
    items: [
      { id: "ib-basic", label: "22 項基本規定已納入送審範圍", note: "未全數符合不能取得標章" },
      { id: "ib-infra", label: "基礎設施" },
      { id: "ib-ops", label: "維運管理" },
      { id: "ib-safety", label: "安全防災" },
      { id: "ib-energy", label: "節能管理" },
      { id: "ib-health", label: "健康舒適" },
      { id: "ib-innovation", label: "智慧創新" },
    ],
  },
  {
    id: "leed",
    title: "LEED 類別覆蓋",
    source: "LEED v4 / v4.1 建築設計與施工的類別。此處只檢查有沒有負責人，不換算點數。",
    items: [
      { id: "leed-ip", label: "整合程序" },
      { id: "leed-lt", label: "交通與選址" },
      { id: "leed-ss", label: "永續基地" },
      { id: "leed-we", label: "用水效率" },
      { id: "leed-ea", label: "能源與大氣" },
      { id: "leed-mr", label: "材料與資源" },
      { id: "leed-ieq", label: "室內環境品質" },
      { id: "leed-inn", label: "創新" },
      { id: "leed-rp", label: "區域優先" },
    ],
  },
  {
    id: "well",
    title: "WELL 概念覆蓋",
    source: "WELL v2 十個概念。先決條件與優化項的正式分數以 IWBI 送審規定為準。",
    items: [
      { id: "well-air", label: "空氣" },
      { id: "well-water", label: "水" },
      { id: "well-nourishment", label: "營養" },
      { id: "well-light", label: "光" },
      { id: "well-movement", label: "運動" },
      { id: "well-thermal", label: "熱舒適" },
      { id: "well-sound", label: "聲" },
      { id: "well-materials", label: "材料" },
      { id: "well-mind", label: "心靈" },
      { id: "well-community", label: "社區" },
    ],
  },
  {
    id: "carbon",
    title: "低碳與蘊含碳",
    source: "建築蘊含碳排標示可與綠建築、能效案件併同申請。係數必須說得出來源。",
    items: [
      { id: "carbon-frame", label: "結構梁柱數量已可統計" },
      { id: "carbon-envelope", label: "樓版與外殼範圍已界定" },
      { id: "carbon-factor", label: "排放係數出處已註明" },
      { id: "carbon-joint", label: "是否與能效案件併同申請已決定" },
    ],
  },
];

export const energyLevels = [
  { id: "1+", label: "1+ 近零碳", detail: "能效第 1 級，且評分尺度為前 50%。" },
  { id: "1", label: "第 1 級", detail: "高於合格基線的效率目標。" },
  { id: "2", label: "第 2 級", detail: "" },
  { id: "3", label: "第 3 級", detail: "" },
  { id: "4", label: "第 4 級", detail: "公開制度中的合格基線。" },
  { id: "unset", label: "尚未設定", detail: "" },
];

export const smartGrades = [
  { grade: "合格級", score: "60 分以上、未達 70" },
  { grade: "銅級", score: "70 分以上、未達 100" },
  { grade: "銀級", score: "100 分以上、未達 130" },
  { grade: "黃金級", score: "130 分以上、未達 150" },
  { grade: "鑽石級", score: "150 分以上" },
];

export const leedGrades = [
  { grade: "Certified", score: "40–49" },
  { grade: "Silver", score: "50–59" },
  { grade: "Gold", score: "60–79" },
  { grade: "Platinum", score: "80 以上" },
];
