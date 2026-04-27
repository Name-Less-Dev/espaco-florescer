"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Atendimento humanizado",
  "Equipe especializada",
  "Estratégias personalizadas",
  "Parceria com família e escola",
];

export default function About() {
  return (
    <section id="sobre" className="bg-white">
      <div className="container-premium space-y-16">

        {/* HEADER (mais compacto e forte) */}
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Sobre nós
          </p>

          <h2 className="text-4xl md:text-4xl font-semibold tracking-tight leading-tight">
             Nosso propósito é acompanhar cada fase do desenvolvimento com cuidado e ciência
          </h2>
        </div>

        {/* GRID PRINCIPAL BALANCEADO */}
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* COLUNA TEXTO (quebrado melhor) */}
          <div className="space-y-10 text-muted text-lg leading-relaxed">

            <p>
              O Espaço Florescer atua com uma abordagem humanizada e baseada em evidências,
              integrando psicologia, neurodesenvolvimento e aprendizagem.
            </p>

            <p>
              Nosso trabalho respeita o tempo de cada criança, considerando suas
              necessidades individuais e o contexto familiar.
            </p>

            <p>
              Acreditamos no desenvolvimento como um processo contínuo,
              construído com acolhimento e orientação especializada.
            </p>
          </div>

          {/* COLUNA CARDS (melhor alinhamento visual) */}
          <div className="space-y-4">

            {features.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  flex items-center gap-3
                  rounded-2xl
                  border border-neutral-100
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <CheckCircle2 className="text-primary" size={18} />
                <span className="text-muted">{item}</span>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}