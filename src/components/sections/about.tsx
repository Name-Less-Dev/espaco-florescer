"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const professionals = [
  {
    name: "Giovana Almeida",
    role: "Psicóloga • Terapia Cognitivo-Comportamental",
    image: "/giovana.jpeg",
    description:
      "Psicóloga com atuação baseada na Terapia Cognitivo-Comportamental (TCC), pós-graduada em Análise do Comportamento Aplicada e especialista em Neuropsicologia. Possui experiência no atendimento infantil, adolescente e adulto, com foco em saúde emocional e desenvolvimento individualizado.",
    badges: [
      "TCC",
      "Neuropsicologia",
      "ABA",
      "Atendimento Humanizado",
    ],
    icon: HeartHandshake,
  },
  {
    name: "Carolina Alves",
    role: "Professora • Neuropsicopedagoga",
    image: "/carolina.jpeg",
    description:
      "Profissional com mais de 15 anos de experiência no trabalho com crianças e adolescentes. Formação em Letras e Educação Especial, com pós-graduação em Neuropsicopedagogia e Neurociência do Comportamento Humano. Atua também com orientação parental e educação positiva.",
    badges: [
      "+15 anos experiência",
      "Educação Especial",
      "Orientação Parental",
      "Aprendizagem",
    ],
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,193,255,0.14),transparent_35%)]" />

      <div className="container-premium relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            <Sparkles size={14} />
            Equipe Especializada
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Conheça quem conduz cada jornada com cuidado e ciência
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Profissionais comprometidas com o desenvolvimento infantil,
            aprendizagem e bem-estar emocional, oferecendo atendimento
            individualizado para cada família.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {professionals.map((person, index) => {
            const Icon = person.icon;

            return (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-black/5 bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] md:p-7"
              >
                <div className="grid gap-6 md:grid-cols-[280px_1fr] md:items-stretch">
                  {/* Foto */}
                  <div className="relative mx-auto h-full w-full max-w-[280px]">
                    <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[28px] border border-black/5 bg-soft">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-5 text-center md:text-left">
                    <div>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight">
                        {person.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {person.role}
                      </p>
                    </div>

                    <p className="leading-relaxed text-muted">
                      {person.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                      {person.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}