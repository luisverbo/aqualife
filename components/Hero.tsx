import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-agua-profunda">
      {/*
        Fundo do hero em CSS puro (sem vídeo/imagem externa): água profunda
        em degradê + raias da piscina com leve ondulação de luz.
        Para trocar por uma foto real depois, basta adicionar um
        <img src="/images/hero.jpg" .../> (ou <video>) absolute inset-0
        object-cover ANTES do overlay, mantendo os gradientes por cima.
      */}

      {/* Base — profundidade da água */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(155deg, #0E3A45 0%, #0B2F38 45%, #16211F 100%)",
        }}
      />

      {/* Raias da piscina — bandas verticais em tons de azul, com sway suave */}
      <div
        aria-hidden="true"
        className="animate-hero-sway absolute -left-[8%] top-0 h-full w-[116%]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(42,167,160,0.00) 0px, rgba(42,167,160,0.00) 46px, rgba(42,167,160,0.14) 46px, rgba(42,167,160,0.14) 96px), repeating-linear-gradient(100deg, rgba(247,244,238,0.00) 0px, rgba(247,244,238,0.00) 90px, rgba(247,244,238,0.05) 90px, rgba(247,244,238,0.05) 94px)",
        }}
      />

      {/* Cáusticas / luz na água — brilho suave que se move */}
      <div
        aria-hidden="true"
        className="animate-hero-shimmer absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 45% at 25% 20%, rgba(42,167,160,0.35) 0%, transparent 60%), radial-gradient(55% 40% at 80% 15%, rgba(228,216,190,0.18) 0%, transparent 55%)",
        }}
      />

      {/* Overlay escuro na base pra legibilidade do texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-agua-profunda via-agua-profunda/55 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:px-8 sm:pb-24 sm:pt-56">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina">
          Rio de Janeiro · desde 2003
        </span>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-papel sm:text-5xl md:text-6xl">
          Sua piscina cuidada por quem é referência há mais de 23 anos no Rio
          de Janeiro
        </h1>
        <p className="mt-6 max-w-xl font-body text-base text-papel/90 sm:text-lg">
          Manutenção completa, tratamento de água e guardiões salva-vidas
          certificados para condomínios, clubes e parques aquáticos.
        </p>
        <div className="mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-azul-piscina px-8 py-4 font-body text-base font-semibold text-agua-profunda shadow-lg shadow-black/20 transition-transform hover:scale-[1.03] active:scale-95 sm:text-lg"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
