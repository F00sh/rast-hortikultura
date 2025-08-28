<template>
  <section id="galerija" class="py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950">
    <div
      class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 md:rounded-3xl border-0 md:border dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
    >
      <!-- Naslov + paragraf -->
      <div class="pt-10 md:pt-12 max-w-3xl px-4 sm:px-0">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-brand dark:text-brand-light">Galerija</h2>
        <p class="mt-4 text-base text-neutral-700 dark:text-neutral-300">
          Pogledaj odabrane trenutke s terena – od projektiranja i sadnje do gotovih zelenih oaza. Naši projekti
          prikazuju spoj funkcionalnosti i estetike na različitim terenima diljem Hrvatske.
        </p>
      </div>

      <!-- Carousel -->
      <div
        class="mt-6 relative overflow-hidden border-y md:border rounded-none md:rounded-xl bg-white dark:bg-neutral-900 dark:border-neutral-800"
      >
        <!-- Track -->
        <div
          ref="track"
          class="flex transition-transform duration-500 ease-out select-none"
          :style="{ transform: `translateX(-${ index * 100 }%)` }"
        >
          <div v-for="(src, i) in safeImages" :key="i" class="min-w-full">
            <!-- MOB: 75vh, DESKTOP: 16/9 -->
            <div class="h-[75vh] sm:h-[70vh] md:h-auto md:aspect-[16/9] bg-neutral-100 dark:bg-neutral-800">
              <img :src="src" :alt="`Foto ${ i+1 }`" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Kontrole -->
        <button
          type="button"
          @click="prev"
          aria-label="Prethodna fotografija"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/85 dark:bg-neutral-800/85 backdrop-blur border dark:border-neutral-700 rounded-full p-2"
        >
          ‹
        </button>
        <button
          type="button"
          @click="next"
          aria-label="Sljedeća fotografija"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/85 dark:bg-neutral-800/85 backdrop-blur border dark:border-neutral-700 rounded-full p-2"
        >
          ›
        </button>

        <!-- Točkice -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            v-for="(src, i) in safeImages"
            :key="'dot'+i"
            type="button"
            :aria-label="`Idi na fotografiju ${i+1}`"
            @click="go(i)"
            class="w-2.5 h-2.5 rounded-full border dark:border-neutral-600"
            :class="i === index ? 'bg-brand' : 'bg-white/80 dark:bg-neutral-700'"
          />
        </div>
      </div>

      <div class="h-8 md:h-12"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from 'vue'

/*
  Props: možeš poslati vlastite slike kao array. Ako ne pošalješ, koristimo default.
*/
const props = defineProps<{
  images?: string[]
}>()

// Fallback slike (Unsplash) ako ništa nije prošlo kroz props
const fallbackImages = [
  'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/1.png',
  'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/2.png',
   'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/3.png',
    'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/4.png',
     'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/5.png',
      'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/6.png',
       'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/7.png',
        'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/8.png',
         'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/9.png',
          'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/10.png',
            'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/11.png',
              'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/12.png',
              'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/13.png',
                'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/14.png',
                'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/17.png',
                  'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/18.png',
                  'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/19.png',
                    'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/20.png',
                    'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/22.png',
]
const safeImages = computed(() => (props.images?.length ? props.images : fallbackImages))

const index = ref(0)
function next(){ index.value = (index.value + 1) % safeImages.value.length }
function prev(){ index.value = (index.value - 1 + safeImages.value.length) % safeImages.value.length }
function go(i:number){ index.value = i }

const track = ref<HTMLElement | null>(null)
let startX = 0
let dx = 0
let dragging = false

// ✅ Pointer Events — TS safe
function onPointerDown(e: PointerEvent) {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  startX = e.clientX
  dx = 0
  dragging = true
  track.value?.setPointerCapture?.(e.pointerId)
}
function onPointerMove(e: PointerEvent) {
  if (!dragging) return
  dx = e.clientX - startX
}
function onPointerUp(e?: PointerEvent) {
  if (!dragging) return
  if (dx > 60) prev()
  else if (dx < -60) next()
  dragging = false
  dx = 0
  if (e) track.value?.releasePointerCapture?.(e.pointerId)
}

function onKey(e: KeyboardEvent){
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft')  prev()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  const el = track.value
  // Bind pointer evente direktno na track (kako ne bi ovisili o addEventListener s options)
  el?.addEventListener('pointerdown', onPointerDown, { passive: true })
  el?.addEventListener('pointermove', onPointerMove,  { passive: true })
  el?.addEventListener('pointerup',   onPointerUp)
  el?.addEventListener('pointercancel', onPointerUp)

  // Ako je niz slika prazno iz props u runtime-u, koristit će fallback (computed)
  watchEffect(() => {
    if (index.value > safeImages.value.length - 1) index.value = 0
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
/* Nema custom stilova, sve je kroz Tailwind; ostavljeno za eventualne dorade */
</style>
