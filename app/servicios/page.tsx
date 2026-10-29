import type { Metadata } from "next";
import { ClosingCta, PageIntro } from "@/components/PageIntro";
import { ButtonLink } from "@/components/Brand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de reforma en Málaga",
  description: "Proyecto, licencias, obra e instalaciones en un único equipo de arquitectos en Málaga.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Servicios"
        title="Qué incluye una reforma integral"
        text="Gestionamos cada etapa, del proyecto arquitectónico a la entrega de llaves, sin intermediarios."
      >
        <ButtonLink href="/contacto">Pedir estudio gratuito</ButtonLink>
        <ButtonLink href="/como-trabajamos" variant="ghost">Ver los plazos</ButtonLink>
      </PageIntro>
      <section className="mx-auto grid max-w-site gap-4 px-5 py-16 lg:px-16">
        {services.map((service) => (
          <article key={service.step} className="grid gap-4 rounded-2xl border border-line bg-white p-6 md:grid-cols-[88px_1fr]">
            <p className="font-display text-3xl font-semibold text-terracotta">{service.step}</p>
            <div>
              <h2 className="font-display text-2xl font-semibold">{service.title}</h2>
              <p className="mt-2 max-w-3xl text-muted">{service.text}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink/60">{service.tags.join(" · ")}</p>
            </div>
          </article>
        ))}
      </section>
      <ClosingCta
        title="Un arquitecto visita tu inmueble sin coste"
        text="Medimos, revisamos la viabilidad técnica y te decimos qué licencia necesita la obra."
      />
    </>
  );
}
