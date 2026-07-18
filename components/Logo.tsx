import { IconWaves } from "./Icons";

type LogoProps = {
  className?: string;
  /** "light": para fundos azuis/escuros · "dark": para fundos claros */
  tone?: "light" | "dark";
};

export default function Logo({ className = "", tone = "light" }: LogoProps) {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ciano to-azul-piscina text-white shadow-md shadow-azul-piscina/30 transition-transform group-hover:scale-105">
        <IconWaves className="h-5 w-5" />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight">
        <span className={tone === "light" ? "text-white" : "text-azul-piscina-escuro"}>
          Aqua
        </span>
        <span className="text-verde-vida">Life</span>
        <span
          className={`ml-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] ${
            tone === "light" ? "text-white/70" : "text-tinta/50"
          }`}
        >
          Piscinas
        </span>
      </span>
    </a>
  );
}
