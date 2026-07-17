import Reveal from "./Reveal";
import { IconShield } from "./Icons";

export default function Authority() {
  return (
    <section id="seguranca" className="relative scroll-mt-24 bg-oceano">
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-14 sm:py-16">
            <div
              aria-hidden="true"
              className="animate-aurora absolute -left-20 -top-24 h-72 w-72 rounded-full bg-azul-piscina/20 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="animate-aurora-slow absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-verde-vida/10 blur-[90px]"
            />

            <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-azul-piscina/15 text-azul-piscina">
              <IconShield className="h-8 w-8" />
            </span>
            <p className="relative mt-6 font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina">
              GMAR · FEEMA · CBMERJ
            </p>
            <h2 className="relative mt-5 font-heading text-2xl font-bold leading-snug text-papel sm:text-4xl">
              Piscina de condomínio é responsabilidade do síndico — e qualquer
              acidente vira{" "}
              <span className="text-gradient">problema jurídico</span>.
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl font-body text-base text-papel/75 sm:text-lg">
              A Aqualife trabalha dentro das normas do GMAR e da FEEMA, pra sua
              administração dormir tranquila.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
