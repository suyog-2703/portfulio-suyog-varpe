export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that stay fast and readable on every screen.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Material-UI",
      "Tailwind CSS",
      "RTK Query",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    description: "APIs and services built to handle real production traffic.",
    skills: ["Node.js", "RESTful APIs", "Python", "Java", "C", "C++", "Apache Airflow"],
  },
  {
    title: "Database & ORM",
    description: "Schemas designed to stay fast as the data grows.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "MikroORM",
      "DynamoDB",
      "Table-Valued Functions",
      "Query Optimisation",
    ],
  },
  {
    title: "Auth & Security",
    description: "Sign-in and access control done properly, first time.",
    skills: ["Auth0", "JWT", "OAuth 2.0", "RBAC", "Device Tokens", "Basic Auth"],
  },
  {
    title: "Tools & Infrastructure",
    description: "The supporting cast that keeps everything shipping.",
    skills: ["Git", "GitHub", "Redis", "Typesense", "Stripe", "SendGrid", "AWS S3", "Vercel"],
  },
];

/** Flat list for the scrolling ticker. */
export const tickerSkills = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Stripe",
  "Auth0",
  "Python",
  "Java",
  "AWS",
  "Typesense",
  "Apache Airflow",
  "Tailwind CSS",
  "MySQL",
];
