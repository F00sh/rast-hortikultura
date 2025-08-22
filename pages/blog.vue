<template>
  <section class="mx-auto max-w-6xl px-4 py-16">
    <h1 class="text-3xl md:text-4xl font-bold">Blog</h1>
    <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="post in posts" :key="post.id" class="border rounded-xl p-5 bg-white dark:bg-neutral-900 dark:border-neutral-800">
        <h2 class="font-semibold text-lg">
          <NuxtLink :to="`/blog/${post.slug}`" class="hover:text-brand">{{ post.title }}</NuxtLink>
        </h2>
        <p class="text-sm text-neutral-700 dark:text-neutral-300 mt-2">{{ post.excerpt }}</p>
        <NuxtLink :to="`/blog/${post.slug}`" class="text-brand mt-3 inline-block">Pročitaj više</NuxtLink>
      </article>
    </div>
  </section>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/posts')
const posts = data.value?.data || []
</script>
