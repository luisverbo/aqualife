import Reveal from "./Reveal";
import { IconStar } from "./Icons";

/*
  ─────────────────────────────────────────────────────────────────────
  PROVA SOCIAL — onde plugar o widget de avaliações do Google (nota 5.0)
  ─────────────────────────────────────────────────────────────────────
  Substitua os cartões de placeholder abaixo pelo embed real. Opções:
  1. Widget oficial do Google Business Profile / Google Reviews.
  2. Um serviço de reviews (Elfsight, Trustmania, etc.) — cole o <script>
     no app/layout.tsx e o container aqui.
  3. Um componente client que consome a Places API e renderiza os cards.
  Basta manter a grade `.grid` abaixo e trocar o conteúdo dos <article>.
*/

const PLACEHOLDERS = [
  { name: "Síndico · Condomínio", role: "Barra da Tijuca" },
  { name: "Administradora", role: "Zona Sul" },
  { name: "Clube esportivo", role: "Rio de Janeiro" },
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
          {PLACEHOLDERS.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <article className="flex h-full flex-col justify-between rounded-2xl bg-papel p-7 shadow-sm ring-1 ring-tinta/5">
                <div>
                  <div className="flex gap-0.5 text-azul-piscina">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <IconStar key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  {/* Depoimento real entra aqui */}
                  <div className="mt-4 space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-tinta/10" />
                    <div className="h-2.5 w-11/12 rounded-full bg-tinta/10" />
                    <div className="h-2.5 w-3/4 rounded-full bg-tinta/10" />
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-azul-piscina/15 font-heading text-sm font-bold text-azul-piscina">
                    {p.name.charAt(0)}
                  </span>
                  <div className="text-left">
                    <p className="font-body text-sm font-semibold text-tinta">
                      {p.name}
                    </p>
                    <p className="font-body text-xs text-tinta/60">{p.role}</p>
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
