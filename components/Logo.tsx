import { IconWaves } from "./Icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-azul-piscina text-agua-profunda transition-transform group-hover:scale-105">
        <IconWaves className="h-5 w-5" />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight text-papel">
        Aqualife<span className="text-azul-piscina"> Piscinas</span>
      </span>
    </a>
  );
}
