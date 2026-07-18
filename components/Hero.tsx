import { WHATSAPP_URL } from "@/lib/constants";
import { IconArrow, IconShield, IconDrop, IconStar } from "./Icons";
import { WetScreen, Bubbles } from "./WaterEffects";
import WaveDivider from "./WaveDivider";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(178deg, #12B2D8 0%, #0092C0 38%, #027FA6 68%, #02688E 100%)",
      }}
    >
      {/* Cáusticas — reflexos de luz na água (suaves, pra não lavar o texto) */}
      <div aria-hidden="true" className="caustics absolute inset-0 opacity-50" />

      {/* Brilho de sol discreto no topo */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute -top-32 left-1/4 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-white/15 blur-[100px]"
      />

      {/* Escurecimento na área do texto pra dar contraste */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_58%,rgba(2,58,82,0.38),transparent_75%)]"
      />

      {/* Bolhas subindo + película de tela molhada */}
      <Bubbles />
      <WetScreen />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pb-28 pt-32 sm:px-8 sm:pt-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-oceano/30 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-verde-vida opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-verde-vida" />
            </span>
            23 anos protegendo piscinas no RJ
          </span>

          <h1 className="mt-8 font-heading text-[2.6rem] font-bold leading-[1.03] text-white [text-shadow:0_2px_6px_rgba(2,40,60,0.45),0_6px_28px_rgba(2,40,60,0.35)] sm:text-6xl md:text-7xl">
            A referência em{" "}
            <span className="text-verde-vida [text-shadow:0_2px_6px_rgba(2,40,60,0.5)]">
              piscinas seguras
            </span>{" "}
            no Rio de Janeiro
          </h1>

          <p className="mt-7 max-w-2xl font-body text-base font-medium leading-relaxed text-white [text-shadow:0_1px_4px_rgba(2,40,60,0.4)] sm:text-lg md:text-xl">
            Manutenção completa, tratamento de água e guardiões salva-vidas
            certificados para condomínios, clubes e parques aquáticos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 font-body text-base font-bold text-agua-profunda shadow-[0_8px_32px_rgba(2,40,60,0.4)] transition-all hover:scale-[1.04] hover:shadow-[0_10px_44px_rgba(2,40,60,0.5)] active:scale-95"
            >
              Solicitar orçamento
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-oceano/25 px-9 py-4 font-body text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-oceano/40"
            >
              Conhecer serviços
            </a>
          </div>

          {/* Badges de confiança */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <TrustBadge icon={<IconShield className="h-4 w-4" />} label="Certificado GMAR" />
            <TrustBadge icon={<IconDrop className="h-4 w-4" />} label="Equipe FEEMA" />
            <TrustBadge icon={<IconStar className="h-4 w-4" />} label="Google 5.0" />
          </div>
        </div>
      </div>

      {/* Onda na base — mergulha na próxima seção */}
      <WaveDivider className="absolute bottom-0 left-0" fill="#F0FAFD" />
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-white [text-shadow:0_1px_3px_rgba(2,40,60,0.45)]">
      <span>{icon}</span>
      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
}
