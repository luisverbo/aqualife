import { WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";
import { IconWhatsApp } from "./Icons";
import { Droplets, Bubbles } from "./WaterEffects";
import WaveDivider from "./WaveDivider";

export default function FinalCta() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(178deg, #27CDEB 0%, #00A9CC 40%, #02688E 100%)",
      }}
    >
      {/* Onda no topo — saindo da seção clara */}
      <WaveDivider className="absolute left-0 top-0" fill="#F0FAFD" flip />

      <div aria-hidden="true" className="caustics absolute inset-0" />
      <Bubbles />
      <Droplets />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-28 text-center sm:px-8 sm:py-36">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="font-heading text-4xl font-bold leading-[1.05] text-white drop-shadow-[0_2px_18px_rgba(2,58,82,0.35)] sm:text-6xl">
            Sua piscina{" "}
            <span className="text-gradient-bright">segura e cristalina</span>
          </h2>
          <p className="max-w-xl font-body text-base text-white/90 sm:text-lg">
            Peça um orçamento sem compromisso. Atendemos condomínios, clubes e
            residências no Rio de Janeiro — resposta rápida pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-5 font-body text-base font-semibold text-white shadow-[0_10px_44px_rgba(2,58,82,0.4)] transition-all hover:scale-[1.04] hover:shadow-[0_14px_56px_rgba(2,58,82,0.5)] active:scale-95 sm:text-lg"
          >
            <IconWhatsApp className="h-6 w-6" />
            Falar com a Aqualife agora
          </a>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            Sem compromisso · resposta no mesmo dia
          </p>
        </Reveal>
      </div>
    </section>
  );
}
