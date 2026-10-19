"use client";

import { type FormEvent, useState } from "react";

export function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl"><label htmlFor="sub-name" className="sr-only">Nama</label><input id="sub-name" placeholder="Nama (opsional)" className="border-brutal bg-background text-foreground px-3 py-3 font-medium w-full sm:w-48" value={name} onChange={(e) => setName(e.target.value)} /><label htmlFor="sub-email" className="sr-only">Email</label><input id="sub-email" type="email" required placeholder="email@kamu.com" className="border-brutal bg-background text-foreground px-3 py-3 font-medium flex-1" value={email} onChange={(e) => setEmail(e.target.value)} /><button className="inline-flex items-center justify-center gap-2 border-brutal shadow-brutal font-bold uppercase tracking-wider bg-primary text-primary-foreground px-6 py-3 text-base" type="submit" tabIndex={0}>Subscribe</button>{done && <p role="status" className="basis-full text-sm font-bold">Terima kasih! Kamu terdaftar untuk artikel berikutnya.</p>}</form>
  );
}
