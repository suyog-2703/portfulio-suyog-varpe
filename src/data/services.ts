export type Service = {
  title: string;
  description: string;
  icon: "layers" | "plug" | "database" | "credit-card" | "gauge" | "workflow";
  deliverables: string[];
};

/** Freelance offering — what a client can actually hire me to do. */
export const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end product builds on Next.js and Node.js — from the first wireframe to a deployed, monitored application.",
    icon: "layers",
    deliverables: ["Next.js / React frontends", "Node.js backends", "Responsive UI", "Deployment"],
  },
  {
    title: "API Design & Integration",
    description:
      "Clean, documented REST APIs and reliable third-party integrations that hold up under real traffic.",
    icon: "plug",
    deliverables: ["RESTful APIs", "Public & private endpoints", "Webhooks", "Schema validation"],
  },
  {
    title: "Database Design & Optimisation",
    description:
      "Schemas that stay fast as they grow, plus targeted tuning when existing queries have become the bottleneck.",
    icon: "database",
    deliverables: ["PostgreSQL / MySQL", "Prisma ORM", "Query tuning", "Table-valued functions"],
  },
  {
    title: "Auth & Payment Systems",
    description:
      "Secure sign-in and money movement — the two areas where getting it wrong is most expensive.",
    icon: "credit-card",
    deliverables: ["Auth0 / JWT / OAuth 2.0", "Role-based access", "Stripe billing", "Webhooks"],
  },
  {
    title: "Performance Optimisation",
    description:
      "Find what is slow, prove it with numbers, then fix it — caching, indexing and search that measurably move response times.",
    icon: "gauge",
    deliverables: ["Redis caching", "Typesense search", "Query profiling", "Load reduction"],
  },
  {
    title: "Automation & Data Pipelines",
    description:
      "Recurring manual work turned into scheduled, validated pipelines you can trust and audit.",
    icon: "workflow",
    deliverables: ["Python ETL", "Apache Airflow", "AWS S3 / DynamoDB", "Data validation"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

/** How an engagement runs — sets expectations before the first call. */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We talk through the problem, users and constraints. I come back with scope, a realistic timeline and a fixed quote — no surprises later.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Data model, API contracts and tech choices agreed up front. This is where most projects are quietly won or lost.",
  },
  {
    step: "03",
    title: "Build & Review",
    description:
      "Weekly demos on a live staging URL. You see progress continuously and can redirect early instead of at handover.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Deployment, documentation and a handover walkthrough — plus a support window so you are not left alone after go-live.",
  },
];
