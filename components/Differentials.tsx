import Counter from "./Counter";
import Reveal from "./Reveal";
import {
  IconWaves,
  IconShield,
  IconDrop,
  IconBuildings,
  IconStar,
} from "./Icons";

const STATS = [
  { value: <Counter to={23} suffix=" anos" />, label: "de mercado no Rio de Janeiro" },
  { value: <Counter to={100} suffix="%" />, label: "guardiões certificados pelo GMAR" },
  {
    value: (
      <span className="inline-flex items-center gap-1.5">
        5.0 <IconStar className="h-6 w-6 text-azul-piscina" />
      </span>
    ),
    label: "avaliação dos clientes no Google",
  },
  { value: <Counter to={365} suffix=" dias" />, label: "de cobertura, com guardião reserva" },
];

const FEATURES = [
  {
    icon: IconWaves,
    title: "+23 anos de experiência",
    text: "Mais de duas décadas cuidando de piscinas no Rio de Janeiro.",
  },
  {
    icon: IconShield,
    title: "Guardiões certificados",
    text: "Salva-vidas certificados pelo GMAR — Corpo de Bombeiros.",
  },
  {
    icon: IconDrop,
    title: "Equipe formada pela FEEMA",
    text: "Tratamento químico de água feito por profissionais qualificados.",
  },
  {
    icon: IconBuildings,
    title: "Atendimento completo",
    text: "Condomínios, clubes sociais/esportivos e parques aquáticos.",
  },
];

export default function Differentials() {
  return (
    <section className="relative bg-papel">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Faixa de números — sobrepõe o hero */}
        <Reveal className="-mt-14 sm:-mt-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 shadow-2xl shadow-agua-profunda/20 ring-1 ring-white/10 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-agua-profunda px-6 py-8 text-center sm:py-9"
              >
                <div className="font-heading text-3xl font-bold text-papel sm:text-4xl">
                  {s.value}
                </div>
                <p className="mx-auto mt-2 max-w-[16ch] font-body text-xs leading-snug text-papel/70 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Cartões de diferenciais */}
        <div className="grid grid-cols-1 gap-5 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-tinta/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-azul-piscina/40 hover:shadow-xl hover:shadow-azul-piscina/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-azul-piscina/10 text-azul-piscina transition-colors group-hover:bg-azul-piscina group-hover:text-papel">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-tinta">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-tinta/70">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
