import { Check } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve been{" "}
              <span className="text-[var(--text-faint)]">shipping</span>
            </>
          }
          description="Client and product names are under NDA, so what follows is the work itself — the systems I owned and the results they produced."
        />

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.08}>
              <div className="card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {job.role}
                      </h3>
                      {job.current ? (
                        <span className="rounded-full border border-emerald-500/25 bg-emerald-500/12 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                          Current
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1 text-[15px] text-[var(--accent-soft)]">
                      {job.company} · {job.location}
                    </p>
                  </div>

                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[11px] text-[var(--text-faint)]">
                    {job.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[var(--text-muted)]">
                  {job.summary}
                </p>

                <ul className="mt-6 grid gap-2.5 md:grid-cols-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-6">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 font-mono text-[11px] text-[var(--text-faint)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
