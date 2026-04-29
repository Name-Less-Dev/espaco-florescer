"use client";

import Button from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/motion/reveal";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-soft via-white to-white pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,#efc7d7,transparent_35%)]" />

      <div className="container-premium relative grid grid-cols-1 items-center gap-8 md:gap-14 lg:gap-16 lg:grid-cols-2">

        {/* TEXTO */}
        <div className="space-y-8 text-center lg:text-left">

          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">
              Neurodesenvolvimento • Psicologia • Aprendizagem
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="
              mx-auto lg:mx-0
              max-w-3xl
              text-4xl md:text-6xl lg:text-[62px]
              font-semibold tracking-tight leading-[1.05]
            ">
              Desenvolvimento com acolhimento,
              <span className="block">ciência e cuidado</span>
              <span className="block text-primary">
                individualizado.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="
              mx-auto lg:mx-0
              max-w-xl
              text-lg md:text-xl
              text-muted
              leading-relaxed
            ">
              Atendimento especializado para crianças,
              adolescentes e famílias, promovendo
              aprendizagem, autonomia e bem-estar emocional.
            </p>
          </Reveal>

          {/* BENEFÍCIOS */}
          <Reveal delay={0.25}>
            <div
              className="
                hidden md:grid
                mx-auto
                w-full
                max-w-xl
                gap-3
                text-sm text-muted
                md:grid-cols-2
                text-left
                px-2
                lg:px-0
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Atendimento humanizado
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Equipe especializada
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Estratégias personalizadas
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Apoio à família
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.35}>
            <div className="
              flex flex-col sm:flex-row
              justify-center lg:justify-start
              items-center
              gap-4 pt-2
            ">
              <a
                href="https://wa.me/5513981469779"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Agendar pelo WhatsApp
                </Button>
              </a>

              <Button
                variant="ghost"
                className="gap-2"
                onClick={() => {
                  document.getElementById("servicos")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Conhecer Serviços
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* IMAGEM */}
        <Reveal delay={0.2}>
          <div className="hidden lg:block relative">
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-secondary blur-3xl opacity-60" />

            <div className="rounded-[34px] border border-white/70 bg-white p-3 shadow-[var(--shadow-float)]">
              <div className="h-[560px] rounded-[28px] bg-[url('/hero-clinic.jpeg')] bg-cover bg-center" />
            </div>

            {/* CARD FLUTUANTE */}
            <div className="absolute -bottom-6 -left-6 rounded-[24px] bg-white px-6 py-4 shadow-[var(--shadow-card)]">
              <p className="text-sm text-muted">
                Cuidado especializado para cada fase do desenvolvimento
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}