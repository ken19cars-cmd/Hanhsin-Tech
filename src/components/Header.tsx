import Link from "next/link";

const links = [
  { href: "/services", label: "服務" },
  { href: "/review", label: "檢核表" },
  { href: "/about", label: "關於" },
  { href: "/contact", label: "聯絡" },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">HX</span>
        <span className="brand-name">翰欣科技</span>
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
