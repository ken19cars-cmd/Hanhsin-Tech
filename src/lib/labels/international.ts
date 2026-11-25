import type { LabelProfile } from "@/lib/service-types";

export const leed: LabelProfile = {
  id: "leed",
  name: "美國 LEED 綠建築認證",
  brief: "全球使用最廣的綠建築評估系統",
  code: "Leadership in Energy and Environmental Design",
  org: "美國綠建築協會 USGBC 制定，GBCI 審查發證",
  logo: "/systems/certs/leed.png",
  focus:
    "區位與交通、永續基地、用水效率、能源與大氣、材料與資源、室內環境品質等面向；v5 版以脫碳、生活品質、生態保育三大影響面向重整。",
  levels: "認證級 40、銀級 50、金級 60、白金級 80 分以上",
  fit: "跨國企業總部、外商租戶、出口供應鏈廠房、國際資產",
  tagline: "國際間使用最廣泛的綠建築認證，跨國企業與外商租戶最常指定的標準。",
  intro: [
    "LEED（Leadership in Energy and Environmental Design，能源與環境先導設計）由美國綠建築協會（USGBC）制定，於 1998 年正式公布，原為全美共通、市場導向的綠建築評估準則，現已成為國際間使用最廣泛的綠建築評估系統，全球超過 180 個國家有認證案例。",
    "LEED 的評估橫跨多個專業領域，包括基地生態與保水、能源、水資源、綠建材與室內環境品質，涉及建築、景觀、空調機電、再生能源與室內裝修。依建築類型與階段，分為新建建築（BD+C）、室內裝修（ID+C）、既有建築營運（O+M）、社區開發（ND）與住宅等評估系統。",
    "最新的 LEED v5 以脫碳、生活品質、生態保育與復育三大影響面向重整評估內容，更強調營運碳排與蘊含碳；LEED v4 與 v4.1 的新案註冊將於 2027 年 6 月 30 日截止。",
  ],
  criteriaTitle: "評估面向（以新建建築 BD+C 為例）",
  criteria: [
    { title: "整合設計與區位交通", text: "設計初期的跨專業整合，以及基地區位、大眾運輸與減少私人運具依賴。" },
    { title: "永續基地", text: "施工污染防治、基地生態、雨水管理與降低熱島效應。" },
    { title: "用水效率", text: "室內外節水、用水計量與替代水源利用。" },
    { title: "能源與大氣", text: "能源效率、設備性能驗證（Commissioning）、再生能源與冷媒管理，是配分最高的類別。" },
    { title: "材料與資源", text: "建材生命週期影響、產品揭露與營建廢棄物管理。" },
    { title: "室內環境品質", text: "通風換氣、低逸散材料、熱舒適、採光與視野。" },
    { title: "創新與區域優先", text: "超越標準的創新做法，以及各地區優先處理的環境議題。" },
  ],
  levelsTitle: "認證等級（滿分 110 分）",
  levelRows: [
    { title: "白金級 Platinum", text: "80 分以上" },
    { title: "金級 Gold", text: "60～79 分" },
    { title: "銀級 Silver", text: "50～59 分" },
    { title: "認證級 Certified", text: "40～49 分，且所有先決條件均須符合" },
  ],
  incentives: [
    {
      title: "租賃與資產價值",
      text: "國際企業選擇辦公空間時，常將 LEED 等級列為租賃條件；取得認證的商辦在招租與資產評價上較具優勢。",
    },
    {
      title: "供應鏈要求",
      text: "國際品牌將綠建築納入供應商評核，新建廠房與辦公室取得 LEED 已是許多出口企業的基本要求。",
    },
    {
      title: "揭露與評比",
      text: "LEED 認證可作為 ESG 報告書、GRESB 評鑑與綠色融資的綠建築佐證。",
    },
  ],
  process: [
    { title: "設計階段", items: ["組成 LEED 工作小組並訂定目標等級", "初步得分評估與得分策略", "於 LEED Online 註冊專案"] },
    { title: "發包階段", items: ["將 LEED 要求納入發包文件與規範", "向投標廠商說明配合事項"] },
    { title: "設計送審", items: ["上傳設計得分項目文件", "回覆審查意見與補件"] },
    { title: "施工階段", items: ["審核環保施工計畫與綠建材", "收集施工得分項目資料"] },
    { title: "施工送審與認證", items: ["上傳施工得分項目文件", "回覆審查意見", "取得認證並整理成效數據"] },
  ],
  support: [
    "以 LEED v4.1 與 v5 對照試算得分，標示先決條件與高配分項目。",
    "每個得分項目綁定負責單位、佐證文件與上傳狀態，追蹤設計與施工兩次送審。",
    "能源模擬、用水與材料資料可與國內 EEWH、BERS 試算共用，避免重複整理。",
  ],
  related: ["leed-zero", "well", "eewh"],
  sources: [
    { label: "U.S. Green Building Council｜LEED rating system", url: "https://www.usgbc.org/leed" },
  ],
};

export const leedZero: LabelProfile = {
  id: "leed-zero",
  name: "LEED Zero 淨零排放認證",
  brief: "零碳、零能耗、零水耗、零廢棄物",
  code: "LEED Zero Carbon / Energy / Water / Waste",
  org: "美國綠建築協會 USGBC 制定，GBCI 審查發證",
  logo: "/systems/certs/leed-zero.png",
  focus: "以過去 12 個月的實際營運數據，驗證碳排、能源、水或廢棄物達到淨零平衡。",
  levels: "Zero Carbon、Zero Energy、Zero Water、Zero Waste 四項認證",
  fit: "已取得 LEED 的建築、企業淨零承諾、科技廠房與總部",
  tagline: "以實際營運數據證明建築達到淨零，是 LEED 建築的進階目標。",
  intro: [
    "LEED Zero 是美國綠建築協會（USGBC）針對卓越表現建築推出的淨零認證，鼓勵建築物朝「零碳排」、「零能耗」、「零水耗」、「零廢棄物」的目標邁進。與 LEED 評估設計與施工不同，LEED Zero 以建築過去 12 個月的實際營運數據作為驗證依據。",
    "申請對象為已取得 LEED 新建建築（BD+C）或既有建築營運（O+M）認證，或已註冊 LEED O+M 的建築。四項認證可依建築條件分別申請，例如先以節能與再生能源達成零碳，再逐步推進水資源與廢棄物。",
    "在企業紛紛提出淨零承諾的趨勢下，LEED Zero 提供第三方驗證的建築層級成果，可直接作為永續報告書與淨零路徑的揭露佐證。",
  ],
  criteriaTitle: "四項淨零認證",
  criteria: [
    { title: "零碳 Zero Carbon", text: "過去一年中，從能源消耗到人員交通的碳排放得以免除或抵銷。" },
    { title: "零能耗 Zero Energy", text: "過去一年中，建築產生的能源量與消耗的能源量達到源能源平衡。" },
    { title: "零水耗 Zero Water", text: "過去一年中，自來水使用量與替代水源（雨水、回收水等）的補充量互相抵銷。" },
    { title: "零廢棄物 Zero Waste", text: "過去一年中，廢棄物的回收再利用率達 90% 以上，並以 TRUE 零廢棄認證的方法驗證。" },
  ],
  levelsTitle: "認證方式",
  levelRows: [
    { title: "四項分別認證", text: "依建築條件申請一項或多項，以「達成／未達成」判定" },
    { title: "營運數據", text: "以最近連續 12 個月的計量數據與證明文件驗證" },
    { title: "效期", text: "認證效期 3 年，期滿以新的營運數據重新驗證" },
  ],
  incentives: [
    {
      title: "企業淨零目標",
      text: "可作為企業 Scope 1、2 減量與再生能源使用成果的建築層級驗證，回應 RE100、SBTi 等承諾。",
    },
    {
      title: "國際供應鏈",
      text: "科技業與出口供應鏈廠房已陸續取得 LEED Zero，作為客戶稽核與品牌溝通的具體成果。",
    },
  ],
  process: [
    { title: "現況盤點", items: ["確認既有 LEED 認證或註冊 O+M", "盤點能源、水、廢棄物與交通數據"] },
    { title: "減量與再生能源", items: ["節能改善與設備汰換", "再生能源自發自用或採購", "水資源與廢棄物管理改善"] },
    { title: "12 個月數據累積", items: ["計量數據與憑證收集", "碳排與能源平衡計算"] },
    { title: "送審與認證", items: ["於 LEED Online 上傳數據與文件", "回覆審查意見", "取得認證，3 年後重新驗證"] },
  ],
  validity: "LEED Zero 認證效期為 3 年。",
  support: [
    "匯入電表、水表與廢棄物紀錄，按月計算四項平衡的達成率。",
    "再生能源憑證與碳權文件集中管理，對應每個月份的抵銷量。",
    "與企業碳盤查資料共用排放係數與組織邊界。",
  ],
  related: ["leed", "bers", "gnfz"],
  sources: [
    { label: "U.S. Green Building Council｜LEED Zero", url: "https://www.usgbc.org/programs/leed-zero" },
  ],
};

export const well: LabelProfile = {
  id: "well",
  name: "國際 WELL 健康建築認證",
  brief: "空氣、水、光等十大健康概念",
  code: "WELL Building Standard",
  org: "國際健康建築研究院 IWBI 制定，GBCI 審查發證",
  logo: "/systems/certs/well.png",
  focus: "空氣、水、營養、光、運動、熱舒適、聲環境、材料、精神、社區十大概念，以完工後現場性能檢測驗證。",
  levels: "銅級 40、銀級 50、金級 60、白金級 80 分以上；每 3 年再認證",
  fit: "企業總部與辦公空間、健康住宅、飯店與醫療照護",
  tagline: "第一個完全以建築使用者健康為核心的建築標準。",
  intro: [
    "WELL 健康建築標準（WELL Building Standard）由國際健康建築研究院（International WELL Building Institute, IWBI）設立，是第一個完全以建築中人員健康與福祉為核心的標準。我們有九成以上的時間在室內度過，WELL 從設計、營運與使用行為三個角度，處理影響使用者健康、舒適與認知的問題。",
    "與其他綠建築標準最大的不同在於「現場性能驗證」：完工後須由第三方實測空氣品質、水質、照明、聲學與熱舒適等數據，確認空間真的達到標準，而不只是書面設計。",
    "WELL v2 依空間類型提供 WELL 認證、WELL Core（租戶裝修較多的商辦）與 WELL 健康安全評價等產品，企業也可透過 WELL at scale 在多個據點同步推動。",
  ],
  criteriaTitle: "WELL v2 十大概念",
  criteria: [
    { title: "空氣", text: "降低室內污染源，確保通風換氣與空氣品質。" },
    { title: "水", text: "飲用水水質檢測與方便取得的飲水設施。" },
    { title: "營養", text: "讓健康飲食成為容易選擇的日常。" },
    { title: "光", text: "幫助人體白天保持警覺、夜間好睡的自然光與照明設計。" },
    { title: "運動", text: "透過空間設計，在日常生活中融入活動與健身。" },
    { title: "熱舒適", text: "優化室內熱環境，提供個人化的溫控條件。" },
    { title: "聲環境", text: "降低噪音干擾，提升專注與溝通品質。" },
    { title: "材料", text: "減少有害物質，使用安全的建材與家具。" },
    { title: "精神", text: "以設計、政策與服務支持認知與情緒健康。" },
    { title: "社區", text: "提升使用者之間的連結、包容與參與。" },
  ],
  levelsTitle: "認證等級",
  levelRows: [
    { title: "白金級 Platinum", text: "80 分以上，每個概念至少 3 分" },
    { title: "金級 Gold", text: "60 分以上，每個概念至少 2 分" },
    { title: "銀級 Silver", text: "50 分以上，每個概念至少 1 分" },
    { title: "銅級 Bronze", text: "40 分以上" },
  ],
  incentives: [
    {
      title: "人才與租賃",
      text: "重視員工健康的企業將 WELL 納入辦公室選址條件，有助於提升員工滿意度與留任率，也增加物業的市場差異化。",
    },
    {
      title: "ESG 社會面揭露",
      text: "WELL 的空氣、水、心理健康等指標，可對應 ESG 報告書中員工健康與安全的揭露內容。",
    },
  ],
  process: [
    { title: "註冊與目標設定", items: ["選擇 WELL 產品與認證範圍", "初步評估並訂定目標等級"] },
    { title: "設計與文件", items: ["空調、照明、聲學與材料設計整合", "營運政策與管理文件準備"] },
    { title: "施工與準備", items: ["低逸散材料與施工管理", "完工後自主預測"] },
    { title: "性能驗證", items: ["第三方現場檢測空氣、水、光、聲與熱舒適", "未達標項目改善與複測"] },
    { title: "認證與維持", items: ["取得認證", "依特性要求持續提交營運數據", "每 3 年再認證"] },
  ],
  validity: "WELL 認證須每 3 年再認證，期間依各特性的要求持續提交營運與檢測數據。",
  support: [
    "十大概念的特性項目拆成檢核清單，標示設計、營運政策與現場檢測的負責單位。",
    "空氣品質與照明等感測數據可接入系統，作為持續數據提交的依據。",
    "與 LEED 室內環境品質項目共用設計與檢測資料。",
  ],
  related: ["leed", "intelligent-building", "gresb"],
  sources: [
    { label: "International WELL Building Institute｜WELL Certification", url: "https://www.wellcertified.com/" },
  ],
};

export const gnfz: LabelProfile = {
  id: "gnfz",
  name: "GNFZ 全球淨零認證",
  brief: "建築、資產組合與企業的淨零認證",
  code: "Global Network for Zero",
  org: "Global Network for Zero 制定與發證",
  logo: "/systems/certs/gnfz.png",
  focus: "依溫室氣體盤查議定書盤查範疇一、二、三排放，經盤查、減量、抵銷三步驟，以里程碑證書逐步推進至淨零。",
  levels: "評估、淨零計畫、碳抵銷、淨零里程碑、淨零排放五種證書",
  fit: "企業淨零路徑、跨國集團資產組合、新建與既有建築",
  tagline: "以里程碑方式逐步推進的淨零認證，從建築延伸到企業與資產組合。",
  intro: [
    "全球淨零認證（Global Network for Zero, GNFZ）由美國綠建築協會前總裁 Mahesh Ramanujam 創立，是為了推動淨零碳排、因應氣候危機而成立的平台，以去中心化、點對點的方式，為建築、資產組合與企業提供對應的淨零認證。",
    "GNFZ 依循溫室氣體盤查議定書（GHG Protocol），以連續 12 個月的排放數據盤查範疇一、二、三，再依「碳盤查、碳減量、碳抵銷」三個步驟擬定淨零計畫。與一次性認證不同，GNFZ 以里程碑證書記錄每個階段的進度，讓尚未達到淨零的建築也能取得第三方肯定。",
    "對已有碳盤查基礎的企業而言，GNFZ 可以把組織層級的淨零目標，落實到每一棟建築的排放與減量計畫。",
  ],
  criteriaTitle: "執行三階段與減碳三步驟",
  criteria: [
    { title: "啟動", text: "盤查排放、制定淨零計畫，取得評估與淨零計畫證書。" },
    { title: "實施", text: "重新評估排放源、執行減碳措施，達成里程碑與淨零認證。" },
    { title: "維持", text: "持續監測並每年提交文件，維持淨零狀態。" },
    { title: "碳盤查", text: "確認範疇一、二、三的組織與營運邊界，完成盤查並擬定碳管理計畫。" },
    { title: "碳減量", text: "建築與設備能效改善、製程改善、循環經濟與供應鏈減碳。" },
    { title: "碳抵銷", text: "優先自行創能與導入再生能源，無法減除的排放再以抵換額度處理。" },
  ],
  levelsTitle: "五種證書",
  levelRows: [
    { title: "評估證書", text: "完成連續 12 個月範疇一、二、三排放盤查" },
    { title: "淨零計畫證書", text: "提出排放計算、實施時間表與年度減量目標" },
    { title: "碳抵銷證書", text: "依計畫報告碳抵銷預算與實際購買的抵換額度" },
    { title: "淨零里程碑證書", text: "達成淨零計畫中的里程碑減排量時頒發" },
    { title: "淨零排放證書", text: "達成淨零後持續監測，排放大幅變化時須重新認證" },
  ],
  incentives: [
    {
      title: "企業淨零揭露",
      text: "里程碑證書可作為永續報告書中淨零路徑執行進度的第三方佐證。",
    },
    {
      title: "資產組合管理",
      text: "可同時涵蓋多棟建築與企業層級，適合持有多處據點的集團統一管理淨零進度。",
    },
  ],
  process: [
    { title: "啟動", items: ["界定認證範圍（建築、資產組合或企業）", "連續 12 個月排放盤查", "取得評估證書"] },
    { title: "淨零計畫", items: ["擬定減量措施與時間表", "設定年度減量與抵銷目標", "取得淨零計畫證書"] },
    { title: "實施", items: ["執行減碳措施與再生能源導入", "追蹤減量與抵銷進度", "取得里程碑或淨零排放證書"] },
    { title: "維持", items: ["每年提交排放與抵銷文件", "排放變化時更新認證"] },
  ],
  support: [
    "與碳盤查模組共用組織邊界、排放源清冊與排放係數。",
    "淨零計畫的年度目標與實際排放並列追蹤，提前發現落後的里程碑。",
    "抵換額度與再生能源憑證集中管理，對應各年度的抵銷量。",
  ],
  related: ["leed-zero", "gresb", "lebr"],
  sources: [
    { label: "Global Network for Zero", url: "https://www.globalnetworkforzero.com/" },
  ],
};

export const gresb: LabelProfile = {
  id: "gresb",
  name: "國際不動產 GRESB 評鑑",
  brief: "不動產企業與基金的年度 ESG 評比",
  code: "Global Real Estate Sustainability Benchmark",
  org: "GRESB B.V.（荷蘭）制定與評比",
  logo: "/systems/certs/gresb.png",
  focus:
    "評估企業或基金層級的 ESG 表現，由管理（Management）、資產性能（Performance）、開發（Development）三個部分組成。",
  levels: "年度評分與 1～5 星評等",
  fit: "上市建商、不動產投資信託、地產基金、持有型開發商",
  tagline: "投資人用來比較不動產企業 ESG 表現的國際年度評比。",
  intro: [
    "GRESB（Global Real Estate Sustainability Benchmark，全球不動產永續標準）成立於 2009 年，源自荷蘭，是以投資人為中心、以產業為導向的國際機構，每年評估並比較全球不動產與基礎建設企業的 ESG 表現，提供資本市場標準化的資料。",
    "與 LEED、EEWH 等針對單棟建築的認證不同，GRESB 評估的是企業或基金的投資組合，涵蓋政策、風險管理、能源、溫室氣體、水、廢棄物與綠建築認證比例。參與者包括上市地產公司、私募地產基金與開發商，許多機構投資人以 GRESB 數據監控投資績效。",
    "參與者可透過 GRESB 的線上系統，分析投資組合在 ESG 各面向的強項與弱項，並追蹤逐年表現。",
  ],
  criteriaTitle: "三個評估部分",
  criteria: [
    { title: "管理 Management", text: "領導、政策、報告、風險管理與利害關係人參與，評估組織層級的 ESG 治理。" },
    { title: "資產性能 Performance", text: "風險評估、目標、租戶與社區、能源、溫室氣體、水、廢棄物、數據監測與審查、綠建築認證，評估營運中資產的實際表現。" },
    { title: "開發 Development", text: "ESG 要求、綠建材、綠建築認證、能源、水、廢棄物與利害關係人參與，評估開發中專案的永續作為。" },
  ],
  levelsTitle: "評比結果",
  levelRows: [
    { title: "GRESB Score", text: "依管理與性能（或開發）部分的得分計算總分" },
    { title: "GRESB Rating 1～5 星", text: "依總分在全球參與者中的五分位排名給予星等，5 星為前 20%" },
    { title: "同業比較", text: "依地區、資產類型與投資型態，與同業群組比較" },
  ],
  incentives: [
    {
      title: "資本市場",
      text: "許多機構投資人與金融機構以 GRESB 數據作為投資決策與議合依據，評比結果直接影響募資與融資條件。",
    },
    {
      title: "永續報告書",
      text: "GRESB 的評估架構可與 ESG 報告書、TCFD 氣候揭露相互對應，提升揭露的一致性。",
    },
  ],
  process: [
    { title: "成立工作小組", items: ["界定參與的投資組合範圍", "說明各項指標的意義與需求"] },
    { title: "現況盤點", items: ["蒐集政策、管理程序與資產數據", "能源、水、廢棄物與綠建築認證資料整理"] },
    { title: "改善與文件", items: ["審閱資料並提出改善建議", "準備各項目的證明文件"] },
    { title: "填報送審", items: ["於規定期間上傳評估資料", "審查期間回覆 GRESB 意見"] },
    { title: "結果分析", items: ["解讀評分與同業比較", "訂定下一年度改善重點"] },
  ],
  support: [
    "資產清冊與能源、水、廢棄物數據按棟彙整，計算投資組合的覆蓋率與強度。",
    "綠建築認證比例可直接引用本系統管理的各棟標章資料。",
    "與 ESG 報告書共用指標與證明文件，避免同一份數據多處整理。",
  ],
  related: ["gnfz", "leed", "well"],
  sources: [
    { label: "GRESB｜Real Estate Assessment", url: "https://www.gresb.com/" },
  ],
};
