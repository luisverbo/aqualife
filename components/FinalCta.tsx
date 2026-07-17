import { WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";
import { IconWhatsApp } from "./Icons";

export default function FinalCta() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden bg-oceano"
    >
      {/* Glow central gigante */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-azul-piscina/15 blur-[130px]"
      />
      <div aria-hidden="true" className="bg-grid absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-28 text-center sm:px-8 sm:py-36">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="font-heading text-4xl font-bold leading-[1.05] text-papel sm:text-6xl md:text-7xl">
            Sua piscina{" "}
            <span className="text-gradient">segura e cristalina</span>
          </h2>
          <p className="max-w-xl font-body text-base text-papel/75 sm:text-lg">
            Peça um orçamento sem compromisso. Atendemos condomínios, clubes e
            residências no Rio de Janeiro — resposta rápida pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-5 font-body text-base font-semibold text-white shadow-[0_0_50px_rgba(37,211,102,0.35)] transition-all hover:scale-[1.04] hover:shadow-[0_0_70px_rgba(37,211,102,0.5)] active:scale-95 sm:text-lg"
          >
            <IconWhatsApp className="h-6 w-6" />
            Falar com a Aqualife agora
          </a>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-papel/40">
            Sem compromisso · resposta no mesmo dia
          </p>
        </Reveal>
      </div>
    </section>
  );
}
