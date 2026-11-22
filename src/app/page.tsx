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
            <h1>把地籍、圖面、工地與永續指標，放回同一張底圖。</h1>
            <p className="lede">
              我們以科技與資訊整合，支援土地開發、財務估價、工程管理、建築設計、ESG
              永續與國土智慧應用，讓開發決策說得出依據。
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
          <h2>五項可獨立搭配的專業服務</h2>
          <p className="section-desc">
            服務彼此相關、可互相支援，但不是固定一條龍流程。依基地階段與需求，單點導入或組合使用皆可。
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
                  unoptimized={service.image.endsWith(".svg")}
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
            <p className="kicker">服務面向</p>
            <h2>可組合、可單點啟動，不綁一條龍流程。</h2>
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
          <p className="kicker">合作</p>
          <h2>說明你的基地與階段，我們回對應的服務線。</h2>
          <p>
            無論是土地盤點、圖面分析、工程主檔、永續指標或招商疊圖，都可以從一通電話開始。
          </p>
        </div>
        <Link className="btn btn-primary" href="/contact">
          前往聯絡我們
        </Link>
      </section>
    </>
  );
}
