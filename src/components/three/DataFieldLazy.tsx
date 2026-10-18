"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DataField = dynamic(() => import("./LiquidOrb"), { ssr: false });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Mounts the 3D field after the page is interactive and idle, and only when WebGL exists. */
export function DataFieldLazy() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!hasWebGL()) return;
    let idle = 0;
    const go = () => setReady(true);
    const schedule = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      idle = ric ? ric(go, { timeout: 2500 }) : window.setTimeout(go, 1200);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => { window.removeEventListener("load", schedule); window.clearTimeout(idle); };
  }, []);
  return ready ? <div className="field-in absolute inset-0"><DataField /></div> : null;
}
