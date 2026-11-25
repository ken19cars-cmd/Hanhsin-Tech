type IconProps = {
  name: string;
  className?: string;
};

/** Simple PPT-style line icons (no external icon pack). */
export default function PptIcon({ name, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "pmis":
      return (
        <svg {...common}>
          <rect x="8" y="10" width="32" height="28" rx="3" />
          <path d="M14 18h20M14 24h14M14 30h10" />
        </svg>
      );
    case "drawings":
      return (
        <svg {...common}>
          <path d="M10 34V14h20l8 8v12H10z" />
          <path d="M30 14v8h8" />
          <path d="M16 28h10M16 22h6" />
        </svg>
      );
    case "green":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="14" />
          <path d="M24 14v20M16 20l8 4 8-4M16 28l8-4 8 4" />
        </svg>
      );
    case "esg":
      return (
        <svg {...common}>
          <path d="M10 34V18l14-8 14 8v16" />
          <path d="M18 34V24h12v10" />
        </svg>
      );
    case "gis":
      return (
        <svg {...common}>
          <circle cx="24" cy="22" r="8" />
          <path d="M24 30v6M16 36h16" />
          <path d="M12 18c2-6 8-10 12-10s10 4 12 10" />
        </svg>
      );
    case "space":
      return (
        <svg {...common}>
          <rect x="9" y="12" width="30" height="24" rx="2" />
          <path d="M9 20h30M21 20v16M29 20v16" />
        </svg>
      );
    case "bim":
      return (
        <svg {...common}>
          <path d="M12 32l12-20 12 20H12z" />
          <path d="M18 32v-8h12v8" />
        </svg>
      );
    case "land":
      return (
        <svg {...common}>
          <path d="M10 18h28v16H10z" />
          <path d="M10 24h28M22 18v16" />
          <path d="M16 14h8l4 4" />
        </svg>
      );
    case "version":
      return (
        <svg {...common}>
          <path d="M16 14h16v20H16z" />
          <path d="M20 10h8M20 38h8M22 20h4M22 26h4M22 32h4" />
        </svg>
      );
    case "modules":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="12" height="12" rx="2" />
          <rect x="26" y="10" width="12" height="12" rx="2" />
          <rect x="10" y="26" width="12" height="12" rx="2" />
          <rect x="26" y="26" width="12" height="12" rx="2" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="10" />
          <path d="M24 14v-4M24 38v-4M14 24H10M38 24h-4M16 16l-3-3M35 35l-3-3M32 16l3-3M13 35l3-3" />
        </svg>
      );
    case "gantt":
      return (
        <svg {...common}>
          <path d="M10 14h18M10 24h26M10 34h14" />
          <circle cx="12" cy="14" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="24" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="34" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "public":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="14" />
          <path d="M10 24h28M24 10c4 4 6 8 6 14s-2 10-6 14c-4-4-6-8-6-14s2-10 6-14z" />
        </svg>
      );
    case "switch":
      return (
        <svg {...common}>
          <path d="M14 18h20M14 30h20" />
          <circle cx="30" cy="18" r="4" />
          <circle cx="18" cy="30" r="4" />
        </svg>
      );
    case "checklist":
      return (
        <svg {...common}>
          <path d="M12 14h24v24H12z" />
          <path d="M18 22l3 3 7-7M18 30h12" />
        </svg>
      );
    case "calc":
      return (
        <svg {...common}>
          <rect x="12" y="10" width="24" height="28" rx="3" />
          <path d="M18 18h12M18 26h4M26 26h4M18 32h4M26 32h4" />
        </svg>
      );
    case "gap":
      return (
        <svg {...common}>
          <path d="M12 34V14h24v20" />
          <path d="M18 28l4-8 4 5 4-10" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="14" rx="12" ry="5" />
          <path d="M12 14v10c0 2.8 5.4 5 12 5s12-2.2 12-5V14" />
          <path d="M12 24v10c0 2.8 5.4 5 12 5s12-2.2 12-5V24" />
        </svg>
      );
    case "metrics":
      return (
        <svg {...common}>
          <path d="M12 34V18M20 34V12M28 34v-8M36 34V16" />
        </svg>
      );
    case "finance":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="12" />
          <path d="M24 16v16M20 20h6a3 3 0 010 6h-4a3 3 0 000 6h8" />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <path d="M14 12h14l8 8v16H14V12z" />
          <path d="M28 12v8h8M18 26h12M18 32h8" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M10 16l10-4 8 4 10-4v24l-10 4-8-4-10 4V16z" />
          <path d="M20 12v24M28 16v24" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M10 14h28l-10 12v10l-8-4V26L10 14z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M24 10l16 8-16 8-16-8 16-8z" />
          <path d="M8 26l16 8 16-8M8 32l16 8 16-8" />
        </svg>
      );
    case "sync":
      return (
        <svg {...common}>
          <path d="M14 20a10 10 0 0116-6l4 4" />
          <path d="M34 16v8h-8" />
          <path d="M34 28a10 10 0 01-16 6l-4-4" />
          <path d="M14 32v-8h8" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="18" cy="18" r="5" />
          <circle cx="32" cy="20" r="4" />
          <path d="M9 36c1-6 5-9 9-9s8 3 9 9" />
          <path d="M27 35c1-4 3-6 6-6s5 2 6 6" />
        </svg>
      );
    case "meeting":
      return (
        <svg {...common}>
          <rect x="10" y="12" width="28" height="18" rx="2" />
          <path d="M16 19h16M16 24h10" />
          <path d="M18 30l-4 6M30 30l4 6" />
        </svg>
      );
    case "curve":
      return (
        <svg {...common}>
          <path d="M10 38h28M10 38V10" />
          <path d="M12 36c6 0 8-2 11-10s6-12 13-13" />
        </svg>
      );
    case "co2":
      return (
        <svg {...common}>
          <path d="M14 32a8 8 0 01-1-16 10 10 0 0119-2 7 7 0 012 14H14z" />
          <path d="M19 24h3M27 22v4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="12" />
          <path d="M24 18v12M18 24h12" />
        </svg>
      );
  }
}

export const serviceIcons: Record<string, string> = {
  pmis: "pmis",
  drawings: "drawings",
  green: "green",
  esg: "esg",
  gis: "gis",
};

export const pptColors = ["#5f9134", "#2e7d6b", "#86ad45", "#c58b2c", "#3e6e2c", "#3f7f86"];
