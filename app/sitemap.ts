import type { MetadataRoute } from "next";

const routes = [
  "",
  "/servicios",
  "/tipos-reforma",
  "/proyectos",
  "/como-trabajamos",
  "/precios",
  "/opiniones",
  "/por-que-elegirnos",
  "/faq",
  "/contacto",
  "/aviso-legal",
  "/privacidad",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return routes.map((route) => ({
    url: `${base}${route || "/"}`,
    lastModified: new Date(),
  }));
}
