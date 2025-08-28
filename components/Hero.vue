<template>
  <section id="hero" class="relative isolate md:mx-20 lg:mx-80 mb-20 rounded-b-[200px] overflow-hidden">
    <!-- BG image -->
    <div
      class="absolute inset-0 -z-10 bg-center bg-cover bg-green-300 dark:bg-green-500 rounded-b-3xl"
      :style="{ backgroundImage: `url('${heroSrc}')` }"
      aria-hidden="true"
    />
    <!-- Overlay za kontrast -->
    <div class="absolute inset-0 -z-10 bg-black/15 dark:bg-black/35 rounded-b-3xl" aria-hidden="true" />

    <!-- Sadržaj -->
    <div class="mx-auto max-w-6xl px-10 py-20 sm:py-24 lg:py-28 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center ">
      <div class="text-center text-white drop-shadow-sm mx-auto">
        <img src="https://raw.githubusercontent.com/F00sh/rast-assets/06485240a0bd4271141deef94f0de57e1c4466a0/rast%20logo.svg" alt="logo" class="" />
        <h1 class="text-3xl md:text-5xl font-thin text-white drop-shadow-sm">
          vaš partner u uređenju okućnice
        </h1>
        <p class="mt-4 max-w-2xl text-white/90">
          Projektiranje vrtova, travnati tepisi, navodnjavanje i održavanje – diljem Hrvatske.
        </p>
        <div class="mt-8 flex flex-wrap gap-3 mx-auto justify-center">
          <a href="#kontakt" class="bg-white text-brand px-5 py-2 rounded-md font-medium">Zatraži ponudu</a>
          <a href="#galerija" class="border border-white/40 text-white px-5 py-2 rounded-md">Pogledaj galeriju</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ① STAVI RAW LINK S TVOG COMMITA
// Otvori sliku na GitHubu → “Raw” → kopiraj URL (počinje s https://raw.githubusercontent.com/...)
// Privremeno ostavljam varijablu za jednostavnu zamjenu:
const heroSrc = 'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/header%20background.png'
</script>
