import Link from "next/link";
import Logo from "./Logo";
import SiteNav, { type NavMenu } from "./SiteNav";
import { company, moduleHref, serviceShortLabels, services } from "@/lib/site";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

const menus: NavMenu[] = [
  {
    id: "services",
    label: "系統應用",
    href: "/services",
    layout: "mega",
    groups: services.map((service) => ({
      title: service.title,
      href: `/services/${service.slug}`,
      badge: service.index,
      links: service.modules.map((module, index) => ({
        label: module.title,
        href: `/services/${service.slug}#cap-${index + 1}`,
      })),
    })),
    footer: { label: "五大系統應用總覽", href: "/services" },
  },
  {
    id: "scenarios",
    label: "應用情境",
    href: "/services",
    layout: "wide",
    intro: "依您目前要處理的工作，直接看對應的系統模組。",
    groups: [
      {
        links: [
          {
            label: "工程履約與督導",
            desc: "公文、送審、會議決議與缺失追蹤",
            href: moduleHref("pmis", "公文與送審文件管理"),
          },
          {
            label: "進度落後與付款預測",
            desc: "S 曲線、估驗計價與付款節點",
            href: moduleHref("pmis", "估驗計價與付款節點"),
          },
          {
            label: "面積清冊與共有分攤",
            desc: "戶別面積、共專範圍與產權清冊",
            href: moduleHref("drawings", "地政作業輔助"),
          },
          {
            label: "建材蘊含碳評估",
            desc: "BIM 構件數量與減碳方案比較",
            href: moduleHref("drawings", "BIM 應用"),
          },
          {
            label: "國內外建築標章選擇",
            desc: "21 種標章與評級，依需求判斷適用組合",
            href: "/services/green#catalog",
          },
          {
            label: "標章等級與容積獎勵評估",
            desc: "依目標等級找出缺口與可行調整",
            href: moduleHref("green", "準備度與缺口分析"),
          },
          {
            label: "溫室氣體盤查與永續報告",
            desc: "ISO 14064-1 盤查與揭露框架對應",
            href: moduleHref("esg", "溫室氣體盤查"),
          },
          {
            label: "開發財務與資產評價",
            desc: "開發財務模型與敏感性分析",
            href: moduleHref("esg", "不動產分析與資產評價"),
          },
          {
            label: "權屬清查與謄本解析",
            desc: "批次調閱土地建物謄本，彙整持分與他項權利",
            href: moduleHref("gis", "土地／建物謄本解析"),
          },
          {
            label: "基地調查與選地",
            desc: "地價、分區、行情與環境限制一次彙整",
            href: moduleHref("gis", "基地資料彙整與篩選"),
          },
        ],
      },
    ],
  },
  {
    id: "support",
    label: "導入與問答",
    href: "/faq",
    layout: "split",
    groups: [
      {
        title: "導入流程",
        links: services.map((service) => ({
          label: serviceShortLabels[service.slug] ?? service.title,
          href: `/services/${service.slug}#process`,
        })),
      },
      {
        title: "常見問題",
        links: services.map((service) => ({
          label: serviceShortLabels[service.slug] ?? service.title,
          href: `/faq#${service.slug}`,
        })),
      },
    ],
    footer: { label: "常見問題總覽", href: "/faq" },
  },
  {
    id: "about",
    label: "關於我們",
    href: "/about",
    layout: "list",
    groups: [
      {
        links: [
          { label: "公司簡介", desc: `${company.group}${company.relation}`, href: "/about" },
          { label: "公司定位", desc: "不動產開發經驗與應用研發", href: "/about#position" },
          { label: "核心領域", desc: "土地、財務、工程、設計、ESG、國土資訊", href: "/about#domains" },
          { label: "系統優勢", desc: "為什麼選擇與我們合作", href: "/about#advantages" },
        ],
      },
    ],
  },
  {
    id: "contact",
    label: "聯絡我們",
    href: "/contact",
    layout: "list",
    groups: [
      {
        links: [
          { label: "線上諮詢", desc: "留下需求，我們盡速回覆", href: "/contact" },
          { label: "來電洽詢", desc: company.phoneDisplay, href: `tel:${company.phoneTel}` },
          { label: "Email", desc: company.email, href: `mailto:${company.email}` },
          { label: "公司地址", desc: company.address, href: mapsHref },
        ],
      },
    ],
  },
];

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span className="topbar-contact">
          <a href={`tel:${company.phoneTel}`}>服務專線 {company.phoneDisplay}</a>
          <a className="topbar-email" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </span>
      </div>
      <SiteNav
        brand={
          <Link className="brand" href="/" aria-label={`${company.nameZh}首頁`}>
            <Logo />
          </Link>
        }
        menus={menus}
        cta={{ label: "預約系統展示", href: "/contact" }}
      />
    </>
  );
}
