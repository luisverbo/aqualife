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
      },
      animation: {
        "lane-ripple": "lane-ripple 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
