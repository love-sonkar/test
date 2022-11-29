/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        airbnb: {
          orange: "#FC642D",
          pink: "#FF5A5F",
          green: "#00A699",
          lightBlack: "#767676",
          ligthDark: "#484848",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
