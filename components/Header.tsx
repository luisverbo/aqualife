"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import Logo from "./Logo";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-agua-profunda/80 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-papel/80 transition-colors hover:text-papel"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-azul-piscina px-5 py-2.5 font-body text-sm font-semibold text-agua-profunda transition-transform hover:scale-105 active:scale-95"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}
