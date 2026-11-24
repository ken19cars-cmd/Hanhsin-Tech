import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaLightbox from "@/components/MediaLightbox";
import OpenableMedia from "@/components/OpenableMedia";
import { getService, mediaMotion, services } from "@/lib/site";

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
                立即洽詢
              </Link>
              <Link className="btn btn-ghost" href="/services">
                全部服務
              </Link>
            </div>
          </div>
          <div className="service-hero-media">
            <OpenableMedia
              src={service.image}
              alt={service.imageAlt}
              motion={mediaMotion(service.image)}
              sizes="(max-width: 900px) 100vw, 46vw"
              priority
            />
          </div>
        </div>

        <div className="detail-block">
          <div className="section-head left">
            <p className="kicker">功能重點</p>
            <h2>這個系統幫您處理什麼</h2>
          </div>
          <div
            className={`feature-flow${service.modules.length === 3 ? " feature-flow-3" : ""}`}
          >
            {service.modules.map((module, index) => (
              <article key={module.title} className="feature-flow-card">
                <span className="feature-flow-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>

        {service.outcomes && service.outcomes.length > 0 ? (
          <div className="detail-block">
            <div className="section-head left">
              <p className="kicker">對您的幫助</p>
              <h2>導入後可以怎麼用</h2>
            </div>
            <div className="outcome-strip">
              {service.outcomes.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {service.systems.length > 0 ? (
          <div className="system-gallery">
            <div className="section-head left">
              <p className="kicker">畫面示意</p>
              <h2>實際工作介面參考</h2>
            </div>
            <MediaLightbox
              items={service.systems.map((shot) => ({
                src: shot.src,
                alt: shot.alt,
                caption: shot.caption,
                motion: shot.motion,
              }))}
            />
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
              有需求？聯絡我們
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
