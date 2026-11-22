import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="shell">
        <p className="kicker">404</p>
        <h1>找不到這一頁</h1>
        <p className="lede">回到首頁或服務項目繼續瀏覽。</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            首頁
          </Link>
          <Link className="btn btn-ghost" href="/services">
            服務項目
          </Link>
        </div>
      </div>
    </section>
  );
}
