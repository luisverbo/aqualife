import { WHATSAPP_URL } from "@/lib/constants";
import { IconArrow, IconShield, IconDrop, IconStar } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-oceano"
    >
      {/* Aurora — manchas de luz ciano/verde em movimento lento */}
      <div
        aria-hidden="true"
        className="animate-aurora absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-azul-piscina/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-slow absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-ciano/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="animate-drift-slow absolute -bottom-24 right-0 h-[24rem] w-[24rem] rounded-full bg-verde-vida/10 blur-[110px]"
      />

      {/* Grade técnica sutil */}
      <div aria-hidden="true" className="bg-grid absolute inset-0" />

      {/* Linha de horizonte com brilho */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-azul-piscina/70 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:px-8 sm:pt-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-papel/90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde-vida opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-verde-vida" />
            </span>
            23 anos protegendo piscinas no RJ
          </span>

          <h1 className="mt-8 font-heading text-[2.6rem] font-bold leading-[1.02] text-papel sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            A referência em{" "}
            <span className="text-gradient">piscinas seguras</span> no Rio de
            Janeiro
          </h1>

          <p className="mt-7 max-w-2xl font-body text-base leading-relaxed text-papel/75 sm:text-lg md:text-xl">
            Manutenção completa, tratamento de água e guardiões salva-vidas
            certificados para condomínios, clubes e parques aquáticos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-azul-piscina px-9 py-4 font-body text-base font-semibold text-oceano shadow-[0_0_40px_rgba(0,184,217,0.45)] transition-all hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(34,225,255,0.6)] active:scale-95"
            >
              Solicitar orçamento
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="glass inline-flex items-center justify-center rounded-full px-9 py-4 font-body text-base font-semibold text-papel transition-colors hover:bg-white/10"
            >
              Conhecer serviços
            </a>
          </div>

          {/* Badges de confiança */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <TrustBadge icon={<IconShield className="h-4 w-4" />} label="Certificado GMAR" />
            <TrustBadge icon={<IconDrop className="h-4 w-4" />} label="Equipe FEEMA" />
            <TrustBadge
              icon={<IconStar className="h-4 w-4" />}
              label="Google 5.0"
            />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <span className="animate-float h-2 w-1 rounded-full bg-ciano/80" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-papel/70">
      <span className="text-azul-piscina">{icon}</span>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
}
