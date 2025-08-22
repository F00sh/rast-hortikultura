<template>
  <div class="group block rounded-lg overflow-hidden shadow hover:shadow-lg">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img
        :src="image"
        :alt="title"
        class="w-full h-60 object-cover transform transition duration-500 group-hover:scale-105"
      />
    </a>
    <div class="p-4 bg-green-400 dark:bg-orange-700 h-full">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-200 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  
})
</script>
