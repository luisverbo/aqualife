import { WHATSAPP_URL } from "@/lib/constants";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

const LANES = [
  {
    label: "Raia 01",
    title: "Guardião de Piscina",
    slot: "servico-guardiao" as const,
    variant: 0 as const,
    body: "A legislação é clara: piscinas residenciais com mais de 6m x 6m, hotéis, clubes sociais/esportivos e academias são obrigados por lei a ter um guardião de piscina. Quem não cumpre está sujeito a multa — e o síndico ou administrador responde legalmente por qualquer acidente. Na Aqualife, todos os guardiões são certificados pelo GMAR — Grupamento Marítimo do Corpo de Bombeiros.",
  },
  {
    label: "Raia 02",
    title: "Tratamento de Água",
    slot: "servico-tratamento" as const,
    variant: 1 as const,
    body: "A água é um dos principais meios de contaminação — doenças como diarreia, giardíase e otite externa podem ser transmitidas por piscina mal tratada. Não abandone o tratamento no inverno: as chuvas aumentam o risco de contaminação por algas. Nossa equipe é formada pela FEEMA em tratamento químico de água, com 23 anos de experiência prática.",
  },
  {
    label: "Raia 03",
    title: "Vigilância e Manutenção",
    slot: "servico-manutencao" as const,
    variant: 2 as const,
    body: "Cadeira de guardião, equipamentos de primeiros socorros, guardião certificado, operador de manutenção, produtos químicos, registro junto ao CBMERJ-GMar, uniforme, substituto pra férias — fechando o contrato completo com a Aqualife, tudo isso passa a ser nossa responsabilidade. Incluindo guardião reserva/folguista pra cobrir férias e faltas, sem sua piscina ficar descoberta nenhum dia.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-papel">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-azul-piscina">
            O que fazemos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-tinta sm:text-5xl">
            Três raias, um serviço completo
          </h2>
          <p className="mt-4 font-body text-base text-tinta/70 sm:text-lg">
            Da vigilância à química da água — tudo dentro das normas do GMAR e
            da FEEMA.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {LANES.map((lane, i) => (
            <Reveal key={lane.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-tinta/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-agua-profunda/10">
                <div className="relative h-52 overflow-hidden">
                  <MediaSlot
                    slot={lane.slot}
                    alt={lane.title}
                    variant={lane.variant}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-agua-profunda/80 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-papel backdrop-blur-sm">
                    {lane.label}
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 font-heading text-2xl font-bold text-papel">
                    {lane.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-body text-sm leading-relaxed text-tinta/75">
                    {lane.body}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-azul-piscina"
                  >
                    Falar sobre este serviço
                    <IconArrow className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
