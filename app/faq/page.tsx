import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { ClosingCta, PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Plazos, licencias en Málaga, forma de pago, garantías LOE y zona de trabajo.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Preguntas frecuentes sobre reformas en Málaga"
        text={`Si la tuya no está aquí, llama al ${site.phoneDisplay} y habla con un arquitecto.`}
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <FaqList />
      </section>
      <ClosingCta title="Seguimos por teléfono o por escrito" text="La visita inicial es gratuita y no implica contratar la obra." />
    </>
  );
}
