module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#5A1A01",
          light: "#7A2A11",
          dark: "#4A0A00"
        },
        ivory: {
          DEFAULT: "#F8F5F0",
          light: "#FFFCF7",
          dark: "#F0EDE5"
        },
        gold: {
          DEFAULT: "#C5A880",
          light: "#D5B890",
          dark: "#B59870"
        },
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
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-in': 'slide-in 0.4s ease-out forwards',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
  }
}
