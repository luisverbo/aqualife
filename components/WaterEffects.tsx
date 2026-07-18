/**
 * Cena subaquática cinematográfica em CSS puro (sem libs, sem JS):
 *
 * - <Underwater/>: composição completa — superfície da água vista de
 *   baixo (ondulações claras no topo), raios de sol atravessando a água
 *   (god rays) balançando devagar, e partículas em suspensão iluminadas.
 * - <Bubbles/>: bolhas com brilho subindo em ritmos variados.
 *
 * Posições fixas (determinísticas) pra não pesar e não quebrar hidratação.
 */

/* ───────────────────────── Superfície vista de baixo ─────────────── */

function WaterSurface() {
  return (
    <div className="absolute inset-x-0 top-0 h-32 overflow-hidden">
      {/* claridade da superfície */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/12 to-transparent" />
      {/* ondulações — duas camadas deslizando em velocidades diferentes */}
      <div
        className="animate-surface-a absolute -top-1 left-0 h-14 w-[calc(100%+140px)]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70px 26px at 70px 0px, rgba(255,255,255,0.55), transparent 72%)",
          backgroundSize: "140px 56px",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div
        className="animate-surface-b absolute -top-1 left-0 h-10 w-[calc(100%+90px)]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 45px 18px at 45px 0px, rgba(255,255,255,0.35), transparent 72%)",
          backgroundSize: "90px 40px",
          backgroundRepeat: "repeat-x",
        }}
      />
    </div>
  );
}

/* ───────────────────────── Raios de sol (god rays) ───────────────── */

type Ray = { left: string; width: number; delay: number; opacity: number };

const RAYS: Ray[] = [
  { left: "2%", width: 90, delay: 0, opacity: 0.5 },
  { left: "18%", width: 170, delay: 1.6, opacity: 0.75 },
  { left: "40%", width: 80, delay: 3.4, opacity: 0.45 },
  { left: "58%", width: 200, delay: 0.8, opacity: 0.8 },
  { left: "80%", width: 110, delay: 2.5, opacity: 0.55 },
];

function GodRays() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {RAYS.map((r, i) => (
        <div
          key={i}
          className="animate-ray-sway absolute -top-[10%] h-[150%] origin-top"
          style={{ left: r.left, width: r.width, animationDelay: `${r.delay}s` }}
        >
          <div
            className="animate-pulse-glow h-full w-full blur-xl"
            style={{
              animationDelay: `${r.delay + 1}s`,
              opacity: r.opacity,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 35%, rgba(255,255,255,0.06) 65%, transparent 85%)",
              mixBlendMode: "soft-light",
            }}
          />
        </div>
      ))}
      {/* feixe principal, mais forte, com blend screen */}
      <div className="animate-ray-sway absolute -top-[10%] left-[30%] h-[150%] w-36 origin-top">
        <div
          className="animate-pulse-glow h-full w-full blur-2xl"
          style={{
            opacity: 0.4,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.25) 40%, transparent 75%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}

/* ───────────────────────── Partículas em suspensão ───────────────── */

type Particle = { top: string; left: string; size: number; delay: number; dur: number };

const PARTICLES: Particle[] = [
  { top: "18%", left: "12%", size: 3, delay: 0, dur: 11 },
  { top: "26%", left: "78%", size: 2, delay: 2.2, dur: 13 },
  { top: "34%", left: "28%", size: 4, delay: 1.1, dur: 10 },
  { top: "42%", left: "88%", size: 2, delay: 3.8, dur: 14 },
  { top: "49%", left: "8%", size: 3, delay: 0.6, dur: 12 },
  { top: "55%", left: "62%", size: 2, delay: 2.9, dur: 11 },
  { top: "63%", left: "36%", size: 3, delay: 1.7, dur: 13 },
  { top: "70%", left: "82%", size: 4, delay: 0.3, dur: 10 },
  { top: "76%", left: "16%", size: 2, delay: 3.2, dur: 12 },
  { top: "82%", left: "56%", size: 3, delay: 1.4, dur: 14 },
  { top: "30%", left: "48%", size: 2, delay: 4.4, dur: 12 },
  { top: "60%", left: "94%", size: 2, delay: 2, dur: 11 },
  { top: "86%", left: "34%", size: 2, delay: 0.9, dur: 13 },
  { top: "22%", left: "60%", size: 2, delay: 3.5, dur: 10 },
];

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-particle-drift absolute rounded-full bg-white"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            filter: "blur(0.5px)",
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────── Composição ────────────────────────────── */

type UnderwaterProps = {
  /** Mostra a superfície ondulada no topo (desligue quando houver onda SVG). */
  surface?: boolean;
  className?: string;
};

export function Underwater({ surface = true, className = "" }: UnderwaterProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <GodRays />
      <Particles />
      {surface && <WaterSurface />}
    </div>
  );
}

/* ───────────────────────── Bolhas ────────────────────────────────── */

type Bubble = { left: string; size: number; delay: number; duration: number };

const BUBBLES: Bubble[] = [
  { left: "6%", size: 14, delay: 0, duration: 9 },
  { left: "14%", size: 6, delay: 2.4, duration: 11 },
  { left: "24%", size: 10, delay: 4.8, duration: 8.5 },
  { left: "33%", size: 5, delay: 1.2, duration: 12 },
  { left: "45%", size: 8, delay: 3.6, duration: 10 },
  { left: "54%", size: 16, delay: 0.7, duration: 8 },
  { left: "63%", size: 6, delay: 5.3, duration: 11.5 },
  { left: "72%", size: 11, delay: 1.8, duration: 9.5 },
  { left: "82%", size: 5, delay: 3.1, duration: 12.5 },
  { left: "90%", size: 13, delay: 0.4, duration: 8.8 },
  { left: "96%", size: 7, delay: 4.1, duration: 10.5 },
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
          className="animate-bubble-rise absolute bottom-0 rounded-full"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            background:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0.08) 70%, rgba(255,255,255,0.15) 100%)",
            border: "1px solid rgba(255,255,255,0.45)",
            boxShadow: "inset -1px -1px 2px rgba(255,255,255,0.25)",
          }}
        />
      ))}
    </div>
  );
}
