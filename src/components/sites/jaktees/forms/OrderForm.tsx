"use client";

import { Clock, type LucideIcon, Zap, Calendar } from "lucide-react";
import { type FormEvent, useState } from "react";
import { openWhatsApp } from "../whatsapp";

const timelines: { title: string; hint: string; Icon: LucideIcon }[] = [
  { title: "ASAP", hint: "Rush — priority contact", Icon: Zap },
  { title: "1-3 Weeks", hint: "Standard turnaround", Icon: Clock },
  { title: "1 Month+", hint: "Plenty of time, more options", Icon: Calendar },
];

export function OrderForm() {
  const [timeline, setTimeline] = useState("1-3 Weeks");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    openWhatsApp([
      "Hi Jaktees, I want to place an order.",
      "",
      "Name: " + [v("first_name"), v("last_name")].filter(Boolean).join(" "),
      "Company / Brand: " + v("company"),
      "Phone: " + v("phone"),
      "Email: " + v("email"),
      "Start production: " + timeline,
      "",
      v("message"),
    ]);
  }

  return (
    <form onSubmit={onSubmit} className="border-brutal-thick shadow-brutal bg-background p-6 md:p-10 space-y-5" ><div className="grid md:grid-cols-2 gap-5"><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-first-name">First Name *</label><input id="order-first-name" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal transition-shadow" placeholder="Andi" autoComplete="given-name" name="first_name" required /></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-last-name">Last Name</label><input id="order-last-name" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal transition-shadow" placeholder="Wijaya" autoComplete="family-name" name="last_name" /></div></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-company">Company / Brand Name *</label><input id="order-company" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal transition-shadow" placeholder="e.g. Kopi Kenangan / Jakarta Running Community" autoComplete="organization" name="company" required /></div><div className="grid md:grid-cols-2 gap-5"><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-phone">Phone Number *</label><input id="order-phone" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal transition-shadow" placeholder="08xx xxxx xxxx" autoComplete="tel" name="phone" required /></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-email">Email *</label><input id="order-email" type="email" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal transition-shadow" placeholder="you@email.com" autoComplete="email" name="email" required /></div></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-timeline-group">When are you looking to start production? *</label><input type="hidden" name="timeline" value={timeline} /><div id="order-timeline-group" role="group" aria-label="Production timeline" className="grid grid-cols-1 sm:grid-cols-3 gap-3">{timelines.map((t) => {
              const active = timeline === t.title;
              return (
                <button
                  key={t.title}
                  type="button"
                  className={`text-left border-brutal p-4 transition-all ${active ? "bg-primary text-primary-foreground shadow-brutal -translate-x-0.5 -translate-y-0.5" : "bg-background hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5"}`}
                  aria-pressed={active}
                  onClick={() => setTimeline(t.title)}
                >
                  <t.Icon size={22} strokeWidth={2.5} aria-hidden="true" />
                  <div className="text-display text-2xl mt-2 leading-none">{t.title}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">{t.hint}</div>
                </button>
              );
            })}</div></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="order-message">Tell us about your order *</label><textarea id="order-message" rows={6} className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal transition-shadow" placeholder="Service you need (screen printing / DTG / jersey / etc.), fabric, colors, sizes, qty, design references — write it all here." name="message" required></textarea></div><p className="text-xs text-muted-foreground">Submitting will save your order and open WhatsApp with your brief. Reply within 24 hours.</p><div className="flex flex-wrap gap-3 pt-2"><button className="inline-flex items-center justify-center gap-2 border-brutal shadow-brutal font-bold uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 text-lg" type="submit" tabIndex={0}>Submit & Open WhatsApp →</button><a href="https://wa.me/6282114917878" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-brutal shadow-brutal bg-background px-8 py-4 text-lg font-bold uppercase tracking-wider hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all">Skip — Chat Now</a></div></form>
  );
}
