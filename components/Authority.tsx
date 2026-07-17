import Reveal from "./Reveal";
import { IconShield } from "./Icons";

export default function Authority() {
  return (
    <section
      id="seguranca"
      className="relative scroll-mt-24 overflow-hidden bg-agua-profunda"
    >
      {/* Orb decorativo */}
      <div
        aria-hidden="true"
        className="animate-drift-slow absolute -right-20 top-0 h-96 w-96 rounded-full bg-azul-piscina/20 blur-3xl"
      />
      {/* Raias sutis */}
      <div
        aria-hidden="true"
        className="animate-hero-sway absolute -left-[8%] top-0 h-full w-[116%] opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(42,167,160,0.00) 0px, rgba(42,167,160,0.00) 60px, rgba(42,167,160,0.10) 60px, rgba(42,167,160,0.10) 110px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-azul-piscina/15 text-azul-piscina">
            <IconShield className="h-8 w-8" />
          </span>
          <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina">
            GMAR · FEEMA · CBMERJ
          </p>
          <h2 className="mt-5 font-heading text-2xl font-bold leading-snug text-papel sm:text-4xl md:text-[2.75rem]">
            Piscina de condomínio é responsabilidade do síndico — e qualquer
            acidente vira <span className="text-gradient">problema jurídico</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-papel/80 sm:text-lg">
            A Aqualife trabalha dentro das normas do GMAR e da FEEMA, pra sua
            administração dormir tranquila.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
