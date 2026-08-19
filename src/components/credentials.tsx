import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { achievements, certifications, education } from "@/data/experience";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Background"
          title={
            <>
              Education &{" "}
              <span className="text-[var(--text-faint)]">credentials</span>
            </>
          }
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Education */}
          <Reveal>
            <div className="card h-full p-6">
              <Header icon={<GraduationCap className="h-4 w-4" />} title="Education" />

              <div className="mt-5 space-y-5">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="border-l border-[var(--border-strong)] pl-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-[15px] font-medium leading-snug">
                        {item.degree}
                      </h4>
                      <span className="shrink-0 font-mono text-xs text-[var(--accent-2)]">
                        {item.score}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-muted)]">
                      {item.institution}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-[var(--text-faint)]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.07}>
            <div className="card h-full p-6">
              <Header icon={<BadgeCheck className="h-4 w-4" />} title="Certifications" />

              <div className="mt-5 space-y-5">
                {certifications.map((item) => (
                  <div
                    key={item.title}
                    className="border-l border-[var(--border-strong)] pl-4"
                  >
                    <h4 className="text-[15px] font-medium leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-[13px] text-[var(--text-muted)]">
                      {item.issuer}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-[var(--text-faint)]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.14}>
            <div className="card h-full p-6">
              <Header icon={<Award className="h-4 w-4" />} title="Achievements" />

              <ul className="mt-5 space-y-4">
                {achievements.map((item) => (
                  <li
                    key={item.title}
                    className="border-l border-[var(--border-strong)] pl-4"
                  >
                    <p className="text-[15px] font-medium leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] text-[var(--text-faint)]">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Header({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--accent-soft)]">
        {icon}
      </span>
      <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
        {title}
      </h3>
    </div>
  );
}
