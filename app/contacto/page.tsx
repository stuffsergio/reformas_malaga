import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { projects, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y presupuesto",
  description: "Cuéntanos tu reforma. Un arquitecto responde en menos de 24 horas laborables.",
};

const temas: Record<string, string> = {
  "cambio-de-uso": "Quiero consultar la viabilidad de cambiar un local a vivienda.",
  demolicion: "Quiero un proyecto de demolición.",
  "certificado-energetico": "Necesito certificado energético, cédula de habitabilidad o ITE.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ tema?: string; proyecto?: string }>;
}) {
  const params = await searchParams;
  const project = projects.find((item) => item.id === params.proyecto);
  const initialMessage = project
    ? `Me interesa un proyecto similar a «${project.title}» (${project.place}).`
    : temas[params.tema ?? ""] ?? "";

  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Habla con el estudio"
        text="Un arquitecto colegiado revisa los datos y responde en menos de 24 horas laborables. Si dejas el correo, la confirmación sale en el acto."
      />
      <section className="mx-auto grid max-w-site gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <div className="grid gap-6">
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-display text-xl font-semibold">Estudio</h2>
            <p className="mt-2 text-muted">
              {site.addressLine}
              <br />
              {site.postalCode} {site.city}
            </p>
            <p className="mt-3 text-sm">{site.hours}</p>
          </article>
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-display text-xl font-semibold">Teléfono</h2>
            <a className="mt-2 block text-lg font-semibold text-terracotta" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </article>
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-display text-xl font-semibold">WhatsApp y correo</h2>
            <a className="mt-2 block font-semibold" href={whatsappHref()}>
              Abrir WhatsApp
            </a>
            <a className="mt-2 block text-muted" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </article>
        </div>
        <ContactForm source="/contacto" project={project?.title ?? params.tema ?? ""} initialMessage={initialMessage} />
      </section>
    </>
  );
}
