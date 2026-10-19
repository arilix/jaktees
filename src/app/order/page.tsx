import type { Metadata } from "next";
import { OrderPage } from "@/components/sites/jaktees/pages/Order";

export const metadata: Metadata = {
  title: "Get a Quote — Jaktees | Order Custom Print",
  description: "Request a quote for custom printing — screen printing, DTG, DTF, jerseys, merch, and banners. Free & fast response via WhatsApp.",
};

export default function Page() {
  return <OrderPage />;
}
