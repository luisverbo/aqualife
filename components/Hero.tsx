import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-agua-profunda">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/pool-1.jpg"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-agua-profunda via-agua-profunda/60 to-agua-profunda/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-agua-profunda/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:px-8 sm:pb-24 sm:pt-56">
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-papel sm:text-5xl md:text-6xl">
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
