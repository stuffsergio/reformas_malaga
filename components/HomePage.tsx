import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ButtonLink } from "@/components/Brand";
import { Calculator } from "@/components/Calculator";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { VideoStory } from "@/components/VideoStory";
import {
  comparison,
  projects,
  reasons,
  reformTypes,
  related,
  reviews,
  services,
  site,
  stats,
  steps,
  tiers,
  trusts,
  whatsappHref,
} from "@/lib/site";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{children}</p>;
}

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-site items-center gap-10 px-5 pb-16 pt-8 lg:grid-cols-2 lg:px-16 lg:pb-24 lg:pt-14">
        <div>
          <p className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Estudio de arquitectura e interiorismo colegiado en Málaga
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[54px]">
            Reformas integrales en Málaga, de la idea a las <span className="text-terracotta">llaves en la mano.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Proyecto de arquitecto, obra y licencias en un único equipo. Presupuesto cerrado por contrato y sin sorpresas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contacto">Solicitar presupuesto gratis</ButtonLink>
            <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost">
              Llamar al {site.phoneDisplay}
            </ButtonLink>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Presupuesto cerrado", "Sin desviaciones por contrato"],
              ["Un único interlocutor", "Arquitecto responsable asignado"],
              ["Gestión de licencias", "Trámite completo en Urbanismo"],
            ].map(([title, text]) => (
              <li key={title} className="rounded-xl border border-line bg-white px-3 py-3">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[520px]">
            <Image
              src="/images/hero.jpg"
              alt="Vivienda reformada y luminosa en Málaga, con diseño de arquitecto"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-card backdrop-blur sm:left-auto sm:w-80">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-terracotta">Último proyecto entregado</p>
            <p className="mt-1 font-display text-lg font-semibold">Reforma integral La Malagueta</p>
            <p className="mt-1 text-sm text-muted">145 m² · Eficiencia clase A · Llave en mano</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-site gap-4 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
          {stats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-line bg-canvas p-5">
              <p className="font-display text-4xl font-semibold tracking-tight">{item.value}</p>
              <p className="mt-2 text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-xs text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto max-w-site px-5 pb-8 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-muted lg:px-16">
          Colegiados y avalados por {trusts.join(" · ")}
        </p>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
        <Eyebrow>Proceso integral</Eyebrow>
        <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Qué incluye una reforma integral en {site.shortName}
          </h2>
          <p className="max-w-md text-muted">Un equipo de arquitectos y especialistas propios, sin intermediarios ni desviaciones.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.step} className="rounded-2xl border border-line bg-white p-6">
              <p className="font-display text-sm font-semibold text-terracotta">{service.step}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink/60">{service.tags.join(" · ")}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-stone px-6 py-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold">¿Tienes una vivienda o un local que quieres reformar?</h3>
            <p className="mt-1 text-sm text-muted">Un arquitecto colegiado visita el inmueble sin coste.</p>
          </div>
          <ButtonLink href="/contacto">Solicitar valoración gratuita</ButtonLink>
        </div>
      </section>

      <section className="border-y border-line bg-stone">
        <div className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
          <Eyebrow>Obra en Málaga y provincia</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">Tipos de reforma</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {reformTypes.map((type, index) => (
              <article key={type.id} className={`overflow-hidden rounded-2xl border border-line bg-white ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}>
                <div className={`relative ${index === 0 ? "h-64 lg:h-full lg:min-h-72" : "h-48"}`}>
                  <Image src={type.image} alt={type.title} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold">{type.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{type.text}</p>
                  <Link href={`/tipos-reforma#${type.id}`} className="mt-4 inline-flex text-sm font-semibold text-terracotta">
                    Ver este tipo de obra
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
        <Eyebrow>Antes y después</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Proyectos destacados</h2>
        <p className="mt-3 max-w-2xl text-muted">Desliza el control para comparar el cambio real de tres obras en Málaga.</p>
        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <article key={project.id} className="grid items-center gap-6 rounded-3xl border border-line bg-white p-4 lg:grid-cols-2 lg:p-6">
              <BeforeAfter
                before={project.before}
                after={project.after}
                beforeAlt={project.beforeAlt}
                afterAlt={project.afterAlt}
                label={`Comparar antes y después: ${project.title}`}
              />
              <div className="px-2 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">
                  {project.place} · {project.meta}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                <blockquote className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed">
                  “{project.quote}”
                  <footer className="mt-2 font-semibold">— {project.author}</footer>
                </blockquote>
                <div className="mt-5">
                  <ButtonLink href={`/contacto?proyecto=${project.id}`}>Solicitar un proyecto similar</ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-stone">
        <div className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
          <Eyebrow>Cinco pasos</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Cómo trabajamos, hasta las llaves
          </h2>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.n} className="rounded-2xl border border-line bg-white p-5">
                <p className="font-display text-sm text-terracotta">{step.n}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em]">{step.time}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
        <Eyebrow>Precios en Málaga</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Cuánto cuesta una reforma, por m²
        </h2>
        <p className="mt-3 max-w-2xl text-muted">Rangos de mercado para reformas con proyecto técnico de arquitecto. Sin IVA.</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`rounded-2xl border p-6 ${tier.featured ? "border-terracotta bg-white shadow-card" : "border-line bg-white"}`}
            >
              {tier.featured ? (
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">La más pedida</p>
              ) : null}
              <h3 className="mt-2 font-display text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 font-display text-3xl font-semibold">{tier.range}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tier.text}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {tier.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-terracotta" aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Calculator />
        </div>
      </section>

      <section className="border-y border-line bg-stone">
        <div className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
          <Eyebrow>4,9 / 5 en Google</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Lo que opinan en Málaga</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.name} className="rounded-2xl border border-line bg-white p-6">
                <p className="text-sm tracking-widest text-terracotta" aria-label="5 de 5">★★★★★</p>
                <blockquote className="mt-4 text-sm leading-relaxed">“{review.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-semibold text-white">{review.initials}</span>
                  <span>
                    <span className="block text-sm font-semibold">{review.name}</span>
                    <span className="block text-xs text-muted">{review.place}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8">
            <VideoStory />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 lg:px-16 lg:py-24">
        <Eyebrow>Rigor de arquitecto</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">Por qué elegirnos</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-line p-5">
              <h3 className="font-display text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
          <table className="min-w-[680px] w-full text-left text-sm">
            <caption className="border-b border-line px-4 py-4 text-left font-display text-lg font-semibold">
              {site.shortName} frente a contratar oficios por separado
            </caption>
            <thead className="bg-stone text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold">Con el estudio</th>
                <th className="px-4 py-3 font-semibold">Oficios sueltos</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row[0]} className="border-t border-line">
                  <th className="px-4 py-3 font-semibold">{row[0]}</th>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3 text-muted">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-line bg-stone">
        <div className="mx-auto grid max-w-site gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
          <div>
            <Eyebrow>Antes de decidir</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Preguntas frecuentes</h2>
            <p className="mt-4 text-muted">Si la tuya no está, llámanos al {site.phoneDisplay} y habla con un arquitecto.</p>
            <div className="mt-6">
              <ButtonLink href="/faq" variant="ghost">Ver todas las preguntas</ButtonLink>
            </div>
          </div>
          <FaqList />
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 lg:px-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Servicios de arquitectura relacionados</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {related.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line p-6">
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-terracotta">
                Consultar este servicio
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-16 lg:grid-cols-2 lg:px-16 lg:py-24">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuéntanos tu reforma y te respondemos en 24 horas
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              Visita y asesoramiento inicial gratuitos en tu vivienda o local de Málaga y la Costa del Sol.
            </p>
            <dl className="mt-8 grid gap-4 text-sm">
              <div>
                <dt className="text-white/50">Teléfono</dt>
                <dd className="mt-1 text-lg font-semibold">
                  <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Correo</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Estudio</dt>
                <dd className="mt-1">
                  {site.addressLine}, {site.postalCode} {site.city}
                  <br />
                  {site.hours}
                </dd>
              </div>
              <div>
                <dt className="text-white/50">WhatsApp</dt>
                <dd className="mt-1">
                  <a href={whatsappHref()} className="font-semibold text-white underline">
                    Escribir ahora
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm source="/" />
        </div>
      </section>
    </>
  );
}
