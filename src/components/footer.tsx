import { ArrowUp, Mail } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] font-mono text-sm font-bold text-white">
                S
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {site.fullName}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              {site.tagline} Available for freelance and contract work worldwide.
            </p>

            <div className="mt-5 flex gap-2.5">
              <IconLink href={`mailto:${site.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>
              <IconLink href={site.socials.github} label="GitHub" external>
                <GithubIcon className="h-4 w-4" />
              </IconLink>
              <IconLink href={site.socials.linkedin} label="LinkedIn" external>
                <LinkedinIcon className="h-4 w-4" />
              </IconLink>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3 md:gap-x-14">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[var(--text-faint)]">
            © {year} {site.fullName}. Built with Next.js &amp; Tailwind CSS.
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:border-[var(--accent)]/45 hover:text-[var(--text)]"
    >
      {children}
    </a>
  );
}
