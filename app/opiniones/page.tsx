import type { Metadata } from "next";
import { ClosingCta, PageIntro } from "@/components/PageIntro";
import { VideoStory } from "@/components/VideoStory";
import { reviews, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Opiniones de clientes",
  description: "Valoración 4,9 sobre 5 en Google. Reformas en Teatinos, el Paseo Marítimo y Pedregalejo.",
};

export default function OpinionesPage() {
  return (
    <>
      <PageIntro
        eyebrow={stats[2].value}
        title="Opiniones de clientes en Málaga"
        text="Más de 140 valoraciones. Estas tres cuentan plazos, licencias y el resultado de la obra."
      />
      <section className="mx-auto grid max-w-site gap-4 px-5 py-16 lg:grid-cols-3 lg:px-16">
        {reviews.map((review) => (
          <figure key={review.name} className="rounded-2xl border border-line bg-white p-6">
            <p className="text-sm tracking-widest text-terracotta" aria-label="5 de 5">★★★★★</p>
            <blockquote className="mt-4 text-sm leading-relaxed">“{review.quote}”</blockquote>
            <figcaption className="mt-5">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-muted">{review.place}</p>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="mx-auto max-w-site px-5 pb-16 lg:px-16">
        <VideoStory />
      </section>
      <ClosingCta title="¿Quieres el mismo seguimiento?" text="Reporte fotográfico cada viernes y un arquitecto como único interlocutor." />
    </>
  );
}
