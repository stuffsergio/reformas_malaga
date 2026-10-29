import { site, whatsappHref } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-canvas/95 p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
      >
        Llamar
      </a>
      <a
        href={whatsappHref()}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-whatsapp text-sm font-semibold text-white"
      >
        WhatsApp
      </a>
    </div>
  );
}

export function TopBar() {
  return (
    <div className="hidden border-b border-line text-xs text-muted md:block">
      <div className="mx-auto flex max-w-site items-center justify-between px-16 py-2">
        <div className="flex items-center gap-4">
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-ink hover:text-terracotta">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span>{site.region}</span>
          <span className="rounded-full bg-terracotta/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-terracotta">
            {site.response}
          </span>
        </div>
      </div>
    </div>
  );
}
