import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "B-Edificación Arquitectos Málaga | Reformas integrales" },
  description:
    "Proyecto de arquitecto, obra y licencias en un único equipo. Presupuesto cerrado por contrato en Málaga y la Costa del Sol.",
};

export default function Page() {
  return <HomePage />;
}
