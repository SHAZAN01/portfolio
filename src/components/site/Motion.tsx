"use client";

import { useEffect } from "react";

/**
 * Animated background + reveal-on-scroll.
 * IntersectionObserver handles normal scrolling; a rAF scroll check guarantees that anything
 * already scrolled past (fast flicks, anchor jumps) is revealed, so no section is ever left blank.
 */
export function Motion() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const all = () => Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    const show = (el: Element) => el.classList.add("in");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      all().forEach(show);
      const mo = new MutationObserver(() => all().forEach(show));
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    const sweep = () => {
      const limit = window.innerHeight;
      all().forEach((el) => { if (el.getBoundingClientRect().top < limit) { show(el); io.unobserve(el); } });
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { sweep(); ticking = false; });
    };
    const observe = () => all().forEach((el) => io.observe(el));
    observe();
    sweep();
    const mo = new MutationObserver(() => { observe(); sweep(); });
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", sweep);
    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("hashchange", sweep); };
  }, []);

  return null;
}
