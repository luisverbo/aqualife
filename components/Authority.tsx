import Reveal from "./Reveal";
import { IconShield } from "./Icons";
import { Bubbles } from "./WaterEffects";

export default function Authority() {
  return (
    <section
      id="seguranca"
      className="relative scroll-mt-24 overflow-hidden bg-papel"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div
            className="caustics relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white shadow-2xl shadow-azul-piscina/25 sm:px-14 sm:py-16"
            style={{
              background:
                "linear-gradient(160deg, #00AFD1 0%, #0084B0 55%, #02688E 100%)",
            }}
          >
            <Bubbles />

            <span className="glass relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white">
              <IconShield className="h-8 w-8" />
            </span>
            <p className="relative mt-6 font-mono text-xs font-medium uppercase tracking-[0.25em] text-white/80">
              GMAR · FEEMA · CBMERJ
            </p>
            <h2 className="relative mt-5 font-heading text-2xl font-bold leading-snug [text-shadow:0_2px_6px_rgba(2,40,60,0.4)] sm:text-4xl">
              Piscina de condomínio é responsabilidade do síndico — e qualquer
              acidente vira{" "}
              <span className="text-verde-vida">problema jurídico</span>.
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl font-body text-base font-medium text-white [text-shadow:0_1px_4px_rgba(2,40,60,0.35)] sm:text-lg">
              A Aqualife trabalha dentro das normas do GMAR e da FEEMA, pra sua
              administração dormir tranquila.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
