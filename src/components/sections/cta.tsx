"use client";

import Button from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 overflow-hidden">

      {/* fundo emocional */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/5 to-secondary/25" />

      <div className="container-premium relative text-center space-y-10 max-w-3xl">

        {/* TEXTO PRINCIPAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
        >
          Cada criança floresce no seu tempo.
          <br />
          Estamos aqui para ajudar nesse caminho.
        </motion.h2>

        {/* SUBTEXTO */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-muted leading-relaxed"
        >
          Atendimento especializado em neurodesenvolvimento, psicologia e aprendizagem,
          com acolhimento e estratégias personalizadas.
        </motion.p>

        {/* BOTÃO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5513981469779?text=Olá! Gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-8 h-12 text-base">
              Falar no WhatsApp
            </Button>
          </a>
        </motion.div>

        {/* MICRO CONFIANÇA */}
        <p className="text-sm text-muted">
          Atendimento humanizado • Resposta rápida • Acompanhamento especializado
        </p>

      </div>
    </section>
  );
}