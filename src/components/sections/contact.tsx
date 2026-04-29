"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/button";
import { MapPin, Clock3, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-28"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,184,204,0.12),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,193,255,0.10),transparent_32%)]" />

      <div className="container-premium relative space-y-12 md:space-y-14">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl space-y-4 text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Contato
          </p>

          <h2 className="text-3xl font-semibold tracking-tight leading-tight md:text-5xl">
            Estamos prontos para acolher sua família
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted md:text-lg lg:mx-0">
            Fale conosco para tirar dúvidas, agendar atendimentos e conhecer a
            melhor forma de acompanhamento para sua família.
          </p>
        </div>

        {/* CARD PRINCIPAL */}
        <div className="grid overflow-hidden rounded-[32px] border border-black/5 shadow-[var(--shadow-float)] lg:grid-cols-2">
          {/* INFO */}
          <div className="bg-soft p-6 md:p-10 lg:p-12">
            <div className="space-y-7 text-center md:text-left">
              {/* ENDEREÇO */}
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-4">
                <MapPin className="text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-muted">
                    Avenida Oswaldo Cruz, 1396 (altos)
                    <br />
                    Vicente de Carvalho - Guarujá
                  </p>
                </div>
              </div>

              {/* HORÁRIO */}
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-4">
                <Clock3 className="text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Horários</h3>
                  <p className="text-muted">Seg - Sex: 08h às 18h</p>
                  <p className="text-muted">Sáb: 09h às 12h</p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-4">
                <FaWhatsapp
                  className="text-primary shrink-0"
                  size={22}
                />

                <div className="space-y-2">
                  <h3 className="font-semibold">WhatsApp</h3>

                  <div className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/5513981469779"
                      className="text-muted transition hover:text-primary"
                    >
                      (13) 98146-9779
                    </a>

                    <a
                      href="https://wa.me/5513974045856"
                      className="text-muted transition hover:text-primary"
                    >
                      (13) 97404-5856
                    </a>
                  </div>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-4">
                <FaInstagram
                  className="text-primary shrink-0"
                  size={22}
                />

                <div>
                  <h3 className="font-semibold">Instagram</h3>

                  <a
                    href="https://instagram.com/florescer.neuropsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-primary"
                  >
                    @florescer.neuropsi
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="https://wa.me/5513981469779?text=Olá! Gostaria de agendar um atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto">
                    Agendar Atendimento
                  </Button>
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Avenida+Oswaldo+Cruz+1396+Vicente+de+Carvalho+Guarujá"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="w-full gap-2 sm:w-auto"
                  >
                    <Navigation size={16} />
                    Traçar Rota
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative min-h-[340px] md:min-h-[420px] lg:min-h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455.7832908273433!2d-46.2920864!3d-23.9510207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03da71214ed5%3A0x945c82ad28950aff!2sAv.%20Oswaldo%20Cruz%2C%201396%20-%20Vicente%20de%20Carvalho%2C%20Guaruj%C3%A1%20-%20SP%2C%2011460-103!5e0!3m2!1sen!2sbr!4v1777323989570!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}