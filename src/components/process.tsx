import { processSteps } from "@/data/services";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How I work"
          title={
            <>
              A process built to remove{" "}
              <span className="text-[var(--text-faint)]">surprises</span>
            </>
          }
          description="Most project failures come from unclear scope and silence between updates. Here is how I avoid both."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="card relative h-full p-6">
                <span className="font-mono text-3xl font-semibold tracking-tight text-[var(--text)]/12">
                  {step.step}
                </span>

                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>

                {/* Connector between steps on wide screens */}
                {i < processSteps.length - 1 ? (
                  <span className="absolute right-0 top-1/2 hidden h-px w-4 translate-x-full bg-gradient-to-r from-[var(--border-strong)] to-transparent lg:block" />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
