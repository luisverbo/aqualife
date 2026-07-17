import { IconWaves } from "./Icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ciano to-azul-piscina text-oceano transition-transform group-hover:scale-105">
        <IconWaves className="h-5 w-5" />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">
        <span className="text-azul-piscina">Aqua</span>
        <span className="text-verde-vida">Life</span>
        <span className="ml-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-papel/60">
          Piscinas
        </span>
      </span>
    </a>
  );
}
