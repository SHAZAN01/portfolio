"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Shot = { src: string; alt: string; position: string };

/** Crossfades between portraits with a slow Ken Burns zoom. Dots switch manually. */
export function HeroPhotos({ shots }: { shots: Shot[] }) {
  const [i, setI] = useState(0);
  const n = shots.length;

  useEffect(() => {
    if (n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => clearInterval(t);
  }, [n]);

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/15 bg-card-2 shadow-2xl">
        {shots.map((s, k) => (
          <Image key={s.src} src={s.src} alt={k === i ? s.alt : ""} aria-hidden={k !== i} fill priority={k === 0}
                 sizes="(min-width:1024px) 420px, 240px"
                 className={`hero-shot object-cover ${k === i ? "is-on" : ""}`} style={{ objectPosition: s.position }} />
        ))}
      </div>
      {n > 1 && (
        <div className="absolute -bottom-9 left-1/2 flex -translate-x-1/2" role="group" aria-label="Choose photo">
          {shots.map((s, k) => (
            <button key={s.src} onClick={() => setI(k)} aria-label={`Show photo ${k + 1}`} aria-pressed={k === i}
                    className="grid h-7 min-w-7 place-items-center px-1">
              <span className={`block h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-foreground" : "w-1.5 bg-faint"}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
