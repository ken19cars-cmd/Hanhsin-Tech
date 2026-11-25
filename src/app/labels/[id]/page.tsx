import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LabelMark, Pipeline, SectionHead, ServiceSubnav } from "@/components/ServiceSections";
import { getLabel, labelFamilies, labels } from "@/lib/labels";
import type { LabelProfile } from "@/lib/service-types";

type Props = {
  params: Promise<{ id: string }>;
};

type Section = {
  id: string;
  label: string;
  title: string;
  desc?: string;
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
    description: `${label.tagline}${label.focus}`,
  };
}

function criteriaColumns(count: number) {
  if (count <= 5) return count;
  if (count % 4 === 0 || count === 7) return 4;
  if (count % 5 === 0) return 5;
  return 3;
}

function buildSections(label: LabelProfile): Section[] {
  const related = label.related
    .map((id) => getLabel(id))
    .filter((item): item is LabelProfile => Boolean(item));

  return [
    {
      id: "intro",
      label: "認識標章",
      title: `什麼是${/^[A-Za-z]/.test(label.name) ? " " : ""}${label.name}`,
      body: (
        <div className="lbl-intro">
          {label.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ),
    },
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
    {
      id: "levels",
      label: "等級",
      title: label.levelsTitle,
      body: (
        <table className="lbl-levels">
          <tbody>
            {label.levelRows.map((row) => (
              <tr key={row.title}>
                <th scope="row">{row.title}</th>
                <td>{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      id: "rules",
      label: "法規與獎勵",
      title: "法規要求、獎勵與市場誘因",
      desc: "實際適用條件依申請時的法規、地方自治規定與審議結論為準。",
      body: (
        <div className="lbl-rules">
          {label.incentives.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      ),
    },
    {
      id: "process",
      label: "申請流程",
      title: "申請流程與各階段工作",
      body: (
        <>
          <Pipeline stages={label.process} />
          {label.validity ? (
            <p className="lbl-validity">
              <span>效期</span>
              {label.validity}
            </p>
          ) : null}
        </>
      ),
    },
    {
      id: "support",
      label: "系統協助",
      title: "我們的系統如何協助",
      desc: "建築標章評估與分析系統把評估項目拆成可檢核的資料，從設計階段開始追蹤得分與文件。",
      body: (
        <div className="lbl-support">
          <ul>
            {label.support.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="lbl-support-actions">
            <Link className="btn btn-primary" href="/services/green">
              了解建築標章評估與分析
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              洽詢此標章
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: "related",
      label: "相關資料",
      title: "相關標章與官方資料",
      body: (
        <div className="lbl-related">
          <div className="lbl-related-cards">
            {related.map((item) => (
              <Link key={item.id} className="lbl-related-card" href={`/labels/${item.id}`}>
                <LabelMark item={item} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.brief}</small>
                </span>
              </Link>
            ))}
          </div>
          <div className="lbl-sources">
            <h3>主管機關與官方網站</h3>
            <ul>
              {label.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p>本頁內容整理自上列主管機關與發證單位公開資料，正式規定以其最新公告為準。</p>
          </div>
        </div>
      ),
    },
  ];
}

export default async function LabelPage({ params }: Props) {
  const { id } = await params;
  const label = getLabel(id);
  if (!label) notFound();

  const family = labelFamilies.find((group) => group.items.some((item) => item.id === label.id));
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
                <Link href={`/labels#label-family-${labelFamilies.indexOf(family) + 1}`}>{family.title}</Link>
              </>
            ) : null}
            <span aria-hidden="true">/</span>
            <span>{label.name}</span>
          </nav>
          <div className="lbl-hero">
            <div>
              <p className="kicker">{label.code}</p>
              <h1>{label.name}</h1>
              <p className="lede">{label.tagline}</p>
              <dl className="lbl-facts">
                <div>
                  <dt>主管／發證</dt>
                  <dd>{label.org}</dd>
                </div>
                {label.levels ? (
                  <div>
                    <dt>等級</dt>
                    <dd>{label.levels}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>適合</dt>
                  <dd>{label.fit}</dd>
                </div>
              </dl>
            </div>
            <div className="lbl-hero-mark">
              <LabelMark item={label} className="lbl-hero-logo" />
            </div>
          </div>
        </div>
      </section>

      <ServiceSubnav
        items={sections.map(({ id: sectionId, label: text }) => ({ id: sectionId, label: text }))}
        cta={{ label: "洽詢此標章", href: "/contact" }}
      />

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
          <h2 className="lbl-all-title">全部永續標章</h2>
          <div className="lbl-all">
            {labelFamilies.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/labels/${item.id}`}
                        aria-current={item.id === label.id ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
