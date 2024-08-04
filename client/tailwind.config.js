/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_orange: "#FF6636",
        primary_black: "#1D2026",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
