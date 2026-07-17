import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "agua-profunda": "#0E3A45",
        "azul-piscina": "#2AA7A0",
        pedra: "#E4D8BE",
        papel: "#F7F4EE",
        tinta: "#16211F",
        "azul-piscina-escuro": "#1C7A74",
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
        "hero-shimmer": {
          "0%, 100%": { opacity: "0.35", transform: "translate3d(0,0,0)" },
          "50%": { opacity: "0.6", transform: "translate3d(4%,2%,0)" },
        },
      },
      animation: {
        "lane-ripple": "lane-ripple 8s ease-in-out infinite",
        "hero-sway": "hero-sway 14s ease-in-out infinite",
        "hero-shimmer": "hero-shimmer 11s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
