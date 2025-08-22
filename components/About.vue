<template>
  <section id="onama" class="bg-neutral-50 dark:bg-neutral-900 h-full">
    <div class="mx-auto md:mx-20 lg:mx-80 max-w-6xl py-16 grid md:grid-cols-2 gap-8 items-center h-full">
      <div class=" overflow-hidden shadow-subtle dark:shadow-none reveal mx-10">
        <div class="reveal sm:px-0 mb-6">
        <h2 class="text-2xl md:text-3xl font-bold">O nama</h2>
        </div>
        <img
          src="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/TIM.png"
          alt="Tim na terenu"
          class="object-center md:mr-auto md:mx-0 bg-orange-600 dark:bg-green-800 object-cover rounded-3xl"
        />
      </div>
      <div class="reveal px-10 sm:px-0">
        <p class="mt-4 text-neutral-700 dark:text-neutral-300">
          Radimo brzo, čisto i održivo, koristeći modernu opremu i iskustvo na nepristupačnim terenima.
          Putujemo širom Hrvatske i okolnih zemalja.
        </p>
        <ul class="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>• Projektiranje vrtova i okućnica</li>
          <li>• Navodnjavanje i automatizacija</li>
          <li>• Održavanje, sadnja, radovi u maslinicima</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
useGsapInView('.reveal')
</script>
