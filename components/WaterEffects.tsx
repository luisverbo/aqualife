/**
 * Efeitos de água em CSS puro (sem libs, sem JS de runtime):
 *
 * - <Droplets/>: gotas d'água "na tela" — esferas de vidro com brilho,
 *   leve tremido, e algumas que de tempos em tempos escorrem pra baixo.
 * - <Bubbles/>: bolhas subindo lentamente, como dentro da piscina.
 *
 * Posições fixas (determinísticas) pra não pesar e não quebrar hidratação.
 */

type Drop = {
  top: string;
  left: string;
  size: number;
  delay: number;
  slide?: boolean;
};

const DROPS: Drop[] = [
  { top: "8%", left: "6%", size: 26, delay: 0 },
  { top: "14%", left: "88%", size: 18, delay: 1.2 },
  { top: "26%", left: "13%", size: 12, delay: 2.1 },
  { top: "22%", left: "72%", size: 34, delay: 0.6 },
  { top: "38%", left: "92%", size: 14, delay: 1.8 },
  { top: "47%", left: "4%", size: 20, delay: 0.9 },
  { top: "58%", left: "85%", size: 24, delay: 2.6 },
  { top: "66%", left: "10%", size: 15, delay: 1.5 },
  { top: "76%", left: "78%", size: 30, delay: 0.3 },
  { top: "84%", left: "18%", size: 17, delay: 2.2 },
  { top: "12%", left: "38%", size: 13, delay: 1.1 },
  { top: "82%", left: "55%", size: 21, delay: 1.9 },
  // Gotas que escorrem
  { top: "10%", left: "26%", size: 16, delay: 3, slide: true },
  { top: "6%", left: "62%", size: 20, delay: 8, slide: true },
  { top: "16%", left: "94%", size: 14, delay: 13, slide: true },
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
          className={`absolute rounded-full ${
            d.slide ? "animate-drop-slide" : "animate-drop-wobble"
          }`}
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size * 1.08,
            animationDelay: `${d.delay}s`,
            background:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 22%, rgba(255,255,255,0.10) 46%, rgba(2,58,82,0.10) 78%, rgba(2,58,82,0.18) 100%)",
            boxShadow:
              "inset -1px -2px 3px rgba(2,58,82,0.18), inset 1px 1px 2px rgba(255,255,255,0.8), 0 2px 6px rgba(2,58,82,0.18)",
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(1.5px)",
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
          className="animate-bubble-rise absolute bottom-0 rounded-full border border-white/50 bg-white/20"
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
