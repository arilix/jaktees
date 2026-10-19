import {
  Flag, Layers, Palette, Printer, Shirt, ShoppingBag, Sparkles, Trophy, Zap,
} from "lucide-react";
import Link from "next/link";
import type { Service } from "./data";

const icons = { Shirt, Printer, Layers, Trophy, ShoppingBag, Sparkles, Zap, Flag, Palette };
const surfaces = ["bg-background", "bg-highlight", "bg-primary"];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];
  return (
    <article
      data-reveal="up"
      style={{ rotate: `${service.rotate}deg`, transitionDelay: `${(index % 3) * 80}ms` }}
      className={`relative border-brutal shadow-brutal hover:!rotate-0 hover:-translate-y-1.5 ${surfaces[index % 3]}`}
    >
      <Link
        href="/order"
        className="block p-6 focus:outline-none focus-visible:ring-4 focus-visible:ring-foreground"
        aria-label={`Get a quote for ${service.title}`}
      >
        {service.badge && (
          <div className="absolute -top-3 -right-3">
            <span className="inline-block border-brutal shadow-brutal-sm px-3 py-1 text-sm font-black uppercase tracking-wider bg-foreground text-background rotate-6">
              {service.badge}
            </span>
          </div>
        )}
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center bg-foreground text-background border-brutal shadow-brutal-sm">
          <Icon size={28} strokeWidth={2.5} />
        </div>
        <h3 className="text-display text-3xl md:text-4xl mb-2">{service.title}</h3>
        <p className="font-bold uppercase tracking-wide text-sm mb-3">{service.short}</p>
        <p className="text-sm leading-relaxed">{service.description}</p>
        <span className="mt-4 inline-block font-black uppercase tracking-widest text-xs underline underline-offset-4">
          Get a quote →
        </span>
      </Link>
    </article>
  );
}
