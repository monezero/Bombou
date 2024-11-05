// tailwind.config.ts
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
        bombou_roxo: "#965fd4",
        bombou_slate: "#1d1a2f",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom': '0 0 20px rgba(255, 0, 255, 0.9)', // Cor mais forte (magenta)
      },
    },
  },
  plugins: [],
};

export default config;
