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
      pregular: ['Poppins Regular', 'sans-serif'],
      pmedium: ['Poppins Medium', 'sans-serif'],
      pbold: ['Poppins Bold', 'sans-serif'],
    },
    colors: {
      'grad-start': '#0DA2FF',
      'grad-stop': '#05F',
      accent: '#0D86FF',
      body: '#AEB0B8',
      br: '#33363D',
      dark: '#1D1E24',
      grey: '#93959C',
      heading: '#FCFCFC',
      orange: '#FF965D',
      overlay: '#2E2F36',
      board: '#23262B',
    },
    gridTemplateRows: {
      default: 'auto 1fr',
    },
    boxShadow: {
      nav: '-4px -4px 5px 0px rgba(0, 0, 0, 0.20) inset, 4px 4px 5px 0px rgba(255, 255, 255, 0.23) inset',
    },
  },
}
