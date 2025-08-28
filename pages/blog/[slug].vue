<template>
  <article class="pb-16">
    <!-- HERO -->
    <header class="bg-neutral-100 dark:bg-neutral-950">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <NuxtLink to="/blog" class="text-sm text-emerald-700 dark:text-emerald-400 hover:underline">← Natrag na blog</NuxtLink>
        <h1 class="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{{ post?.title }}</h1>
        <p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{{ formatDate(post?.date) }}</p>
      </div>
      <div class="aspect-[16/9] md:rounded-b-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        <img :src="post?.image" :alt="post?.title" class="w-full h-full object-cover" />
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <p v-if="post?.credit" class="text-xs text-neutral-500 dark:text-neutral-400">
          Foto: <a :href="post.credit.url" target="_blank" class="hover:underline">{{ post.credit.label }}</a>
        </p>
      </div>
    </header>

    <!-- CONTENT -->
    <section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert">
      <p v-for="(para, i) in post?.content" :key="i">{{ para }}</p>
    </section>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch('/api/blog')
const all = data.value?.posts || []
const post = all.find((p:any) => p.slug === route.params.slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Objava nije pronađena' })
}

useHead({
  title: `${post.title} – RAST blog`,
  meta: [{ name: 'description', content: post.excerpt }]
})

function formatDate(d?:string) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('hr-HR', { day:'2-digit', month:'2-digit', year:'numeric' })
}
</script>

<style>
/* dodatni razmaci u prosi */
.prose p { margin-block: 1.1em; }
</style>
