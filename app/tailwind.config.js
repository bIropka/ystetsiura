module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './assets/styles/main.css',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  plugins: [],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
    gridTemplateRows: {
      default: 'auto 1fr',
    },
    letterSpacing: {
      tighter: '-.005em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      xxl: '8px',
    },
    boxShadow: {
      nav: '-4px -4px 5px 0px rgba(0, 0, 0, 0.20) inset, 4px 4px 5px 0px rgba(255, 255, 255, 0.23) inset',
      light: '0px 0px 10px rgba(0,0,0,.1)',
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
      maxWidth: {
        'full-hd': '1920px',
        'ultra-full-hd': '2560px',
      },
      width: {
        photo: '740px',
      },
      colors: {
        'text-basic': '#7d7789',
        'text-heading': '#333',
        'surface-board': '#f6fbff',
        white: '#fff',
        black: '#000',
        'black-tr': 'rgba(0, 0, 0, .15)',
        success: '#4bb543',
        error: '#b00020',
        dark: 'rgb(51, 51, 51)',
      },
    },
  },
}
