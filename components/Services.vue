<template>
  <section id="usluge" class="py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:rounded-3xl border-0 md:border dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
      <!-- Naslov + paragraf -->
      <div class="pt-10 md:pt-12 max-w-3xl">
        <h1 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase reveal text-brand dark:text-brand-light">
          Usluge
        </h1>
        <p class="mt-4 text-base text-neutral-700 dark:text-neutral-300 reveal">
          Naš tim pruža širok spektar usluga za uređenje vrtova i okućnica – od projektiranja i sadnje biljaka do rada u
          maslinicima i postavljanja travnatih tepiha. Bez obzira na veličinu i zahtjevnost projekta, uvijek tražimo optimalna rješenja.
        </p>
      </div>

      <!-- Grid kartice -->
<div class="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <ServiceCard
    class="reveal-left"
    title="Projektiranje vrtova"
    description="Kreiramo jedinstvene vrtne prostore prema vašim željama."
    image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/22.png"
  />
  <ServiceCard
    class="reveal-right"
    title="Košnja trave"
    description="Brza i efikasna košnja svih vrsta travnjaka."
    image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/9.png"
  />
  <ServiceCard
    class="reveal-left"
    title="Postavljanje travnjaka"
    description="Brza i kvalitetna ugradnja travnatih tepiha."
    image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/4.png"
  />
  <ServiceCard
    class="reveal-right"
    title="Sadnja biljaka"
    description="Sadnja i njega biljaka svih vrsta."
    image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/11.png"
  />
  <ServiceCard
    class="reveal-left"
    title="Radovi u maslinicima"
    description="Rezidba, berba i održavanje maslinika."
    image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/8.png"
  />
  <ServiceCard
    class="reveal-right"
    title="Vađenje stabala"
    description="Sigurno uklanjanje stabala i čišćenje terena."
    image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/23.png"
  />
</div>

      <div class="h-10 md:h-12"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ServiceCard from '@/components/ServiceCard.vue'

onMounted(async () => {
  // poštuj reduced motion
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  const leftEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal-left'))
  const rightEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal-right'))
  const fades = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

  if (reduce) {
    ;[...leftEls, ...rightEls, ...fades].forEach(el => { el.style.opacity = '1'; el.style.transform = 'none' })
    return
  }

  const { default: gsap } = await import('gsap')

  const animate = (el: Element, dir: 'left' | 'right' | 'up') => {
    const from =
      dir === 'left'  ? { x: -50, opacity: 0 } :
      dir === 'right' ? { x:  50, opacity: 0 } :
                        { y:  20, opacity: 0 }
    gsap.fromTo(el, from, { x: 0, y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' })
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target as HTMLElement
      if (el.classList.contains('reveal-left'))  animate(el, 'left')
      else if (el.classList.contains('reveal-right')) animate(el, 'right')
      else animate(el, 'up')
      io.unobserve(el)
    })
  }, { threshold: 0.25 })

  ;[...leftEls, ...rightEls, ...fades].forEach(el => io.observe(el))
})
</script>
