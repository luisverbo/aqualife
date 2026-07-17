import Counter from "./Counter";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import {
  IconWaves,
  IconShield,
  IconDrop,
  IconBuildings,
  IconStar,
} from "./Icons";

export default function Differentials() {
  return (
    <section className="relative bg-oceano">
      <div
        aria-hidden="true"
        className="animate-drift absolute -right-32 top-20 h-96 w-96 rounded-full bg-azul-piscina/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina">
            Por que a Aqualife
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-papel sm:text-5xl">
            Números de quem é <span className="text-gradient">grande</span> no
            que faz
          </h2>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card grande — 23 anos */}
          <Reveal className="sm:col-span-2 lg:row-span-2">
            <SpotlightCard className="gradient-border group relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden="true"
                className="animate-aurora absolute -right-16 -top-16 h-64 w-64 rounded-full bg-azul-piscina/20 blur-[80px]"
              />
              <IconWaves className="h-8 w-8 text-azul-piscina" />
              <div>
                <div className="font-heading text-7xl font-bold text-papel sm:text-8xl">
                  <Counter to={23} />
                  <span className="text-gradient">+</span>
                </div>
                <p className="mt-2 font-body text-lg text-papel/75">
                  anos cuidando de piscinas no Rio de Janeiro — desde 2003.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={80}>
            <SpotlightCard className="glass flex h-full flex-col justify-between rounded-3xl p-6">
              <IconShield className="h-7 w-7 text-azul-piscina" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-papel">
                  <Counter to={100} suffix="%" />
                </div>
                <p className="mt-1.5 font-body text-sm text-papel/70">
                  dos guardiões certificados pelo GMAR (Corpo de Bombeiros)
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={140}>
            <SpotlightCard className="glass flex h-full flex-col justify-between rounded-3xl p-6">
              <IconStar className="h-7 w-7 text-verde-vida" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-papel">
                  5.0
                </div>
                <p className="mt-1.5 font-body text-sm text-papel/70">
                  nota dos clientes nas avaliações do Google
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={200}>
            <SpotlightCard className="glass flex h-full flex-col justify-between rounded-3xl p-6">
              <IconDrop className="h-7 w-7 text-azul-piscina" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-papel">
                  FEEMA
                </div>
                <p className="mt-1.5 font-body text-sm text-papel/70">
                  equipe formada em tratamento químico de água
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={260}>
            <SpotlightCard className="glass flex h-full flex-col justify-between rounded-3xl p-6">
              <IconBuildings className="h-7 w-7 text-azul-piscina" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-papel">
                  <Counter to={365} />
                </div>
                <p className="mt-1.5 font-body text-sm text-papel/70">
                  dias por ano de cobertura, com guardião reserva incluso
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
