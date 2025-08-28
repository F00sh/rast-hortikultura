<template>
  <div
    class="group rounded-2xl overflow-hidden border bg-white/80 dark:bg-neutral-900/80 dark:border-neutral-800 shadow-subtle hover:shadow transition reveal"
  >
    <!-- Slika -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="image || fallback"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Sadržaj -->
    <div class="p-4 md:p-5">
      <h3 class="text-base md:text-lg font-semibold text-brand dark:text-brand-light">
        {{ title }}
      </h3>
      <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' }
})

const fallback =
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop'
</script>
