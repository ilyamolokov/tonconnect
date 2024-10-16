import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|image|input|modal|spinner|ripple).js",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#000",
        background: "#FFF",
        border: "#8C8C8C",
        primary: {
          DEFAULT: "#0098EA",
          foreground: "#FFF",
        },
        // TODO: delete if not needed
        // secondary: {
        //   DEFAULT: "#FFF",
        //   foreground: "#FFF",
        // },
        // default: {
        //   DEFAULT: "#333333",
        //   foreground: "#000",
        // },
      },
    },
  },

  plugins: [
    nextui({
      layout: {},
      themes: {
        dark: {},
      },
    }),
  ],
};
export default config;
