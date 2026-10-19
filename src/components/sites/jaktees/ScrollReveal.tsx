"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // scale(0) elements have an empty box, so they are watched through their parent
            const targets = el.dataset.revealHost ? el.querySelectorAll(":scope > [data-reveal='pop']") : [el];
            targets.forEach((t) => t.setAttribute("data-in", ""));
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -50px 0px" },
    );
    const observe = () =>
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => {
        if (el.getAttribute("data-reveal") === "pop" && el.parentElement) {
          el.parentElement.dataset.revealHost = "1";
          io.observe(el.parentElement);
        } else io.observe(el);
      });
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
