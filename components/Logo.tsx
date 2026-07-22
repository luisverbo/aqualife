"use client";

import { useEffect, useState } from "react";
import { getImageMap } from "@/lib/imageClient";
import { IconWaves } from "./Icons";

type LogoProps = {
  className?: string;
  /** "light": para fundos azuis/escuros · "dark": para fundos claros */
  tone?: "light" | "dark";
};

export default function Logo({ className = "", tone = "light" }: LogoProps) {
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    getImageMap().then((m) => {
      if (active) setLogo(m.logo ?? null);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`}>
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt="Aqualife Piscinas"
          className="h-10 w-auto max-w-[200px] object-contain sm:h-11"
        />
      ) : (
        <>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ciano to-azul-piscina text-white shadow-md shadow-azul-piscina/30 transition-transform group-hover:scale-105">
            <IconWaves className="h-5 w-5" />
          </span>
          <span
            className={`font-heading text-lg font-bold tracking-tight ${
              tone === "light" ? "[text-shadow:0_1px_4px_rgba(2,40,60,0.45)]" : ""
            }`}
          >
            <span
              className={tone === "light" ? "text-white" : "text-azul-piscina-escuro"}
            >
              Aqua
            </span>
            <span className="text-verde-vida">Life</span>
            <span
              className={`ml-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
                tone === "light" ? "text-white" : "text-tinta/50"
              }`}
            >
              Piscinas
            </span>
          </span>
        </>
      )}
    </a>
  );
}
