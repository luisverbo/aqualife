import { WHATSAPP_URL } from "@/lib/constants";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { IconArrow } from "./Icons";

const LANES = [
  {
    number: "01",
    title: "Guardião de Piscina",
    slot: "servico-guardiao" as const,
    variant: 0 as const,
    body: "A legislação é clara: piscinas residenciais com mais de 6m x 6m, hotéis, clubes sociais/esportivos e academias são obrigados por lei a ter um guardião de piscina. Quem não cumpre está sujeito a multa — e o síndico ou administrador responde legalmente por qualquer acidente. Na Aqualife, todos os guardiões são certificados pelo GMAR — Grupamento Marítimo do Corpo de Bombeiros.",
  },
  {
    number: "02",
    title: "Tratamento de Água",
    slot: "servico-tratamento" as const,
    variant: 1 as const,
    body: "A água é um dos principais meios de contaminação — doenças como diarreia, giardíase e otite externa podem ser transmitidas por piscina mal tratada. Não abandone o tratamento no inverno: as chuvas aumentam o risco de contaminação por algas. Nossa equipe é formada pela FEEMA em tratamento químico de água, com 23 anos de experiência prática.",
  },
  {
    number: "03",
    title: "Vigilância e Manutenção",
    slot: "servico-manutencao" as const,
    variant: 2 as const,
    body: "Cadeira de guardião, equipamentos de primeiros socorros, guardião certificado, operador de manutenção, produtos químicos, registro junto ao CBMERJ-GMar, uniforme, substituto pra férias — fechando o contrato completo com a Aqualife, tudo isso passa a ser nossa responsabilidade. Incluindo guardião reserva/folguista pra cobrir férias e faltas, sem sua piscina ficar descoberta nenhum dia.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-24 overflow-hidden bg-oceano"
    >
      <div
        aria-hidden="true"
        className="animate-drift-slow absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-ciano/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina">
            O que fazemos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-papel sm:text-5xl">
            Três raias, um serviço{" "}
            <span className="text-gradient">completo</span>
          </h2>
          <p className="mt-4 font-body text-base text-papel/70 sm:text-lg">
            Da vigilância à química da água — tudo dentro das normas do GMAR e
            da FEEMA.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {LANES.map((lane, i) => (
            <Reveal key={lane.title} delay={i * 100}>
              <SpotlightCard className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative h-52 overflow-hidden">
                  <MediaSlot
                    slot={lane.slot}
                    alt={lane.title}
                    variant={lane.variant}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-oceano to-transparent" />
                  <span className="absolute right-5 top-4 font-heading text-5xl font-bold text-papel/15">
                    {lane.number}
                  </span>
                  <h3 className="absolute bottom-4 left-5 right-5 font-heading text-2xl font-bold text-papel">
                    {lane.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-body text-sm leading-relaxed text-papel/70">
                    {lane.body}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-ciano"
                  >
                    Falar sobre este serviço
                    <IconArrow className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
