import { focusAreas } from "@/lib/site";

const accents = ["#0ea5c9", "#128f7a", "#2b84ab", "#1d7fbf", "#0f9f8f", "#2478b5"];

export default function DomainMap() {
  return (
    <div className="domain-board" aria-label="核心業務領域定位圖">
      <div className="domain-board-spine" aria-hidden="true">
        <div className="domain-board-core">
          <strong>系統應用</strong>
          <span>土地 · 工程 · 永續</span>
        </div>
      </div>

      <div className="domain-board-grid">
        {focusAreas.map((item, index) => (
          <article
            key={item.title}
            className="domain-chip"
            style={{ ["--accent" as string]: accents[index % accents.length] }}
          >
            <header>
              <span className="domain-chip-num">{String(index + 1).padStart(2, "0")}</span>
              <i aria-hidden="true" />
            </header>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
