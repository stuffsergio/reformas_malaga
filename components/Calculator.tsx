"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { formatEuro, estimateRange } from "@/lib/pricing";
import { motionTransition } from "@/lib/motion";
import { tiers, type TierId } from "@/lib/site";

export const ESTIMATE_KEY = "be-estimate";

export function publishEstimate(m2: number, tier: TierId) {
  sessionStorage.setItem(ESTIMATE_KEY, JSON.stringify({ m2, tier }));
  window.dispatchEvent(new Event("be-estimate"));
}

export function Calculator({ destination = "#contacto" }: { destination?: string }) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const transition = motionTransition(reduce, 0.28);
  const [m2, setM2] = useState(90);
  const [tier, setTier] = useState<TierId>("media");
  const range = useMemo(() => estimateRange(m2, tier), [m2, tier]);

  function pin() {
    publishEstimate(range.m2, range.tier);
    if (destination.startsWith("#")) {
      document.querySelector(destination)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push(`${destination}?m2=${range.m2}&gama=${range.tier}`);
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Cálculo instantáneo</p>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">Calcula tu presupuesto estimado</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Ajusta los metros y la gama. El rango usa los precios bajos y altos de esa calidad, sin IVA.
      </p>

      <label className="mt-6 block text-sm font-semibold" htmlFor="superficie">
        Superficie de la vivienda: {range.m2} m²
      </label>
      <input
        id="superficie"
        type="range"
        min={30}
        max={300}
        value={m2}
        onChange={(event) => setM2(Number(event.target.value))}
        className="mt-3 w-full"
      />
      <div className="mt-1 flex justify-between text-xs font-semibold text-muted">
        <span>30 m²</span>
        <span>150 m²</span>
        <span>300 m²</span>
      </div>

      <p className="mt-6 text-sm font-semibold">Gama de acabados</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {tiers.map((item) => {
          const selected = tier === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTier(item.id)}
              className={`relative overflow-hidden rounded-xl border px-3 py-3 text-left text-sm transition-colors duration-200 ${
                selected ? "border-terracotta" : "border-line hover:border-ink/20"
              }`}
            >
              {selected ? (
                <motion.span
                  layoutId="gama-activa"
                  className="absolute inset-0 bg-terracotta/10"
                  transition={transition}
                />
              ) : null}
              <span className="relative block font-semibold">{item.name.split(" / ")[0]}</span>
              <span className="relative mt-1 block text-xs text-muted">{item.point.toLocaleString("es-ES")} €/m² de referencia</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-xl bg-stone px-4 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Rango orientativo sin IVA</p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={`${range.tier}-${range.m2}`}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={motionTransition(reduce, 0.2)}
            className="mt-2 font-display text-3xl font-semibold tracking-tight"
          >
            {formatEuro(range.low)} – {formatEuro(range.high)}
          </motion.p>
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={pin}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white hover:bg-neutral-800"
      >
        Fijar este cálculo en mi presupuesto
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Cada obra es distinta. El presupuesto cerrado se entrega después de la visita técnica y la medición.
      </p>
    </div>
  );
}
