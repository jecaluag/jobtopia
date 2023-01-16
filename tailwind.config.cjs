// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5324FD",
        secondary: "#FFC636",
        tertiary: "#92828D",
        quaternary: "#ADAABF",
        dark: "#0A0A0A", // "#1F1F1F",
        dimBlack: "#2B2B2B",
        dimWhite: "#D5D5D5",
        grey: "#ADADAD",
      },
      fontFamily: {
        sans: ["var(--dm-sans-font)", fontFamily.sans],
        serif: ["var(--dm-sans-font)", fontFamily.serif],
        // sans: ["var(--satoshi-font)", fontFamily.sans],
        // serif: ["var(--satoshi-font)", fontFamily.serif],
      },
    },
    container: {
      center: true,
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};
