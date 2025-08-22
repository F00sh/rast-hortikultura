<template>
  <section class="mx-auto max-w-3xl px-4 py-12 prose prose-neutral dark:prose-invert">
    <NuxtLink to="/blog" class="text-sm text-brand no-underline">← Natrag</NuxtLink>
    <h1 class="mt-4">{{ post.title }}</h1>
    <p class="opacity-70 text-sm">{{ post.date }}</p>
    <p class="mt-6 whitespace-pre-line">{{ post.content }}</p>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api/posts/${route.params.slug}`)
const post = computed(() => data.value?.data || {})
</script>
