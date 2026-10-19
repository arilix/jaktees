"use client";

import { useEffect } from "react";

// Drives the hero parallax: writes scroll progress (0 → 1 over the hero's height) to --hero-p.
export function HeroScroll() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!hero) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, height } = hero.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -top / height));
      hero.style.setProperty("--hero-p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
