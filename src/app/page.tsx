import Link from "next/link";
import { services, steps } from "@/lib/site";

const standards = ["綠建築", "智慧建築", "建築能效", "低碳建築", "LEED", "WELL"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="brand-hero">翰欣科技</p>
          <p className="eyebrow">不動產開發 × 創新應用</p>
          <h1>把地籍、圖面、工地與永續指標，放回同一張底圖。</h1>
          <p className="lede">
            翰欣科技實業有限公司協助土地開發團隊處理工程管理、設計圖分析、綠建築與智慧建築檢核、企業 ESG，以及 GIS 地政加值。
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" href="/services">
              五項服務
            </Link>
            <Link className="btn btn-line" href="/review">
              指標檢核表
            </Link>
          </div>
        </div>
        <aside className="plate" aria-label="服務索引">
          <header>
            <span>HX / 工作底圖</span>
            <span>01–05</span>
          </header>
          <ol>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <span>{service.index}</span>
                  <span>{service.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">服務</p>
          <h2>五條線，從土地接到資產。</h2>
        </div>
        <div className="svc-list">
          {services.map((service) => (
            <Link key={service.slug} className="svc-row" href={`/services/${service.slug}`}>
              <span className="idx">{service.index}</span>
              <span className="name">{service.title}</span>
              <span className="desc">{service.short}</span>
              <span className="go">進入</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="section-head">
          <p className="kicker">順序</p>
          <h2>先有空間事實，再談分數與財務。</h2>
        </div>
        <ol className="chain">
          {steps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section split">
        <div>
          <p className="kicker">指標</p>
          <h2>送審前先對證據，不在標章核發後補洞。</h2>
          <p>
            綠建築九大指標、智慧建築六大指標、建築能效分級、蘊含碳，以及 LEED、WELL，可以放在同一份準備清單。正式分數仍由評定機構核定。
          </p>
          <Link className="btn btn-primary" href="/review">
            打開檢核表
          </Link>
        </div>
        <ul className="standards">
          {standards.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
