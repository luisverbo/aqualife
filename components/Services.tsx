const LANES = [
  {
    label: "Raia 01",
    title: "Guardião de Piscina",
    image: "/images/pool-1.jpg",
    accent: "bg-azul-piscina",
    accentText: "text-azul-piscina",
    body: "A legislação é clara: piscinas residenciais com mais de 6m x 6m, hotéis, clubes sociais/esportivos e academias são obrigados por lei a ter um guardião de piscina. Quem não cumpre está sujeito a multa — e o síndico ou administrador responde legalmente por qualquer acidente. Na Aqualife, todos os guardiões são certificados pelo GMAR — Grupamento Marítimo do Corpo de Bombeiros.",
  },
  {
    label: "Raia 02",
    title: "Tratamento de Água",
    image: "/images/pool-2.jpg",
    accent: "bg-agua-profunda",
    accentText: "text-agua-profunda",
    body: "A água é um dos principais meios de contaminação — doenças como diarreia, giardíase e otite externa podem ser transmitidas por piscina mal tratada. Não abandone o tratamento no inverno: as chuvas aumentam o risco de contaminação por algas. Nossa equipe é formada pela FEEMA em tratamento químico de água, com 23 anos de experiência prática.",
  },
  {
    label: "Raia 03",
    title: "Vigilância e Manutenção",
    image: "/images/pool-3.jpg",
    accent: "bg-azul-piscina-escuro",
    accentText: "text-azul-piscina-escuro",
    body: "Cadeira de guardião, equipamentos de primeiros socorros, guardião certificado, operador de manutenção, produtos químicos, registro junto ao CBMERJ-GMar, uniforme, substituto pra férias — fechando o contrato completo com a Aqualife, tudo isso passa a ser nossa responsabilidade. Incluindo guardião reserva/folguista pra cobrir férias e faltas, sem sua piscina ficar descoberta nenhum dia.",
  },
];

export default function Services() {
  return (
    <section className="bg-papel">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <h2 className="max-w-2xl font-heading text-3xl font-bold text-tinta sm:text-4xl">
          Serviços
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {LANES.map((lane) => (
            <article
              key={lane.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/5"
            >
              <div className={`h-1.5 w-full ${lane.accent}`} aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lane.image}
                alt={lane.title}
                className="h-48 w-full object-cover sm:h-56"
              />
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <span
                  className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${lane.accentText}`}
                >
                  {lane.label}
                </span>
                <h3 className="font-heading text-xl font-bold text-tinta sm:text-2xl">
                  {lane.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-tinta/80 sm:text-base">
                  {lane.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
