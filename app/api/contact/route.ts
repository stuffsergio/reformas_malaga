import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/mail";
import { estimateRange } from "@/lib/pricing";
import type { TierId } from "@/lib/site";

export const runtime = "nodejs";

const hits = new Map<string, number[]>();
const tiers = new Set<TierId>(["basica", "media", "completa"]);

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < 60 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function text(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Has enviado varias solicitudes. Llámanos y te atendemos directamente." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "No hemos podido leer el formulario." }, { status: 400 });
  }

  if (text(body.company, 80)) {
    return NextResponse.json({ ok: true, stored: true, emailed: false, clientNotified: false });
  }

  const name = text(body.name, 80);
  const phone = text(body.phone, 24);
  const email = text(body.email, 120);
  const message = text(body.message, 2000);
  const source = text(body.source, 120);
  const project = text(body.project, 80);
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Escribe tu nombre y apellidos." }, { status: 400 });
  }
  if (digits.length < 9 || digits.length > 15) {
    return NextResponse.json({ ok: false, error: "Revisa el teléfono. Necesitamos un número válido." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "El correo no tiene un formato válido." }, { status: 400 });
  }
  if (body.privacy !== true) {
    return NextResponse.json(
      { ok: false, error: "Acepta la política de privacidad para que podamos contactarte." },
      { status: 400 },
    );
  }

  let estimate = null;
  const raw = body.estimate;
  if (raw && typeof raw === "object") {
    const tier = String((raw as { tier?: unknown }).tier);
    if (tiers.has(tier as TierId)) {
      estimate = estimateRange(Number((raw as { m2?: unknown }).m2), tier as TierId);
    }
  }

  try {
    const result = await deliverLead({
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      name,
      phone,
      email,
      message,
      source,
      project,
      estimate,
    });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "No hemos podido registrar la solicitud. Llámanos y la tomamos por teléfono." },
      { status: 500 },
    );
  }
}
