import Link from "next/link";
import Logo from "./Logo";
import SiteNav, { type NavMenu } from "./SiteNav";
import { company, getService, moduleHref, serviceShortLabels, services } from "@/lib/site";

const labelFamilies = getService("green")?.catalog ?? [];
const labelCount = labelFamilies.reduce((sum, family) => sum + family.items.length, 0);

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
    id: "labels",
    label: "建築標章",
    href: "/labels",
    layout: "labels",
    intro: "國內外建築標章與評級的目的與評估重點，點選可查看完整說明。",
    groups: [
      ...labelFamilies.slice(0, 2).map((family, index) => ({
        title: family.title,
        href: `/labels#label-family-${index + 1}`,
        links: family.items.map((item) => ({
          label: item.name,
          desc: item.brief,
          href: `/labels#${item.id}`,
        })),
      })),
      {
        title: "相關服務",
        links: [
          {
            label: "綠建築規劃與設計",
            desc: "設計階段試算指標得分與門檻差距",
            href: moduleHref("green", "設計參數與指標試算"),
          },
          {
            label: "碳盤查服務",
            desc: "ISO 14064-1 範疇一、二、三盤查",
            href: moduleHref("esg", "溫室氣體盤查"),
          },
          {
            label: "永續低碳 ESG 全方位服務",
            desc: "指標資料鏈、揭露框架與確信準備",
            href: "/services/esg",
          },
        ],
      },
    ],
    footer: { label: `國內外 ${labelCount} 種建築標章與評級總覽`, href: "/labels" },
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
