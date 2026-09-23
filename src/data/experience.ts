export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Software Engineer Intern",
    company: "Lumina Labs",
    companyUrl: "https://example.com",
    period: "2022 — 2023",
    bullets: [
      "Spearheaded core backend development for an enterprise workflow automation product utilizing Node.js and FastAPI.",
      "Authored modular webhook dispatcher capable of reliable retries with exponential backoff and cryptographic signature validation.",
      "Engineered high-concurrency background queues using Celery and Redis to handle asynchronous document parsing pipelines.",
      "Partnered with frontend teams to implement strict TypeScript contract types via OpenAPI generator.",
    ],
    tags: ["TypeScript", "FastAPI", "Redis", "CI/CD"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Quantum Studio",
    companyUrl: "https://example.com",
    period: "2021 — 2022",
    bullets: [
      "Built and maintained reusable component library used across 4 internal products with Storybook documentation.",
      "Led migration from legacy class components to functional React with hooks, reducing bundle size by 18%.",
      "Collaborated with design team to implement pixel-perfect UI with WCAG 2.1 AA accessibility compliance.",
    ],
    tags: ["React", "TypeScript", "Storybook", "Figma"],
  },
];
