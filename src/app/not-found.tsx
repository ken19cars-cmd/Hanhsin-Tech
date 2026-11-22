import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="kicker">404</p>
      <h1>找不到這一頁</h1>
      <p className="lede">回到首頁或五項服務繼續看。</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" href="/">
          首頁
        </Link>
        <Link className="btn btn-line" href="/services">
          服務
        </Link>
      </div>
    </section>
  );
}
