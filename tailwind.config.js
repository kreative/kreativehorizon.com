const plugin = require("tailwindcss/plugin");
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "clouds-horizon": "url('/images/clouds-horizon.png')",
        "floating-cta-w-logo": "url('/images/floating-cta-bg-w-logo.png')",
      },
      fontFamily: {
        sans: ["var(--font-craftworksans)"],
        guthen: ["var(--font-guthenbloots)"],
        chedros: ["var(--font-chedros)"],
      },
      colors: {
        "horizon-orange": "#FF900E",
        "horizon-pink": "#FF0E9F",
        "horizon-purple": "#950EFF",
        "horizon-purple-300": "C479FF",
        "horizon-grey-100": "#FAFAFA",
        "horizon-grey-200": "#F6F6F4",
        "horizon-grey-300": "#E3E3E3",
        "horizon-grey-400": "#C9C9C9",
        "horizon-grey-500": "#959093",
        "horizon-grey-600": "#706B6E",
        "horizon-grey-700": "#4B484A",
        "horizon-grey-800": "#1F1D1E",
      },
      gradientColorStops: {
        "horizon-orange": "#FF900E",
        "horizon-pink": "#FF0E9F",
        "horizon-purple": "#950EFF",
        "horizon-purple-300": "#C479FF",
        "horizon-tan": "#FFEEDB",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
