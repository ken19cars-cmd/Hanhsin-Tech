import type { Metadata } from "next";
import Link from "next/link";
import ServiceOrbit from "@/components/ServiceOrbit";

export const metadata: Metadata = {
  title: "服務項目",
  description:
    "PMIS、平面圖說辨識分析、綠建築標章、企業 ESG 與資產評價、GIS 加值。",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="shell">
        <p className="kicker">服務項目</p>
        <h1>五大系統應用</h1>
        <p className="lede">
          五套系統各自處理不動產開發中的一段資料工作：工程履約、圖說與面積、標章指標、ESG
          揭露與資產評價、政府地政與地理資料。每套都可單獨導入，也能共用同一份案件資料串接使用。
        </p>
        <ServiceOrbit />
        <div className="cta-panel cta-panel-spaced cta-panel-tech">
          <div>
            <p className="kicker">聯絡我們</p>
            <h2>有需求，歡迎與我們聯繫</h2>
            <p>標章資料、ESG 揭露、工程督導或基地查詢，歡迎來電或來信。</p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            立即聯絡
          </Link>
        </div>
      </div>
    </section>
  );
}
