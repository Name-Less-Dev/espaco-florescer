import { AtSign, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-soft border-t border-white/60">

      <div className="container-premium py-16 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight">
            Espaço Florescer
          </h3>

          <p className="text-muted leading-relaxed text-sm">
            Cuidado, ciência e acolhimento no desenvolvimento infantil e familiar.
          </p>

          <p className="text-xs text-muted">
            © 2026 Espaço Florescer — Todos os direitos reservados.
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-4 text-sm">
          <h4 className="font-semibold">Navegação</h4>

          <div className="flex flex-col gap-2 text-muted">
            <a href="#inicio" className="hover:text-primary transition">Início</a>
            <a href="#sobre" className="hover:text-primary transition">Sobre</a>
            <a href="#servicos" className="hover:text-primary transition">Serviços</a>
            <a href="#contato" className="hover:text-primary transition">Contato</a>
          </div>
        </div>

        {/* CONTATO RESUMIDO */}
        <div className="space-y-4 text-sm">
          <h4 className="font-semibold">Contato</h4>

          <div className="text-muted space-y-2">
            <p>(13) 98146-9779</p>
            <p>(13) 97404-5856</p>
            <p>@florescer.neuropsi</p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://instagram.com/florescer.neuropsi"
              className="text-muted hover:text-primary transition"
            >
              <AtSign size={18} />
            </a>

            <a
              href="https://wa.me/5513981469779"
              className="text-muted hover:text-primary transition"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* LINHA FINAL (emocional + refinada) */}
      <div className="bg-primary/5">
        <div className="container-premium py-2 text-center">
          <p className="text-xs text-muted">
            Desenvolvido com cuidado para promover conexões humanas e desenvolvimento.
          </p>
        </div>
      </div>

    </footer>
  );
}