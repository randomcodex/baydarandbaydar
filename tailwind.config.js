/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class' if you want dark-mode support
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#5A1A01",
        ivory:   "#F8F5F0",
        gold:    "#C5A880",
      }
    },
  },
  plugins: [],
}
