import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "服務項目" },
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="翰欣科技實業有限公司首頁">
        <Logo />
      </Link>
      <nav aria-label="主要">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
