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
    <section className="relative overflow-hidden bg-papel">
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina-escuro">
            Por que a Aqualife
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-tinta sm:text-5xl">
            Números de quem é <span className="text-gradient">grande</span> no
            que faz
          </h2>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card grande — 23 anos, com água dentro */}
          <Reveal className="h-full sm:col-span-2 lg:row-span-2">
            <SpotlightCard className="group relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-3xl p-8 text-white shadow-xl shadow-azul-piscina/20">
              {/* Água com cáusticas dentro do card */}
              <div
                aria-hidden="true"
                className="caustics absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(160deg, #22CFEA 0%, #00A9CC 45%, #02688E 100%)",
                }}
              />
              <IconWaves className="h-8 w-8 text-white/90" />
              <div>
                <div className="font-heading text-7xl font-bold sm:text-8xl">
                  <Counter to={23} />
                  <span className="text-verde-vida">+</span>
                </div>
                <p className="mt-2 font-body text-lg text-white/90">
                  anos cuidando de piscinas no Rio de Janeiro — desde 2003.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={80} className="h-full">
            <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-azul-piscina/10 transition-shadow hover:shadow-xl hover:shadow-azul-piscina/15">
              <IconShield className="h-7 w-7 text-azul-piscina" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-tinta">
                  <Counter to={100} suffix="%" />
                </div>
                <p className="mt-1.5 font-body text-sm text-tinta/65">
                  dos guardiões certificados pelo GMAR (Corpo de Bombeiros)
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={140} className="h-full">
            <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-azul-piscina/10 transition-shadow hover:shadow-xl hover:shadow-azul-piscina/15">
              <IconStar className="h-7 w-7 text-verde-vida" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-tinta">
                  5.0
                </div>
                <p className="mt-1.5 font-body text-sm text-tinta/65">
                  nota dos clientes nas avaliações do Google
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-azul-piscina/10 transition-shadow hover:shadow-xl hover:shadow-azul-piscina/15">
              <IconDrop className="h-7 w-7 text-azul-piscina" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-tinta">
                  FEEMA
                </div>
                <p className="mt-1.5 font-body text-sm text-tinta/65">
                  equipe formada em tratamento químico de água
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={260} className="h-full">
            <SpotlightCard className="flex h-full flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-azul-piscina/10 transition-shadow hover:shadow-xl hover:shadow-azul-piscina/15">
              <IconBuildings className="h-7 w-7 text-azul-piscina" />
              <div className="mt-8">
                <div className="font-heading text-4xl font-bold text-tinta">
                  <Counter to={365} />
                </div>
                <p className="mt-1.5 font-body text-sm text-tinta/65">
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
