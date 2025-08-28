// nuxt.config.ts
export default defineNuxtConfig({
  // ✅ ENV / runtime
  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT || '465',
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    contactTo: process.env.CONTACT_TO,
    public: {
      apiBase: process.env.API_BASE || '' // ostavi prazno ako je API na istom hostu
    }
  },

  // ✅ Globalni CSS (Tailwind ulaz)
  css: ['@/assets/css/tailwind.css'],

  // ✅ PostCSS unutar Nuxt configa (umjesto postcss.config.js)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // (opcionalno) Korisno u devu
  vite: {
    css: { devSourcemap: true }
  },

  // (opcionalno) Osnovni head/meta – prilagodi po želji
  app: {
    head: {
      htmlAttrs: { lang: 'hr', class: '' }, // 'dark' se dodaje/miče u runtimeu
      title: 'RAST – Uređenje vrtova i zelenih površina',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#065f46' }
      ],
      link: [
        // { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  },

  // ✅ Nitro / rute API-ja (ostavljam tvoje napomene)
  nitro: {
    routeRules: {
      '/api/contact': {
        // Ako dobiješ 413 (Payload Too Large), povećaj limit na reverse proxyju
        // (npr. Nginx/LiteSpeed/Apache) ili smanji MAX_FILE_MB na klijentu.
      }
    }
  }
})
