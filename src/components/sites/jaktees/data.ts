export const WHATSAPP_NUMBER = "6282114917878";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "Shirt" | "Printer" | "Layers" | "Trophy" | "ShoppingBag" | "Sparkles" | "Zap" | "Flag" | "Palette";
  badge?: string;
  rotate: number;
};

// The live site loads these rows from its database at runtime; this copy is rebuilt
// from the public llms.txt service list (title, summary, MOQ).
export const services: Service[] = [
  { slug: "screen-printing", title: "Screen Printing", short: "Sablon manual & otomatis", description: "Sablon manual & otomatis, plastisol & water-based. MOQ: 12 pcs.", icon: "Printer", badge: "Classic", rotate: -1 },
  { slug: "dtg", title: "DTG Printing", short: "Direct-to-garment full color", description: "Direct-to-garment full color on cotton. MOQ: 1 pc.", icon: "Palette", badge: "No MOQ", rotate: 1 },
  { slug: "dtf", title: "DTF Transfer", short: "Direct-to-film", description: "Direct-to-film, prints on cotton/polyester/blends. MOQ: 1 pc.", icon: "Layers", rotate: -1 },
  { slug: "sport-jersey", title: "Sport Jersey", short: "Sublimation jerseys", description: "Sublimation jerseys for football, basketball, futsal, esports. MOQ: 6 pcs.", icon: "Trophy", rotate: 1 },
  { slug: "tote-bags", title: "Tote Bags", short: "Canvas & blacu totes", description: "Canvas & blacu printed totes. MOQ: 12 pcs.", icon: "ShoppingBag", rotate: -1 },
  { slug: "merchandise", title: "Custom Merchandise", short: "Hoodies, caps, pins, mugs", description: "Hoodies, caps, pins, mugs, full merch packages.", icon: "Shirt", rotate: 1 },
  { slug: "uv-printing", title: "UV Printing", short: "UV flatbed on hard surfaces", description: "UV flatbed on phone cases, acrylic, wood, metal.", icon: "Sparkles", rotate: -1 },
  { slug: "laser-engraving", title: "Laser Engraving", short: "Cutting & engraving", description: "Cutting & engraving on wood, acrylic, leather, stainless.", icon: "Zap", rotate: 1 },
  { slug: "banner", title: "Banner Printing", short: "Flexi, albatros, vinyl", description: "Flexi, albatros, vinyl. Indoor & outdoor large-format.", icon: "Flag", rotate: -1 },
];

export const faqs: { q: string; a: string }[] = [
  {
    "q": "What custom printing services does Jaktees offer in Jakarta?",
    "a": "Jaktees (Jakarta T-Shirt Co.) offers screen printing (sablon manual & otomatis), DTG (direct-to-garment), DTF transfer, sublimation sport jerseys, embroidery, tote bags, custom merchandise, UV printing on hard surfaces, laser engraving, and large-format banner printing — all produced in our Pondok Pinang workshop in South Jakarta."
  },
  {
    "q": "What is the minimum order quantity (MOQ) for custom t-shirts?",
    "a": "DTG printing has no minimum — start from a single shirt. Screen printing starts from 12 pieces per design. Sublimation jerseys start from 6 pieces. Embroidery starts from 6 pieces. Bulk orders above 100 pieces get the best per-unit price."
  },
  {
    "q": "How long does production take?",
    "a": "Standard turnaround is 7–14 working days after artwork approval and down payment. Rush orders (3–5 days) are available for an additional fee. Large team kits and full merchandise packages take 2–4 weeks depending on quantity."
  },
  {
    "q": "How do I get a price quote?",
    "a": "Send your design, quantity, garment type, sizes, and deadline via WhatsApp at +62 821-1491-7878, fill the form on /order, or DM @jaktees on Instagram. We reply with a written quote within 24 hours on business days."
  },
  {
    "q": "Where is the Jaktees workshop located?",
    "a": "Our production workshop is at Jl. H. Goden Raya No. 17A, Pondok Pinang, Kebayoran Lama, Jakarta Selatan 12310, Indonesia. We ship nationwide across Indonesia and accept walk-in consultations by appointment."
  },
  {
    "q": "Do you ship outside Jakarta?",
    "a": "Yes. We ship to every province in Indonesia via JNE, J&T, SiCepat, and Anteraja. International shipping is available on request via DHL or FedEx."
  },
  {
    "q": "Which printing technique should I choose: screen printing, DTG, or DTF?",
    "a": "Screen printing is best for bulk orders (50+) with 1–4 solid colors — most durable and cheapest per piece at volume. DTG suits photo-realistic, full-color designs on cotton with no minimum. DTF works on any fabric (cotton, polyester, blends) with vivid colors and great stretch — ideal for small to medium runs and complex artwork."
  },
  {
    "q": "What file format should I send for my design?",
    "a": "Vector files (AI, EPS, PDF, SVG) are preferred. High-resolution PNG or JPG at 300 DPI also works. Outline all fonts. For screen printing, separate each color on its own layer if possible."
  }
];
