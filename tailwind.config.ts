// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    // ako koristiš @nuxt/content:
    './content/**/*.{md,yml,json}'
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2f7d4d', dark: '#1e5a37' },
        accent: '#f08a24'
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
    // opcionalno: require('@tailwindcss/forms')
  ]
}

export default config
