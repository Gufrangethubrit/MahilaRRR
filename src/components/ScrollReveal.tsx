import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Auto-applies scroll-reveal animations across the site.
 * - Adds `.reveal` to common content elements (cards, headings, eyebrows, images).
 * - Stagger via `data-delay` on siblings inside the same grid/flex container.
 * - Toggles `.is-visible` via IntersectionObserver.
 */
export default function ScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Targets to auto-animate
    const selectors = [
      ".card-soft",
      ".section-title",
      ".eyebrow",
      "section h2",
      "section h3",
      "section p.lead",
      ".reveal-target",
    ].join(",");

    // Tag elements and assign stagger delays per parent grid
    const tagged: HTMLElement[] = [];
    document.querySelectorAll<HTMLElement>(selectors).forEach((el) => {
      if (el.classList.contains("reveal") || el.classList.contains("no-reveal")) return;
      // Skip elements inside the sticky header / nav
      if (el.closest("header, nav, footer")) return;
      el.classList.add("reveal");
      tagged.push(el);
    });

    // Stagger siblings in same parent (max 6)
    const groups = new Map<HTMLElement, HTMLElement[]>();
    tagged.forEach((el) => {
      const parent = el.parentElement as HTMLElement | null;
      if (!parent) return;
      const arr = groups.get(parent) || [];
      arr.push(el);
      groups.set(parent, arr);
    });
    groups.forEach((arr) => {
      if (arr.length < 2) return;
      arr.forEach((el, i) => {
        if (!el.hasAttribute("data-delay")) el.setAttribute("data-delay", String(Math.min(i, 6)));
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    tagged.forEach((el) => io.observe(el));

    // Also observe any manually-tagged .reveal/.reveal-left/.reveal-right/.reveal-zoom
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom").forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
