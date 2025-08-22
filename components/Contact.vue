<template>
  <section id="kontakt" class="mx-auto lg:mx-80  px-10 py-16 bg-orange-400 dark:bg-green-800 reveal rounded-3xl">
    <h2 class="text-2xl md:text-3xl font-bold reveal">Kontakt</h2>
    <p class="mt-2 text-neutral-700 dark:text-neutral-300 reveal">
      Slobodno nas kontaktirajte mailom na
      <a class="text-brand underline text-white dark:text-orange-400" href="mailto:fooshmoola@gmail.com">fooshmoola@gmail.com</a>
      ili telefonom na
      <a class="text-brand underline text-white dark:text-orange-400" href="tel:+385955448400">+385 95 544 8400</a>.
    </p>
    <form class="mt-8 grid gap-4 max-w-xl" @submit.prevent="submit">
      <input v-model="name" type="text" placeholder="Ime i prezime" class="input" required />
      <input v-model="email" type="email" placeholder="Email" class="input" required />
      <textarea v-model="message" rows="5" placeholder="Poruka" class="input" required></textarea>
      <label class="text-sm text-neutral-700 dark:text-neutral-300">Dodaj slike ili video (po želji):</label>
      <input ref="files" type="file" multiple accept="image/*,video/*" class="block w-full text-sm text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-neutral-700 rounded-md cursor-pointer focus:outline-none bg-white dark:bg-neutral-900" />
      <button class="bg-orange-500 text-white px-5 py-2 rounded-md w-fit">Pošalji</button>
    </form>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useGsapInView } from '@/composables/useGsapInView'
useGsapInView('.reveal')

const name = ref(''); const email = ref(''); const message = ref('')
const files = ref<HTMLInputElement | null>(null)

const submit = async () => {
  const fd = new FormData()
  fd.append('name', name.value)
  fd.append('email', email.value)
  fd.append('message', message.value)
  const list = files.value?.files || []
  for (let i = 0; i < list.length; i++) fd.append('files', list[i])

  try {
    await $fetch('/api/contact', { method: 'POST', body: fd })
    alert('Hvala! Poruka je poslana.')
    name.value = email.value = message.value = ''
    if (files.value) files.value.value = ''
  } catch (e) {
    alert('Došlo je do greške. Molimo pokušajte kasnije.')
  }
}
</script>
<style scoped>
.input { @apply border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/30 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100; }
</style>
