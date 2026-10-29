import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ButtonLink } from "@/components/Brand";
import { PageIntro } from "@/components/PageIntro";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos antes y después",
  description: "Reformas reales en La Malagueta, el Centro Histórico y El Limonar.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Obra entregada"
        title="El antes y el después"
        text="Tres obras con el mismo criterio: plazo escrito, presupuesto cerrado y un arquitecto a pie de obra. Desliza para comparar."
      />
      <section className="mx-auto grid max-w-site gap-12 px-5 py-16 lg:px-16">
        {projects.map((project) => (
          <article key={project.id} className="grid items-center gap-6 lg:grid-cols-2">
            <BeforeAfter
              before={project.before}
              after={project.after}
              beforeAlt={project.beforeAlt}
              afterAlt={project.afterAlt}
              label={`Comparar ${project.title}`}
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">
                {project.place} · {project.meta}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-muted">{project.summary}</p>
              <blockquote className="mt-4 border-l-2 border-terracotta pl-4">
                “{project.quote}”
                <footer className="mt-2 text-sm font-semibold">— {project.author}</footer>
              </blockquote>
              <div className="mt-6">
                <ButtonLink href={`/contacto?proyecto=${project.id}`}>Solicitar un proyecto similar</ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
