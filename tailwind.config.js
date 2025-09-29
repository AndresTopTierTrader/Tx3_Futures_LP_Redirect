const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-neue-montreal)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        nav: '1112px',
        "mb": "1100px",
      },
      colors: {
        'ttblue': '#3652A7',
        'ttorange': '#FF782D',
        'ttelectricBlue': "#64C3E2",
        'secondary':'#4E4E4E',
        'primary': '#121212',
        green: '#60F94B',
        background: '#0B111D',
        modest: '#A2ACCF',
        border: '#717892',
        cyan: '#3ABCF2'
      },
    },
  },
  plugins: [],
};