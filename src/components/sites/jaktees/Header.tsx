"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WHATSAPP_URL } from "./data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const quoteButton =
  "inline-flex items-center justify-center gap-2 border-brutal shadow-brutal font-bold uppercase tracking-wider transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none bg-primary text-primary-foreground";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-foreground text-background border-b-[3px] border-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center bg-primary text-primary-foreground text-display text-2xl border-brutal shadow-brutal-sm">
            J
          </span>
          <span className="text-display text-2xl md:text-3xl tracking-tight">
            JAK<span className="bg-primary text-primary-foreground px-1">TEES</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`px-3 py-2 font-bold uppercase tracking-wider text-sm transition-colors ${active ? "text-primary" : "hover:text-primary"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="ml-2 grid h-10 w-10 place-items-center border-brutal shadow-brutal-sm bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <Link href="/order" className={`${quoteButton} px-4 py-2 text-sm ml-2`}>
            Get Quote →
          </Link>
        </nav>
        <button
          className="lg:hidden border-brutal p-2 shadow-brutal-sm bg-background text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden overflow-hidden border-t-[3px] border-background/20 bg-foreground text-background">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 font-bold uppercase tracking-wider hover:text-primary border-b border-background/20"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link
                href="/order"
                onClick={() => setOpen(false)}
                className={`${quoteButton} px-6 py-3 text-base flex-1 justify-center`}
              >
                Get Quote →
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center border-brutal-thick shadow-brutal bg-background text-foreground px-4"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
