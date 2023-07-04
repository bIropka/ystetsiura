// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles" + "/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  eslint: {
    /* module options */
  },
});
