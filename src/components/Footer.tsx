import Link from "next/link";
import { company, serviceShortLabels, services } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo compact />
        <p>
          {company.group}
          {company.relation}
          <br />
          {company.tagline}
        </p>
      </div>
      <div className="footer-col">
        <h2>系統應用</h2>
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            {serviceShortLabels[service.slug] ?? service.title}
          </Link>
        ))}
      </div>
      <div className="footer-col">
        <h2>導入與支援</h2>
        <Link href="/services">系統應用總覽</Link>
        <Link href="/labels">國內外建築標章</Link>
        <Link href="/faq">常見問題</Link>
        <Link href="/about">關於我們</Link>
        <Link href="/contact">預約系統展示</Link>
      </div>
      <div className="footer-col footer-meta">
        <h2>聯絡資訊</h2>
        <p>{company.address}</p>
        <p>
          電話 <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
        </p>
        <p>
          Email <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
    </footer>
  );
}
