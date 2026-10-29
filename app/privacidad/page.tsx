import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Política de privacidad</h1>
      <div className="mt-8 grid gap-4 text-base leading-relaxed text-muted">
        <p>
          El responsable del tratamiento es {site.legalName}, {site.addressLine}, {site.postalCode} {site.city}, correo {site.email}.
        </p>
        <p>
          Cuando envías el formulario recogemos nombre, teléfono, correo si lo indicas, mensaje, la página desde la que escribes y, si
          usaste la calculadora, los metros y la gama. La base es tu consentimiento, que marcas en la casilla antes de enviar.
        </p>
        <p>
          Usamos esos datos para dos cosas automáticas: avisar al estudio de la solicitud y, si dejaste un correo, enviarte una confirmación
          con el resumen y el siguiente paso. No los vendemos ni los usamos para publicidad de terceros.
        </p>
        <p>
          Guardamos la solicitud el tiempo necesario para atenderla y, si la obra sigue adelante, durante la relación contractual y los
          plazos de garantía. Puedes pedir acceso, rectificación, supresión, limitación u oposición escribiendo a {site.email}. También
          puedes reclamar ante la Agencia Española de Protección de Datos.
        </p>
        <p>
          El envío del correo se hace desde el servidor del sitio, con el buzón que configure el estudio. Si el correo no está configurado,
          la solicitud queda registrada para que el estudio pueda responder por teléfono.
        </p>
      </div>
    </article>
  );
}
