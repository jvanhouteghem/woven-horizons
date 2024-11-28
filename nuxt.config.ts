// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules: {
    '/': { redirect: '/home' },
  },
  css: [
    '~/styles/global.scss'
  ],
  // content part
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: "en.json" },
      { code: 'fr', language: 'fr-FR', file: "fr.json" },
      { code: 'es', language: 'es-ES', file: "es.json" },
      { code: 'de', language: 'de-DE', file: "de.json" }
    ],
    defaultLocale: 'en',
  },
  /*content: {
    highlight: {
      theme: 'light-plus'
    }
  },*/
})