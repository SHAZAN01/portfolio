"use client";

import { useEffect, useRef } from "react";

// Section → palette. The background crossfades as each section takes the screen.
const PALETTE: Record<string, [string, string, string]> = {
  top: ["#2997ff", "#a855f7", "#ec4899"],
  results: ["#22d3ee", "#2997ff", "#6366f1"],
  projects: ["#ff375f", "#ff9f0a", "#a855f7"],
  research: ["#a855f7", "#ec4899", "#2997ff"],
  people: ["#ff375f", "#ff9f0a", "#ec4899"],
  skills: ["#30d158", "#22d3ee", "#2997ff"],
  experience: ["#2997ff", "#6366f1", "#22d3ee"],
  life: ["#30d158", "#22d3ee", "#ff9f0a"],
  contact: ["#a855f7", "#2997ff", "#ec4899"],
};

export function ScrollField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = (id: string) => {
      const p = PALETTE[id];
      if (!p) return;
      el.style.setProperty("--sf1", p[0]);
      el.style.setProperty("--sf2", p[1]);
      el.style.setProperty("--sf3", p[2]);
    };
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && set(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(PALETTE).forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const onScroll = () => {
      if (reduce || raf) return;
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--sy", String(window.scrollY));
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="scroll-field" aria-hidden>
      <span className="b1" />
      <span className="b2" />
      <span className="b3" />
    </div>
  );
}
