<template>
  <section id="onama" class="relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-10 py-16 md:grid-cols-2 lg:gap-16 lg:py-24">

        <!-- TEXT -->
        <div class="reveal-left">
          <p class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-300 dark:border-emerald-800/60 dark:bg-emerald-900/30">
            O nama
          </p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-brand dark:text-brand-light">
            Stručnost koja se vidi u svakom detalju
          </h2>

          <p class="mt-5 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina. Naš tim stručnjaka, opremljen
            modernim alatima i tehnikama, posvećen je stvaranju zelenih oaza koje odišu ljepotom i funkcionalnošću. Bilo da se radi
            o malom vrtu ili velikom masliniku, svaki projekt tretiramo s istom pažnjom i predanošću.
          </p>

          <ul class="mt-6 grid gap-3 sm:grid-cols-2">
            <li class="flex items-start gap-3">
              <svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Visoka razina stručnosti i pažnja prema detaljima</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Brza i učinkovita izvedba radova</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Korištenje moderne opreme koja omogućuje optimalne rezultate</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Stručni tim koji razumije potrebe svakog projekta</span>
            </li>
          </ul>

          <p class="mt-5 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            S dugogodišnjim iskustvom u različitim vrstama projekata, nudimo širok spektar usluga, uključujući projektiranje,
            košnju, postavljanje travnatih tepiha, navodnjavanje, sadnju biljaka i rad u maslinicima. Bez obzira na to je li teren
            zahtjevan i nepristupačan, naš tim uvijek pronalazi optimalno rješenje kako bi klijentima pružio najbolje rezultate.
          </p>

          <div class="mt-6 rounded-xl border bg-neutral-50 p-4 text-sm text-brand dark:border-neutral-800 dark:bg-neutral-900 dark:text-brand-light">
            Putujemo širom Hrvatske i susjednih zemalja kako bismo svoje usluge učinili dostupnima svima kojima je potrebno
            stručno uređenje zelenih površina. Naša fleksibilnost i pouzdanost čine nas idealnim partnerom za projekte svih veličina.
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <NuxtLink to="/#kontakt" class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
              Zatraži ponudu
            </NuxtLink>
            <NuxtLink to="/#usluge" class="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-neutral-800 transition hover:bg-neutral-50 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900">
              Pogledaj usluge
            </NuxtLink>
          </div>
        </div>

        <!-- IMAGE -->
        <div class="reveal-right relative">
          <div class="aspect-[4/3] overflow-hidden rounded-2xl border shadow-sm bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-800">
            <img
              src="https://raw.githubusercontent.com/F00sh/rast-assets/main/TIM.png"
              alt="Rast – tim na terenu"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

/** Simple, SSR‑safe slide‑in on first reveal using GSAP + IntersectionObserver */
onMounted(async () => {
  // respect reduced motion
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  const leftEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal-left'))
  const rightEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal-right'))

  if (reduce) {
    [...leftEls, ...rightEls].forEach(el => { el.style.opacity = '1'; el.style.transform = 'none' })
    return
  }

  const { default: gsap } = await import('gsap')

  const animate = (el: Element, dir: 'left' | 'right') => {
    const fromX = dir === 'left' ? -60 : 60
    gsap.fromTo(el, { x: fromX, opacity: 0 }, { x: 0, opacity: 1, duration: 0.75, ease: 'power2.out' })
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target as HTMLElement
      const dir: 'left' | 'right' = el.classList.contains('reveal-left') ? 'left' : 'right'
      animate(el, dir)
      io.unobserve(el)
    })
  }, { threshold: 0.25 })

  ;[...leftEls, ...rightEls].forEach(el => io.observe(el))
})
</script>
