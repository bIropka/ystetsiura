// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  },
})
