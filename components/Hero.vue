<template>
  <section id="hero" class="relative isolate ">
    <!-- BG image -->
    <div
      class="absolute inset-0 -z-10 bg-center bg-cover bg-green-300 dark:bg-green-500 md:mx-20 lg:mx-80 rounded-b-3xl"
      :style="{ backgroundImage: `url('${heroSrc}')` }"
      aria-hidden="true"
    />
    <!-- Overlay za kontrast -->
    <div class="absolute inset-0 -z-10 bg-black/35 dark:bg-black/45 md:mx-20 lg:mx-80 rounded-b-3xl" aria-hidden="true" />

    <!-- Sadržaj -->
    <div class="mx-auto max-w-6xl px-4 py-20 sm:py-24 lg:py-28 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center ">
      <div>
        <h1 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-sm">
          Prirodan rast vašeg prostora
        </h1>
        <p class="mt-4 max-w-2xl text-white/90">
          Projektiranje vrtova, travnati tepisi, navodnjavanje i održavanje – diljem Hrvatske.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
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
const heroSrc = 'https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/rast%20hero%202.png'
</script>
