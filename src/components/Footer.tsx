import Link from "next/link";
import { company } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo compact />
        <p>
          {company.group}旗下公司
          <br />
          {company.tagline}
        </p>
      </div>
      <div className="footer-meta">
        <p>{company.address}</p>
        <p>
          電話{" "}
          <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
        </p>
        <p>
          Email <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
      <div className="footer-links">
        <Link href="/services">服務項目</Link>
        <Link href="/about">關於我們</Link>
        <Link href="/contact">聯絡我們</Link>
      </div>
    </footer>
  );
}
