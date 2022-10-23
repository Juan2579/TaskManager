/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
