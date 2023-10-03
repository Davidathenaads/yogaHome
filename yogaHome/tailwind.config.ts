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
        red: '#ff0000',
        primary: {
          100: '#ea0023',
          200: '#e84860',
          300: '#DB485D',
          400: '#e24e64',
          500: '#e74760',
          600: '#d93b57'
        },
        secondary: {
          100: '#f19d94',
          200: '#f09491',
          300: '#ea8c89',
          400: '#d98683'
        },
        orange: '#eec8a1',
        brown: '#825450d9'
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
