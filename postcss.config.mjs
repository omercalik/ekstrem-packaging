const config = {
  plugins: ["@tailwindcss/postcss"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // You can add custom colors here if needed
      // colors: {
      //   brand: {
      //     light: '#...',
      //     DEFAULT: '#...',
      //     dark: '#...',
      //   }
      // }
    },
  },
};

export default config;
