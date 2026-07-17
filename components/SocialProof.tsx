const PLACEHOLDER_COUNT = 3;

export default function SocialProof() {
  return (
    <section className="bg-pedra">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl font-bold text-tinta sm:text-4xl">
            Quem confia na Aqualife
          </h2>
          <p className="font-body text-sm text-tinta/70 sm:text-base">
            Avaliações reais de condomínios e clubes atendidos no Rio de
            Janeiro.
          </p>
        </div>

        {/*
          TODO: Plugar aqui o widget de avaliações do Google (nota 5.0).
          Sugestão: embed oficial do Google Business Profile ou um
          componente client-side que consome a Places API e renderiza
          os cards de depoimento abaixo dinamicamente.
        */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex h-40 flex-col justify-between rounded-2xl border border-dashed border-tinta/20 bg-papel/60 p-6"
            >
              <div className="h-3 w-24 rounded-full bg-tinta/10" />
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-tinta/10" />
                <div className="h-2 w-3/4 rounded-full bg-tinta/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
