import Link from "next/link";
import { Logo } from "./Brand";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-stone">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 lg:grid-cols-12 lg:px-16">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Estudio de arquitectura y reformas integrales en Málaga. Proyecto, licencia y obra con un solo interlocutor y presupuesto cerrado por contrato.
          </p>
          <p className="mt-4 text-sm text-ink">
            {site.addressLine}
            <br />
            {site.postalCode} {site.city}
            <br />
            <a className="font-semibold hover:text-terracotta" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Servicios</h2>
          <ul className="mt-4 grid gap-2 text-sm font-semibold">
            {footerNav.servicios.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-terracotta" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Estudio</h2>
          <ul className="mt-4 grid gap-2 text-sm font-semibold">
            {footerNav.estudio.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-terracotta" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Colegiación</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {site.colegiado}. {site.insurance}.
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-16">
          <p>© {new Date().getFullYear()} {site.shortName}. Todos los derechos reservados.</p>
          <div className="flex gap-4 font-semibold">
            <Link href="/aviso-legal" className="hover:text-ink">Aviso legal</Link>
            <Link href="/privacidad" className="hover:text-ink">Privacidad</Link>
            <Link href="/cookies" className="hover:text-ink">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
