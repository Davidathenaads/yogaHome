/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ea0023',
          200: '#e84860',
          300: '#DB485D',
          400: '#e24e64',
          500: '#e74760',
          600: '#d93b57',
          700: '#ff0000',
          800: '#ea0023',
          900: '#c0392b'
        },
        secondary: {
          100: '#f19d94',
          200: '#f09491',
          300: '#ea8c89',
          400: '#d98683',
          500: '#ffa9b6',
          600: '#efacb6'
        },
        thirdary: {
          100: '#a4d4d7',
          200: '#7bb0ba',
          300: '#7aafb8',
          400: '#45828b',
          500: '#4c5b5d'
        },
        card: {
          DEFAULT: '#eec8a1'
        },
        item: {
          DEFAULT: '#f9cda6'
        },
        brown: '#825450d9',
        facebook: {
          DEFAULT: '#416cc3',
          dark: '#007aff'
        },
        muted: {
          50: '#f5f5f5',
          100: '#ffffff66',
          200: '#ffffff4d',
          300: '#3f3f3f'
        },
        line: {
          DEFAULT: '#00c200'
        },
        warning: '#ffcc99'
      },
      keyframes: {
        anileft: {
          '0%': {
            opacity: '0', transform: 'translate3d(-100%,0,0)'
          },
          '100%': {
            opacity: '1', transform: 'translateZ(0)'
          }
        },
        aniright: {
          '0%': {
            opacity: '0', transform: 'translate3d(100%,0,0)'
          },
          '100%': {
            opacity: '1', transform: 'translateZ(0)'
          }
        }
      },
      animation: {
        anileft: 'anileft 1s ease 1',
        aniright: 'aniright 1s ease 1'
      }
    }
  },
  plugins: []
};
