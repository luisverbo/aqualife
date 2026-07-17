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
        // sobre um oceano profundo quase preto (ar "big tech").
        "agua-profunda": "#03212E",
        oceano: "#021821",
        "azul-piscina": "#00B8D9",
        ciano: "#22E1FF",
        "azul-piscina-escuro": "#0090AC",
        "verde-vida": "#9BE15D",
        pedra: "#DCEDF2",
        papel: "#F2FAFC",
        tinta: "#052330",
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
      },
    },
  },
  plugins: [],
};

export default config;
