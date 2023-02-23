// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // * Load modules here
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/strapi'
  ],

  // * i18n configuration
  i18n: {
    strategy: 'prefix_except_default',
    // * Locales in assets/i18n
    locales: [
      {
        code: 'it',
        file: 'it.json'
      },
    ],
    langDir: 'assets/i18n',
    // * Set up default locale code
    defaultLocale: 'it',
  },

  // * Strapi configuration
  strapi: {
    url: process.env.API_ENDPOINT,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  css: ['@/assets/scss/resetscss.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/main.scss";`,
        }
      }
    }
  }
})
