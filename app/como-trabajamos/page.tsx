import type { Metadata } from "next";
import { ClosingCta, PageIntro } from "@/components/PageIntro";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description: "Visita, presupuesto cerrado, licencias, obra con reporte semanal y entrega con garantía.",
};

export default function ProcesoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Metodología"
        title="Cinco pasos hasta las llaves"
        text="Un itinerario con plazos visibles: de la visita gratuita a la entrega con certificados y póliza decenal."
      />
      <ol className="mx-auto grid max-w-site gap-4 px-5 py-16 lg:px-16">
        {steps.map((step) => (
          <li key={step.n} className="grid gap-3 rounded-2xl border border-line bg-white p-6 md:grid-cols-[120px_1fr_180px] md:items-center">
            <p className="font-display text-4xl font-semibold text-terracotta">{step.n}</p>
            <div>
              <h2 className="font-display text-2xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-muted">{step.text}</p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em]">{step.time}</p>
          </li>
        ))}
      </ol>
      <ClosingCta title="El paso 1 no cuesta nada" text="Agenda la visita técnica. Salimos con datos, no con un precio improvisado." />
    </>
  );
}
