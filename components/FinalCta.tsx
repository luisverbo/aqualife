import { WHATSAPP_URL } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="bg-agua-profunda">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="font-heading text-3xl font-bold text-papel sm:text-4xl md:text-5xl">
          Peça um orçamento sem compromisso
        </h2>
        <p className="max-w-xl font-body text-base text-papel/80 sm:text-lg">
          Atendemos condomínios, clubes e residências no Rio de Janeiro.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-azul-piscina px-8 py-4 font-body text-base font-semibold text-agua-profunda shadow-lg shadow-black/20 transition-transform hover:scale-[1.03] active:scale-95 sm:text-lg"
        >
          Falar com a Aqualife agora
        </a>
      </div>
    </section>
  );
}
