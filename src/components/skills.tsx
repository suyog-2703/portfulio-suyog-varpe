import { skillGroups } from "@/data/skills";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Toolkit"
          title={
            <>
              The stack I{" "}
              <span className="text-[var(--text-faint)]">reach for</span>
            </>
          }
          description="Technologies I use in production — chosen because they solve the problem, not because they trend well."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.06}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <div className="card h-full p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[var(--text-faint)]">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-1.5 text-sm text-[var(--text-muted)]">
                  {group.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[13px] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/35 hover:text-[var(--text)]"
                    >
                      {skill}
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
