export type Module = {
  title: string;
  text: string;
};

/** One system module, explained the way a certification guide explains each indicator. */
export type Capability = Module & {
  icon: string;
  purpose: string;
  how: string[];
  checks: string[];
  output: string;
};

export type FlowStage = {
  title: string;
  items: string[];
};

export type WorkStep = {
  title: string;
  items: string[];
  output: string;
};

export type Faq = {
  q: string;
  a: string;
};

/** One certification or rating system covered by a service. */
export type LabelItem = {
  /** Also the page slug under /labels. */
  id: string;
  name: string;
  /** One-line summary shown on overview tiles. */
  brief: string;
  code: string;
  org: string;
  fit: string;
  logo?: string;
  /** Short text shown in place of a logo. */
  badge?: string;
};

export type LabelTopic = {
  title: string;
  text: string;
};

export type LabelStep = {
  title: string;
  items: string[];
};

export type LabelSource = {
  label: string;
  url: string;
};

/** Full label profile used for its standalone page. */
export type LabelProfile = LabelItem & {
  lead: string;
  /** Longer explanation shown under the hero facts. */
  body: string[];
  /** Rating systems, certificate types, or building categories. */
  systems?: LabelTopic[];
  criteriaTitle: string;
  criteria: LabelTopic[];
  levelsTitle?: string;
  levelRows?: LabelTopic[];
  levelsNote?: string;
  rules: string[];
  process: LabelStep[];
  validity?: string;
  faqs: Faq[];
  sources: LabelSource[];
};

export type LabelFamily = {
  title: string;
  desc: string;
  items: LabelItem[];
};

/** A regulatory or market fact that explains why the system is needed, with its source. */
export type Driver = {
  figure: string;
  title: string;
  text: string;
  source: string;
};

export type SystemShot = {
  src: string;
  alt: string;
  caption: string;
  /** Looping motion preview opened in the lightbox. */
  motion?: string;
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  summary: string;
  lead: string;
  image: string;
  imageAlt: string;
  purpose: { heading: string; text: string };
  drivers: Driver[];
  /** Certification catalog, shown as its own section when present. */
  catalog?: LabelFamily[];
  audiences: Module[];
  outcomes: Module[];
  modules: Capability[];
  architecture: {
    heading: string;
    text: string;
    stages: FlowStage[];
    notes: string[];
  };
  workflow: WorkStep[];
  faq: Faq[];
  deliverables: string[];
  boundary: string;
  systems: SystemShot[];
};
