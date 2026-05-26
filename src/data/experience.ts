export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    role: "Data, AI & Software Systems (R&D Office)",
    org: "Brainlab",
    period: "2023-present",
    summary:
      "Built and supported R&D platforms, data and analytics pipelines, system integrations, and internal AI tooling with focus on reliability and execution."
  },
  {
    role: "B.Sc. Thesis - Activation Steering in LLaDA: Localization, Generalization, and Behavioral Structure",
    org: "Technical University of Munich (TUM)",
    period: "2026",
    summary:
      "Worked on activation steering and behavioral evaluation for masked diffusion language models, with emphasis on controlled experiments and measurable behavior shifts."
  },
  {
    role: "Founder / Builder",
    org: "Crypt",
    period: "2025-2026",
    summary:
      "Designed and built an AI-assisted smart contract security platform, covering technical architecture, product direction, and iterative delivery."
  }
];
