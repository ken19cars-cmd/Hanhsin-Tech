export type Module = {
  title: string;
  text: string;
};

export type SystemShot = {
  src: string;
  alt: string;
  caption: string;
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  summary: string;
  lead: string;
  image: string;
  imageAlt: string;
  modules: Module[];
  /** Client outcomes / why it matters (optional, shown on detail pages). */
  outcomes?: Module[];
  /** Process stages for platform-style services. */
  stages?: Module[];
  deliverables: string[];
  boundary: string;
  systems: SystemShot[];
};

export const company = {
  nameZh: "翰欣科技實業有限公司",
  nameEn: "Hanhsin-Tech",
  group: "皓欣集團",
  tagline: "土地開發 × 智慧應用 × 永續科技",
  address: "臺北市松山區民權東路三段144號5F-4",
  phoneDisplay: "0963-511-091",
  phoneTel: "+886963511091",
  email: "service.haohsin@gmail.com",
};

export const services: Service[] = [
  {
    slug: "pmis",
    index: "01",
    title: "PMIS 營建工程管理",
    short: "PCM 現場公文、進度、查核與文件，整合於同一工作平台。",
    summary: "以顧問服務為核心，整合 PMIS、AI 儀表板與任務追蹤，讓履約管理有方法、有進度、有依據。",
    lead:
      "公辦都更與促參案件進入興建期後，文件量與協調節點陡增。PMIS 把公文、進度、查核、送審與影像歸檔整合於同一平台，並以 AI 儀表板輔助督導決策，讓進度預測、文件審核、風險預警與會議摘要可追蹤。",
    image: "/systems/pmis-ai-workflow.png",
    imageAlt: "營建工程管理平台總覽",
    modules: [
      {
        title: "九大核心模組",
        text: "人員權限、公文管理、會議管理、進度管理、查核管理、文件管理、採購發包、影像紀錄與儀表板，可依主辦機關作業習慣彈性配置。",
      },
      {
        title: "AI 輔助儀表板",
        text: "進度預測、文件智慧審核、風險預警與會議摘要生成，協助 PCM 督導更快掌握落後工項與介面協調重點。",
      },
      {
        title: "任務追蹤與甘特",
        text: "依單一案件列出開工前審議到開工後履約工作項目，以進度條、甘特圖與 Kanban 分欄追蹤待辦與檢附文件。",
      },
      {
        title: "工程公開資訊",
        text: "基地資料、大事紀、工期進度與工地實況可整理為公開資訊頁，讓主辦機關與專案團隊共用同一組現場事實。",
      },
    ],
    deliverables: ["工程主檔與模組目錄", "進度／S 曲線與落後說明", "查核與未關閉事項", "任務追蹤與文件版次清單"],
    boundary: "本服務整理管理資訊與督導底稿。結構安全、施工圖與簽證仍由建築師、專業技師與營造廠負責。",
    systems: [
      {
        src: "/systems/pmis-ai-workflow.png",
        alt: "工程管理平台總覽",
        caption: "公文、進度、查核與任務，集中在同一工作平台掌握",
      },
      {
        src: "/systems/pmis-system-ui.png",
        alt: "AI 儀表板與工作流",
        caption: "AI 儀表板協助進度預測、文件審核與風險預警",
      },
      {
        src: "/systems/construction-site.png",
        alt: "工程公開資訊頁",
        caption: "基地資料、預定／實際進度與工期資訊一次對齊",
      },
    ],
  },
  {
    slug: "drawings",
    index: "02",
    title: "建築規劃設計圖面分析",
    short: "建築設計平面圖與 BIM 應用，支援低碳建築計算。",
    summary: "以建築設計平面圖與 BIM 為核心，整理可核算物件，並可導入 EC 階段低碳建築計算。",
    lead:
      "建築規劃設計的重點，是讓平面圖與 BIM 模型變成可討論、可統計的工作底圖。梁柱等構件的蘊含碳可透過 BIM 導入 EC（Embodied Carbon）階段的低碳建築計算，並依國內公開標準與係數進行試算，供設計調整與後續標章準備使用。",
    image: "/systems/drawings-floorplan-ui.png",
    imageAlt: "建築平面圖分析工作台",
    modules: [
      {
        title: "建築設計平面圖",
        text: "整理配置、樓層、面積與空間單元，對位權界與設計條件，讓規劃討論建立在同一套圖說版本上。",
      },
      {
        title: "BIM 應用",
        text: "由 BIM 模型擷取梁、柱等結構構件資訊，建立可計數、可比對的構件清單，作為數量、斷面與材料討論依據。",
      },
      {
        title: "EC 階段低碳建築計算",
        text: "透過 BIM 導入 EC 階段蘊含碳試算，採用國內公開的排放係數與計算標準，比較材料或斷面調整後的差異，並註明係數出處。",
      },
      {
        title: "圖說與物件對位",
        text: "平面圖、BIM 與相關圖層對位後，輸出可供後續碳排、數量與設計檢討使用的物件清單。",
      },
    ],
    deliverables: ["平面圖整理與版次對照", "BIM 構件清單", "EC 蘊含碳試算與係數出處", "設計調整差異說明"],
    boundary: "試算為設計與送審前底稿，須由設計單位抽核。不取代正式測量、結構簽證或主管機關核定結果。",
    systems: [
      {
        src: "/systems/drawings-floorplan-ui.png",
        alt: "平面圖分析工作台",
        caption: "平面圖與空間單元整理，讓規劃討論有同一套圖說",
      },
      {
        src: "/systems/drawings-bim-ui.png",
        alt: "BIM 構件與 EC 試算介面",
        caption: "BIM 構件清單與 EC 蘊含碳試算，便於設計調整比較",
      },
      {
        src: "/systems/construction-site.png",
        alt: "基地與規劃資訊",
        caption: "基地位置、規模與規劃構想可一併對外說明",
      },
    ],
  },
  {
    slug: "green",
    index: "03",
    title: "綠建築與智慧建築指標",
    short: "標章門檻、缺口與送審準備，一次對齊設計與永續團隊。",
    summary:
      "協助案件在送審前先看清綠建築、智慧建築、能效、低碳與國際評比的準備度，降低返工與補件風險。",
    lead:
      "同一開發案常同時面對綠建築、智慧建築、建築能效、低碳標示與國際永續評比。我們的評估工作台把門檻、缺口與證據清單整理成可分工的進度，讓設計、顧問與業主在送審前就對齊，而不是核發後再補洞。",
    image: "/systems/green-cert-logos.png",
    imageAlt: "綠建築、智慧建築、LEED、低碳等標章",
    outcomes: [
      {
        title: "先看清能不能過關",
        text: "依案件切換評估模組，快速掌握哪些指標已達標、哪些仍需設計調整或佐證補齊。",
      },
      {
        title: "把缺口變成可派工事項",
        text: "把抽象指標轉成負責單位、文件與時程，會議上可以直接討論下一步，而不是重新對表。",
      },
      {
        title: "對投資人與評比更有說服力",
        text: "標章與能效準備進度可對外說明，支撐招商、融資與資產永續論述。",
      },
    ],
    modules: [
      {
        title: "多標章模組切換",
        text: "依案件選擇綠建築、智慧建築、能效、低碳或國際評比模組，集中查看覆蓋率與準備度。",
      },
      {
        title: "綠建築指標對照",
        text: "對照國內綠建築指標架構與門檻，整理證據缺口與責任分工，作為送審前工作底稿。",
      },
      {
        title: "能效與低碳試算",
        text: "串接建築能效分級與低碳／蘊含碳相關計算，讓設計變更的影響可以立刻比較。",
      },
      {
        title: "缺口分析與輸出",
        text: "產出缺口清單、佐證清單與報告底稿，縮短跨專業對齊時間，加速進入送審節奏。",
      },
    ],
    deliverables: ["指標模組對照", "缺口與準備度檢核", "能效／低碳試算底稿", "證據與報告輸出清單"],
    boundary: "正式綠建築標章、能效標示與低碳標示，以主管機關及評定機構現行手冊與核定結果為準。",
    systems: [
      {
        src: "/systems/green-cert-logos.png",
        alt: "綠建築與相關標章",
        caption: "綠建築、智慧建築、LEED、低碳建築、能效與 GRESB 等標章",
      },
      {
        src: "/systems/green-esg-page.png",
        alt: "標章評估工作台",
        caption: "依案件切換評估模組，整理門檻、缺口與送審準備",
      },
      {
        src: "/systems/green-eewh-nine.jpg",
        alt: "綠建築九大指標",
        caption: "綠建築指標對照，掌握門檻與準備重點",
      },
    ],
  },
  {
    slug: "esg",
    index: "04",
    title: "企業 ESG 與資產評價",
    short: "把永續數據變成可決策、可評鑑、可對外說明的資產資訊。",
    summary:
      "協助企業與開發案主整理 ESG 指標、稽核軌跡與資產評價底稿，讓揭露合規同時支撐投資與經營決策。",
    lead:
      "面對永續揭露、評鑑與投資人提問，最怕數字對不上來源。我們的應用系統協助您把財務、年報、盤查與報告書對回 E／S／G 指標，並延伸到土地開發假設與資產評價底稿，讓永續績效真正進入經營討論，而不只是年度交件。",
    image: "/systems/esg-platform.png",
    imageAlt: "企業 ESG 指標儀表板",
    outcomes: [
      {
        title: "衡量永續表現",
        text: "把環境、社會、治理關鍵議題量化成可追蹤指標，清楚看見優劣與年度變化。",
      },
      {
        title: "對齊經營策略",
        text: "讓永續目標與開發節奏、資產組合與長期經營願景同一套語言，避免兩套報表各說各話。",
      },
      {
        title: "提前掌握風險",
        text: "追蹤氣候、法規、供應鏈與揭露相關風險，降低臨時補件與評比落差帶來的衝擊。",
      },
      {
        title: "提升資產評鑑說服力",
        text: "把可追溯數據與財務假設並陳，支援融資、投資人簡報與資產永續評等討論。",
      },
    ],
    stages: [
      {
        title: "建立指標架構",
        text: "依貴公司產業與揭露需求，整理指標藍圖、資料字典與分層管理範圍，讓各單位知道要填什麼、何時交。",
      },
      {
        title: "跨單位協作與整合",
        text: "指派指標責任、設定填報節奏與權限，串接既有財務、盤查或專案資料，減少重複造冊。",
      },
      {
        title: "內控與稽核溯源",
        text: "資料送審覆核、佐證關聯、版本歷程一次留下，查核時回得去來源文件與計算過程。",
      },
      {
        title: "轉成決策與對外說明",
        text: "儀表板、趨勢與匯出底稿支援經營會議、報告書章節與評鑑／揭露準備，從合規走向持續改善。",
      },
    ],
    modules: [
      {
        title: "資料來源對照",
        text: "整合財務報告、年報、內控聲明、永續報告書與溫室氣體盤查等來源，讓每一個對外數字都找得到出處。",
      },
      {
        title: "E／S／G 指標計算",
        text: "將來源項目對應環境、社會、治理指標，形成可檢視的分數、缺口與年度軌跡。",
      },
      {
        title: "不動產分析與策略底稿",
        text: "結合基地、產品定位、時程與市場假設，協助您比較開發情境、篩選優先行動與對外論述重點。",
      },
      {
        title: "土開財務與資產評價",
        text: "土地成本、建造成本、銷售／出租假設與敏感性分析並陳，支撐決策會議與資產評鑑準備。",
      },
      {
        title: "報告與稽核輸出",
        text: "保留計算過程與來源對照，方便內部稽核、報告書整理、評比回覆與下一年度更新。",
      },
    ],
    deliverables: [
      "來源對照與資料字典",
      "E／S／G 指標與準備度底稿",
      "不動產分析／策略摘要",
      "財務假設與敏感性",
      "報告書／稽核輸出清單",
    ],
    boundary: "本服務提供分析底稿與資料整理，不取代會計師簽證、估價師報告、評鑑機構核定或法律意見。",
    systems: [
      {
        src: "/systems/esg-platform.png",
        alt: "ESG 指標儀表板",
        caption: "資料來源、指標分數與年度軌跡，一次看清準備進度",
      },
      {
        src: "/systems/esg-ghg-inventory.jpg",
        alt: "溫室氣體盤查文件",
        caption: "盤查與來源文件可對回報告書與評鑑數字",
      },
      {
        src: "/systems/esg-esg-report-cover.jpg",
        alt: "永續報告書",
        caption: "永續揭露與報告章節，對應可稽核的計算軌跡",
      },
    ],
  },
  {
    slug: "gis",
    index: "05",
    title: "GIS 地理資訊加值",
    short: "招商案件地圖、條件查詢與數值化統計看板。",
    summary: "在地圖上比較地號、分區、限制與招商條件，並以案件統計看板掌握覆蓋與狀態。",
    lead:
      "土地與招商要不要進下一階段，先看地圖。我們介接地政與公開招商資訊，支援條件查詢、落點統計與圖層疊加，讓基地限制與案件分布一次看清。",
    image: "/systems/gis-wallpaper-map.png",
    imageAlt: "招商案件地圖與統計看板",
    modules: [
      {
        title: "招商案件地圖",
        text: "多機關公開招商資訊落點，依縣市、狀態與類型著色，支援全台快速瀏覽與篩選。",
      },
      {
        title: "條件查詢與統計",
        text: "以條件查詢與統計看板查看案件數、縣市覆蓋與類型分布，讓討論建立在數值化結果上。",
      },
      {
        title: "地政與計畫疊圖",
        text: "在合法授權範圍內整理地籍、使用分區與都市計畫條件，標出容積、退縮與限制位置。",
      },
      {
        title: "自動化資料更新",
        text: "可持續匯入公告、解析欄位並更新地圖，降低人工造冊成本。",
      },
    ],
    deliverables: ["案件地圖與篩選結果", "統計看板截圖／匯出", "分區與限制標註", "資料時點紀錄"],
    boundary: "不提供未經授權的個人登記資料查詢。地政謄本與個人資料依當事人授權及主管機關規定處理。",
    systems: [
      {
        src: "/systems/gis-wallpaper-map.png",
        alt: "招商案件統計看板",
        caption: "條件查詢、縣市統計與案件落點，協助快速篩案",
      },
      {
        src: "/systems/gis-map-home.png",
        alt: "招商案件地圖",
        caption: "全台招商案件落點與圖層瀏覽",
      },
      {
        src: "/systems/gis-cases-map.png",
        alt: "案件條件篩選地圖",
        caption: "依縣市、狀態與類型篩選，對照基地條件",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const capabilities = [
  { title: "土地", text: "地政、使用分區與招商條件一次看清。" },
  { title: "圖面", text: "平面圖、BIM 與低碳試算對齊設計討論。" },
  { title: "工程", text: "進度、公文、查核與現場紀錄可追蹤。" },
  { title: "標章", text: "綠建築、能效、低碳準備度提前掌握。" },
  { title: "資產", text: "ESG、財務假設與評價底稿可對外說明。" },
];

export const focusAreas = [
  { title: "土地開發", text: "基地條件、分區限制與開發策略整理。" },
  { title: "財務與估價", text: "土開財務、敏感性分析與評價底稿。" },
  { title: "工程管理", text: "契約、進度、查核與文件主檔管理。" },
  { title: "建築設計支援", text: "平面圖整理、BIM 應用與 EC 低碳計算。" },
  { title: "ESG 永續", text: "標章評估、企業 ESG 與資產評鑑準備。" },
  { title: "國土智慧", text: "GIS 招商地圖、條件查詢與圖層疊加。" },
];

/** Homepage value pillars — client outcomes, not product jargon. */
export const valueProps = [
  {
    title: "不動產分析更清楚",
    text: "把基地條件、產品假設、成本與時程放在同一工作台，協助您比較情境、找出真正影響報酬與風險的關鍵變數。",
  },
  {
    title: "策略建議可落地",
    text: "從標章路徑、開發節奏到對外論述，系統協助整理可執行的優先順序，讓會議結論變成下週就能派工的事項。",
  },
  {
    title: "資產評鑑更有依據",
    text: "永續指標、財務假設與佐證軌跡並陳，支援融資、投資人簡報與資產永續評等討論，減少「數字說不清」的卡關。",
  },
  {
    title: "風險與合規提前管",
    text: "法規揭露、標章門檻與氣候相關議題提早入表，降低臨時補件、評比落差與跨部門對不齊的成本。",
  },
];

/** Why choose Hanhsin application systems. */
export const advantages = [
  {
    title: "從土地到永續，同一套事實",
    text: "開發、設計、工程、標章與 ESG 常各自造冊。我們的應用系統協助把關鍵事實收斂成可共用底圖，減少版本打架與重複勞動。",
  },
  {
    title: "分析 → 策略 → 評鑑一條線",
    text: "不只整理資料：協助您看懂案況、比較策略選項，並把可追溯結果用於資產評價與對外說明，讓科技真正進入決策。",
  },
  {
    title: "給董事會與投資人看得懂的輸出",
    text: "儀表板、缺口清單與敏感性摘要用經營語言呈現，方便向老闆、銀行、評比單位與合作夥伴清楚交代進度與假設。",
  },
  {
    title: "可稽核、可更新、可延續下一年度",
    text: "來源對照、佐證關聯與版次歷程留下紀錄，今年做完的基礎明年還用得上，永續治理不必每年重來一次。",
  },
  {
    title: "貼近不動產與開發現場",
    text: "不是通用企業軟體硬套產業：內容圍繞土開財務、標章送審、工程督導與招商地圖等真實工作節奏設計。",
  },
  {
    title: "導入節奏彈性，先解決最痛的點",
    text: "可依您目前最急的案件——標章準備、ESG 揭露或資產評價——先啟動對應模組，再逐步串起全流程。",
  },
];

export const platformStages = [
  {
    step: "01",
    title: "釐清要管的指標與範圍",
    text: "依貴公司或單一開發案，定義揭露／評比／標章範圍與資料字典，避免一開始就填錯欄位。",
  },
  {
    step: "02",
    title: "分工填報與跨單位協作",
    text: "指定負責人、節奏與權限，讓財務、工務、設計與永續單位在同一流程交件與覆核。",
  },
  {
    step: "03",
    title: "留下可查的證據鏈",
    text: "數字對回來源文件與計算過程，主管覆核與稽核時不用重新翻資料夾。",
  },
  {
    step: "04",
    title: "轉成決策與對外說明",
    text: "儀表板與匯出底稿支援經營會議、報告書、評鑑回覆與投資人溝通。",
  },
];
