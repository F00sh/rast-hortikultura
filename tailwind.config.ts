import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
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
  }
}
