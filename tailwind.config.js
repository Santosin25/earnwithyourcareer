/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "forex-hero": "url('./../public/forex.jpeg')",
        "internet-edt": "url('./../public/internet-edt.jpeg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "floral-white": "#FFFAF0",
        "glost-white": "#F8F8FF",
        "mint-cream": "#F5FFFA",
        "snow-white": "#FFFAFA",
      },
      listStyleType: {
        square: "square",
        upperRoman: "upper-roman",
        number: "number",
        circle: "circle",
        lowerAlpha: "lower-alpha",
        lowerUpper: "upper-alpha",
      },
    },
  },
  plugins: [],
};
