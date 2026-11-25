import type { Metadata } from "next";
import Link from "next/link";
import { LabelCatalog } from "@/components/ServiceSections";
import { labelFamilies } from "@/lib/labels";

export const metadata: Metadata = {
  title: "永續標章",
  description:
    "LEED、LEED Zero、WELL、GNFZ、GRESB、綠建築 EEWH、智慧建築、低碳建築 LEBR、建築能效 BERS、新建住宅性能評估、無障礙住宅標章介紹。",
};

export default function LabelsPage() {
  return (
    <>
      <section className="section labels-hero">
        <div className="shell">
          <p className="kicker">永續標章</p>
          <h1>國內外永續標章</h1>
          <p className="lede">點選標章查看評估內容、等級、法規獎勵與申請流程。</p>
        </div>
      </section>

      <section id="catalog" className="section svc-sec labels-catalog">
        <div className="shell">
          <LabelCatalog families={labelFamilies} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel cta-panel-tech">
            <div>
              <p className="kicker">建築標章評估與分析</p>
              <h2>不確定該申請哪幾項？</h2>
              <p>告訴我們建築類型、所在縣市與目標，我們協助判斷標章組合並試算得分與缺口。</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              預約諮詢
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
