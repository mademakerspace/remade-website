import type { Config } from "tailwindcss";

const palette = {
  transparent: { DEFAULT: "transparent" },
  white: { DEFAULT: "#ffffff" },
  deep: { DEFAULT: "#14161d", dark: "#0e1015" },
  brand: { DEFAULT: "#e5735f" },
  contrast: { DEFAULT: "#365bff", dark: "#4d6cf6", light: "#4e6ef7" },
  secondary: { DEFAULT: "#9fa6c5" },
  spacegray: { DEFAULT: "#22242b" },
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: { ...palette },
    fontFamily: { body: ["Inria Sans", "sans-serif"] },
    textColor: {
      ...palette,
      DEFAULT: palette.white.DEFAULT,
      base: palette.white,
    },
    borderColor: { ...palette, DEFAULT: palette.spacegray.DEFAULT },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
