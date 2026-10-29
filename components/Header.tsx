"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink, Logo } from "./Brand";
import { motionTransition } from "@/lib/motion";
import { nav, site } from "@/lib/site";

const extra = [
  { href: "/por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const transition = motionTransition(reduce, 0.28);
  const links = [...nav, ...extra];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-4 px-5 lg:px-16">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-terracotta after:transition-transform after:duration-200 ${
                  active ? "text-terracotta after:scale-x-100" : "text-ink/80 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden xl:block">
          <ButtonLink href="/contacto">Pide presupuesto gratis</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-full bg-ink"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={transition}
            />
            <motion.span
              className="absolute left-0 top-1.5 h-0.5 w-full bg-ink"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={transition}
            />
            <motion.span
              className="absolute left-0 top-3 h-0.5 w-full bg-ink"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={transition}
            />
          </span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            id="menu-movil"
            aria-label="Móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            className="overflow-hidden border-t border-line bg-canvas xl:hidden"
          >
            <ul className="grid gap-1 px-5 py-4">
              {links.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={motionTransition(reduce, 0.22 + index * 0.03)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold transition-colors duration-200 hover:bg-stone"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="grid gap-2 px-5 pb-4">
              <ButtonLink href="/contacto">Pide presupuesto gratis</ButtonLink>
              <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost">
                Llamar al {site.phoneDisplay}
              </ButtonLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
