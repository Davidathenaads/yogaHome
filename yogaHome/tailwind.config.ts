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
        thirdary: {
          100: '#a4d4d7',
          200: '#7bb0ba',
          300: '#7aafb8',
          400: '#45828b',
          500: '#4c5b5d'
        },
        orange: {
          100: '#eec8a1',
          200: '#f9cda6'
        },
        brown: '#825450d9',
        blue1: '#007aff',
        blue2: '#416cc3',
        dark: '#3f3f3f',
        dark2: '#00000099',
        white1: '#ffffff66',
        white2: '#ffffff4d',
        white3: '#f5f5f5',
        green1: '#00c200',
        red1: '#ffa9b6',
        red2: '#efacb6',
        red3: '#ea0023',
        red4: '#c0392b',
        yellow1: '#ffcc99'
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
