import nodemailer from "nodemailer";
import { formatEuro } from "./pricing";
import { saveLead, saveOutbox, type Lead } from "./leads";
import { site } from "./site";

export type DeliveryResult = {
  stored: true;
  emailed: boolean;
  clientNotified: boolean;
};

function smtpReady() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.MAIL_TO);
}

function studioText(lead: Lead) {
  const estimate = lead.estimate
    ? `${lead.estimate.m2} m² · ${lead.estimate.label} · ${formatEuro(lead.estimate.low)} – ${formatEuro(lead.estimate.high)} sin IVA`
    : "Sin calculadora";
  return [
    `Nueva solicitud de reforma`,
    ``,
    `Nombre: ${lead.name}`,
    `Teléfono: ${lead.phone}`,
    `Email: ${lead.email || "No indicado"}`,
    `Origen: ${lead.source || "/"}`,
    `Proyecto de referencia: ${lead.project || "No indicado"}`,
    `Estimación: ${estimate}`,
    ``,
    `Mensaje:`,
    lead.message || "Sin mensaje",
    ``,
    `Recibida: ${lead.createdAt}`,
    `Id: ${lead.id}`,
  ].join("\n");
}

function clientText(lead: Lead) {
  const first = lead.name.split(" ")[0];
  const estimate = lead.estimate
    ? `Has pedido una orientación para ${lead.estimate.m2} m² en gama ${lead.estimate.label.toLowerCase()}: ${formatEuro(lead.estimate.low)} – ${formatEuro(lead.estimate.high)}, sin IVA. Es un rango de mercado, no el presupuesto cerrado. Ese precio se fija tras la visita y la medición.`
    : `No has adjuntado metros. En la visita tomamos medidas y preparamos el presupuesto cerrado.`;
  return [
    `Hola ${first},`,
    ``,
    `Hemos recibido tu solicitud en ${site.name}. Un arquitecto del estudio la revisa y te contacta en menos de 24 horas laborables.`,
    ``,
    estimate,
    ``,
    lead.message ? `Esto es lo que nos has contado:\n${lead.message}` : ``,
    ``,
    `Si prefieres hablar ahora: ${site.phoneDisplay}, de ${site.hours.toLowerCase()}.`,
    `Estudio: ${site.addressLine}, ${site.postalCode} ${site.city}.`,
    ``,
    `${site.shortName}`,
  ]
    .filter((line) => line !== `` || true)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}

function transporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  await saveLead(lead);

  const studio = {
    subject: `[${site.shortName}] Nueva solicitud de ${lead.name}`,
    text: studioText(lead),
  };
  const client = lead.email
    ? {
        subject: `${lead.name.split(" ")[0]}, hemos recibido tu solicitud de reforma`,
        text: clientText(lead),
      }
    : null;

  if (!smtpReady()) {
    await saveOutbox({ lead, studio, client });
    return { stored: true, emailed: false, clientNotified: false };
  }

  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const mailer = transporter();

  await mailer.sendMail({
    from,
    to: process.env.MAIL_TO,
    replyTo: lead.email || undefined,
    subject: studio.subject,
    text: studio.text,
  });

  if (client && lead.email) {
    await mailer.sendMail({
      from,
      to: lead.email,
      replyTo: process.env.MAIL_TO,
      subject: client.subject,
      text: client.text,
    });
  }

  return { stored: true, emailed: true, clientNotified: Boolean(client) };
}
