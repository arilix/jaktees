# jaktees.com → jaktees/ (Next.js 16, Tailwind v4)

Route map (source → local): / , /about, /services, /portfolio, /blog, /contact, /order, /jasa-sablon-kaos-jakarta (all `src/app/<route>/page.tsx` → `src/components/sites/jaktees/pages/*`).
Shared: Header (mobile menu), Footer, FloatingWhatsApp, ScrollReveal (framer whileInView replacement), HeroScroll (hero parallax), ProcessScene (300vh pinned scroll scene), FaqList, ServiceCard, forms/.
Tokens/fonts: `src/app/globals.css`, `public/fonts` (Bebas Neue + Barlow, files the site loads). Images: `public/images`.
Evidence: `docs/research/src` (source CSS/JS bundles), `docs/design-references` (source vs local screenshots).
Known gaps: services/blog/IG data come from the site's database (unreachable from this sandbox): services list rebuilt from public llms.txt; blog empty state and IG grid empty. /services/<slug> returns HTTP 500 on the live site, so cards link to /order. Forms open WhatsApp (no backend); newsletter form only confirms locally.
