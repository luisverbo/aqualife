import { WHATSAPP_URL } from "@/lib/constants";
import { IconArrow, IconShield, IconDrop, IconStar } from "./Icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-agua-profunda"
    >
      {/* Base — profundidade da água */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(155deg, #0E3A45 0%, #0B2F38 45%, #16211F 100%)",
        }}
      />

      {/* Raias da piscina — bandas com sway suave */}
      <div
        aria-hidden="true"
        className="animate-hero-sway absolute -left-[8%] top-0 h-full w-[116%] opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(42,167,160,0.00) 0px, rgba(42,167,160,0.00) 54px, rgba(42,167,160,0.12) 54px, rgba(42,167,160,0.12) 104px)",
        }}
      />

      {/* Orbs de luz que flutuam */}
      <div
        aria-hidden="true"
        className="animate-drift absolute -left-24 top-10 h-80 w-80 rounded-full bg-azul-piscina/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-slow absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-azul-piscina/20 blur-3xl"
      />

      {/* Overlay pra profundidade nas bordas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-agua-profunda via-transparent to-agua-profunda/40"
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-papel/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-azul-piscina" />
            23 anos · Rio de Janeiro
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] text-papel sm:text-6xl md:text-7xl">
            Sua piscina cuidada por quem é{" "}
            <span className="text-gradient">referência</span> há mais de 23
            anos
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-papel/85 sm:text-lg">
            Manutenção completa, tratamento de água e guardiões salva-vidas
            certificados para condomínios, clubes e parques aquáticos no Rio de
            Janeiro.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-azul-piscina px-8 py-4 font-body text-base font-semibold text-agua-profunda shadow-xl shadow-azul-piscina/20 transition-transform hover:scale-[1.03] active:scale-95"
            >
              Solicitar orçamento
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-body text-base font-semibold text-papel transition-colors hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>

          {/* Badges de confiança */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <TrustBadge icon={<IconShield className="h-4 w-4" />} label="Certificado GMAR" />
            <TrustBadge icon={<IconDrop className="h-4 w-4" />} label="Equipe FEEMA" />
            <TrustBadge
              icon={<IconStar className="h-4 w-4 text-azul-piscina" />}
              label="Google 5.0"
            />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/25 p-1.5">
          <span className="animate-float h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-papel/80">
      <span className="text-azul-piscina">{icon}</span>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
}
