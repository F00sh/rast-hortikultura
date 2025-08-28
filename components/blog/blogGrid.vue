<template>
  <section class="py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">Blog</h1>
        <p class="mt-4 text-neutral-700 dark:text-neutral-300">
          Savjeti, sezonske preporuke i praktične teme iz hortikulture – iz prakse Rast tima.
        </p>
      </div>

      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="p in posts" :key="p.slug" :post="p" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from '@/components/blog/BlogCard.vue'

defineProps<{ posts: any[] }>()
</script>
