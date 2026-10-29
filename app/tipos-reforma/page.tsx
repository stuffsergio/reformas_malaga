import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta, PageIntro } from "@/components/PageIntro";
import { reformTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tipos de reforma en Málaga",
  description: "Viviendas, fachadas, cubiertas, comunidades y naves. Proyecto, dirección técnica e interiorismo.",
};

export default function TiposPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tipos de obra"
        title="Reformas que realizamos en Málaga y provincia"
        text="Vivienda, envolvente del edificio y actividad económica. El mismo criterio técnico en las cinco."
      />
      <section className="mx-auto grid max-w-site gap-8 px-5 py-16 lg:px-16">
        {reformTypes.map((type) => (
          <article id={type.id} key={type.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-white lg:grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto lg:min-h-80">
              <Image src={type.image} alt={type.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-3xl font-semibold">{type.title}</h2>
              <p className="mt-3 text-muted">{type.text}</p>
              <ul className="mt-5 grid gap-2 text-sm">
                {type.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-terracotta" aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <ClosingCta
        title="¿No sabes qué tipo de proyecto necesita tu inmueble?"
        text="Lo vemos en la visita. Si hace falta licencia, declaración responsable o proyecto de actividad, te lo decimos antes de presupuestar."
      />
    </>
  );
}
