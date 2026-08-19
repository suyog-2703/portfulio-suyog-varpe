export type ProjectStatus = "live" | "building" | "planned";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  /** One-liner used on the card */
  summary: string;
  /** Longer pitch — the problem it solves */
  description: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  year: string;
  category: "Full Stack" | "SaaS" | "E-Commerce" | "Desktop App";
  featured: boolean;
  links: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
  /** Tailwind gradient used for the card's cover block */
  accent: string;
};

/**
 * Personal projects only — no client / company work is listed here.
 *
 * `status: "building"` renders an "In Development" badge. Flip it to "live"
 * and fill in `links.demo` / `links.repo` once each project ships.
 */
export const projects: Project[] = [
  {
    slug: "shopwave",
    title: "ShopWave",
    subtitle: "Modern E-Commerce Platform",
    summary:
      "A complete storefront and admin dashboard with Stripe checkout, Redis-cached catalog and real-time order management.",
    description:
      "A production-grade e-commerce platform built to prove out the full commerce stack: product catalog, cart, secure checkout, order lifecycle and an admin back office. Designed so a small business can go from zero to selling online without stitching together five different SaaS tools.",
    highlights: [
      "Stripe Checkout with webhook-driven order fulfilment and refund handling",
      "Redis-cached product catalog and search for sub-100ms listing responses",
      "Role-based admin dashboard for inventory, orders, coupons and analytics",
      "Server-rendered product pages with generated metadata for clean SEO",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Redis", "Tailwind CSS"],
    status: "building",
    year: "2025",
    category: "E-Commerce",
    featured: true,
    links: {},
    accent: "from-violet-500/25 via-indigo-500/10 to-transparent",
  },
  {
    slug: "slotsync",
    title: "SlotSync",
    subtitle: "Appointment Booking SaaS",
    summary:
      "Multi-tenant booking system for salons, clinics and consultants — availability engine, reminders and subscription billing.",
    description:
      "A multi-tenant SaaS where any service business can publish a booking page in minutes. Each tenant gets its own branded page, staff calendars and business rules, while the platform handles slot generation, double-booking prevention, notifications and subscription billing.",
    highlights: [
      "Timezone-aware availability engine with buffer times and conflict prevention",
      "Multi-tenant data isolation with JWT auth and role-based access control",
      "Automated email confirmations and reminders through SendGrid",
      "Stripe subscription billing with tiered plans and usage limits",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "JWT / RBAC", "Stripe", "SendGrid"],
    status: "building",
    year: "2025",
    category: "SaaS",
    featured: true,
    links: {},
    accent: "from-teal-400/25 via-emerald-500/10 to-transparent",
  },
  {
    slug: "online-examination-system",
    title: "Online Examination System",
    subtitle: "Secure Assessment Platform",
    summary:
      "Desktop examination platform with authenticated student logins, timed tests, auto-grading and certificate generation.",
    description:
      "A secure examination system built for institutions to run assessments without paper. Administrators manage the question bank and exam windows; students sit timed tests with automatic submission, and results plus certificates are generated the moment an attempt closes.",
    highlights: [
      "Authenticated student login with per-attempt session tracking",
      "Timed tests with auto-submit and tamper-resistant attempt handling",
      "Automated scoring and certificate generation on completion",
      "Normalised MySQL schema for users, questions, answers and results",
    ],
    stack: ["Java", "Swing", "MySQL", "JDBC"],
    status: "live",
    year: "2023",
    category: "Desktop App",
    featured: false,
    links: {},
    accent: "from-amber-400/25 via-orange-500/10 to-transparent",
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    subtitle: "Booking & Billing Suite",
    summary:
      "Hotel front-desk application handling room availability, reservations, automated billing and guest history.",
    description:
      "A front-desk application that replaces the reservation register. Staff can see live room availability across AC and Non-AC categories, take bookings, generate itemised bills at checkout and pull up a guest's full stay history in one place.",
    highlights: [
      "Real-time availability across AC and Non-AC room categories",
      "Reservation workflow covering check-in, extension and checkout",
      "Automated itemised billing with tax and service charge calculation",
      "Guest history tracking for repeat-customer lookup",
    ],
    stack: ["Java", "Swing", "MySQL", "JDBC"],
    status: "live",
    year: "2023",
    category: "Desktop App",
    featured: false,
    links: {},
    accent: "from-sky-400/25 via-blue-500/10 to-transparent",
  },
];

export const statusMeta: Record<ProjectStatus, { label: string; className: string }> = {
  live: {
    label: "Shipped",
    className: "bg-emerald-500/12 text-emerald-400 border-emerald-500/25",
  },
  building: {
    label: "In Development",
    className: "bg-amber-500/12 text-amber-400 border-amber-500/25",
  },
  planned: {
    label: "Planned",
    className: "bg-white/6 text-[var(--text-faint)] border-[var(--border)]",
  },
};
