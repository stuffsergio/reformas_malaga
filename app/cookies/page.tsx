import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Cookies</h1>
      <div className="mt-8 grid gap-4 text-base leading-relaxed text-muted">
        <p>
          Este sitio no instala cookies de analítica, publicidad ni redes sociales. No hay banner porque no hay nada que aceptar.
        </p>
        <p>
          La calculadora guarda en tu navegador, en sessionStorage, los metros y la gama que eliges para poder adjuntarlos al formulario.
          Eso no sale de tu dispositivo hasta que envías la solicitud, y se borra al cerrar la pestaña.
        </p>
        <p>
          El servidor puede registrar datos técnicos mínimos de la petición (por ejemplo la dirección IP) solo para limitar envíos abusivos
          del formulario. Ese registro vive en memoria y no se usa para identificarte en otras visitas.
        </p>
      </div>
    </article>
  );
}
