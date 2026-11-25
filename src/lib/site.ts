import { serviceList } from "@/lib/services";
import type { Service } from "@/lib/service-types";

export type {
  Capability,
  Faq,
  FlowStage,
  Module,
  Service,
  SystemShot,
  WorkStep,
} from "@/lib/service-types";

function motionFor(src: string) {
  const base = src.split("/").pop()?.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "") ?? "";
  return `/systems/motion/${base}.mp4`;
}

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

export const services: Service[] = serviceList;

for (const service of services) {
  service.systems = service.systems.map((shot) => ({
    ...shot,
    motion: shot.motion ?? motionFor(shot.src),
  }));
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** Compact service names for navigation and overview diagrams. */
export const serviceShortLabels: Record<string, string> = {
  pmis: "PMIS 工程管理",
  drawings: "平面圖說辨識",
  green: "標章指標評估",
  esg: "ESG／資產評價",
  gis: "GIS 地理加值",
};

/** Deep link to a module section on its service page; falls back to the page itself. */
export function moduleHref(slug: string, moduleTitle: string) {
  const service = getService(slug);
  const index = service?.modules.findIndex((module) => module.title === moduleTitle) ?? -1;
  return index >= 0 ? `/services/${slug}#cap-${index + 1}` : `/services/${slug}`;
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
