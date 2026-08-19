"use client";

import type { MouseEvent } from "react";
import {
  CreditCard,
  Database,
  Gauge,
  Layers,
  Plug,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

const icons: Record<Service["icon"], LucideIcon> = {
  layers: Layers,
  plug: Plug,
  database: Database,
  "credit-card": CreditCard,
  gauge: Gauge,
  workflow: Workflow,
};

export function Services() {
  /** Drives the cursor-following border highlight. */
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I can build{" "}
              <span className="text-[var(--text-faint)]">for you</span>
            </>
          }
          description="Whether you need a product built from scratch or an existing one made faster and more reliable, these are the areas I work in every day."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];

            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div
                  onMouseMove={handleMove}
                  className="card spotlight group h-full p-6"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--accent-soft)] transition-colors group-hover:border-[var(--accent)]/35">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--text-muted)]">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 font-mono text-[11px] text-[var(--text-faint)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
