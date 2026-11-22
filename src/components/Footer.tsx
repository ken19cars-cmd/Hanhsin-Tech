import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>翰欣科技實業有限公司</strong>
        <p>不動產開發 × 創新應用</p>
      </div>
      <div className="footer-links">
        <Link href="/services">五項服務</Link>
        <Link href="/review">指標檢核表</Link>
        <Link href="/contact">聯絡</Link>
      </div>
    </footer>
  );
}
