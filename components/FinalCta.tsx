import { WHATSAPP_URL } from "@/lib/constants";
import Reveal from "./Reveal";
import { IconWhatsApp } from "./Icons";

export default function FinalCta() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden bg-agua-profunda"
    >
      <div
        aria-hidden="true"
        className="animate-drift absolute -left-24 -top-10 h-96 w-96 rounded-full bg-azul-piscina/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-drift-slow absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-azul-piscina/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center sm:px-8 sm:py-32">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="font-heading text-3xl font-bold leading-tight text-papel sm:text-5xl md:text-6xl">
            Peça um orçamento <span className="text-gradient">sem compromisso</span>
          </h2>
          <p className="max-w-xl font-body text-base text-papel/80 sm:text-lg">
            Atendemos condomínios, clubes e residências no Rio de Janeiro.
            Resposta rápida pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-body text-base font-semibold text-white shadow-xl shadow-black/20 transition-transform hover:scale-[1.03] active:scale-95 sm:text-lg"
          >
            <IconWhatsApp className="h-6 w-6" />
            Falar com a Aqualife agora
          </a>
        </Reveal>
      </div>
    </section>
  );
}
