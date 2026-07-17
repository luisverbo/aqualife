const ITEMS = [
  "23 anos de mercado",
  "Guardiões certificados GMAR",
  "Formação FEEMA",
  "Registro CBMERJ-GMar",
  "Nota 5.0 no Google",
  "Condomínios · Clubes · Parques aquáticos",
  "Rio de Janeiro",
];

/**
 * Letreiro infinito (marquee) com as credenciais — o conteúdo é
 * duplicado e desliza continuamente via CSS.
 */
export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-oceano py-4">
      {/* fades nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-oceano to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-oceano to-transparent" />

      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center"
          >
            {ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-3 px-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-papel/60"
              >
                <span className="h-1 w-1 rounded-full bg-azul-piscina" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
