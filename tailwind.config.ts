import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta baseada na logo AquaLife: ciano de piscina + verde "Life",
        // em tema claro e ensolarado de piscina.
        "agua-profunda": "#02688E",
        oceano: "#023A52",
        "azul-piscina": "#00B8D9",
        ciano: "#22E1FF",
        "azul-piscina-escuro": "#0090AC",
        "verde-vida": "#9BE15D",
        pedra: "#DDF1F7",
        papel: "#F0FAFD",
        tinta: "#05374A",
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        "lane-ripple": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-6%)" },
        },
        "hero-sway": {
          "0%, 100%": { transform: "translateX(0) skewX(0deg)" },
          "50%": { transform: "translateX(-3%) skewX(-1deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(6%, -4%, 0) scale(1.08)" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-5%, 5%, 0) scale(1.12)" },
        },
        aurora: {
          "0%, 100%": {
            transform: "translate3d(-4%, -2%, 0) rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "translate3d(4%, 3%, 0) rotate(6deg) scale(1.1)",
          },
          "66%": {
            transform: "translate3d(-2%, 4%, 0) rotate(-4deg) scale(1.05)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "bubble-rise": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.7" },
          "50%": { transform: "translateY(-45vh) translateX(8px)" },
          "90%": { opacity: "0.5" },
          "100%": {
            transform: "translateY(-90vh) translateX(-6px)",
            opacity: "0",
          },
        },
        "drop-wobble": {
          "0%, 100%": { transform: "scale(1, 1)" },
          "30%": { transform: "scale(1.03, 0.97)" },
          "60%": { transform: "scale(0.98, 1.02)" },
        },
        "drop-run": {
          "0%, 58%": { transform: "translateY(0) scale(1, 1)", opacity: "0.95" },
          "62%": { transform: "translateY(2vh) scale(1.08, 0.9)", opacity: "1" },
          "70%": {
            transform: "translateY(20vh) translateX(3px) scale(0.9, 1.3)",
          },
          "80%": {
            transform: "translateY(46vh) translateX(-2px) scale(0.92, 1.22)",
            opacity: "0.9",
          },
          "90%": { transform: "translateY(72vh) scale(0.95, 1.1)", opacity: "0.6" },
          "94%, 100%": { transform: "translateY(80vh)", opacity: "0" },
        },
        "trail-fade": {
          "0%, 56%": { opacity: "0" },
          "64%": { opacity: "1" },
          "88%": { opacity: "0.75" },
          "94%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "lane-ripple": "lane-ripple 8s ease-in-out infinite",
        "hero-sway": "hero-sway 14s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite",
        "drift-slow": "drift-slow 22s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "aurora-slow": "aurora 26s ease-in-out infinite reverse",
        marquee: "marquee 28s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "bubble-rise": "bubble-rise 9s ease-in infinite",
        "drop-wobble": "drop-wobble 5s ease-in-out infinite",
        "drop-run": "drop-run 16s ease-in infinite",
        "trail-fade": "trail-fade 16s ease-in infinite",
        "sheen-slow": "sheen 13s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
