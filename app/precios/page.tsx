import type { Metadata } from "next";
import { Calculator } from "@/components/Calculator";
import { PageIntro } from "@/components/PageIntro";
import { tiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios y calculadora",
  description: "Rangos reales por m² en Málaga: básica, media y completa. Estimación sin IVA.",
};

export default function PreciosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Precios"
        title="Calculadora de presupuesto por m²"
        text="Los mismos rangos de la home: 450–600, 650–850 y 900–1.300 €/m². La cifra es orientativa y no incluye IVA."
      />
      <section className="mx-auto grid max-w-site gap-8 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:px-16">
        <div className="grid gap-4">
          {tiers.map((tier) => (
            <article key={tier.id} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-2xl font-semibold">{tier.name}</h2>
              <p className="mt-1 font-display text-xl text-terracotta">{tier.range}</p>
              <p className="mt-2 text-sm text-muted">{tier.text}</p>
            </article>
          ))}
        </div>
        <Calculator destination="/contacto" />
      </section>
    </>
  );
}
