"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; caption: string; alt: string };

/** A 3D ring of photos: auto-rotates, drag or swipe to spin, arrows for keyboard users. */
export function PhotoRing({ photos }: { photos: Photo[] }) {
  const ring = useRef<HTMLDivElement>(null);
  const angle = useRef(0);
  const vel = useRef(0);
  const drag = useRef<{ x: number; a: number } | null>(null);
  const w = useSyncExternalStore(
    (cb) => { window.addEventListener("resize", cb); return () => window.removeEventListener("resize", cb); },
    () => (window.innerWidth < 640 ? 130 : 190),
    () => 190
  );
  const n = photos.length;
  const step = 360 / n;
  const radius = Math.round((w / 2) / Math.tan(Math.PI / n)) + 24;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    if (ring.current) io.observe(ring.current);
    const tick = () => {
      if (visible && !drag.current) {
        if (!reduce) angle.current -= 0.08;
        angle.current += vel.current;
        vel.current *= 0.94;
      }
      if (ring.current) ring.current.style.transform = `translateZ(-${radius}px) rotateY(${angle.current}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [radius]);

  const nudge = (dir: number) => { vel.current = 0; angle.current += dir * step; };

  return (
    <div className="relative">
      <div
        className="ring-stage relative mx-auto h-[230px] overflow-x-clip cursor-grab touch-pan-y select-none active:cursor-grabbing sm:h-[320px]"
        onPointerDown={(e) => { drag.current = { x: e.clientX, a: angle.current }; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); }}
        onPointerMove={(e) => { if (!drag.current) return; const a = drag.current.a + (e.clientX - drag.current.x) * 0.35; vel.current = (a - angle.current) * 0.3; angle.current = a; }}
        onPointerUp={() => { drag.current = null; }}
        onPointerCancel={() => { drag.current = null; }}
      >
        <div ref={ring} className="ring absolute left-1/2 top-1/2" style={{ width: w, height: w * 1.3, marginLeft: -w / 2, marginTop: -(w * 1.3) / 2 }}>
          {photos.map((p, i) => (
            <figure key={p.src} className="ring-item absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-card-2 shadow-2xl"
                    style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}>
              <Image src={p.src} alt={p.caption ? "" : p.alt} fill sizes="200px" draggable={false} className="pointer-events-none object-cover" style={{ objectPosition: p.src.includes("leadership") ? "90% 35%" : "50% 30%" }} />
              {p.caption && <figcaption className="absolute inset-x-2 bottom-2 truncate rounded-full bg-black/55 px-2 py-1 text-center text-[11px] font-medium text-white backdrop-blur-md">{p.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-2">
        <button onClick={() => nudge(1)} aria-label="Previous photo" className="press grid size-10 place-items-center rounded-full border border-line bg-card"><ChevronLeft className="size-4" /></button>
        <span className="text-xs text-dim">Drag to spin</span>
        <button onClick={() => nudge(-1)} aria-label="Next photo" className="press grid size-10 place-items-center rounded-full border border-line bg-card"><ChevronRight className="size-4" /></button>
      </div>
    </div>
  );
}
