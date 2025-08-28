<template>
  <BlogGrid :posts="posts" />
</template>

<script setup lang="ts">
import BlogGrid from '@/components/blog/BlogGrid.vue'

const { data } = await useFetch('/api/blog')
const posts = computed(() => data.value?.posts || [])

useHead({
  title: 'Blog – RAST hortikultura',
  meta: [
    { name: 'description', content: 'Savjeti i vodiči: projektiranje vrtova, košnja i održavanje, travnati tepisi, navodnjavanje, sadnja, rad u maslinicima i dekorativno uređenje.' }
  ]
})
</script>
