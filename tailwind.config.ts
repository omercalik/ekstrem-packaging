// tailwind.config.ts (or .mjs or .js)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: {
          // Make sure this key is exactly "brandOrange"
          DEFAULT: "#F37021",
          light: "#F68B4D",
          dark: "#D85C1B",
        },
        brandBlue: {
          DEFAULT: "#005A70",
          light: "#00738C",
          dark: "#004153",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins you use here, e.g., require('@tailwindcss/forms')
  ],
};
export default config;
