/**
 * Efeitos de água em CSS puro (sem libs, sem JS de runtime):
 *
 * - <Droplets/>: efeito "celular molhado" — gotas achatadas SOBRE o vidro:
 *   brilho especular pontual, miolo transparente que refrata o fundo
 *   (backdrop-filter), borda-lente fina (anel escuro + fio de luz),
 *   formatos irregulares distribuídos em grupos, gotinhas de respingo e
 *   gotas que escorrem deixando rastro molhado.
 * - <Bubbles/>: bolhas subindo lentamente, como dentro da piscina.
 *
 * Posições fixas (determinísticas) pra não pesar e não quebrar hidratação.
 */

type Drop = {
  top: string;
  left: string;
  w: number;
  h: number;
  r?: string; // assinatura de border-radius (forma irregular)
  delay?: number;
  dur?: number;
  run?: boolean; // escorre pra baixo
  tiny?: boolean; // respingo minúsculo, sem refração (mais leve)
};

const BLOB_A = "47% 53% 55% 45% / 52% 46% 54% 48%";
const BLOB_B = "58% 42% 50% 50% / 55% 60% 40% 45%";
const BLOB_C = "50% 50% 45% 55% / 60% 55% 45% 40%";

const DROPS: Drop[] = [
  // ── Aglomerado superior esquerdo
  { top: "6%", left: "4%", w: 34, h: 26, r: BLOB_C },
  { top: "11%", left: "11%", w: 14, h: 15, r: BLOB_A },
  { top: "8%", left: "17%", w: 7, h: 7, tiny: true },
  { top: "14%", left: "6%", w: 5, h: 6, tiny: true },
  { top: "17%", left: "14%", w: 9, h: 9, tiny: true },
  // ── Aglomerado superior direito
  { top: "13%", left: "88%", w: 28, h: 30, r: BLOB_B },
  { top: "9%", left: "80%", w: 12, h: 13, r: BLOB_A },
  { top: "18%", left: "84%", w: 6, h: 6, tiny: true },
  { top: "22%", left: "92%", w: 8, h: 8, tiny: true },
  // ── Meio esquerdo
  { top: "38%", left: "5%", w: 22, h: 24, r: BLOB_A, delay: 1.2 },
  { top: "44%", left: "12%", w: 8, h: 8, tiny: true },
  { top: "49%", left: "4%", w: 6, h: 7, tiny: true },
  { top: "56%", left: "9%", w: 16, h: 14, r: BLOB_C, delay: 2.4 },
  // ── Meio direito
  { top: "41%", left: "90%", w: 26, h: 22, r: BLOB_C, delay: 0.8 },
  { top: "48%", left: "84%", w: 7, h: 7, tiny: true },
  { top: "54%", left: "93%", w: 11, h: 12, r: BLOB_A },
  { top: "61%", left: "87%", w: 6, h: 6, tiny: true },
  // ── Faixa inferior
  { top: "72%", left: "8%", w: 30, h: 24, r: BLOB_B, delay: 1.6 },
  { top: "78%", left: "17%", w: 7, h: 8, tiny: true },
  { top: "84%", left: "10%", w: 12, h: 12, r: BLOB_A },
  { top: "76%", left: "76%", w: 36, h: 28, r: BLOB_C, delay: 0.5 },
  { top: "84%", left: "86%", w: 14, h: 15, r: BLOB_B },
  { top: "88%", left: "70%", w: 8, h: 8, tiny: true },
  { top: "90%", left: "40%", w: 10, h: 10, r: BLOB_A, delay: 2 },
  { top: "86%", left: "26%", w: 6, h: 6, tiny: true },
  // ── Respingos centrais discretos (longe do título)
  { top: "30%", left: "30%", w: 5, h: 5, tiny: true },
  { top: "27%", left: "56%", w: 6, h: 6, tiny: true },
  { top: "34%", left: "74%", w: 5, h: 5, tiny: true },
  { top: "63%", left: "35%", w: 6, h: 7, tiny: true },
  { top: "67%", left: "62%", w: 5, h: 5, tiny: true },
  // ── Gotas que escorrem (com rastro)
  { top: "5%", left: "26%", w: 16, h: 20, run: true, delay: 0, dur: 15 },
  { top: "3%", left: "63%", w: 20, h: 24, run: true, delay: 6, dur: 18 },
  { top: "7%", left: "76%", w: 13, h: 17, run: true, delay: 10, dur: 16 },
  { top: "2%", left: "14%", w: 17, h: 21, run: true, delay: 3, dur: 20 },
  { top: "4%", left: "47%", w: 12, h: 16, run: true, delay: 12, dur: 17 },
];

/** Lente de água achatada sobre o vidro. */
const dropStyle = (d: Drop): React.CSSProperties => ({
  width: d.w,
  height: d.h,
  borderRadius: d.r ?? "50%",
  background: [
    // brilho especular principal — pequeno e nítido
    "radial-gradient(circle at 33% 24%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 5%, rgba(255,255,255,0.12) 13%, transparent 20%)",
    // reflexo secundário embaixo
    "radial-gradient(circle at 62% 74%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.08) 12%, transparent 20%)",
    // anel-lente: miolo transparente, anel escuro fino, fio de luz na borda
    "radial-gradient(circle at 50% 50%, transparent 52%, rgba(4,45,64,0.07) 68%, rgba(4,45,64,0.22) 84%, rgba(255,255,255,0.28) 94%, rgba(4,45,64,0.30) 100%)",
  ].join(", "),
  boxShadow:
    "inset 0 1px 2px rgba(4,45,64,0.30), inset 0 -1.5px 2px rgba(255,255,255,0.45), 0 1px 2px rgba(4,45,64,0.15)",
  backdropFilter: "blur(1.6px) brightness(1.16) saturate(1.5)",
  WebkitBackdropFilter: "blur(1.6px) brightness(1.16) saturate(1.5)",
});

/** Respingo minúsculo — sem backdrop-filter (barato). */
const tinyStyle = (d: Drop): React.CSSProperties => ({
  width: d.w,
  height: d.h,
  borderRadius: "50%",
  background:
    "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 35%, rgba(4,45,64,0.10) 75%, rgba(4,45,64,0.22) 100%)",
  boxShadow: "0 1px 1.5px rgba(4,45,64,0.22)",
});

export function Droplets({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden ${className}`}
    >
      {DROPS.map((d, i) => {
        if (d.run) {
          // Gota que escorre: cabeça + rastro molhado acima
          return (
            <span
              key={i}
              className="animate-drop-run absolute"
              style={{
                top: d.top,
                left: d.left,
                animationDelay: d.delay ? `${d.delay}s` : undefined,
                animationDuration: d.dur ? `${d.dur}s` : undefined,
              }}
            >
              {/* rastro molhado — só aparece enquanto a gota desce */}
              <span
                className="animate-trail-fade absolute bottom-[60%] left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: Math.max(3, d.w * 0.32),
                  height: "14vh",
                  animationDelay: d.delay ? `${d.delay}s` : undefined,
                  animationDuration: d.dur ? `${d.dur}s` : undefined,
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.14) 35%, rgba(255,255,255,0.04) 70%, transparent 100%)",
                }}
              />
              {/* cabeça da gota */}
              <span className="block" style={dropStyle(d)} />
            </span>
          );
        }
        return (
          <span
            key={i}
            className={`absolute ${d.tiny ? "" : "animate-drop-wobble"}`}
            style={{
              top: d.top,
              left: d.left,
              animationDelay: d.delay ? `${d.delay}s` : undefined,
              ...(d.tiny ? tinyStyle(d) : dropStyle(d)),
            }}
          />
        );
      })}
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
