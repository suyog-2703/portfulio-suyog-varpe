"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/72 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 md:h-18">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] font-mono text-sm font-bold text-white">
            S
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                active === link.href
                  ? "text-[var(--text)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-88 sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border)] py-3.5 text-[15px] text-[var(--text-muted)] transition-colors last:border-0 hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[var(--text)] px-4 py-3 text-center text-sm font-medium text-[var(--bg)]"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
