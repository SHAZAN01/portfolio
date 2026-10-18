"use client";

import { useEffect, useRef } from "react";

/** Server renders the final value. If the number starts below the fold, it counts up once when reached. */
export function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    const fmt = (v: number) => v.toFixed(decimals) + suffix;
    el.textContent = fmt(0);
    let started = false;
    let raf = 0;
    const start = () => {
      if (started) return;
      started = true;
      cleanup();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1300);
        el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const check = () => { if (el.getBoundingClientRect().top < window.innerHeight * 0.92) start(); };
    const io = new IntersectionObserver(([e]) => e.isIntersecting && start(), { threshold: 0.2 });
    io.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    function cleanup() { io.disconnect(); window.removeEventListener("scroll", check); }
    return () => { cleanup(); cancelAnimationFrame(raf); el.textContent = fmt(to); };
  }, [to, decimals, suffix]);
  return <span ref={ref}>{to.toFixed(decimals) + suffix}</span>;
}
