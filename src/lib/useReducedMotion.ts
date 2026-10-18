"use client";
import { useSyncExternalStore } from "react";

const q = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(q);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

/** true when the visitor asked for less motion. Server render assumes motion is allowed. */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(q).matches, () => false);
}
