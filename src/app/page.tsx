import Image from "next/image";
import Link from "next/link";
import {
  advantages,
  capabilities,
  company,
  platformStages,
  services,
  valueProps,
} from "@/lib/site";

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
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              {company.group}旗下｜{company.tagline}
            </p>
            <h1>讓開發案的數據，變成您敢拿去談的決策</h1>
            <p className="lede">
              {company.nameEn}{" "}
              以應用系統協助不動產分析、策略整理與資產評鑑準備——從土地條件、工程進度、綠建築標章到企業
              ESG，把分散的事實收成可追蹤、可對外說明的工作底圖。
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                預約了解系統
              </Link>
              <Link className="btn btn-ghost" href="/services">
                瀏覽服務項目
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="kicker">您最在意的結果</p>
            <h2>為什麼開發案主與企業會需要這套做法</h2>
            <p className="section-desc">
              不是多一個報表系統，而是讓分析、策略與評鑑用同一組可驗證的事實說話。
            </p>
          </div>
          <div className="value-grid">
            {valueProps.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="kicker">服務項目</p>
            <h2>依您的案件節奏，選擇先啟動的模組</h2>
            <p className="section-desc">
              營建管理、建築規劃、標章評估、ESG 與資產評價、地理資訊加值——可單點切入，也可串成全流程。
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
                  <span className="svc-card-go">了解如何幫到您</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell band-inner">
          <div className="section-head light">
            <p className="kicker">專業範疇</p>
            <h2>從土地到永續指標，支援您一次對齊</h2>
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

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="kicker">系統如何運作</p>
            <h2>四個步驟，把永續與開發資料變成可決策資訊</h2>
            <p className="section-desc">
              參考企業永續治理常見節奏，結合不動產開發現場需求重新設計——內容與介面皆為我們自有應用。
            </p>
          </div>
          <ol className="stage-list">
            {platformStages.map((item) => (
              <li key={item.step}>
                <span className="stage-num">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="kicker">選擇我們的理由</p>
            <h2>應用系統帶來的實質優勢</h2>
            <p className="section-desc">
              透過翰欣的應用系統，協助您分析不動產、整理策略方向，並提升資產評鑑與對外溝通的說服力。
            </p>
          </div>
          <div className="advantage-grid">
            {advantages.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <p className="kicker">下一步</p>
              <h2>想先討論您手上的案件？</h2>
              <p>
                告訴我們您最急的是標章準備、ESG
                揭露、資產評價還是工程督導。我們會依案件現況建議最適合的啟動方式，並說明系統能幫您省下哪些對齊成本。
              </p>
            </div>
            <div className="cta-actions">
              <Link className="btn btn-primary" href="/contact">
                聯絡我們
              </Link>
              <Link className="btn btn-ghost" href="/services/esg">
                先看 ESG 與資產評價
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
