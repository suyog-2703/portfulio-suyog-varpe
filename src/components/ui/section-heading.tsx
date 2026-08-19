import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "text-center" : ""}>
      <div
        className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--accent)]" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-soft)]">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-muted)] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
