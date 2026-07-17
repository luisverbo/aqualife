export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Exemplos exibidos enquanto não houver depoimentos salvos no painel. */
export const DEFAULT_TESTIMONIALS: Testimonial[] = [
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

export const TESTIMONIALS_BLOB = "site/testimonials.json";

export const MAX_TESTIMONIALS = 9;

/** Normaliza/valida a entrada vinda do painel. */
export function sanitizeTestimonials(input: unknown): Testimonial[] {
  if (!Array.isArray(input)) return [];
  return input
    .slice(0, MAX_TESTIMONIALS)
    .map((t) => {
      const obj = (t ?? {}) as Record<string, unknown>;
      return {
        quote: String(obj.quote ?? "").slice(0, 400),
        name: String(obj.name ?? "").slice(0, 60),
        role: String(obj.role ?? "").slice(0, 60),
      };
    })
    .filter((t) => t.quote.trim().length > 0);
}
