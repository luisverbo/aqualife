"use client";

import { useState } from "react";

type MediaSlotProps = {
  /** Caminho da foto real, ex: "/images/servico-guardiao.jpg". */
  src: string;
  alt: string;
  className?: string;
  /** Índice só para variar o gráfico de fallback entre cartões. */
  variant?: 0 | 1 | 2;
};

const FALLBACKS: Record<number, string> = {
  0: "linear-gradient(150deg, #0E3A45 0%, #2AA7A0 100%)",
  1: "linear-gradient(150deg, #124a56 0%, #1C7A74 100%)",
  2: "linear-gradient(150deg, #0E3A45 0%, #16211F 100%)",
};

/**
 * Área de imagem com fallback gráfico da marca.
 * Enquanto a foto real (`src`) não existir em /public, mostra um gráfico
 * de água com o motivo das raias — o site nunca fica "quebrado".
 * Assim que o arquivo com o nome correto for adicionado, ele aparece
 * automaticamente, sem alterar o código.
 */
export default function MediaSlot({
  src,
  alt,
  className = "",
  variant = 0,
}: MediaSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundImage: FALLBACKS[variant] }}
    >
      {/* Motivo de raias no fallback */}
      {!loaded && (
        <div
          aria-hidden="true"
          className="animate-hero-sway absolute -left-[10%] top-0 h-full w-[120%] opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(105deg, rgba(247,244,238,0.00) 0px, rgba(247,244,238,0.00) 40px, rgba(247,244,238,0.10) 40px, rgba(247,244,238,0.10) 84px)",
          }}
        />
      )}

      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
