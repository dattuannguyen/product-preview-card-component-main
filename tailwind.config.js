/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      fraun: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        creambg: "#f3eae3",
        greenbtn: "#3e8168",
        hoverbtn: "#1a4031",
        textColor: "#151c22",
      },
    },
  },
  plugins: [],
};
