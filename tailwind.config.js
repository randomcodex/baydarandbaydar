/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
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
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
    },
    // Use Tailwind's default breakpoints, or extend only what you need
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
