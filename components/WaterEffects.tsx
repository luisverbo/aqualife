/**
 * Efeitos de água em CSS puro (sem libs, sem JS de runtime):
 *
 * - <Droplets/>: gotas d'água realistas "na tela" — como se o celular
 *   estivesse molhado: lente transparente com brilho, borda escura,
 *   gotinhas minúsculas espalhadas e algumas escorrendo pra baixo.
 * - <Bubbles/>: bolhas subindo lentamente, como dentro da piscina.
 *
 * Posições fixas (determinísticas) pra não pesar e não quebrar hidratação.
 */

type Drop = {
  top: string;
  left: string;
  size: number;
  delay?: number;
  run?: boolean; // escorre pra baixo
  tiny?: boolean; // gotinha pequena, sem blur (mais leve)
};

const DROPS: Drop[] = [
  // Gotas grandes/médias (com refração)
  { top: "7%", left: "5%", size: 30 },
  { top: "19%", left: "87%", size: 24 },
  { top: "24%", left: "16%", size: 16 },
  { top: "33%", left: "68%", size: 38, delay: 1.4 },
  { top: "45%", left: "91%", size: 18 },
  { top: "52%", left: "7%", size: 26, delay: 2.2 },
  { top: "64%", left: "82%", size: 32 },
  { top: "72%", left: "14%", size: 20, delay: 0.8 },
  { top: "83%", left: "72%", size: 28 },
  { top: "88%", left: "30%", size: 16, delay: 1.7 },
  { top: "12%", left: "42%", size: 22, delay: 2.8 },
  { top: "78%", left: "50%", size: 24, delay: 0.4 },
  // Gotinhas minúsculas (respingo)
  { top: "10%", left: "22%", size: 7, tiny: true },
  { top: "15%", left: "60%", size: 5, tiny: true },
  { top: "22%", left: "33%", size: 8, tiny: true },
  { top: "28%", left: "80%", size: 6, tiny: true },
  { top: "36%", left: "12%", size: 5, tiny: true },
  { top: "42%", left: "48%", size: 7, tiny: true },
  { top: "50%", left: "76%", size: 5, tiny: true },
  { top: "58%", left: "28%", size: 8, tiny: true },
  { top: "66%", left: "58%", size: 6, tiny: true },
  { top: "74%", left: "90%", size: 7, tiny: true },
  { top: "81%", left: "8%", size: 5, tiny: true },
  { top: "86%", left: "55%", size: 6, tiny: true },
  { top: "31%", left: "40%", size: 5, tiny: true },
  { top: "61%", left: "44%", size: 6, tiny: true },
  // Gotas que escorrem (celular molhado de verdade)
  { top: "6%", left: "28%", size: 18, delay: 0, run: true },
  { top: "4%", left: "64%", size: 22, delay: 5, run: true },
  { top: "9%", left: "78%", size: 16, delay: 9, run: true },
  { top: "3%", left: "12%", size: 20, delay: 13, run: true },
];

export function Droplets({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden ${className}`}
    >
      {DROPS.map((d, i) => (
        <span
          key={i}
          className={`absolute rounded-[45%_55%_52%_48%/55%_48%_52%_45%] ${
            d.run ? "animate-drop-run" : d.tiny ? "" : "animate-drop-wobble"
          }`}
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size * (d.run ? 1.15 : 1.05),
            animationDelay: d.delay ? `${d.delay}s` : undefined,
            // Lente de água: brilho especular deslocado, miolo transparente,
            // borda inferior clara (refração) e sombra projetada.
            background:
              "radial-gradient(circle at 33% 26%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 9%, rgba(255,255,255,0.12) 22%, rgba(255,255,255,0.03) 40%, rgba(3,50,70,0.05) 62%, rgba(3,50,70,0.16) 85%, rgba(3,50,70,0.28) 100%)",
            boxShadow:
              "inset 0 -3px 5px rgba(255,255,255,0.55), inset 0 2px 4px rgba(3,50,70,0.28), inset -2px 0 3px rgba(3,50,70,0.12), 0 4px 8px rgba(3,50,70,0.28)",
            ...(d.tiny
              ? {}
              : {
                  backdropFilter: "blur(2.5px) saturate(1.25)",
                  WebkitBackdropFilter: "blur(2.5px) saturate(1.25)",
                }),
          }}
        />
      ))}
    </div>
  );
}

type Bubble = { left: string; size: number; delay: number; duration: number };

const BUBBLES: Bubble[] = [
  { left: "8%", size: 10, delay: 0, duration: 9 },
  { left: "18%", size: 6, delay: 2.4, duration: 11 },
  { left: "31%", size: 12, delay: 1.1, duration: 8.5 },
  { left: "44%", size: 7, delay: 3.6, duration: 10 },
  { left: "57%", size: 9, delay: 0.7, duration: 9.5 },
  { left: "69%", size: 5, delay: 2.9, duration: 11.5 },
  { left: "81%", size: 11, delay: 1.8, duration: 8 },
  { left: "92%", size: 7, delay: 4.2, duration: 10.5 },
];

export function Bubbles({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="animate-bubble-rise absolute bottom-0 rounded-full border border-white/40 bg-white/15"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
