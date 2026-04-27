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
    <section id="servicos" className="bg-soft py-28">
      <div className="container-premium space-y-16">

        {/* HEADER */}
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Como podemos ajudar
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Acompanhamento completo para o desenvolvimento infantil e familiar
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  group rounded-[28px] bg-white p-8 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md
                  ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                `}
              >
                {/* ICON */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}