"use client";

import { useEffect, useRef } from "react";

/** Abstract "embedding space": drifting points that link when close. Pauses off-screen. */
export function DataCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cols = ["#2997ff", "#a855f7", "#ec4899", "#22d3ee"];
    let w = 0, h = 0, raf = 0, visible = true;
    type P = { x: number; y: number; vx: number; vy: number; c: string; r: number };
    let pts: P[] = [];

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (w * h) / 9000));
      let s = 7;
      const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
      pts = Array.from({ length: n }, () => ({
        x: rnd() * w, y: rnd() * h, vx: (rnd() - 0.5) * 0.25, vy: (rnd() - 0.5) * 0.25,
        c: cols[Math.floor(rnd() * cols.length)], r: 1 + rnd() * 1.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.strokeStyle = a.c;
            ctx.globalAlpha = (1 - d / 110) * 0.35;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.9;
      for (const p of pts) { ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      if (visible) {
        for (const p of pts) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        draw();
      }
      raf = requestAnimationFrame(tick);
    };

    size();
    draw();
    const ro = new ResizeObserver(() => { size(); draw(); });
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(cv);
    if (!reduce) raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
