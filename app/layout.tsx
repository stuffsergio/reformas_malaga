import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar, TopBar } from "@/components/Chrome";
import { MotionRoot } from "@/components/MotionRoot";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "B-Edificación Arquitectos Málaga | Reformas integrales",
    template: "%s | B-Edificación Arquitectos",
  },
  description:
    "Estudio de arquitectura y reformas integrales en Málaga. Proyecto, obra y licencias en un único equipo. Presupuesto cerrado por contrato.",
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: "B-Edificación Arquitectos Málaga",
    description: "Reformas integrales llave en mano en Málaga y Costa del Sol.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalService",
  name: site.name,
  telephone: `+34${site.phoneTel}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLine,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "ES",
  },
  areaServed: "Málaga y Costa del Sol",
  openingHours: "Mo-Fr 08:30-19:30",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${manrope.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionRoot>
          <TopBar />
          <Header />
          <main className="pb-24 md:pb-0">{children}</main>
          <Footer />
          <MobileBar />
        </MotionRoot>
      </body>
    </html>
  );
}
