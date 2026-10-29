import type { Metadata } from "next";
import { ClosingCta, PageIntro } from "@/components/PageIntro";
import { comparison, reasons, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Por qué elegirnos",
  description: "Arquitecto colegiado, presupuesto cerrado, plazos por escrito y seguro decenal.",
};

export default function PorQuePage() {
  return (
    <>
      <PageIntro
        eyebrow="El estudio"
        title="La seguridad de un arquitecto colegiado"
        text="Jurídica, técnica y económica. Un responsable, un contrato y una fecha de entrega."
      />
      <section className="mx-auto grid max-w-site gap-4 px-5 py-16 md:grid-cols-2 lg:px-16">
        {reasons.map((reason) => (
          <article key={reason.title} className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-display text-2xl font-semibold">{reason.title}</h2>
            <p className="mt-3 text-muted">{reason.text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-site px-5 pb-16 lg:px-16">
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="min-w-[680px] w-full text-left text-sm">
            <caption className="border-b border-line px-4 py-4 text-left font-display text-xl font-semibold">
              {site.shortName} frente a oficios por separado
            </caption>
            <thead className="bg-stone text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Factor</th>
                <th className="px-4 py-3">Con el estudio</th>
                <th className="px-4 py-3">Oficios sueltos</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row[0]} className="border-t border-line">
                  <th className="px-4 py-3 font-semibold">{row[0]}</th>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3 text-muted">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ClosingCta title="Compara con un presupuesto cerrado" text="Te lo preparamos después de ver la vivienda, con partidas y fecha." />
    </>
  );
}
