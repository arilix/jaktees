"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "Brief & Quote", text: "Send your brief via form or WhatsApp. Our team replies with an estimate and timeline." },
  { n: "02", title: "Design Approval", text: "Digital mockups until you approve. Unlimited revisions until it's perfect." },
  { n: "03", title: "Production", text: "Printing runs at our workshop in Jakarta. Quality control at every stage." },
  { n: "04", title: "Delivery", text: "Final QC check, neat packing, shipped across Indonesia." },
];

// Pinned scene: scrolling through the 300vh track steps through the four stages.
export function ProcessScene() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -top / scrollable)) : 0;
      setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={ref} className="relative bg-foreground text-background">
      <div className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary font-black uppercase tracking-widest mb-3">How we work</p>
              <h2 className="text-display text-6xl md:text-8xl leading-none">
                FROM BRIEF
                <br />
                TO <span className="text-primary">DROP.</span>
              </h2>
              <p className="mt-6 max-w-md opacity-80">
                Our process is simple, transparent, and fast. Scroll to see each stage.
              </p>
              <div className="mt-8 flex gap-2">
                {steps.map((s, i) => (
                  <div
                    key={s.n}
                    className={`h-2 flex-1 border-2 border-background transition-colors ${i <= active ? "bg-primary" : "bg-transparent"}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative h-[420px]">
              {steps.map((s, i) => {
                const isActive = i === active;
                const past = i < active;
                return (
                  <div
                    key={s.n}
                    className="absolute inset-0 bg-background text-foreground border-brutal-thick shadow-brutal-orange p-8 transition-[opacity,transform] duration-[400ms] ease-out"
                    style={{
                      pointerEvents: isActive ? "auto" : "none",
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${isActive ? 0 : past ? -40 : 40}px) scale(${isActive ? 1 : 0.96})`,
                    }}
                  >
                    <div className="text-display text-9xl md:text-[10rem] text-primary leading-none">{s.n}</div>
                    <h3 className="text-display text-4xl md:text-5xl mt-2">{s.title}</h3>
                    <p className="mt-3 text-base">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
