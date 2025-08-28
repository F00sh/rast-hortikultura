<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="group block overflow-hidden rounded-xl border dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 hover:shadow-lg transition">
    <div class="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
    </div>
    <div class="p-4">
      <p class="text-xs text-neutral-500 dark:text-neutral-400">{{ formatDate(post.date) }}</p>
      <h3 class="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">{{ post.title }}</h3>
      <p class="mt-1 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3">{{ post.excerpt }}</p>
      <span class="mt-3 inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-sm">Pročitaj više →</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: { slug:string; title:string; date:string; image:string; excerpt:string }
}>()

function formatDate(d:string) {
  return new Date(d).toLocaleDateString('hr-HR', { day:'2-digit', month:'2-digit', year:'numeric' })
}
</script>
