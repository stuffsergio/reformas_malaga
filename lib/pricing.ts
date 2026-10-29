import type { TierId } from "./site";
import { tiers } from "./site";

export function tierById(id: TierId) {
  return tiers.find((tier) => tier.id === id) ?? tiers[1];
}

export function estimateRange(m2: number, id: TierId) {
  const tier = tierById(id);
  const surface = clampSurface(m2);
  return {
    m2: surface,
    tier: tier.id,
    label: tier.name,
    low: surface * tier.low,
    high: surface * tier.high,
  };
}

export function clampSurface(m2: number) {
  if (!Number.isFinite(m2)) return 90;
  return Math.min(300, Math.max(30, Math.round(m2)));
}

export function formatEuro(value: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
