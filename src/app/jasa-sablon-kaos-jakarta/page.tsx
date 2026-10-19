import type { Metadata } from "next";
import { JasaSablonPage } from "@/components/sites/jaktees/pages/JasaSablon";

export const metadata: Metadata = {
  title: "Jasa Sablon Kaos Jakarta & Screen Printing Service | Jaktees",
  description: "Jasa sablon kaos Jakarta sejak 2013: sablon manual plastisol, DTF, DTG, jersey, bordir & merchandise. Workshop di Jakarta Selatan. Minta penawaran sekarang.",
};

export default function Page() {
  return <JasaSablonPage />;
}
