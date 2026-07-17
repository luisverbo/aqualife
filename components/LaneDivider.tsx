type LaneDividerProps = {
  className?: string;
};

/**
 * "Raias de piscina" — signature divider used between every section.
 * Diagonal stripes alternating azul-piscina/papel with a slow, subtle
 * translateX ripple loop.
 */
export default function LaneDivider({ className = "" }: LaneDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-3 w-full overflow-hidden sm:h-4 ${className}`}
    >
      <div
        className="animate-lane-ripple absolute inset-y-0 -left-[12%] w-[124%] opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--azul-piscina) 0px, var(--azul-piscina) 16px, var(--papel) 16px, var(--papel) 32px)",
        }}
      />
    </div>
  );
}
