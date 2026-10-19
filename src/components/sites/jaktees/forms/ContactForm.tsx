"use client";

import type { FormEvent } from "react";
import { services } from "../data";
import { openWhatsApp } from "../whatsapp";

export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    openWhatsApp([
      "Hi Jaktees, " + v("message"),
      "",
      "Name: " + v("name"),
      "Email: " + v("email"),
      ...(v("phone") ? ["Phone: " + v("phone")] : []),
      ...(v("service") ? ["Service: " + v("service")] : []),
    ]);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="border-brutal-thick shadow-brutal bg-background p-6 md:p-10 space-y-5"><div className="grid md:grid-cols-2 gap-5"><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="contact-name">Name *</label><input id="contact-name" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal-orange transition-shadow" placeholder="Full name" autoComplete="name" name="name" required /></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="contact-email">Email *</label><input id="contact-email" type="email" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal-orange transition-shadow" placeholder="you@email.com" autoComplete="email" name="email" required /></div></div><div className="grid md:grid-cols-2 gap-5"><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="contact-phone">WhatsApp / Phone</label><input id="contact-phone" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal-orange transition-shadow" placeholder="08xx xxxx xxxx" autoComplete="tel" name="phone" /></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="contact-service">Service (optional)</label><select id="contact-service" className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal-orange transition-shadow" name="service"><option value="">— Select a service —</option>{services.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}</select></div></div><div><label className="block font-black uppercase tracking-widest text-xs mb-2" htmlFor="contact-message">Message *</label><textarea id="contact-message" rows={6} className="w-full border-brutal bg-background px-4 py-3 font-medium focus:outline-none focus:shadow-brutal-orange transition-shadow" placeholder="Hi, I'd like to ask about…" name="message" required></textarea></div><p className="text-xs text-muted-foreground">Submitting will save your message and open WhatsApp with your brief.</p><button className="inline-flex items-center justify-center gap-2 border-brutal shadow-brutal font-bold uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 text-lg" type="submit" tabIndex={0}>Send Message →</button></form>
  );
}
