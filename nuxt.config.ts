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
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: 'light-plus'
    }
  }
})