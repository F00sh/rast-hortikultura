export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'RAST – Uređenje vrtova i okućnica',
      htmlAttrs: { lang: 'hr' },
      meta: [
        { name: 'description', content: 'Projektiranje vrtova, travnati tepisi, navodnjavanje i održavanje – diljem Hrvatske.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'color-scheme', content: 'light dark' }
      ]
    }
  },
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2025-08-21'
})
