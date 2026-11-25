import Link from "next/link";
import PptIcon, { pptColors } from "@/components/PptIcons";
import type {
  Capability,
  Driver,
  Faq,
  FlowStage,
  LabelFamily,
  LabelItem,
  Module,
  WorkStep,
} from "@/lib/site";

type HeadProps = {
  num: string;
  label: string;
  title: string;
  desc?: string;
};

export function SectionHead({ num, label, title, desc }: HeadProps) {
  return (
    <div className="svc-head">
      <p className="svc-eyebrow">
        <span className="svc-num">{num}</span>
        <span className="svc-rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2>{title}</h2>
      {desc ? <p className="section-desc">{desc}</p> : null}
    </div>
  );
}

export type SubnavItem = { id: string; label: string };

export function ServiceSubnav({
  items,
  cta = { label: "洽詢此系統", href: "/contact" },
}: {
  items: SubnavItem[];
  cta?: { label: string; href: string };
}) {
  return (
    <nav className="svc-subnav" aria-label="本頁導覽">
      <div className="shell svc-subnav-inner">
        <div className="svc-subnav-links">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <Link className="btn btn-primary svc-subnav-cta" href={cta.href}>
          {cta.label}
        </Link>
      </div>
    </nav>
  );
}

export function LabelMark({ item, className = "label-logo" }: { item: LabelItem; className?: string }) {
  if (item.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={className} src={item.logo} alt={`${item.name}標誌`} />;
  }
  const text = item.badge ?? item.name;
  const isLong = Math.max(...text.split("\n").map((line) => line.length)) > 4;
  return (
    <span className={`label-badge${isLong ? " is-long" : ""}`} aria-hidden="true">
      {text}
    </span>
  );
}

export function LabelCatalog({ families }: { families: LabelFamily[] }) {
  return (
    <div className="label-catalog">
      <nav className="label-index" aria-label="標章分類">
        {families.map((family, index) => (
          <a key={family.title} href={`#label-family-${index + 1}`}>
            {family.title}
            <span>{family.items.length}</span>
          </a>
        ))}
      </nav>
      {families.map((family, index) => (
        <section key={family.title} id={`label-family-${index + 1}`} className="label-family">
          <header>
            <h3>{family.title}</h3>
            <p>{family.desc}</p>
          </header>
          <div className="label-tiles">
            {family.items.map((item) => (
              <Link key={item.id} id={item.id} className="label-tile" href={`/labels/${item.id}`}>
                <span className="label-tile-mark">
                  <LabelMark item={item} className="label-tile-logo" />
                </span>
                <strong>{item.name}</strong>
                <small>{item.brief}</small>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function DriverGrid({ items }: { items: Driver[] }) {
  return (
    <div className="driver-grid">
      {items.map((item) => (
        <article key={item.title} className="driver">
          <strong className="driver-figure">{item.figure}</strong>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <p className="driver-source">
            <span>依據</span>
            {item.source}
          </p>
        </article>
      ))}
    </div>
  );
}

export function AudienceGrid({ items }: { items: Module[] }) {
  return (
    <div className="audience-grid">
      {items.map((item) => (
        <article key={item.title}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function CapabilityDetail({ item, index }: { item: Capability; index: number }) {
  const color = pptColors[index % pptColors.length];
  return (
    <article
      id={`cap-${index + 1}`}
      className="cap"
      style={{ ["--ppt" as string]: color }}
    >
      <header className="cap-head">
        <span className="cap-node">
          <PptIcon name={item.icon} className="ppt-flow-icon" />
        </span>
        <div>
          <span className="cap-step">模組 {String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </header>
      <div className="cap-body">
        <div className="cap-main">
          <h4>目的</h4>
          <p>{item.purpose}</p>
          <h4>運作方式</h4>
          <ol className="cap-how">
            {item.how.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <aside className="cap-side">
          <div className="cap-box">
            <h4>檢核重點</h4>
            <ul>
              {item.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </div>
          <div className="cap-box cap-output">
            <h4>產出</h4>
            <p>{item.output}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}

export function Pipeline({ stages }: { stages: FlowStage[] }) {
  return (
    <ol className="pipeline">
      {stages.map((stage, index) => (
        <li
          key={stage.title}
          className="pipe-stage"
          style={{ ["--ppt" as string]: pptColors[index % pptColors.length] }}
        >
          <div className="pipe-head">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {stage.title}
          </div>
          <ul>
            {stage.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function WorkflowSteps({ steps }: { steps: WorkStep[] }) {
  return (
    <ol className="workflow">
      {steps.map((step, index) => (
        <li key={step.title} className="workflow-step">
          <span className="workflow-num">{String(index + 1).padStart(2, "0")}</span>
          <div className="workflow-body">
            <h3>{step.title}</h3>
            <ul>
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="workflow-output">
            <span>您會拿到</span>
            {step.output}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
