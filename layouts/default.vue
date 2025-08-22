<template>
  <div class="min-h-dvh flex flex-col">
    <!-- HEADER -->
<header
  :class="[
    'sticky top-0 z-50 border-b transition-transform duration-300 will-change-transform',
    'bg-white/80 backdrop-blur dark:bg-neutral-900/70 dark:border-neutral-800',
    (hidden && !open) ? '-translate-y-full' : 'translate-y-0'
  ]"
>
  <nav class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
    <!-- LOGO: scroll to top -->
    <NuxtLink
      to="/"
      class="flex items-center gap-2 font-black tracking-wide"
      @click.prevent="goTop"
      aria-label="RAST – Početak stranice"
    >
      <span class="inline-block w-3 h-3 rounded-full bg-brand"></span>
      <span>RAST</span>
    </NuxtLink>

    <!-- DESKTOP NAV -->
    <ul class="hidden md:flex gap-6 text-sm">
      <li><a href="/#onama"    class="hover:text-brand">O nama</a></li>
      <li><a href="/#usluge"   class="hover:text-brand">Usluge</a></li>
      <li><NuxtLink to="/blog" class="hover:text-brand">Blog</NuxtLink></li>
      <li><a href="/#galerija" class="hover:text-brand">Galerija</a></li>
      <li><a href="/#kontakt"  class="hover:text-brand">Kontakt</a></li>
    </ul>

    <!-- DESNO: DARK TOGGLE + HAMBURGER -->
    <div class="flex items-center gap-2">
      <!-- desktop toggle -->
      <button
        class="hidden md:inline-flex text-sm px-3 py-1.5 rounded-md border dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
        @click="toggleTheme"
        aria-label="Promijeni temu"
      >
        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
      </button>

      <!-- mobile hamburger -->
      <button
        class="md:hidden rounded-md border dark:border-neutral-700 px-3 py-1.5 text-sm"
        @click="toggleMenu"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="mobile-menu"
        aria-label="Menu"
      >
        {{ open ? '✕' : '☰' }}
      </button>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div
    id="mobile-menu"
    v-show="open"
    class="md:hidden absolute inset-x-0 top-full z-40 border-b bg-white dark:bg-neutral-900 dark:border-neutral-800"
  >
    <ul class="px-4 py-2 space-y-2">
      <li><a href="/#onama"    class="block py-2" @click="onNav">O nama</a></li>
      <li><a href="/#usluge"   class="block py-2" @click="onNav">Usluge</a></li>
      <li><NuxtLink to="/blog" class="block py-2" @click="onNav">Blog</NuxtLink></li>
      <li><a href="/#galerija" class="block py-2" @click="onNav">Galerija</a></li>
      <li><a href="/#kontakt"  class="block py-2" @click="onNav">Kontakt</a></li>
      <!-- ⬇️ toggle na dnu menija -->
      <li class="pt-2 border-t dark:border-neutral-800">
        <button class="w-full text-left text-sm py-2" @click="toggleTheme">
          {{ isDark ? '🌙 Dark' : '☀️ Light' }}
        </button>
      </li>
    </ul>
  </div>
</header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t dark:border-neutral-800">
      <div class="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span>© {{ new Date().getFullYear() }} RAST – Uređenje vrtova</span>
        <div class="flex gap-4">
          <a class="hover:text-brand" href="mailto:fooshmoola@gmail.com">fooshmoola@gmail.com</a>
          <a class="hover:text-brand" href="tel:+385955448400">+385 95 544 8400</a>
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
