"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-soft">
      {/* Glow decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,184,204,0.10),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(214,193,255,0.10),transparent_28%)]" />

      <div className="container-premium relative py-14 md:py-16">
        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
          {/* BRAND */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight">
              Cuidado com sensibilidade e ciência
            </h3>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted md:mx-0">
              Desenvolvimento infantil, acolhimento familiar e acompanhamento
              especializado para cada fase da jornada.
            </p>

            <p className="text-xs text-muted">
              © 2026 Espaço Florescer — Todos os direitos reservados.
            </p>
          </div>

          {/* LINKS */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>

            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="#inicio" className="transition hover:text-primary">
                Início
              </a>

              <a href="#sobre" className="transition hover:text-primary">
                Sobre
              </a>

              <a href="#depoimentos" className="transition hover:text-primary">
                Depoimentos
              </a>

              <a href="#servicos" className="transition hover:text-primary">
                Serviços
              </a>

              <a href="#galeria" className="transition hover:text-primary">
                Galeria
              </a>

              <a href="#contato" className="transition hover:text-primary">
                Contato
              </a>
            </div>
          </div>

          {/* CONTATO */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>

            <div className="space-y-2 text-sm text-muted">
              <p>(13) 98146-9779</p>
              <p>(13) 97404-5856</p>
              <p>@florescer.neuropsi</p>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center gap-3 pt-2 md:justify-start">
              <a
                href="https://instagram.com/florescer.neuropsi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-muted shadow-sm transition hover:-translate-y-0.5 hover:text-primary"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://wa.me/5513981469779"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-muted shadow-sm transition hover:-translate-y-0.5 hover:text-[#25D366]"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ ORIGINAL */}
      <div className="bg-primary/5">
        <div className="container-premium py-2 text-center">
          <p className="text-xs text-muted">
            Desenvolvido com cuidado para promover conexões humanas e
            desenvolvimento.
          </p>
        </div>
      </div>
    </footer>
  );
}