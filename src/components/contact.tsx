import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="card relative overflow-hidden p-6 md:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)]/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--accent-2)]/12 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title={
                <>
                  Have a project{" "}
                  <span className="text-[var(--text-faint)]">in mind?</span>
                </>
              }
              description="Tell me what you're building and I'll come back within 24 hours with honest feedback on scope, timeline and cost — even if I'm not the right fit."
            />

            <Reveal delay={0.1}>
              <div className="mt-9 flex justify-center">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-5 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-88"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <ContactCard
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <ContactCard
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phoneHref}`}
                />
                <ContactCard
                  icon={<MapPin className="h-4 w-4" />}
                  label="Based in"
                  value={site.location}
                />
              </div>

              <div className="mt-8 flex justify-center gap-2.5">
                <SocialLink href={site.socials.github} label="GitHub">
                  <GithubIcon className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={site.socials.linkedin} label="LinkedIn">
                  <LinkedinIcon className="h-4 w-4" />
                </SocialLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--accent-soft)]">
        {icon}
      </span>
      <span className="mt-3.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]">
        {label}
      </span>
      <span className="mt-1.5 flex items-center justify-center gap-1 text-[15px] text-[var(--text)]">
        <span className="break-words">{value}</span>
        {href ? (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : null}
      </span>
    </>
  );

  const className =
    "group flex h-full flex-col items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-center transition hover:border-[var(--border-strong)]";

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:border-[var(--accent)]/45 hover:text-[var(--text)]"
    >
      {children}
    </a>
  );
}
