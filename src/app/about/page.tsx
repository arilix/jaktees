import type { Metadata } from "next";
import { AboutPage } from "@/components/sites/jaktees/pages/About";

export const metadata: Metadata = {
  title: "About — Jakarta T-Shirt Co. | Our Story & Workshop",
  description: "Since 2013, Jakarta T-Shirt Co. runs a Pondok Pinang workshop printing for brands, communities & sports teams across Indonesia.",
};

export default function Page() {
  return <AboutPage />;
}
