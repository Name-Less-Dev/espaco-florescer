"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const images = [
  {
    src: "/gallery/1.jpeg",
    alt: "Ambiente da clínica",
    large: true,
  },
  {
    src: "/gallery/2.jpeg",
    alt: "Espaço infantil acolhedor",
  },
  {
    src: "/gallery/3.jpeg",
    alt: "Atividades pedagógicas",
  },
  {
    src: "/gallery/4.jpeg",
    alt: "Atendimento especializado",
  },
  {
    src: "/gallery/5.jpeg",
    alt: "Materiais de aprendizagem",
  },
  {
    src: "/gallery/6.jpeg",
    alt: "Vivências educativas",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-28"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,184,204,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(214,193,255,0.10),transparent_30%)]" />

      <div className="container-premium relative space-y-12 md:space-y-16">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl space-y-4 text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Galeria
          </p>

          <h2 className="text-3xl font-semibold tracking-tight leading-tight md:text-5xl">
            Ambiente pensado para florescer
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg lg:mx-0">
            Conheça nosso espaço acolhedor, estruturado para promover
            desenvolvimento, aprendizagem e bem-estar em cada atendimento.
          </p>
        </div>

        {/* DESKTOP PREMIUM GRID */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-3">
          {/* Imagem destaque */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="group relative col-span-2 row-span-2 min-h-[620px] overflow-hidden rounded-[34px] shadow-[var(--shadow-float)]"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
              <p className="text-sm font-medium">
                Espaço acolhedor e preparado para cada jornada
              </p>
            </div>
          </motion.div>

          {/* Laterais */}
          {images.slice(1).map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative min-h-[300px] overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </motion.div>
          ))}
        </div>

        {/* MOBILE / TABLET */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[26px] shadow-[var(--shadow-card)] ${
                index === 0
                  ? "min-h-[320px] sm:col-span-2"
                  : "min-h-[220px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* FRASE FINAL */}
        <div className="mx-auto max-w-3xl rounded-[28px] border border-primary/10 bg-soft px-6 py-7 text-center">
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
            <Camera size={18} />
          </div>

          <p className="text-lg font-medium tracking-tight md:text-xl">
            Um ambiente preparado para acolher e desenvolver.
          </p>

          <p className="mt-2 text-muted">
            Cada detalhe foi pensado para oferecer conforto, segurança e
            experiências positivas para crianças e famílias.
          </p>
        </div>
      </div>
    </section>
  );
}