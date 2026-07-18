type WaveDividerProps = {
  /** Cor de preenchimento da onda (a cor da seção DE BAIXO). */
  fill?: string;
  className?: string;
  flip?: boolean;
};

/** Onda separadora entre seções — traço de piscina. */
export default function WaveDivider({
  fill = "#F0FAFD",
  className = "",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 84"
        preserveAspectRatio="none"
        className="block h-[44px] w-full sm:h-[64px]"
      >
        <path
          d="M0,40 C180,80 360,8 540,28 C720,48 900,84 1080,64 C1260,44 1380,20 1440,32 L1440,84 L0,84 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
