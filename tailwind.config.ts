import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--background)",
        ivory: "var(--foreground)",
        signal: "var(--signal)",
        muted: "var(--muted)",
        steel: "var(--steel)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        signal: "0 0 40px rgba(124, 255, 178, 0.18)",
      },
      letterSpacing: {
        signal: "0.38em",
      },
    },
  },
  plugins: [],
};

export default config;
