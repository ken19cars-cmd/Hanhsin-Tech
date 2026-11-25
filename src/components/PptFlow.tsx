import Link from "next/link";
import PptIcon, { pptColors } from "@/components/PptIcons";

export type PptFlowItem = {
  title: string;
  text?: string;
  icon: string;
  href?: string;
};

type Props = {
  items: PptFlowItem[];
  /** When true, render as compact label-only nodes (homepage overview). */
  compact?: boolean;
  className?: string;
  "aria-label"?: string;
};

export default function PptFlow({
  items,
  compact = false,
  className = "",
  "aria-label": ariaLabel = "流程圖",
}: Props) {
  return (
    <div
      className={`ppt-flow${compact ? " ppt-flow-compact" : ""} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {items.map((item, index) => {
        const color = pptColors[index % pptColors.length];
        const body = (
          <>
            <span className="ppt-flow-node" style={{ ["--ppt" as string]: color }}>
              <PptIcon name={item.icon} className="ppt-flow-icon" />
            </span>
            <span className="ppt-flow-label">
              {!compact ? (
                <span className="ppt-flow-step">{String(index + 1).padStart(2, "0")}</span>
              ) : null}
              <strong>{item.title}</strong>
              {item.text ? <span className="ppt-flow-text">{item.text}</span> : null}
            </span>
          </>
        );

        return (
          <div key={`${item.title}-${index}`} className="ppt-flow-item">
            {item.href ? (
              <Link href={item.href} className="ppt-flow-card">
                {body}
              </Link>
            ) : (
              <div className="ppt-flow-card">{body}</div>
            )}
            {index < items.length - 1 ? (
              <span className="ppt-flow-arrow" aria-hidden="true">
                ›
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
