/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00eeffff",
        secondary: "#1f232eff",
        white: "#fcfeffff",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
