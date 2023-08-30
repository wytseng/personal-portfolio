/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 270deg at 70% 70%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: 'poppins',
        sharetechmono: 'share tech mono',
        spacegrotesk: 'space grotesk',
      },
      colors: {
        "black": "#17252A",
        "darkgreen": "#174140",
        "forest": "#2B7A78",
        "main": "#3AAFA9",
        "mist": "#DEF2F1",
        "white": "#FEFFFF",
      },
      keyframes: {
        'open-hamburger': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.1)'},
          '100%': {transform: 'scaleY(1)'},
        },
        'close-hamburger': {
          '0%': {transform: 'scaleY(1)'},
          '100%': {transform: 'scaleY(0)'},
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        'open-hamburger': 'open-hamburger 300ms ease-in-out forwards',
        'close-hamburger': 'close-hamburger 200ms ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out 7s forwards'
      }
    },
  },
  plugins: [],
}
