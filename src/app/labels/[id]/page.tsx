import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LabelMark, Pipeline, SectionHead } from "@/components/ServiceSections";
import { getLabel, labelFamilies, labels } from "@/lib/labels";
import type { LabelProfile } from "@/lib/service-types";

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

function criteriaColumns(count: number) {
  if (count <= 4) return count;
  if (count % 4 === 0) return 4;
  if (count % 5 === 0) return 5;
  return 3;
}

function buildSections(label: LabelProfile): Section[] {
  const sections: Section[] = [
    {
      id: "criteria",
      label: "評估內容",
      title: label.criteriaTitle,
      body: (
        <ol className="lbl-criteria" style={{ ["--cols" as string]: criteriaColumns(label.criteria.length) }}>
          {label.criteria.map((item, index) => (
            <li key={item.title}>
              <span className="lbl-criteria-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      ),
    },
  ];

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
          <Pipeline stages={label.process} />
          {label.validity ? <p className="lbl-note">{label.validity}</p> : null}
        </>
      ),
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
              <ul className="lbl-meta">
                <li>
                  <span>主管／發證</span>
                  {label.org}
                </li>
                <li>
                  <span>適合</span>
                  {label.fit}
                </li>
              </ul>
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

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`section svc-sec lbl-sec${index % 2 === 0 ? " svc-alt" : ""}`}
        >
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
