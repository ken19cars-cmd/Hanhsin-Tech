import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LabelAssessForm from "@/components/LabelAssessForm";
import { LabelMark } from "@/components/ServiceSections";
import { getAssessment } from "@/lib/labels/assessments";
import { getLabel, labels } from "@/lib/labels";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return labels.map((label) => ({ id: label.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const label = getLabel(id);
  if (!label) return {};
  return {
    title: `${label.name}評估表`,
    description: `${label.name}的試算表，依公開評分規則填入參數或檢核項目。`,
  };
}

export default async function LabelAssessPage({ params }: Props) {
  const { id } = await params;
  const label = getLabel(id);
  const spec = getAssessment(id);
  if (!label || !spec) notFound();

  return (
    <section className="section as-page">
      <div className="shell">
        <nav className="lbl-crumbs" aria-label="麵包屑">
          <Link href="/labels">永續標章</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/labels/${label.id}`}>{label.name}</Link>
          <span aria-hidden="true">/</span>
          <span>評估表</span>
        </nav>
        <header className="as-head">
          <div className="as-mark">
            <LabelMark item={label} className="as-logo" />
          </div>
          <div>
            <p className="kicker">{label.code}</p>
            <h1>{label.name}評估表</h1>
            <p className="lede">{spec.basis}</p>
          </div>
        </header>
        <LabelAssessForm id={label.id} />
      </div>
    </section>
  );
}
