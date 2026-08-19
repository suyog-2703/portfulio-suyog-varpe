export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  /**
   * Capability-level highlights only — deliberately no client or product
   * names, since that work is covered by confidentiality.
   */
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Coditude Private Limited",
    location: "Pune, India",
    period: "Feb 2024 — Present",
    current: true,
    summary:
      "Lead backend architecture and full-stack delivery across multi-tenant SaaS products, high-traffic search platforms and automated data pipelines.",
    highlights: [
      "Led backend architecture for a multi-tenant SaaS platform, defining the core API and data model",
      "Built complete authentication systems — universal login, SSO and organisation-based role management",
      "Designed public and private APIs supporting OAuth tokens, device tokens and basic auth",
      "Integrated payment processing with subscription billing and webhook-driven reconciliation",
      "Cut database load by 60% and brought API responses under 100ms with Redis caching and query tuning",
      "Improved response times by 40% across an application through systematic API optimisation",
      "Built automated ETL pipelines in Python and Apache Airflow with checksum and schema validation",
      "Reduced development time 30% by extracting reusable service layers from duplicated logic",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "Typesense",
      "Auth0",
      "Stripe",
      "SendGrid",
      "Python",
      "Apache Airflow",
      "AWS S3",
      "DynamoDB",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  score: string;
};

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Modern Education Society's Nowrosjee Wadia College, Pune",
    period: "Sep 2022 — Apr 2024",
    score: "80.00%",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Shri Saibaba College, Shirdi",
    period: "Jun 2019 — Apr 2022",
    score: "93.86%",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  period: string;
};

export const certifications: Certification[] = [
  {
    title: "Data Structures & Algorithms with Java",
    issuer: "Apna College",
    period: "Aug 2023 — Dec 2023",
  },
  {
    title: "Python for Machine Learning & Data Science",
    issuer: "Udemy",
    period: "2022",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Bitamin",
    period: "Mar 2021",
  },
];

export type Achievement = {
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  { title: "Hack in the Dark — Winner", detail: "Modern College, Pune · Feb 2024" },
  { title: "Wisdom War — Champion", detail: "Modern College, Pune · Feb 2024" },
  { title: "Blind Coding — Winner", detail: "Modern College, Pune · Mar 2023" },
  { title: "Ramanujan Math Quiz — Winner", detail: "Saibaba College, Shirdi · Dec 2020" },
  { title: "Ideal Student Award", detail: "12th Standard · 2018–2019" },
];
