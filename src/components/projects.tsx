"use client";

import type { MouseEvent } from "react";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { GithubIcon } from "./ui/brand-icons";
import { projects, statusMeta, type Project } from "@/data/projects";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects I&apos;ve built{" "}
              <span className="text-[var(--text-faint)]">and I&apos;m building</span>
            </>
          }
          description="A mix of platforms I'm developing right now and systems I've built end to end. Client work is covered by NDA, so everything below is my own."
        />

        {/* Featured — large cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        {/* Everything else — compact cards */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-sm text-[var(--text-faint)]">
            Want to see something closer to your use case?{" "}
            <a
              href="#contact"
              className="text-[var(--accent-soft)] underline-offset-4 hover:underline"
            >
              Ask me about it
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const status = statusMeta[project.status];
  const hasLinks = Boolean(project.links.demo || project.links.repo);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article
      onMouseMove={handleMove}
      className="card spotlight group flex h-full flex-col overflow-hidden"
    >
      {/* Cover */}
      <div
        className={`relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-br ${project.accent} ${
          featured ? "h-40" : "h-28"
        }`}
      >
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-between p-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-faint)]">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-[var(--text-faint)]">
            {project.year}
          </span>
        </div>

        {featured ? (
          <p className="absolute bottom-4 left-5 text-[2.5rem] font-semibold leading-none tracking-tight text-[var(--text)]/12">
            {project.title}
          </p>
        ) : null}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          <span
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${status.className}`}
          >
            {status.label}
          </span>
        </div>

        <p className="mt-1 text-sm text-[var(--accent-soft)]">{project.subtitle}</p>

        <p className="mt-3.5 text-[15px] leading-relaxed text-[var(--text-muted)]">
          {project.summary}
        </p>

        {featured ? (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--text-muted)]"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 font-mono text-[11px] text-[var(--text-faint)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links pinned to the bottom so cards line up */}
        <div className="mt-auto flex items-center gap-4 pt-6">
          {hasLinks ? (
            <>
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] transition-opacity hover:opacity-70"
                >
                  Live demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}

              {project.links.repo ? (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source
                </a>
              ) : null}
            </>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]">
              <Lock className="h-3 w-3" />
              {project.status === "building" ? "Demo coming soon" : "Available on request"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
