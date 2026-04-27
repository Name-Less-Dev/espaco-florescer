"use client";

import Button from "@/components/ui/button";
import NavLink from "@/components/ui/nav-link";
import { cn } from "@/lib/cn";
import { useNavbar } from "@/hooks/use-navbar";

export default function Navbar() {
  const { scrolled, activeSection } = useNavbar();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)] h-16"
            : "bg-transparent h-20"
      )}
    >
      <div className="container-premium flex h-full items-center justify-between">

        {/* LOGO */}
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          Espaço Florescer
        </a>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="#inicio" active={activeSection === "inicio"}>
            Início
          </NavLink>

          <NavLink href="#sobre" active={activeSection === "sobre"}>
            Sobre
          </NavLink>

          <NavLink href="#servicos" active={activeSection === "servicos"}>
            Serviços
          </NavLink>

          <NavLink href="#contato" active={activeSection === "contato"}>
            Contato
          </NavLink>
        </nav>

        {/* CTA */}
        <a href="#cta">
          <Button className="hidden md:inline-flex h-11 px-6 text-sm">
            Agendar Consulta
          </Button>
        </a>
      </div>
    </header>
  );
}