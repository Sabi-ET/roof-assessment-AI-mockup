// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],

  ui: {
    global: true,
    icons: ['heroicons']
  },

  devtools: false,
  ssr: true,

  nitro: {
    preset: 'netlify'
  },

  compatibilityDate: '2024-11-22'
})