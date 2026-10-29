import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">Esta página no existe</h1>
      <p className="mt-4 text-muted">El enlace está mal o la sección se ha movido. Vuelve al inicio o pide presupuesto.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white">
          Ir al inicio
        </Link>
        <Link href="/contacto" className="inline-flex min-h-12 items-center rounded-full border border-line px-6 text-sm font-semibold">
          Contacto
        </Link>
      </div>
    </section>
  );
}
