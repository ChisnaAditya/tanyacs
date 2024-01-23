/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-normal": "bounce 0.9s infinite",
        "bounce-fast": "bounce 0.8s infinite",
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};
