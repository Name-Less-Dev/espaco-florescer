"use client";

import Button from "@/components/ui/button";
import NavLink from "@/components/ui/nav-link";
import { cn } from "@/lib/cn";
import { useNavbar } from "@/hooks/use-navbar";
import Image from "next/image";

export default function Navbar() {
  const { scrolled, activeSection } = useNavbar();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "h-16 bg-white/75 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "h-20 bg-transparent"
      )}
    >
      <div className="container-premium flex h-full items-center justify-between">
        {/* LOGO */}
        <a
          href="#inicio"
          className="
            absolute left-1/2 -translate-x-1/2
            md:static md:translate-x-0
            flex items-center
          "
        >
          <Image
            src="/Logo.png"
            alt="Espaço Florescer"
            width={170}
            height={44}
            priority
            className="max-h-12 w-auto"
          />
        </a>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <NavLink
            href="#inicio"
            active={activeSection === "inicio"}
          >
            Início
          </NavLink>

          <NavLink
            href="#sobre"
            active={activeSection === "sobre"}
          >
            Sobre
          </NavLink>

          <NavLink
            href="#depoimentos"
            active={activeSection === "depoimentos"}
          >
            Depoimentos
          </NavLink>

          <NavLink
            href="#servicos"
            active={activeSection === "servicos"}
          >
            Serviços
          </NavLink>

          <NavLink
            href="#galeria"
            active={activeSection === "galeria"}
          >
            Galeria
          </NavLink>

          <NavLink
            href="#contato"
            active={activeSection === "contato"}
          >
            Contato
          </NavLink>
        </nav>

        {/* CTA */}
        <a href="#cta">
          <Button className="hidden h-11 px-6 text-sm md:inline-flex">
            Agendar Consulta
          </Button>
        </a>
      </div>
    </header>
  );
}