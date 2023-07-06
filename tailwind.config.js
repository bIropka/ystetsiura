const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

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
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi', 'lucide']),
    }),
  ],
  theme: {
    colors: {
      accent: '#0D86FF',
      body: '#AEB0B8',
      br: '#33363D',
      dark: '#1D1E24',
      grey: '#93959C',
      heading: '#FCFCFC',
      orange: '#FF965D',
      overlay: '#2E2F36',
      surface: '#23262B',
    },
  },
}
