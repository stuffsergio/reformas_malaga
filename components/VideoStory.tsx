"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { videoStory } from "@/lib/site";
import { motionTransition } from "@/lib/motion";

export function VideoStory() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const transition = motionTransition(reduce, 0.28);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="group relative block w-full overflow-hidden rounded-2xl text-left">
        <img src={videoStory.image} alt="Elena y Gonzalo en su vivienda reformada en Calle Molina Lario" className="h-72 w-full object-cover transition duration-500 ease-out group-hover:scale-105 sm:h-80" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <span className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Caso de Elena y Gonzalo</span>
          <span className="mt-2 block font-display text-2xl font-semibold leading-tight">“{videoStory.title}”</span>
          <span className="mt-3 inline-flex min-h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-ink transition duration-200 group-hover:-translate-y-0.5">
            Leer el caso
          </span>
        </span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="caso-titulo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-canvas p-6 shadow-modal sm:p-8"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={transition}
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{videoStory.place}</p>
              <h3 id="caso-titulo" className="mt-3 font-display text-2xl font-semibold">
                {videoStory.people}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{videoStory.body}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-800"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
