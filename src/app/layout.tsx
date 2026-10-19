import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/sites/jaktees/FloatingWhatsApp";
import { Footer } from "@/components/sites/jaktees/Footer";
import { Header } from "@/components/sites/jaktees/Header";
import { ScrollReveal } from "@/components/sites/jaktees/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaktees.com"),
  title: "Sablon Kaos Jakarta — Jaktees Custom Apparel & Merchandise",
  description:
    "Jaktees: sablon kaos Jakarta sejak 2013. Custom apparel, DTF, DTG, bordir, jersey sublimasi untuk brand, event & komunitas.",
  authors: [{ name: "Jakarta T-Shirt Co." }],
  openGraph: { type: "website", siteName: "Jakarta T-Shirt Co.", locale: "en_ID" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
        <FloatingWhatsApp />
        <ScrollReveal />
      </body>
    </html>
  );
}
