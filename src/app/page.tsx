import Image from "next/image";
import Link from "next/link";
import { company, services, steps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
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
        <div className="hero-copy">
          <p className="brand-hero">{company.nameZh}</p>
          <p className="eyebrow">{company.group}旗下｜{company.tagline}</p>
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
      </section>

      <section className="section">
        <div className="section-head">
          <p className="kicker">服務項目</p>
          <h2>五條服務線，從土地接到資產。</h2>
          <p className="section-desc">
            每一條線都對應真實開發現場：圖面、工地、指標與財務不再各算各的。
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
                />
                <span className="svc-card-index">{service.index}</span>
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

      <section className="section band">
        <div className="section-head light">
          <p className="kicker">工作順序</p>
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

      <section className="section cta-panel">
        <div>
          <p className="kicker">合作</p>
          <h2>說明你的基地與階段，我們回對應的服務線。</h2>
          <p>
            無論是土地盤點、圖面分析、工程主檔、永續指標或招商疊圖，都可以從一通电话開始。
          </p>
        </div>
        <Link className="btn btn-primary" href="/contact">
          前往聯絡我們
        </Link>
      </section>
    </>
  );
}
