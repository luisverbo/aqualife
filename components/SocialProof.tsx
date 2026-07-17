import Reveal from "./Reveal";
import { IconStar } from "./Icons";

/*
  ─────────────────────────────────────────────────────────────────────
  PROVA SOCIAL — depoimentos
  ─────────────────────────────────────────────────────────────────────
  Os textos abaixo são EXEMPLOS ilustrativos — troque pelos depoimentos
  reais dos seus clientes (ou pelas avaliações do Google). Basta editar
  o array TESTIMONIALS.

  Para plugar o widget oficial de avaliações do Google no lugar, substitua
  a grade `.grid` pelo embed (Google Business Profile, Elfsight, etc.).
*/

const TESTIMONIALS = [
  {
    quote:
      "Trocamos pela Aqualife e o condomínio finalmente ficou dentro das normas do GMAR. Guardião pontual, água sempre cristalina e zero dor de cabeça pra administração.",
    name: "Síndico · Condomínio",
    role: "Barra da Tijuca",
  },
  {
    quote:
      "Atendem vários prédios que administramos. Documentação do CBMERJ em dia e guardião reserva quando alguém falta — nunca ficamos descobertos. Recomendo.",
    name: "Administradora",
    role: "Zona Sul",
  },
  {
    quote:
      "23 anos de experiência fazem diferença. Tratamento de água impecável mesmo no verão cheio e uma equipe muito profissional.",
    name: "Clube esportivo",
    role: "Rio de Janeiro",
  },
];

export default function SocialProof() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-pedra">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-azul-piscina">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold text-tinta sm:text-5xl">
            Nota <span className="text-gradient">5.0</span> no Google
          </h2>
          <p className="mt-3 max-w-xl font-body text-base text-tinta/70 sm:text-lg">
            A confiança de condomínios, clubes e administradoras em todo o Rio
            de Janeiro.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <article className="flex h-full flex-col justify-between rounded-2xl bg-papel p-7 shadow-sm ring-1 ring-tinta/5">
                <div>
                  <div className="flex gap-0.5 text-azul-piscina">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <IconStar key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-tinta/80">
                    “{t.quote}”
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-piscina/15 font-heading text-sm font-bold text-azul-piscina">
                    {t.name.charAt(0)}
                  </span>
                  <div className="text-left">
                    <p className="font-body text-sm font-semibold text-tinta">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-tinta/60">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
