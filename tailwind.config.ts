import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
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
        mainBlue : '#0AA8FF',
        mainGray: '#8F90A5'
      },

      screens: {
        'smTab': '450px',
        'tab&win': '600px',
        'sd': '930px',
        ...defaultTheme.screens
      }
    },
  },
  plugins: [],
} satisfies Config;
