/**
 * Efeitos de água em CSS puro (sem libs, sem JS de runtime):
 *
 * - <WetScreen/>: efeito "tela molhada" — uma película úmida cobre o
 *   vidro: as bordas/cantos refratam o fundo de verdade (backdrop-filter
 *   mascarado em manchas irregulares), um brilho de luz varre a tela
 *   devagar, e algumas gotas escorrem deixando rastro. Sem gotas paradas.
 * - <Bubbles/>: bolhas subindo lentamente, como dentro da piscina.
 *
 * Posições fixas (determinísticas) pra não pesar e não quebrar hidratação.
 */

type Runner = {
  top: string;
  left: string;
  w: number;
  h: number;
  delay: number;
  dur: number;
};

const RUNNERS: Runner[] = [
  { top: "5%", left: "24%", w: 15, h: 19, delay: 0, dur: 15 },
  { top: "3%", left: "63%", w: 18, h: 22, delay: 6, dur: 18 },
  { top: "7%", left: "78%", w: 12, h: 16, delay: 10, dur: 16 },
  { top: "2%", left: "12%", w: 16, h: 20, delay: 3, dur: 20 },
  { top: "4%", left: "45%", w: 11, h: 15, delay: 12, dur: 17 },
];

/** Lente d'água da gota que escorre. */
const runnerHead: React.CSSProperties = {
  background: [
    "radial-gradient(circle at 33% 24%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 6%, rgba(255,255,255,0.1) 14%, transparent 22%)",
    "radial-gradient(circle at 50% 50%, transparent 50%, rgba(4,45,64,0.06) 68%, rgba(4,45,64,0.18) 85%, rgba(255,255,255,0.25) 95%, rgba(4,45,64,0.25) 100%)",
  ].join(", "),
  boxShadow:
    "inset 0 1px 2px rgba(4,45,64,0.25), inset 0 -1.5px 2px rgba(255,255,255,0.4)",
  backdropFilter: "blur(1.5px) brightness(1.12) saturate(1.4)",
  WebkitBackdropFilter: "blur(1.5px) brightness(1.12) saturate(1.4)",
  borderRadius: "48% 52% 55% 45% / 60% 58% 42% 40%",
};

/** Máscara das manchas molhadas: bordas/cantos úmidos, centro limpo. */
const WET_MASK = [
  // vinheta úmida — o centro (onde fica o texto) permanece nítido
  "radial-gradient(ellipse 95% 85% at 50% 45%, transparent 0%, transparent 42%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.8) 100%)",
  // manchas mais molhadas nos cantos e bordas
  "radial-gradient(ellipse 34% 22% at 6% 8%, rgba(0,0,0,0.9), transparent 70%)",
  "radial-gradient(ellipse 30% 24% at 94% 12%, rgba(0,0,0,0.9), transparent 70%)",
  "radial-gradient(ellipse 36% 26% at 8% 90%, rgba(0,0,0,0.85), transparent 70%)",
  "radial-gradient(ellipse 32% 24% at 92% 86%, rgba(0,0,0,0.85), transparent 70%)",
  "radial-gradient(ellipse 26% 16% at 50% 98%, rgba(0,0,0,0.7), transparent 70%)",
].join(", ");

export function WetScreen({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden ${className}`}
    >
      {/* Película úmida: refração real do fundo, em manchas irregulares */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(3px) brightness(1.1) saturate(1.35)",
          WebkitBackdropFilter: "blur(3px) brightness(1.1) saturate(1.35)",
          maskImage: WET_MASK,
          WebkitMaskImage: WET_MASK,
        }}
      />

      {/* Umidade visível nas bordas (véu claro bem sutil) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 45%, transparent 0%, transparent 48%, rgba(255,255,255,0.06) 80%, rgba(255,255,255,0.12) 100%)",
        }}
      />

      {/* Brilho de luz varrendo a película devagar */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-sheen-slow absolute inset-y-0 left-0 w-1/3"
          style={{
            background:
              "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.07) 35%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.07) 65%, transparent 100%)",
          }}
        />
      </div>

      {/* Gotas escorrendo com rastro molhado */}
      {RUNNERS.map((d, i) => (
        <span
          key={i}
          className="animate-drop-run absolute"
          style={{
            top: d.top,
            left: d.left,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        >
          {/* rastro — só aparece enquanto a gota desce */}
          <span
            className="animate-trail-fade absolute bottom-[60%] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: Math.max(3, d.w * 0.3),
              height: "14vh",
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.dur}s`,
              background:
                "linear-gradient(to top, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0.04) 70%, transparent 100%)",
            }}
          />
          <span className="block" style={{ ...runnerHead, width: d.w, height: d.h }} />
        </span>
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
