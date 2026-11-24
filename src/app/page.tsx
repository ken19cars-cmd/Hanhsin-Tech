import Image from "next/image";
import Link from "next/link";
import { company, services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            className="hero-img"
            sizes="100vw"
          />
          <div className="hero-veil" />
        </div>
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{company.nameZh}</p>
            <h1>土地開發與永續管理的系統應用</h1>
            <p className="lede">
              我們開發並導入應用系統，協助案件團隊整理工程進度、圖面與標章資料、企業 ESG
              與資產資訊，以及地理條件查詢——讓日常工作有同一套可追蹤的資料。
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/services">
                五大服務
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="intro-block">
            <p className="kicker">關於翰欣</p>
            <h2>系統應用，不是標章代辦</h2>
            <div className="prose-block">
              <p>
                {company.nameZh}（{company.nameEn}）為{company.group}
                旗下公司，專注土地開發、建築與永續相關的資訊整合與系統導入。與僅提供標章顧問的公司不同，我們以軟體與資料流程，支援案場與企業日常協作。
              </p>
              <p>
                目前服務涵蓋五大面向：營建工程管理、建築圖面與 BIM
                分析、綠建築與智慧建築指標、企業 ESG 與資產評價，以及 GIS
                地理資訊加值。您可依案件階段單點導入，也可逐步串接。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head left">
            <p className="kicker">服務項目</p>
            <h2>五大系統應用</h2>
            <p className="section-desc">
              以下為現行服務方向與簡要說明；細部項目將依貴公司需求再行整理。
            </p>
          </div>
          <div className="home-svc-list">
            {services.map((service) => (
              <Link
                key={service.slug}
                className="home-svc-item"
                href={`/services/${service.slug}`}
              >
                <span className="home-svc-index">{service.index}</span>
                <div className="home-svc-copy">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                </div>
                <span className="home-svc-go">了解更多</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="home-preview">
            {services.slice(0, 3).map((service) => (
              <figure key={service.slug} className="home-preview-card">
                <div className="home-preview-media">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    unoptimized={
                      service.image.endsWith(".svg") || service.image.endsWith(".png")
                    }
                  />
                </div>
                <figcaption>
                  <strong>{service.title}</strong>
                  <span>{service.summary}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <p className="kicker">聯絡我們</p>
              <h2>告訴我們您目前的案件階段</h2>
              <p>
                無論是工程督導、標章資料整理、ESG 揭露或基地條件查詢，歡迎來電或來信。我們會依現況說明適合導入的系統範圍。
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
