/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-200": "#E4E4E4",
        "neutral-700": "#404040",
        "neutral-1000": "#000000",
        "stroke": "#546A7A",
        "blue-default": "#1D9BF0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.625rem",
      },
      spacing: {
        25: "6.25rem",
      },
      borderRadius: {
        "4.06": "4.06rem",
      },
      boxShadow: {
        "sh-1": "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}