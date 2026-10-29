import type { ReactNode } from "react";
import { ButtonLink } from "./Brand";

export function PageIntro({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-site px-5 py-14 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function ClosingCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-5 py-14 lg:flex-row lg:items-center lg:px-16">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 max-w-xl text-white/75">{text}</p>
        </div>
        <ButtonLink href="/contacto" variant="primary">
          Pedir visita gratuita
        </ButtonLink>
      </div>
    </section>
  );
}
