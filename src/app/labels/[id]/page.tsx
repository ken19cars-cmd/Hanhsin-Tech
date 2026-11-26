import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { FaqList, LabelMark, SectionHead, ServiceSubnav } from "@/components/ServiceSections";
import { getLabel, labelFamilies, labels } from "@/lib/labels";
import type { LabelProfile, LabelTopic } from "@/lib/service-types";

function splitScore(title: string) {
  const mark = title.indexOf("｜");
  if (mark === -1) return { name: title, score: "" };
  return { name: title.slice(0, mark).trim(), score: title.slice(mark + 1).trim() };
}

function SpecGrid({ items }: { items: LabelTopic[] }) {
  return (
    <ol className="lbl-spec">
      {items.map((item, index) => {
        const { name, score } = splitScore(item.title);
        return (
          <li key={item.title}>
            <div className="lbl-spec-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{name}</h3>
              {score ? <em>{score}</em> : null}
            </div>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ol>
  );
}

type Props = {
  params: Promise<{ id: string }>;
};

type Section = {
  id: string;
  label: string;
  title: string;
  body: ReactNode;
};

export function generateStaticParams() {
  return labels.map((label) => ({ id: label.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const label = getLabel(id);
  if (!label) return {};
  return {
    title: label.name,
    description: label.lead,
  };
}

function buildSections(label: LabelProfile): Section[] {
  const sections: Section[] = [
    {
      id: "about",
      label: "制度說明",
      title: "這套制度在評什麼",
      body: (
        <div className="lbl-prose">
          {label.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ),
    },
  ];

  if (label.systems?.length) {
    sections.push({
      id: "systems",
      label: "申請種類",
      title: "依建築階段或類型選擇",
      body: <SpecGrid items={label.systems} />,
    });
  }

  sections.push({
      id: "criteria",
      label: "評估內容",
      title: label.criteriaTitle,
      body: <SpecGrid items={label.criteria} />,
    });

  if (label.levelRows?.length) {
    sections.push({
      id: "levels",
      label: "等級",
      title: label.levelsTitle ?? "等級",
      body: (
        <>
          <ol className="lbl-levels">
            {label.levelRows.map((row) => (
              <li key={row.title}>
                <strong>{row.title}</strong>
                {row.text ? <span>{row.text}</span> : null}
              </li>
            ))}
          </ol>
          {label.levelsNote ? <p className="lbl-note">{label.levelsNote}</p> : null}
        </>
      ),
    });
  }

  sections.push(
    {
      id: "rules",
      label: "法規與獎勵",
      title: "法規與獎勵",
      body: (
        <ul className="lbl-rules">
          {label.rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      ),
    },
    {
      id: "process",
      label: "申請流程",
      title: "申請流程",
      body: (
        <>
          <ol className="lbl-flow">
            {label.process.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <ul>
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          {label.validity ? <p className="lbl-note">{label.validity}</p> : null}
        </>
      ),
    },
    {
      id: "faq",
      label: "常見問題",
      title: "申請前常確認的事",
      body: <FaqList items={label.faqs} />,
    },
  );

  return sections;
}

export default async function LabelPage({ params }: Props) {
  const { id } = await params;
  const label = getLabel(id);
  if (!label) notFound();

  const familyIndex = labelFamilies.findIndex((group) => group.items.some((item) => item.id === label.id));
  const family = labelFamilies[familyIndex];
  const sections = buildSections(label);

  return (
    <>
      <section className="section lbl-hero-sec">
        <div className="shell">
          <nav className="lbl-crumbs" aria-label="麵包屑">
            <Link href="/labels">永續標章</Link>
            {family ? (
              <>
                <span aria-hidden="true">/</span>
                <Link href={`/labels#label-family-${familyIndex + 1}`}>{family.title}</Link>
              </>
            ) : null}
          </nav>
          <div className="lbl-hero">
            <div className="lbl-hero-mark">
              <LabelMark item={label} className="lbl-hero-logo" />
            </div>
            <div>
              <p className="kicker">{label.code}</p>
              <h1>{label.name}</h1>
              <p className="lede">{label.lead}</p>
              <dl className="lbl-facts">
                <div>
                  <dt>主管／發證</dt>
                  <dd>{label.org}</dd>
                </div>
                <div>
                  <dt>適合對象</dt>
                  <dd>{label.fit}</dd>
                </div>
              </dl>
              <div className="hero-actions">
                <Link className="btn btn-primary" href={`/labels/${label.id}/assess`}>
                  填寫評估表
                </Link>
                <Link className="btn btn-ghost" href="/contact">
                  洽詢此標章
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSubnav
        items={sections.map(({ id: sectionId, label: text }) => ({ id: sectionId, label: text }))}
        cta={{ label: "填寫評估表", href: `/labels/${label.id}/assess` }}
      />

      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="section svc-sec lbl-sec">
          <div className="shell">
            <SectionHead num={String(index + 1).padStart(2, "0")} label={section.label} title={section.title} />
            {section.body}
          </div>
        </section>
      ))}

      <section className="section svc-sec lbl-sec">
        <div className="shell lbl-foot">
          <div>
            <h2>官方資料</h2>
            <ul className="lbl-sources">
              {label.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>其他永續標章</h2>
            <ul className="lbl-all">
              {labels
                .filter((item) => item.id !== label.id)
                .map((item) => (
                  <li key={item.id}>
                    <Link href={`/labels/${item.id}`}>{item.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
