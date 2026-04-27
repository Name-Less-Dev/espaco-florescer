"use client";

import Button from "@/components/ui/button";
import {
  MapPin,
  Clock3,
  Phone,
  AtSign,
  Navigation,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="bg-white py-28">

      <div className="container-premium space-y-14">

        {/* HEADER */}
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Contato
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Estamos prontos para acolher sua família
          </h2>
        </div>

        {/* CARD PRINCIPAL */}
        <div className="grid lg:grid-cols-2 rounded-[36px] overflow-hidden shadow-[var(--shadow-float)]">

          {/* INFO */}
          <div className="p-10 md:p-12 space-y-8 bg-soft">

            {/* ENDEREÇO */}
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-muted">
                  Avenida Oswaldo Cruz, 1396 (altos)<br />
                  Vicente de Carvalho - Guarujá
                </p>
              </div>
            </div>

            {/* HORÁRIO */}
            <div className="flex gap-4">
              <Clock3 className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Horários</h3>
                <p className="text-muted">Seg - Sex: 08h às 18h</p>
                <p className="text-muted">Sáb: 09h às 12h</p>
              </div>
            </div>

            {/* CONTATO */}
            <div className="flex gap-4 items-start">
              <Phone className="text-primary mt-1 shrink-0" />

              <div className="space-y-2">
                <h3 className="font-semibold">WhatsApp</h3>

                <div className="flex flex-col gap-1">
                  <a
                    href="https://wa.me/5513981469779"
                    className="text-muted hover:text-primary transition"
                  >
                    (13) 98146-9779
                  </a>

                  <a
                    href="https://wa.me/5513974045856"
                    className="text-muted hover:text-primary transition"
                  >
                    (13) 97404-5856
                  </a>
                </div>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="flex gap-4">
              <AtSign className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <a
                  href="https://instagram.com/florescer.neuropsi"
                  className="text-muted hover:text-primary transition"
                >
                  @florescer.neuropsi
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/5513981469779?text=Olá! Gostaria de agendar um atendimento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Agendar Atendimento
                </Button>
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Avenida+Oswaldo+Cruz+1396+Vicente+de+Carvalho+Guarujá"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="gap-2">
                  <Navigation size={16} />
                  Traçar Rota
                </Button>
              </a>
            </div>
          </div>

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative min-h-[520px]"
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