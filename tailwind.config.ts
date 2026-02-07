import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#e6eeff",
          500: "#2f62ff",
          600: "#1c4beb",
          700: "#163bc0"
        }
      }
    }
  },
  plugins: []
};

export default config;
