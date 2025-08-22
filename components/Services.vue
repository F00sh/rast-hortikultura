<template>
  <section id="usluge" class="py-20 bg-gray-300 dark:bg-green-900 lg:mx-80 h-full rounded-3xl reveal">
    <div class="max-w-6xl mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="col-span-full text-left">
        <h1 class="text-2xl md:text-3xl font-bold">Usluge</h1>

      </div>
      <ServiceCard
        title="Projektiranje vrtova"
        description="Kreiramo jedinstvene vrtne prostore prema vašim željama."
        image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/garden%20plan.png"
        link="https://example.com/odrzavanje-vrta"
      />

      <ServiceCard
        title="Sadnja biljaka"
        description="Sadnja i njega biljaka svih vrsta."
        image="https://picsum.photos/id/1020/600/400"
        
      />

      <ServiceCard
        title="Uređenje okućnice"
        description="Planiranje i izvedba uređenja okućnica."
        image="https://picsum.photos/id/1024/600/400"
        link="https://example.com/uredjenje"
      />
 <ServiceCard
        title="Projektiranje vrtova"
        description="Kreiramo jedinstvene vrtne prostore prema vašim željama."
        image="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/garden%20plan.png"
        link="https://example.com/odrzavanje-vrta"
      />

      <ServiceCard
        title="Sadnja biljaka"
        description="Sadnja i njega biljaka svih vrsta."
        image="https://picsum.photos/id/1020/600/400"
        
      />

      <ServiceCard
        title="Uređenje okućnice"
        description="Planiranje i izvedba uređenja okućnica."
        image="https://picsum.photos/id/1024/600/400"
        link="https://example.com/uredjenje"
      />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
</script>
