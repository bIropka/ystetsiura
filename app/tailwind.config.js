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
    screens: {
      large: { max: '1600px' },
      middle: { max: '1040px' },
      small: { max: '768px' },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
    },
    gridTemplateRows: {
      default: 'auto 1fr',
    },
    boxShadow: {
      nav: '-4px -4px 5px 0px rgba(0, 0, 0, 0.20) inset, 4px 4px 5px 0px rgba(255, 255, 255, 0.23) inset',
    },
    extend: {
      colors: {
        'text-basic': '#7d7789',
        'text-heading': '#333',
        'surface-board': '#f6fbff',
        white: '#fff',
        /*          old vars        */
        'grad-start': '#0DA2FF',
        'grad-stop': '#05F',
        accent: '#0D86FF',
        board: '#23262B',
        body: '#AEB0B8',
        br: '#33363D',
        dark: '#1D1E24',
        error: '#b00020',
        grey: '#93959C',
        heading: '#FCFCFC',
        orange: '#FF965D',
        overlay: '#2E2F36',
        success: '#4bb543',
      },
    },
  },
}
