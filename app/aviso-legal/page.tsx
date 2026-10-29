import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Aviso legal" };

export default function AvisoLegalPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Aviso legal</h1>
      <div className="mt-8 grid gap-4 text-base leading-relaxed text-muted">
        <p>
          Este sitio presenta los servicios de {site.legalName}, con estudio en {site.addressLine}, {site.postalCode} {site.city}.
          El contacto publicado es el teléfono {site.phoneDisplay} y el correo {site.email}.
        </p>
        <p>
          Los contenidos —textos, fotografías de obra, rangos de precio y marcas— se ofrecen como información comercial del estudio.
          Los precios por metro cuadrado son orientativos, no constituyen una oferta contractual y quedan sustituidos por el presupuesto
          cerrado que se firma tras la visita técnica.
        </p>
        <p>
          Queda reservada la reproducción de los contenidos salvo autorización. Los enlaces a WhatsApp, teléfono y correo abren los canales
          del propio estudio.
        </p>
        <p>
          {site.colegiado}. {site.insurance}. Esos datos identifican la cobertura profesional con la que el estudio dice trabajar; el contrato
          de obra es el documento que fija alcance, plazo y garantía de cada encargo.
        </p>
      </div>
    </article>
  );
}
