"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ESTIMATE_KEY } from "./Calculator";
import { estimateRange, formatEuro } from "@/lib/pricing";
import { motionTransition } from "@/lib/motion";
import type { TierId } from "@/lib/site";
import { site } from "@/lib/site";

type Estimate = ReturnType<typeof estimateRange>;

const tiers = new Set<TierId>(["basica", "media", "completa"]);

function readEstimate(): Estimate | null {
  const params = new URLSearchParams(window.location.search);
  const fromQueryTier = params.get("gama");
  const fromQueryM2 = params.get("m2");
  if (fromQueryTier && tiers.has(fromQueryTier as TierId) && fromQueryM2) {
    return estimateRange(Number(fromQueryM2), fromQueryTier as TierId);
  }
  const stored = sessionStorage.getItem(ESTIMATE_KEY);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored) as { m2?: number; tier?: string };
    if (parsed.tier && tiers.has(parsed.tier as TierId)) {
      return estimateRange(Number(parsed.m2), parsed.tier as TierId);
    }
  } catch {
    return null;
  }
  return null;
}

export function ContactForm({
  source,
  project = "",
  initialMessage = "",
}: {
  source: string;
  project?: string;
  initialMessage?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [privacy, setPrivacy] = useState(false);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    setEstimate(readEstimate());
    const sync = () => setEstimate(readEstimate());
    window.addEventListener("be-estimate", sync);
    return () => window.removeEventListener("be-estimate", sync);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");
    const form = event.currentTarget;
    const company = (form.elements.namedItem("company") as HTMLInputElement | null)?.value ?? "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          privacy,
          company,
          source,
          project,
          estimate: estimate ? { m2: estimate.m2, tier: estimate.tier } : null,
        }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        emailed?: boolean;
        clientNotified?: boolean;
      };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setNotice(data.error || "No hemos podido enviar la solicitud.");
        return;
      }
      setStatus("sent");
      if (data.clientNotified) {
        setNotice("Solicitud registrada. Te hemos enviado un correo de confirmación y un arquitecto te contactará en menos de 24 horas laborables.");
      } else if (data.emailed) {
        setNotice("Solicitud registrada. El estudio ya tiene tu teléfono y te llamará en menos de 24 horas laborables.");
      } else if (process.env.NODE_ENV === "development") {
        setNotice("Solicitud guardada. En este entorno no hay SMTP: el aviso al estudio y la respuesta al cliente están en data/outbox.");
      } else {
        setNotice("Solicitud registrada. Un arquitecto te contactará en menos de 24 horas laborables.");
      }
    } catch {
      setStatus("error");
      setNotice("No hay conexión con el estudio. Llámanos y tomamos la solicitud por teléfono.");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        className="rounded-2xl border border-line bg-white p-6 sm:p-8"
        role="status"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={motionTransition(reduce, 0.32)}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Solicitud recibida</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">Gracias, {name.split(" ")[0]}.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{notice}</p>
        <p className="mt-4 text-sm">
          Si prefieres no esperar:{" "}
          <a className="font-semibold text-terracotta" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8" noValidate>
      <div className="grid gap-4">
        <label className="grid gap-1.5 text-sm font-semibold">
          Nombre y apellidos
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ej. Juan Gómez"
            autoComplete="name"
            className="min-h-12 rounded-lg border border-line px-3 font-normal outline-none focus:border-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Teléfono móvil
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Ej. 650 12 34 56"
            autoComplete="tel"
            inputMode="tel"
            className="min-h-12 rounded-lg border border-line px-3 font-normal outline-none focus:border-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Correo electrónico
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Ej. juan@ejemplo.com"
            autoComplete="email"
            className="min-h-12 rounded-lg border border-line px-3 font-normal outline-none focus:border-ink"
          />
          <span className="font-normal text-muted">Si lo dejas, te enviamos la confirmación al momento.</span>
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Mensaje
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            placeholder="Ubicación, metros, tipo de obra..."
            className="rounded-lg border border-line px-3 py-3 font-normal outline-none focus:border-ink"
          />
        </label>
        {estimate ? (
          <p className="rounded-xl bg-terracotta/10 px-3 py-3 text-sm text-ink">
            Incluimos tu estimación: {estimate.m2} m² · {estimate.label} · {formatEuro(estimate.low)} – {formatEuro(estimate.high)} sin IVA.
          </p>
        ) : null}
        <label className="flex items-start gap-3 text-sm font-normal leading-relaxed">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(event) => setPrivacy(event.target.checked)}
            required
            className="mt-1 h-4 w-4 accent-terracotta"
          />
          <span>
            Acepto la <Link href="/privacidad" className="font-semibold underline">política de privacidad</Link> y autorizo a {site.shortName} a contactarme para valorar el proyecto.
          </span>
        </label>
        <div className="sr-only" aria-hidden="true">
          <label>
            Empresa
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        {notice ? (
          <p className="text-sm font-semibold text-red-700" role="alert">
            {notice}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-semibold text-white hover:bg-terracotta-dark disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Quiero mi presupuesto gratis"}
        </button>
        <p className="text-xs text-muted">Sin compromiso. La visita técnica inicial no tiene coste.</p>
      </div>
    </form>
  );
}
