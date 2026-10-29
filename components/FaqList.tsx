"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { faqs } from "@/lib/site";
import { motionTransition } from "@/lib/motion";

export function FaqList({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const transition = motionTransition(reduce, 0.28);

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              {item.q}
              <motion.span
                aria-hidden="true"
                className="text-lg leading-none text-terracotta"
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={transition}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={transition}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
