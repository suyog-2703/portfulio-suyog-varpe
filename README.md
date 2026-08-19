# Suyog Varpe — Freelance Portfolio

A modern, freelance-oriented portfolio built with **Next.js 15**, **React 19**,
**TypeScript**, **Tailwind CSS v4** and **Motion**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where to edit things

All copy lives in `src/data/` — you shouldn't need to touch components for
routine updates.

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, role, email, phone, socials, hero stats, nav links |
| `src/data/projects.ts` | **Project cards** — the section you'll edit most |
| `src/data/services.ts` | Freelance services + the 4-step engagement process |
| `src/data/skills.ts` | Skill groups and the scrolling tech ticker |
| `src/data/experience.ts` | Work history, education, certifications, achievements |

### Adding or updating a project

Append an entry to the `projects` array in `src/data/projects.ts`:

```ts
{
  slug: "my-project",
  title: "My Project",
  subtitle: "What it is in four words",
  summary: "One sentence for the card.",
  description: "Longer pitch — the problem it solves.",
  highlights: ["Bullet 1", "Bullet 2"],
  stack: ["Next.js", "PostgreSQL"],
  status: "building",        // "live" | "building" | "planned"
  year: "2025",
  category: "SaaS",          // Full Stack | SaaS | E-Commerce | Desktop App
  featured: true,            // true = large card, false = compact card
  links: { demo: "...", repo: "..." },
  accent: "from-violet-500/25 via-indigo-500/10 to-transparent",
}
```

- `featured: true` renders a large card with the highlights list; `false`
  renders a compact card. Keep roughly two featured projects for a balanced grid.
- While `links` is empty the card shows **"Demo coming soon"** (for `building`)
  or **"Available on request"** (for `live`). Fill in `links.demo` /
  `links.repo` once a project ships and the buttons appear automatically.

## Before you go live

- [ ] Update `socials.github` and `socials.linkedin` in `src/data/site.ts` —
      they are currently best-guess placeholders.
- [ ] Update `metadataBase` in `src/app/layout.tsx` to your real domain.
- [ ] Build the two in-development projects, then flip their `status` to `live`
      and add demo/repo links.
- [ ] Replace `public/Suyog_Varpe_Resume.pdf` whenever the résumé changes.
- [ ] Optional: add an Open Graph image at `src/app/opengraph-image.png`
      (1200×630) for link previews.

## Notes

- **Theme** — light and dark, following the system preference, with a toggle in
  the nav. The choice persists in `localStorage`; an inline script in
  `layout.tsx` applies it before paint so there's no flash.
- **Contact form** — opens the visitor's mail client with the enquiry
  pre-filled, so it works with zero configuration. To store submissions
  server-side instead, replace `handleSubmit` in `src/components/contact.tsx`
  with a `POST` to an API route (SendGrid, Resend, etc.).
- **Client work is deliberately excluded** from the projects section. The
  experience section describes that work at a capability level only, without
  naming clients or products.

## Deploy

Push to GitHub and import the repo at [vercel.com](https://vercel.com) — no
configuration needed. Any static host that supports Next.js works too.
