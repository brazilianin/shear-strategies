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
        navy: {
          DEFAULT: "#001C38",
          800: "#001830",
          900: "#000e1f",
        },
        slate: {
          DEFAULT: "#6A89A7",
          100: "#e8eef4",
          200: "#c5d4e3",
        },
        gold: {
          DEFAULT: "#C5A059",
          400: "#d4b677",
          600: "#a8863e",
          dark: "#886A30",
        },
        cream: {
          DEFAULT: "#F2EEE8",
          50: "#fdfcf8",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
