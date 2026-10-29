import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type LeadEstimate = {
  m2: number;
  tier: string;
  label: string;
  low: number;
  high: number;
};

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  source: string;
  project: string;
  estimate: LeadEstimate | null;
};

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");
const outboxDir = path.join(dataDir, "outbox");

async function ensureDir(dir: string) {
  await mkdir(dir, { recursive: true });
}

export async function saveLead(lead: Lead) {
  await ensureDir(dataDir);
  let current: Lead[] = [];
  try {
    current = JSON.parse(await readFile(leadsFile, "utf8")) as Lead[];
    if (!Array.isArray(current)) current = [];
  } catch {
    current = [];
  }
  current.push(lead);
  await writeFile(leadsFile, JSON.stringify(current, null, 2), "utf8");
  return lead;
}

export async function saveOutbox(entry: {
  lead: Lead;
  studio: { subject: string; text: string };
  client: { subject: string; text: string } | null;
}) {
  await ensureDir(outboxDir);
  const file = path.join(outboxDir, `${entry.lead.id}.json`);
  await writeFile(file, JSON.stringify(entry, null, 2), "utf8");
}
