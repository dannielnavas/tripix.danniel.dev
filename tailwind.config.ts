import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00A8E8", // color principal del botón
        "primary-dark": "#0087B3", // color del hover del botón
        accent: "#FDCB6E", // color de acento
        neutral: {
          light: "#F4F4F4", // texto y detalles claros
          dark: "#3A3A3A", // colores neutros oscuros
        },
        warning: "#E74C3C",
      },
    },
  },
  plugins: [],
};
export default config;
