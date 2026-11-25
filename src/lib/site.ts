export type Module = {
  title: string;
  text: string;
};

export type SystemShot = {
  src: string;
  alt: string;
  caption: string;
  /** Looping motion preview opened in the lightbox. */
  motion?: string;
};

function motionFor(src: string) {
  const base = src.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "") ?? "";
  return `/systems/motion/${base}.mp4`;
}

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
  /** Client outcomes / why it matters — always shown on detail pages. */
  outcomes: Module[];
  deliverables: string[];
  boundary: string;
  systems: SystemShot[];
};

export const company = {
  nameZh: "翰欣科技實業有限公司",
  nameEn: "Hanhsin-Tech",
  group: "皓欣不動產規劃顧問有限公司",
  relation: "相關企業",
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
    short: "公文、進度、查核與文件集中管理，方便 PCM 與專案團隊掌握現場。",
    summary: "工程履約期間的公文、進度、查核、會議與文件，透過系統統一建檔與追蹤。",
    lead:
      "公辦都更與促參等案件進入興建期後，文件與協調事項快速增加。PMIS 將公文、進度、查核、送審與影像歸檔放在同一平台，並以儀表板協助督導掌握落後工項與介面重點。",
    image: "/systems/pmis-ai-workflow.png",
    imageAlt: "PMIS 工程管理系統總覽",
    outcomes: [
      {
        title: "現場與文件同一視線",
        text: "公文、進度、查核與影像不再散落各處，督導與專案團隊可即時對齊同一組事實。",
      },
      {
        title: "落後與風險提早看見",
        text: "儀表板與任務追蹤標出瓶頸工項，會議上直接討論處置，而不是重新對表。",
      },
      {
        title: "對外說明更有依據",
        text: "公開資訊頁與版次紀錄，方便主辦機關、PCM 與相關單位共用進度說明。",
      },
    ],
    modules: [
      {
        title: "九大核心模組",
        text: "人員權限、公文管理、會議管理、進度管理、查核管理、文件管理、採購發包、影像紀錄與儀表板，可依主辦機關作業習慣彈性配置。",
      },
      {
        title: "進度儀表板",
        text: "比對預定／實際進度、標示落後與風險工項，並整理文件待回與會議決議，方便 PCM 督導掌握介面協調重點。",
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
        alt: "PMIS 總覽作業畫面",
        caption: "公文、進度、查核與任務清冊，依案件主檔集中查詢與追蹤",
      },
      {
        src: "/systems/pmis-system-ui.png",
        alt: "進度儀表板與甘特",
        caption: "預定／實際進度、甘特與風險清單，產出落後說明與督導摘要",
      },
      {
        src: "/systems/construction-site.png",
        alt: "工程公開資訊與基地資料",
        caption: "基地、契約與工期欄位一次對齊，供機關與專案團隊共用",
      },
    ],
  },
  {
    slug: "drawings",
    index: "02",
    title: "平面圖說辨識分析",
    short: "空間辨識、BIM 應用與地政圖說輔助，把圖面變成可使用的清冊與分析資料。",
    summary: "從平面圖辨識空間、串接 BIM 多元應用，並支援土地登記與產權相關圖說作業。",
    lead:
      "規劃與送審常卡在圖說版本不一致、空間清冊難整理、碳排與產權資料又各做各的。平面圖說辨識分析協助把圖面轉成可對位、可追蹤的空間與物件資料，銜接 BIM 應用與地政作業。",
    image: "/systems/drawings-floorplan-ui.png",
    imageAlt: "住宅平面配置圖",
    outcomes: [
      {
        title: "圖面變成可使用清冊",
        text: "空間單元、面積與用途一次整理，設計與審查討論建立在同一套可對位資料上。",
      },
      {
        title: "3D 資訊接上碳排分析",
        text: "BIM 構件與材料資訊可延伸至碳足跡／EC 試算，方便比較方案差異。",
      },
      {
        title: "地政圖說與產權對齊",
        text: "土地登記、共專範圍與權屬對照集中處理，減少圖說歧異與往返補正。",
      },
    ],
    modules: [
      {
        title: "空間辨識系統",
        text: "自動或半自動辨識平面圖中的房間、走道、陽台、核心筒等空間單元，整理面積、樓層與用途屬性，輸出可編修的空間清冊。讓「圖面」變成可查、可統計、可對審的清單，方便設計調整、數量檢討與跨單位討論。",
      },
      {
        title: "BIM 應用",
        text: "把 3D 空間與構件資訊轉成多元應用：材料／斷面數量、空間統計，以及碳足跡與 EC（Embodied Carbon）蘊含碳評估。可依公開排放係數比較方案差異，作為低碳設計與後續標章準備的分析底稿。",
      },
      {
        title: "地政作業輔助",
        text: "支援土地登記相關圖說整理、共有／專有範圍標示，以及產權分析所需的界址、面積與權屬對照。協助開發、代書與專案團隊在同一套圖資上核對，降低圖說歧異與往返補正。",
      },
      {
        title: "圖層與版次對位",
        text: "平面圖、BIM 與地政相關圖層對位後，留下版次紀錄與差異說明，讓跨單位討論都對準同一版本。",
      },
    ],
    deliverables: [
      "空間辨識結果與清冊",
      "BIM／EC 碳排分析底稿",
      "地政圖說與產權對照清單",
      "圖層與版次紀錄",
    ],
    boundary:
      "辨識與試算結果為作業底稿，須由設計、地政或相關專業單位抽核。不取代正式測量、簽證、登記或主管機關核定結果。",
    systems: [
      {
        src: "/systems/drawings-floorplan-ui.png",
        alt: "住宅平面配置圖",
        caption: "平面圖空間辨識與清冊整理示意",
      },
      {
        src: "/systems/drawings-studio-plan.png",
        alt: "套房式平面配置圖",
        caption: "機能分區與面積單元對位示意",
      },
      {
        src: "/systems/drawings-bim-ui.png",
        alt: "BIM 與碳排分析介面",
        caption: "BIM 空間資訊延伸至 EC／碳足跡分析",
      },
    ],
  },
  {
    slug: "green",
    index: "03",
    title: "綠建築與智慧建築指標",
    short: "綠建築、能效、低碳等指標門檻與缺口，用系統整理送審前準備。",
    summary: "依案件切換標章模組，整理指標覆蓋、缺口與佐證清單。",
    lead:
      "同一案件常同時面對綠建築、智慧建築、建築能效、低碳標示與相關評比。評估工作台協助整理門檻、缺口與證據清單，讓設計與永續單位在送審前先對齊。",
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
    short: "ESG 指標、來源對照與土開財務假設，整理成可追蹤的評價底稿。",
    summary: "串接財務、盤查與報告書資料，支援 ESG 指標整理與資產評價討論。",
    lead:
      "永續揭露與評鑑需要數字回得去來源。應用系統協助把財務、年報、盤查與報告書對應到 E／S／G 指標，並可延伸土地開發假設與資產評價底稿，方便內部討論與對外說明。",
    image: "/systems/esg-platform.png",
    imageAlt: "企業 ESG 指標儀表板",
    outcomes: [
      {
        title: "衡量永續表現",
        text: "把環境、社會、治理關鍵議題量化成可追蹤指標，清楚看見優劣與年度變化。",
      },
      {
        title: "對齊經營與風險",
        text: "永續目標與開發節奏同一套語言，並提前掌握氣候、法規與揭露相關風險。",
      },
      {
        title: "提升資產評鑑說服力",
        text: "可追溯數據與財務假設並陳，支援融資、投資人簡報與資產永續評等討論。",
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
        title: "不動產分析與資產評價",
        text: "結合基地、產品定位與土開財務假設，比較開發情境與敏感性，支撐決策會議與資產評鑑準備。",
      },
      {
        title: "報告與稽核輸出",
        text: "保留計算過程與來源對照，方便內部稽核、報告書整理、評比回覆與下一年度更新。",
      },
    ],
    deliverables: [
      "來源對照與資料字典",
      "E／S／G 指標與準備度底稿",
      "不動產分析／財務假設摘要",
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
    short: "招商與基地條件用地圖查詢、篩選與統計。",
    summary: "介接公開招商與地政相關圖層，支援條件查詢與案件落點統計。",
    lead:
      "土地與招商評估常從地圖開始。系統介接公開招商與地政相關資訊，支援條件查詢、落點統計與圖層疊加，協助掌握基地限制與案件分布。",
    image: "/systems/gis-wallpaper-map.png",
    imageAlt: "招商案件地圖與統計看板",
    outcomes: [
      {
        title: "篩案更快、對齊更容易",
        text: "公開招商案件落點與條件篩選，讓評估會議直接看地圖與數字討論。",
      },
      {
        title: "基地限制一次標清",
        text: "地政與都市計畫條件疊圖，標出容積、退縮與限制，減少各自查圖的誤差。",
      },
      {
        title: "資料可持續更新",
        text: "公告匯入與欄位更新自動化，降低人工造冊成本，保留資料時點紀錄。",
      },
    ],
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

for (const service of services) {
  service.systems = service.systems.map((shot) => ({
    ...shot,
    motion: shot.motion ?? motionFor(shot.src),
  }));
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function mediaMotion(src: string) {
  return motionFor(src);
}

export const capabilities = [
  { title: "土地", text: "地政、使用分區與招商條件一次看清。" },
  { title: "圖面", text: "空間辨識、BIM 應用與地政圖說輔助。" },
  { title: "工程", text: "進度、公文、查核與現場紀錄可追蹤。" },
  { title: "標章", text: "綠建築、能效、低碳準備度提前掌握。" },
  { title: "資產", text: "ESG、財務假設與評價底稿可對外說明。" },
];

export const focusAreas = [
  { title: "土地開發", text: "基地條件、分區限制與開發策略整理。" },
  { title: "財務與估價", text: "土開財務、敏感性分析與評價底稿。" },
  { title: "工程管理", text: "契約、進度、查核與文件主檔管理。" },
  { title: "建築設計支援", text: "空間辨識、BIM 多元應用與地政作業輔助。" },
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
    title: "不動產永續，從規劃到施工",
    text: "規劃、設計、工程到標章與 ESG，資料常常各做各的。系統把常用資料集中管理，開會不用再對版本、重做表。",
  },
  {
    title: "先分析案況，再談策略與評價",
    text: "把基地條件、成本假設與指標缺口整理清楚，方便比較方案，也能直接用在資產評價與對外說明。",
  },
  {
    title: "報告給老闆、銀行也看得懂",
    text: "進度、缺口與財務摘要用清楚圖表呈現，簡報與會議上較好交代目前狀況與假設。",
  },
  {
    title: "資料留得住，明年還用得上",
    text: "來源、佐證與版次都有紀錄，今年整理好的基礎，下一年度更新不用從頭來。",
  },
  {
    title: "依不動產與開發實務設計",
    text: "功能對齊土開財務、標章送審、工程督導與招商地圖等日常作業，不是通用套裝硬套進來。",
  },
  {
    title: "可先做急件，再逐步擴大",
    text: "標章準備、ESG 揭露或資產評價哪個急就先上哪個模組，之後再依需要擴充串接。",
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
