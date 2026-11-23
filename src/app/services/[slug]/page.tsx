import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <section className="section service-detail">
      <div className="shell">
        <div className="service-hero">
          <div>
            <p className="kicker">服務項目</p>
            <h1>{service.title}</h1>
            <p className="lede">{service.lead}</p>
            <div className="hero-actions service-hero-actions">
              <Link className="btn btn-primary" href="/contact">
                諮詢此服務
              </Link>
              <Link className="btn btn-ghost" href="/services">
                全部服務
              </Link>
            </div>
          </div>
          <div className="service-hero-media">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              priority
              unoptimized={service.image.endsWith(".svg") || service.image.endsWith(".png")}
            />
          </div>
        </div>

        {service.outcomes && service.outcomes.length > 0 ? (
          <div className="detail-block">
            <div className="section-head left">
              <p className="kicker">對您的價值</p>
              <h2>這項服務能幫您做到什麼</h2>
            </div>
            <div className="value-grid">
              {service.outcomes.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {service.stages && service.stages.length > 0 ? (
          <div className="detail-block">
            <div className="section-head left">
              <p className="kicker">導入節奏</p>
              <h2>如何把資料變成可決策資訊</h2>
            </div>
            <ol className="stage-list">
              {service.stages.map((item, index) => (
                <li key={item.title}>
                  <span className="stage-num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <div className="detail-block">
          <div className="section-head left">
            <p className="kicker">功能重點</p>
            <h2>系統與顧問怎麼支援您</h2>
          </div>
          <div className="module-grid">
            {service.modules.map((module) => (
              <article key={module.title}>
                <h2>{module.title}</h2>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>

        {service.systems.length > 0 ? (
          <div className="system-gallery">
            <div className="section-head left">
              <p className="kicker">畫面示意</p>
              <h2>實際工作介面與成果參考</h2>
            </div>
            <div className="system-grid">
              {service.systems.map((shot) => (
                <figure key={shot.src} className="system-card">
                  <div className="system-card-media">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      unoptimized={shot.src.endsWith(".svg") || shot.src.endsWith(".png")}
                    />
                  </div>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        <div className="deliver">
          <div>
            <h2>您會拿到什麼</h2>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>使用說明</h2>
            <p>{service.boundary}</p>
            <Link className="btn btn-primary" href="/contact">
              想用於自家案件？聯絡我們
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
