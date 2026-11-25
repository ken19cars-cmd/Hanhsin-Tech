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
