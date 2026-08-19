"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

const budgets = ["< ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+", "Not sure yet"];

export function Contact() {
  const [budget, setBudget] = useState(budgets[1]);

  /**
   * Opens the visitor's mail client with the enquiry pre-filled. No backend or
   * third-party form service required. Swap this for a POST to an API route
   * (SendGrid / Resend) whenever you want submissions stored server-side.
   */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `Project enquiry from ${name || "your website"}`;
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Budget: ${budget}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="card relative overflow-hidden p-6 md:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)]/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--accent-2)]/12 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Pitch + direct channels */}
            <div>
              <SectionHeading
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
                <div className="mt-9 space-y-3">
                  <ContactRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={site.email}
                    href={`mailto:${site.email}`}
                  />
                  <ContactRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={site.phone}
                    href={`tel:${site.phoneHref}`}
                  />
                  <ContactRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Based in"
                    value={site.location}
                  />
                </div>

                <div className="mt-7 flex gap-2.5">
                  <SocialLink href={site.socials.github} label="GitHub">
                    <GithubIcon className="h-4 w-4" />
                  </SocialLink>
                  <SocialLink href={site.socials.linkedin} label="LinkedIn">
                    <LinkedinIcon className="h-4 w-4" />
                  </SocialLink>
                </div>
              </Reveal>
            </div>

            {/* Enquiry form */}
            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Jane Doe" required />
                  <Field label="Company" name="company" placeholder="Acme Inc. (optional)" />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                    Budget range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setBudget(option)}
                        aria-pressed={budget === option}
                        className={`rounded-lg border px-3 py-2 text-[13px] transition ${
                          budget === option
                            ? "border-[var(--accent)]/45 bg-[var(--accent)]/12 text-[var(--text)]"
                            : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What are you building, who is it for, and when do you need it live?"
                    className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[15px] text-[var(--text)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[var(--accent)]/45"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--text)] px-5 py-3.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-88 sm:w-auto"
                >
                  Send enquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="text-[13px] text-[var(--text-faint)]">
                  This opens your email client with the details filled in. Prefer to
                  write directly?{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[var(--accent-soft)] underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[15px] text-[var(--text)] outline-none transition placeholder:text-[var(--text-faint)] focus:border-[var(--accent)]/45"
      />
    </div>
  );
}

function ContactRow({
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
      <span className="min-w-0">
        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]">
          {label}
        </span>
        <span className="block truncate text-[15px] text-[var(--text)]">{value}</span>
      </span>
      {href ? (
        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[var(--text-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  const className =
    "group flex items-center gap-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 transition hover:border-[var(--border-strong)]";

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
