import type { Metadata } from "next";
import Link from "next/link";
import { LabelCatalog, SectionHead } from "@/components/ServiceSections";
import { getLabel, labelFamilies, labels } from "@/lib/labels";

export const metadata: Metadata = {
  title: "永續標章",
  description:
    "LEED、LEED Zero、WELL、GNFZ、GRESB、綠建築 EEWH、智慧建築、低碳建築 LEBR、建築能效 BERS、新建住宅性能評估、無障礙住宅標章等國內外永續標章的介紹與評估重點。",
};

const picks = [
  {
    goal: "公有新建建築的法規義務",
    note: "依工程經費與類組，須取得綠建築標章、能效 1 級，並分階段申請低碳標示。",
    ids: ["eewh", "bers", "lebr", "intelligent-building"],
  },
  {
    goal: "都更、危老的容積獎勵",
    note: "依候選證書或評估等級給予基準容積獎勵。",
    ids: ["eewh", "intelligent-building", "housing-performance", "barrier-free"],
  },
  {
    goal: "綠色融資與永續揭露",
    note: "綠建築銀級加能效 1 級是常見判準；資產組合可參與 GRESB 評比。",
    ids: ["eewh", "bers", "gresb"],
  },
  {
    goal: "外商租戶與國際投資人",
    note: "國際認證是跨國企業選址與投資審查常見的條件。",
    ids: ["leed", "well", "gresb"],
  },
  {
    goal: "企業淨零與減碳承諾",
    note: "以第三方認證呈現建築與營運的淨零進度。",
    ids: ["leed-zero", "gnfz", "lebr"],
  },
  {
    goal: "住宅產品定位與銷售",
    note: "以居住性能、無障礙設計與建築能效說明產品差異。",
    ids: ["housing-performance", "barrier-free", "bers"],
  },
];

export default function LabelsPage() {
  return (
    <>
      <section className="section">
        <div className="shell">
          <p className="kicker">永續標章</p>
          <h1>國內外永續標章介紹與評估重點</h1>
          <p className="lede">
            整理 {labels.length}{" "}
            種國內外永續標章：每一種的目的、主管或發證單位、評估內容、等級、法規與獎勵，以及申請流程。標章大致分為法規義務、政策誘因與市場要求三種角色，多數專案會組合申請。
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/services/green">
              以系統評估標章組合
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              預約諮詢
            </Link>
          </div>
        </div>
      </section>

      <section className="section svc-sec svc-alt">
        <div className="shell">
          <SectionHead
            num="01"
            label="先依目的選標章"
            title="六種常見需求與對應標章"
            desc="先確認要回應的是法規、獎勵、融資還是租戶與投資人，再決定標章組合。點選標章可查看完整介紹。"
          />
          <div className="label-picks">
            {picks.map((pick) => (
              <article key={pick.goal}>
                <h3>{pick.goal}</h3>
                <p>{pick.note}</p>
                <div className="label-pick-chips">
                  {pick.ids.map((id) => {
                    const item = getLabel(id);
                    return item ? (
                      <Link key={id} href={`/labels/${id}`}>
                        {item.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="section svc-sec">
        <div className="shell">
          <SectionHead
            num="02"
            label="標章介紹"
            title="各標章的目的與評估重點"
            desc="依國際認證與國內標章分類，每一種標章都有獨立頁面說明評估內容、等級、法規獎勵與申請流程。正式規定以各主管機關、評定機構或認證單位公告為準。"
          />
          <LabelCatalog families={labelFamilies} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel cta-panel-tech">
            <div>
              <p className="kicker">建築標章評估與分析</p>
              <h2>不確定該申請哪幾項？</h2>
              <p>
                告訴我們建築類型、所在縣市與目標，系統會列出必須、建議與可選擇的標章組合，並試算各標章的得分與缺口。
              </p>
            </div>
            <Link className="btn btn-primary" href="/services/green">
              了解系統
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
