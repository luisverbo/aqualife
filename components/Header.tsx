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
          ? "border-b border-azul-piscina/15 bg-white/80 py-3 shadow-sm shadow-azul-piscina/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        <Logo tone={scrolled ? "dark" : "light"} />

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm font-medium transition-colors ${
                scrolled
                  ? "text-tinta/70 hover:text-tinta"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full px-5 py-2.5 font-body text-sm font-bold transition-all hover:scale-105 active:scale-95 ${
            scrolled
              ? "bg-azul-piscina text-white shadow-md shadow-azul-piscina/30"
              : "bg-white text-agua-profunda shadow-lg shadow-oceano/20"
          }`}
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}
