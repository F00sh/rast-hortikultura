<template>
  <section id="galerija" class="mx-auto max-w-6xl px-4 py-16">
    <h2 class="text-2xl md:text-3xl font-bold reveal">Galerija</h2>
    <div class="mt-6 relative overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <div
        class="flex transition-transform duration-500 ease-out select-none"
        :style="{ transform: `translateX(-${ index * 100 }%)` }"
        ref="track"
      >
        <div v-for="(src, i) in images" :key="i" class="min-w-full">
          <div class="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800">
            <img :src="src" :alt="`Foto ${ i+1 }`" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur border dark:border-neutral-700 rounded-full p-2">‹</button>
      <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur border dark:border-neutral-700 rounded-full p-2">›</button>
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        <button v-for="(src, i) in images" :key="'d'+i" @click="go(i)" class="w-2.5 h-2.5 rounded-full" :class="i === index ? 'bg-brand' : 'bg-white/80 dark:bg-neutral-700 border dark:border-neutral-600'" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useGsapInView } from '@/composables/useGsapInView'
useGsapInView('.reveal')

const images = ref<string[]>(["https://images.unsplash.com/photo-1523419409543-8c4f62b72c8f?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1523419367-bbd3cc89fb19?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1523419409543-8c4f62b72c8f?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1523419367-bbd3cc89fb19?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"])
const index = ref(0)

function next(){ index.value = (index.value + 1) % images.value.length }
function prev(){ index.value = (index.value - 1 + images.value.length) % images.value.length }
function go(i:number){ index.value = i }

const track = ref<HTMLElement | null>(null)
let startX = 0, dx = 0
function onTouchStart(e: TouchEvent | MouseEvent){ startX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX }
function onTouchMove(e: TouchEvent | MouseEvent){ const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX; dx = x - startX }
function onTouchEnd(){ if (dx > 60) prev(); else if (dx < -60) next(); dx = 0 }

function onKey(e: KeyboardEvent){ if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev() }

onMounted(() => { 
  window.addEventListener('keydown', onKey)
  const el = track.value
  el?.addEventListener('touchstart', onTouchStart, { passive: true })
  el?.addEventListener('touchmove', onTouchMove, { passive: true })
  el?.addEventListener('touchend', onTouchEnd)
  el?.addEventListener('mousedown', onTouchStart)
  el?.addEventListener('mousemove', onTouchMove)
  el?.addEventListener('mouseup', onTouchEnd)
  el?.addEventListener('mouseleave', onTouchEnd)
})
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey) })
</script>
