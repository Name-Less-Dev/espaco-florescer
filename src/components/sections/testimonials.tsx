"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Família atendida",
    role: "Responsáveis por paciente",
    text: "Encontramos acolhimento verdadeiro, escuta sensível e profissionais comprometidas com cada detalhe do desenvolvimento da nossa criança.",
  },
  {
    name: "Mãe de paciente",
    role: "Acompanhamento infantil",
    text: "O cuidado recebido transformou nossa rotina. Hoje temos mais segurança, estratégias claras e evolução visível no dia a dia.",
  },
  {
    name: "Família acompanhada",
    role: "Desenvolvimento e aprendizagem",
    text: "Cada encontro trouxe progresso, confiança e carinho. O atendimento une técnica, sensibilidade e atenção individualizada.",
  },
  {
    name: "Responsável",
    role: "Orientação familiar",
    text: "Nos sentimos acolhidos desde o primeiro contato. Uma equipe humana, preparada e que realmente faz diferença na vida das famílias.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-16 md:py-24 lg:py-28"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,184,204,0.12),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,193,255,0.10),transparent_32%)]" />

      <div className="container-premium relative space-y-12 md:space-y-16">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl space-y-4 text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Depoimentos
          </p>

          <h2 className="text-3xl font-semibold tracking-tight leading-tight md:text-5xl">
            Confiança construída com carinho
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg lg:mx-0">
            Histórias reais de famílias que encontraram acolhimento,
            desenvolvimento e apoio especializado em cada etapa.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group rounded-[30px] border border-black/5 bg-white p-6 md:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
            >
              {/* TOPO */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1 text-primary">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Quote size={18} />
                </div>
              </div>

              {/* TEXTO */}
              <p className="text-base leading-relaxed text-muted md:text-lg">
                “{item.text}”
              </p>

              {/* RODAPÉ */}
              <div className="mt-6 border-t border-black/5 pt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FRASE FINAL */}
        <div className="mx-auto max-w-3xl rounded-[28px] border border-primary/10 bg-white px-6 py-7 text-center shadow-sm">
          <p className="text-lg font-medium tracking-tight md:text-xl">
            Cada evolução compartilhada fortalece nosso propósito.
          </p>

          <p className="mt-2 text-muted">
            Seguimos construindo caminhos com técnica, empatia e parceria com
            cada família.
          </p>
        </div>
      </div>
    </section>
  );
}