"use client";

import { cn } from "@/lib/cn";

type Props = {
  href: string;
  active?: boolean;
  children: React.ReactNode;
};

export default function NavLink({ href, active, children }: Props) {
  return (
    <a
      href={href}
      className={cn(
        "relative text-sm transition",
        active ? "text-primary" : "text-muted hover:text-primary"
      )}
    >
      {children}

      {/* underline animado (ativo + hover) */}
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-primary transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </a>
  );
}