import type { Metadata } from "next";
import { PortfolioPage } from "@/components/sites/jaktees/pages/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Jaktees | Recent Work & Case Studies",
  description: "See the latest work from Jakarta T-Shirt Co. — custom apparel, jerseys, merchandise, tote bags, and banners for local brands.",
};

export default function Page() {
  return <PortfolioPage />;
}
