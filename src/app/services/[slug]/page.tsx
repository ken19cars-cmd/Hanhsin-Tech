import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import MediaLightbox from "@/components/MediaLightbox";
import OpenableMedia from "@/components/OpenableMedia";
import PptFlow from "@/components/PptFlow";
import {
  AudienceGrid,
  CapabilityDetail,
  DriverGrid,
  FaqList,
  LabelCatalog,
  Pipeline,
  SectionHead,
  ServiceSubnav,
  WorkflowSteps,
} from "@/components/ServiceSections";
import { getService, mediaMotion, services, type Service } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

type Section = {
  id: string;
  label: string;
  title: string;
  desc?: string;
  body: ReactNode;
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

function buildSections(service: Service): Section[] {
  const sections: Section[] = [
    {
      id: "purpose",
      label: "為什麼需要",
      title: service.purpose.heading,
      desc: service.purpose.text,
      body: (
        <>
          <h3 className="svc-subhead">法規與趨勢</h3>
          <DriverGrid items={service.drivers} />
          <h3 className="svc-subhead">導入後的改變</h3>
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
        </>
      ),
    },
  ];

  if (service.catalog?.length) {
    const count = service.catalog.reduce((sum, family) => sum + family.items.length, 0);
    sections.push({
      id: "catalog",
      label: "標章總覽",
      title: `國內外 ${count} 種建築標章與評級`,
      desc: "每一種標章的目的、評估重點、等級與適合的對象。系統已將這些標章拆成可檢核的評估項目，可依案件需要組合申請。",
      body: <LabelCatalog families={service.catalog} />,
    });
  }

  sections.push(
    {
      id: "features",
      label: "功能詳解",
      title: "每個模組做什麼、怎麼做",
      desc: "逐一說明各模組要解決的問題、系統的運作方式、檢核重點與產出。點選下方流程圖可直接跳到該模組。",
      body: (
        <>
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
        </>
      ),
    },
    {
      id: "architecture",
      label: "系統架構",
      title: service.architecture.heading,
      desc: service.architecture.text,
      body: (
        <>
          <Pipeline stages={service.architecture.stages} />
          <ul className="arch-notes">
            {service.architecture.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "screens",
      label: "畫面示意",
      title: "實際工作介面參考",
      body: (
        <MediaLightbox
          items={service.systems.map((shot) => ({
            src: shot.src,
            alt: shot.alt,
            caption: shot.caption,
            motion: shot.motion,
          }))}
        />
      ),
    },
    {
      id: "process",
      label: "導入流程",
      title: "工作流程與各階段交付",
      desc: "每個階段的工作內容，以及該階段結束時交付的成果。",
      body: <WorkflowSteps steps={service.workflow} />,
    },
    {
      id: "faq",
      label: "常見問題",
      title: "客戶常問的問題",
      body: <FaqList items={service.faq} />,
    },
  );

  return sections;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const sections = buildSections(service);

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

      <ServiceSubnav items={sections.map(({ id, label }) => ({ id, label }))} />

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section svc-sec${index % 2 === 1 ? " svc-alt" : ""}`}
        >
          <div className="shell">
            <SectionHead
              num={String(index + 1).padStart(2, "0")}
              label={section.label}
              title={section.title}
              desc={section.desc}
            />
            {section.body}
          </div>
        </section>
      ))}

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
