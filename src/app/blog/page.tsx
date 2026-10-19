import type { Metadata } from "next";
import { BlogPage } from "@/components/sites/jaktees/pages/Blog";

export const metadata: Metadata = {
  title: "Blog Custom Apparel — Tips Sablon & Merchandise | Jaktees",
  description: "Panduan teknik sablon, DTF, bahan kaos, dan studi kasus produksi merchandise dari studio Jaktees Jakarta Selatan.",
};

export default function Page() {
  return <BlogPage />;
}
