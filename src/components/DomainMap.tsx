import PptIcon, { pptColors } from "@/components/PptIcons";
import { focusAreas } from "@/lib/site";

const focusIcons = ["land", "finance", "pmis", "bim", "green", "gis"];

export default function DomainMap() {
  return (
    <div className="ppt-domain" aria-label="核心業務領域">
      {focusAreas.map((item, index) => {
        const color = pptColors[index % pptColors.length];
        return (
          <article key={item.title} className="ppt-domain-card">
            <span className="ppt-domain-node" style={{ ["--ppt" as string]: color }}>
              <PptIcon name={focusIcons[index] ?? "modules"} className="ppt-flow-icon" />
            </span>
            {index < focusAreas.length - 1 ? (
              <span className="ppt-domain-arrow" aria-hidden="true">
                ›
              </span>
            ) : null}
            <h3>
              <span>{String(index + 1).padStart(2, "0")}. </span>
              {item.title}
            </h3>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
