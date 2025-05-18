const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    { pattern: /(bg|text|border)-\[#.*\]/ },
    { pattern: /(bg|text|border)-(gold|gold-accent|dark-green|white|black|ivory)/ }
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
        'gold-accent': '#ffe19b',
        'dark-green': '#051905',
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
        },
        'scroll-fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px 1px rgba(255, 225, 155, 0.4)' },
          '50%': { boxShadow: '0 0 12px 2px rgba(255, 225, 155, 0.6)' }
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-in': 'slide-in 0.4s ease-out forwards',
        'scroll-fade-in': 'scroll-fade-in 0.8s ease forwards',
        'pulse-glow': 'pulse-glow 2s infinite',
        'pulse': 'pulse 2s infinite',
      },
      boxShadow: {
        'gold': '0 4px 6px rgba(0, 0, 0, 0.5)'
      },
      scale: {
        '103': '1.03',
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
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('landscape', '@media (orientation: landscape)');
      addVariant('landscape-sm', '@media (orientation: landscape) and (max-width: 1024px)');
    })
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
  }
}
