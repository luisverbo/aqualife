"use client";

import { useEffect, useState } from "react";
import { getImageMap } from "@/lib/imageClient";
import type { ImageSlotKey } from "@/lib/imageSlots";

type MediaSlotProps = {
  /** Slot gerenciável (ex: "servico-guardiao"). */
  slot: ImageSlotKey;
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
 * Área de imagem com resolução em cascata:
 *   1. Imagem enviada pelo painel /admin (Vercel Blob).
 *   2. Fallback local em /public/images/{slot}.jpg (se você commitar o arquivo).
 *   3. Gráfico da marca (o site nunca fica "quebrado").
 */
export default function MediaSlot({
  slot,
  alt,
  className = "",
  variant = 0,
}: MediaSlotProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    getImageMap().then((map) => {
      if (!active) return;
      setSrc(map[slot] ?? `/images/${slot}.jpg`);
    });
    return () => {
      active = false;
    };
  }, [slot]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundImage: FALLBACKS[variant] }}
    >
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

      {src && !failed && (
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
