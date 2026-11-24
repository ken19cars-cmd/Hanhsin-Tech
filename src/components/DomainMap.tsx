import { focusAreas } from "@/lib/site";

const positions = [
  "domain-n",
  "domain-ne",
  "domain-se",
  "domain-s",
  "domain-sw",
  "domain-nw",
] as const;

export default function DomainMap() {
  return (
    <div className="domain-map" aria-label="核心業務領域定位圖">
      <svg className="domain-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="domainStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9fd4ea" />
            <stop offset="100%" stopColor="#2b84ab" />
          </linearGradient>
        </defs>
        {[
          [50, 18],
          [78, 32],
          [78, 68],
          [50, 82],
          [22, 68],
          [22, 32],
        ].map(([x, y], index) => (
          <line
            key={positions[index]}
            x1="50"
            y1="50"
            x2={x}
            y2={y}
            stroke="url(#domainStroke)"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.1"
          />
        ))}
        <circle cx="50" cy="50" r="14" fill="none" stroke="#cfeaf6" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="#e8f5fb" strokeWidth="0.35" />
      </svg>

      <div className="domain-hub">
        <span className="domain-hub-kicker">SYSTEM CORE</span>
        <strong>系統應用</strong>
        <p>土地 × 工程 × 永續</p>
      </div>

      {focusAreas.map((item, index) => (
        <article key={item.title} className={`domain-node ${positions[index]}`}>
          <span className="domain-node-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
