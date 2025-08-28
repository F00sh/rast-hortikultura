<template>
  <div class="min-h-dvh flex flex-col">
    <!-- HEADER -->
    <header
      :class="[
        'sticky top-0 z-50 transition-transform duration-300 will-change-transform border-b',
        'bg-white/70 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800',
        (hidden && !open) ? '-translate-y-full' : 'translate-y-0'
      ]"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <!-- LOGO: scroll to top -->
        <NuxtLink
          to="/"
          class="flex items-center gap-2 font-black tracking-wide text-neutral-900 dark:text-neutral-100"
          @click.prevent="goTop"
          aria-label="RAST – Početak stranice"
        >
          <span class="inline-block w-3.5 h-3.5 rounded-full bg-emerald-600"></span>
          <span class="text-base">RAST</span>
        </NuxtLink>

        <!-- DESKTOP NAV -->
        <ul class="hidden md:flex items-center gap-6 text-sm uppercase">
          <li><a href="/#onama"    class="nav-link">O nama</a></li>
          <li><a href="/#usluge"   class="nav-link">Usluge</a></li>
          <li><a href="/#galerija" class="nav-link">Galerija</a></li>
          <li><a href="/#kontakt"  class="nav-link">Kontakt</a></li>
        </ul>

        <!-- DESNO: DARK TOGGLE + HAMBURGER -->
        <div class="flex items-center gap-2">
          <!-- desktop toggle -->
          <button
            class="hidden md:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            @click="toggleTheme"
            aria-label="Promijeni temu"
          >
            <span aria-hidden="true">{{ isDark ? '🌙' : '☀️' }}</span>
            <span class="hidden lg:inline">{{ isDark ? 'Dark' : 'Light' }}</span>
          </button>

          <!-- mobile hamburger -->
          <button
            class="md:hidden rounded-md px-3 py-1.5 text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            @click="toggleMenu"
            :aria-expanded="open ? 'true' : 'false'"
            aria-controls="mobile-menu"
            aria-label="Menu"
          >
            <span v-if="!open">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </nav>

      <!-- MOBILE MENU -->
      <div
        id="mobile-menu"
        v-show="open"
        class="md:hidden absolute inset-x-0 top-full z-40 border-b bg-white/90 backdrop-blur dark:bg-neutral-900/90 dark:border-neutral-800"
      >
        <ul class="px-4 py-3 space-y-2 uppercase text-sm text-neutral-900 dark:text-neutral-100">
          <li><a href="/#onama"    class="mobile-item" @click="onNav">O nama</a></li>
          <li><a href="/#usluge"   class="mobile-item" @click="onNav">Usluge</a></li>
          <li><a href="/#galerija" class="mobile-item" @click="onNav">Galerija</a></li>
          <li><a href="/#kontakt"  class="mobile-item" @click="onNav">Kontakt</a></li>

          <!-- toggle na dnu menija -->
          <li class="pt-1">
            <button
              class="w-full mobile-item !justify-between"
              @click="toggleTheme"
              aria-label="Promijeni temu"
            >
              <span>Tema</span>
              <span aria-hidden="true">{{ isDark ? '🌙' : '☀️' }}</span>
            </button>
          </li>
        </ul>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="border-t bg-white/60 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-700 dark:text-neutral-300 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <span>© {{ new Date().getFullYear() }} RAST – Uređenje vrtova</span>
        <div class="flex flex-wrap items-center gap-4">
          <a class="hover:text-emerald-700 dark:hover:text-emerald-400 underline underline-offset-4" href="mailto:upiti@rast-hortikultura.hr">upiti@rast-hortikultura.hr</a>
          <a class="hover:text-emerald-700 dark:hover:text-emerald-400 underline underline-offset-4" href="tel:+385959988777">+385 95 998 8777</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
const { hidden } = useScrollDirection(10)
const isDark = ref(false)
const route = useRoute()
const router = useRouter()

// tema
const applyTheme = (dark: boolean) => {
  isDark.value = dark
  const root = document.documentElement
  root.classList.toggle('dark', dark)
  try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
}
const toggleTheme = () => applyTheme(!isDark.value)

// meni
const toggleMenu = () => {
  open.value = !open.value
  document.documentElement.classList.toggle('overflow-hidden', open.value)
}
const onNav = (e: Event) => {
  const a = e.currentTarget as HTMLAnchorElement
  const href = a.getAttribute('href') || ''
  if (href.includes('#')) {
    e.preventDefault()
    const hash = href.slice(href.indexOf('#'))
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  open.value = false
  document.documentElement.classList.remove('overflow-hidden')
}

// logo → skrolaj na vrh (i vrati se na / ako nismo na indexu)
const goTop = async () => {
  if (route.path !== '/') await router.push('/')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// globalni smooth scroll fallback
onMounted(() => {
  // inicijalna tema
  const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null)
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  applyTheme(saved ? saved === 'dark' : !!prefersDark)

  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href') || ''
      if (!href.includes('#')) return
      const hash = href.slice(href.indexOf('#'))
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      open.value = false
      document.documentElement.classList.remove('overflow-hidden')
    })
  })
})
</script>

<style scoped>
.nav-link {
  @apply text-neutral-900/90 dark:text-neutral-100/90 hover:text-emerald-700 dark:hover:text-emerald-400 transition relative;
}
.nav-link::after {
  content: "";
  @apply absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-600 dark:bg-emerald-400 transition-all duration-200;
}
.nav-link:hover::after {
  @apply w-full;
}

.mobile-item {
  @apply w-full flex items-center justify-center py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-800/80;
}
</style>
