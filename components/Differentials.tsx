const ITEMS = [
  "+23 anos cuidando de piscinas no Rio de Janeiro",
  "Guardiões certificados pelo GMAR (Corpo de Bombeiros)",
  "Equipe formada pela FEEMA em tratamento de água",
  "Atendimento a condomínios, clubes e parques aquáticos",
];

export default function Differentials() {
  return (
    <section className="bg-pedra">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-4 lg:gap-8">
        {ITEMS.map((item) => (
          <div key={item} className="flex flex-col gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-10 rounded-full bg-azul-piscina"
            />
            <p className="font-body text-sm font-medium leading-snug text-tinta sm:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
