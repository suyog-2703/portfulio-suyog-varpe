"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { tickerSkills } from "@/data/skills";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* ---------------------------------------------------------- */}
          {/* Copy                                                       */}
          {/* ---------------------------------------------------------- */}
          <div>
            {site.availableForWork ? (
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[13px] font-medium text-[var(--text-muted)]">
                  Available for freelance projects
                </span>
              </motion.div>
            ) : null}

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Full Stack Developer
              <br />
              building <span className="text-gradient">fast, secure</span>
              <br />
              web products.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-[var(--text-muted)]"
            >
              I&apos;m {site.name} — {site.yearsExperience} years shipping production
              applications with Next.js, Node.js and PostgreSQL. From authentication
              and payments to caching and data pipelines, I handle the whole stack so
              you only need one developer.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-88"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface)]"
              >
                View my work
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text)]"
              >
                <Download className="h-4 w-4" />
                Résumé
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-faint)]"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </span>
              <span className="hidden h-3.5 w-px bg-[var(--border-strong)] sm:block" />
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--text)]"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--text)]"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Portrait                                                   */}
          {/* ---------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-[15rem] shrink-0 sm:w-[17rem] lg:w-[19rem]"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[var(--accent)]/25 via-transparent to-[var(--accent-2)]/20 blur-3xl" />

            {/* Concentric hairline rings */}
            <div className="absolute -inset-9 rounded-full border border-[var(--border)]" />
            <div className="absolute -inset-[1.125rem] rounded-full border border-[var(--border)]" />

            {/* Rotating gradient arc */}
            <div
              className="ring-arc spin-slow absolute -inset-1.5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, var(--accent) 80deg, var(--accent-2) 170deg, transparent 280deg)",
              }}
            />

            {/* Portrait — cropped high so the face sits centred in the circle */}
            <div className="relative aspect-square overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)]">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.fullName}`}
                fill
                priority
                sizes="(max-width: 640px) 15rem, (max-width: 1024px) 17rem, 19rem"
                className="object-cover object-[50%_22%]"
              />
            </div>

            {/* Role chip straddling the bottom edge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/92 px-4 py-2 shadow-lg backdrop-blur-md">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {site.role}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* Stats                                                        */}
        {/* ------------------------------------------------------------ */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4"
        >
          {site.stats.map((stat) => (
            <div key={stat.label} className="bg-[var(--bg)] px-5 py-6 text-center">
              <p className="text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-[var(--text-faint)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Tech ticker                                                      */}
      {/* ---------------------------------------------------------------- */}
      <div className="marquee relative mt-16 overflow-hidden border-y border-[var(--border)] py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <div className="marquee-track">
          {[...tickerSkills, ...tickerSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex shrink-0 items-center gap-8 px-5 font-mono text-sm uppercase tracking-[0.14em] text-[var(--text-faint)]"
            >
              {skill}
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]/45" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
