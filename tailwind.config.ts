import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f9f9f6",
        ink: "#1a1c1a",
        muted: "#444748",
        line: "#e5e5e0",
        stone: "#f4f4f1",
        mist: "#eeeeeb",
        terracotta: "#c85a32",
        "terracotta-dark": "#b85028",
        whatsapp: "#128C7E",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      boxShadow: {
        card: "0 12px 32px -8px rgba(26, 26, 26, 0.07)",
        modal: "0 24px 48px -12px rgba(26, 26, 26, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
