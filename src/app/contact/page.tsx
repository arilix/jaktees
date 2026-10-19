import type { Metadata } from "next";
import { ContactPage } from "@/components/sites/jaktees/pages/Contact";

export const metadata: Metadata = {
  title: "Contact — Jaktees | Jakarta T-Shirt Co.",
  description: "Contact Jakarta T-Shirt Co. via WhatsApp, email, Instagram, or our form. Workshop in Jakarta.",
};

export default function Page() {
  return <ContactPage />;
}
