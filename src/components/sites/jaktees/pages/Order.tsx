
import { OrderForm } from "../forms/OrderForm";

export function OrderPage() {
  return (
    <main className="flex-1"><section className="border-b-[5px] border-foreground bg-primary py-16 md:py-24 relative overflow-hidden"><div className="absolute -top-10 -right-10 hidden md:block"><span className="inline-block border-brutal shadow-brutal-sm px-3 py-1 font-black uppercase tracking-wider bg-foreground text-background text-xl" data-reveal="pop" style={{ rotate: "12deg" }}>★ FREE QUOTE ★</span></div><div className="mx-auto max-w-7xl px-4 md:px-6"><span className="inline-block border-brutal shadow-brutal-sm px-3 py-1 text-sm font-black uppercase tracking-wider bg-foreground text-background mb-6" data-reveal="pop" style={{ rotate: "-3deg" }}>{"★ Reply < 24 hours ★"}</span><h1 className="text-display text-[16vw] md:text-[12vw] leading-[0.85]">GET A<br /><span className="bg-foreground text-background px-2 inline-block -rotate-1">QUOTE.</span></h1><p className="mt-6 max-w-2xl text-lg font-bold">Production fully operational. Fill out the form below, or chat us on WhatsApp for the fastest response.</p></div></section><section className="py-16 md:py-24 bg-background"><div className="mx-auto max-w-3xl px-4 md:px-6"><h2 className="text-display text-4xl md:text-5xl mb-8">Order details</h2><OrderForm /></div></section></main>
  );
}
