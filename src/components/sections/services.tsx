"use client";

import { motion } from "framer-motion";
import { Brain, Users, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Avaliação Neuropsicopedagógica e Psicológica",
    description:
      "Compreensão detalhada do desenvolvimento cognitivo, emocional e comportamental para orientar intervenções precisas.",
  },
  {
    icon: HeartPulse,
    title: "Apoio ao Desenvolvimento",
    description:
      "Intervenções voltadas para aprendizagem, comportamento e autonomia de forma individualizada.",
  },
  {
    icon: Users,
    title: "Orientação Parental e Apoio às Famílias",
    description:
      "Suporte especializado para fortalecer vínculos e estratégias dentro do ambiente familiar.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-soft py-16 md:py-24 lg:py-28"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,184,204,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,193,255,0.10),transparent_30%)]" />

      <div className="container-premium relative space-y-12 md:space-y-16">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl space-y-4 text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Como podemos ajudar
          </p>

          <h2 className="text-3xl font-semibold tracking-tight leading-tight md:text-5xl">
            Acompanhamento completo para o desenvolvimento infantil e familiar
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg lg:mx-0">
            Estratégias personalizadas para promover aprendizagem, autonomia,
            equilíbrio emocional e fortalecimento familiar.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`
                  group rounded-[28px] border border-black/5 bg-white p-6 md:p-8
                  text-center md:text-left
                  shadow-[var(--shadow-card)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[var(--shadow-float)]
                  ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                `}
              >
                {/* ICON */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="mb-3 text-lg font-semibold tracking-tight md:text-xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}