import Image from "next/image";
import Link from "next/link";
import { capabilities, company, services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero hero-bleed">
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
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              {company.group}旗下｜{company.tagline}
            </p>
            <h1>土地開發與永續科技的專業夥伴</h1>
            <p className="lede">
              翰欣科技以資訊整合與應用研發，支援土地開發、建築規劃、營建管理、綠建築標章、企業
              ESG 與 GIS 加值，協助案件推進與決策。
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/services">
                瀏覽服務項目
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">服務項目</p>
          <h2>我們提供的專業服務</h2>
          <p className="section-desc">
            涵蓋營建管理、建築規劃設計、綠建築標章、企業 ESG 與地理資訊加值。
          </p>
        </div>
        <div className="svc-cards">
          {services.map((service) => (
            <Link key={service.slug} className="svc-card" href={`/services/${service.slug}`}>
              <div className="svc-card-media">
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
              <div className="svc-card-body">
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="svc-card-go">了解更多</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="band band-bleed">
        <div className="band-inner">
          <div className="section-head light">
            <p className="kicker">專業範疇</p>
            <h2>從土地到永續指標的整合支援</h2>
          </div>
          <ul className="capability-grid">
            {capabilities.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-panel">
        <div>
          <p className="kicker">聯絡我們</p>
          <h2>歡迎洽詢合作與專案需求</h2>
          <p>
            若有土地開發、工程管理、標章準備或資料加值需求，歡迎來電或來信，我們將盡速回覆。
          </p>
        </div>
        <Link className="btn btn-primary" href="/contact">
          前往聯絡我們
        </Link>
      </section>
    </>
  );
}
