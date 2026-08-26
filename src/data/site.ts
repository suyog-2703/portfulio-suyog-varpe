/**
 * Single source of truth for personal details.
 * Update the social URLs below — they are best-guess placeholders.
 */
export const site = {
  name: "Suyog Varpe",
  fullName: "Suyog Subhash Varpe",
  role: "Full Stack Developer",
  tagline: "I build fast, secure web products — end to end.",
  location: "Pune, Maharashtra, India",
  email: "suyogvarpe07@gmail.com",
  phone: "+91 7666708970",
  phoneHref: "+917666708970",
  resumeUrl: "/Suyog_Varpe_Resume.pdf",
  photo: "/suyog-varpe.jpeg",
  availableForWork: true,
  yearsExperience: "2+",

  intro:
    "Full Stack Developer with 2+ years of professional experience building scalable web applications and high-performance APIs. I specialise in Node.js, Next.js, React and database optimisation — from authentication systems and payment flows to third-party integrations and data pipelines.",

  socials: {
    github: "https://github.com/suyogvarpe",
    linkedin: "https://www.linkedin.com/in/suyogvarpe/",
  },

  // Metrics shown in the hero strip
  stats: [
    { value: "2+", label: "Years building for production" },
    { value: "6+", label: "Products shipped end to end" },
    { value: "60%", label: "Peak DB load cut with caching" },
    { value: "<100ms", label: "Typical API response time" },
  ],
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
