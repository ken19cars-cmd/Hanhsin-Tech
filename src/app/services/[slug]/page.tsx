import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaLightbox from "@/components/MediaLightbox";
import OpenableMedia from "@/components/OpenableMedia";
import PptFlow from "@/components/PptFlow";
import {
  AudienceGrid,
  CapabilityDetail,
  FaqList,
  Pipeline,
  SectionHead,
  ServiceSubnav,
  WorkflowSteps,
} from "@/components/ServiceSections";
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
    <>
      <section className="section service-detail">
        <div className="shell">
          <div className="service-hero">
            <div>
              <p className="kicker">服務項目 {service.index}</p>
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
        </div>
      </section>

      <ServiceSubnav />

      <section id="purpose" className="section svc-sec">
        <div className="shell">
          <SectionHead
            num="01"
            label="系統目的"
            title={service.purpose.heading}
            desc={service.purpose.text}
          />
          <div className="outcome-strip">
            {service.outcomes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <h3 className="svc-subhead">適用對象</h3>
          <AudienceGrid items={service.audiences} />
        </div>
      </section>

      <section id="features" className="section svc-sec svc-alt">
        <div className="shell">
          <SectionHead
            num="02"
            label="功能詳解"
            title="每個模組做什麼、怎麼做"
            desc="逐一說明各模組要解決的問題、系統的運作方式、檢核重點與產出。點選下方流程圖可直接跳到該模組。"
          />
          <PptFlow
            aria-label={`${service.title}模組總覽`}
            items={service.modules.map((module, index) => ({
              title: module.title,
              text: module.text,
              icon: module.icon,
              href: `#cap-${index + 1}`,
            }))}
          />
          <div className="cap-list">
            {service.modules.map((module, index) => (
              <CapabilityDetail key={module.title} item={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="section svc-sec">
        <div className="shell">
          <SectionHead
            num="03"
            label="系統架構"
            title={service.architecture.heading}
            desc={service.architecture.text}
          />
          <Pipeline stages={service.architecture.stages} />
          <ul className="arch-notes">
            {service.architecture.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="screens" className="section svc-sec svc-alt">
        <div className="shell">
          <SectionHead num="04" label="畫面示意" title="實際工作介面參考" />
          <MediaLightbox
            items={service.systems.map((shot) => ({
              src: shot.src,
              alt: shot.alt,
              caption: shot.caption,
              motion: shot.motion,
            }))}
          />
        </div>
      </section>

      <section id="process" className="section svc-sec">
        <div className="shell">
          <SectionHead
            num="05"
            label="導入流程"
            title="工作流程與各階段交付"
            desc="每個階段的工作內容，以及該階段結束時交付的成果。"
          />
          <WorkflowSteps steps={service.workflow} />
        </div>
      </section>

      <section id="faq" className="section svc-sec svc-alt">
        <div className="shell">
          <SectionHead num="06" label="常見問題" title="客戶常問的問題" />
          <FaqList items={service.faq} />
        </div>
      </section>

      <section className="section svc-sec">
        <div className="shell">
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
    </>
  );
}
