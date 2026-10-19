import type { Metadata } from "next";
import { ServicesPage } from "@/components/sites/jaktees/pages/Services";

export const metadata: Metadata = {
  title: "Services — Jaktees | Screen Print, DTG, DTF & More",
  description: "Custom printing services: screen printing, DTG, DTF, sport jerseys, tote bags, merchandise, UV printing, laser engraving, and banners.",
};

export default function Page() {
  return <ServicesPage />;
}
