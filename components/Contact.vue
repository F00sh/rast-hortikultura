<template>
  <section id="kontakt" class="py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-2 items-start">
        <!-- INFO PANEL -->
        <div class="reveal">
          <p class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-300 dark:border-emerald-800/60 dark:bg-emerald-900/30">
            Kontakt
          </p>
          <h2 class="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Javite nam se – tu smo za vaš projekt
          </h2>
          <p class="mt-4 text-neutral-700 dark:text-neutral-300">
            Slobodno nas kontaktirajte mailom na
            <a class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4" href="mailto:upiti@rast-hortikultura.hr">upiti@rast-hortikultura.hr</a>
            ili telefonom na
            <a class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4" href="tel:+385959988777">+385 95 998 8777</a>.
          </p>

          <ul class="mt-6 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li class="flex items-center gap-3">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
              Brz odgovor i jasni koraci izvedbe
            </li>
            <li class="flex items-center gap-3">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
              Mogućnost dogovora termina na terenu
            </li>
            <li class="flex items-center gap-3">
              <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
              Priložite fotografije/video za precizniju ponudu
            </li>
          </ul>

          <div class="mt-6 rounded-xl border bg-white/70 dark:bg-neutral-900/60 dark:border-neutral-800 p-4">
            <p class="text-sm text-neutral-600 dark:text-neutral-300">
              Radimo širom Hrvatske i susjednih zemalja. Javite nam osnovne informacije o projektu,
              lokaciju i okvirne rokove – predložit ćemo optimalno rješenje.
            </p>
          </div>
        </div>

        <!-- FORM PANEL -->
        <div class="reveal">
          <form
            class="rounded-2xl border bg-white/80 dark:bg-neutral-900/80 dark:border-neutral-800 p-5 md:p-6 shadow-subtle"
            @submit.prevent="submit"
            novalidate
          >
            <div class="grid gap-4">
              <div>
                <label class="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Ime i prezime</label>
                <input
                  v-model.trim="name"
                  type="text"
                  required
                  autocomplete="name"
                  class="w-full rounded-lg border bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div>
                <label class="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Email</label>
                <input
                  v-model.trim="email"
                  type="email"
                  required
                  inputmode="email"
                  autocomplete="email"
                  class="w-full rounded-lg border bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div>
                <label class="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Poruka</label>
                <textarea
                  v-model.trim="message"
                  rows="5"
                  required
                  class="w-full rounded-lg border bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  placeholder="Npr. lokacija, površina, željene usluge, rokovi…"
                ></textarea>
              </div>

              <!-- Drag & Drop upload -->
              <div>
                <label class="block text-sm mb-2 text-neutral-700 dark:text-neutral-300">Privitci (slike ili video, do 25 MB po datoteci)</label>

                <div
                  class="rounded-xl border-2 border-dashed bg-neutral-50 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-700 p-4 flex flex-col items-center justify-center text-center transition hover:border-emerald-500/60"
                  :class="dragOver ? 'border-emerald-500/60 bg-emerald-50/30 dark:bg-emerald-900/10' : ''"
                  @dragover.prevent="onDragOver"
                  @dragleave.prevent="onDragLeave"
                  @drop.prevent="onDrop"
                >
                  <svg class="h-8 w-8 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 15l4 4L17 7"/>
                  </svg>
                  <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    Povuci i pusti datoteke ovdje ili
                    <label for="fileInput" class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4 cursor-pointer">odaberi s uređaja</label>.
                  </p>
                  <input
                    id="fileInput"
                    ref="files"
                    type="file"
                    class="sr-only"
                    multiple
                    accept="image/*,video/*"
                    @change="onFilePick"
                  />
                  <p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Maks. {{ MAX_FILES }} datoteka · {{ (MAX_FILE_MB) }} MB po datoteci
                  </p>
                </div>

                <!-- Pregled privitaka -->
                <ul v-if="attachments.length" class="mt-3 space-y-2">
                  <li v-for="(f, i) in attachments" :key="i" class="flex items-center justify-between rounded-lg border bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 px-3 py-2">
                    <div class="min-w-0">
                      <p class="truncate text-sm text-neutral-800 dark:text-neutral-100">{{ f.name }}</p>
                      <p class="text-xs text-neutral-500 dark:text-neutral-400">{{ formatSize(f.size) }}</p>
                    </div>
                    <button type="button" class="text-sm text-neutral-600 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-400" @click="removeFile(i)">
                      Ukloni
                    </button>
                  </li>
                </ul>

                <!-- Greške upload-a -->
                <p v-if="errors.attach" class="mt-2 text-sm text-red-600 dark:text-red-400">{{ errors.attach }}</p>
              </div>

              <!-- Honeypot (anti-spam) -->
              <input v-model="hp" type="text" autocomplete="off" class="hidden" tabindex="-1" aria-hidden="true" />

              <!-- Status -->
              <p v-if="success" class="text-emerald-700 dark:text-emerald-400 text-sm">Hvala! Poruka je poslana.</p>
              <p v-if="errors.form" class="text-red-600 dark:text-red-400 text-sm">{{ errors.form }}</p>

              <!-- Submit -->
              <div class="pt-2">
                <button
                  :disabled="loading"
                  class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:opacity-60"
                >
                  <svg v-if="loading" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="4" class="opacity-25"></circle>
                    <path d="M4 12a8 8 0 018-8" stroke-width="4" class="opacity-75"></path>
                  </svg>
                  <span>{{ loading ? 'Slanje…' : 'Pošalji' }}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGsapInView } from '@/composables/useGsapInView'
useGsapInView?.('.reveal')

// polja
const name = ref(''); const email = ref(''); const message = ref('')
const files = ref<HTMLInputElement | null>(null)
const attachments = ref<File[]>([])
const dragOver = ref(false)
const loading = ref(false)
const success = ref(false)
const hp = ref('') // honeypot

// ograničenja
const MAX_FILES = 8
const MAX_FILE_MB = 25
const ALLOWED = ['image/', 'video/']

const errors = ref<{ form?: string; attach?: string }>({})

function resetStatus() {
  errors.value = {}
  success.value = false
}

function formatSize(bytes: number) {
  const mb = bytes / (1024 * 1024)
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`
}

function validateFiles(list: File[]) {
  if (list.length + attachments.value.length > MAX_FILES) {
    errors.value.attach = `Maksimalno ${MAX_FILES} datoteka.`
    return false
  }
  for (const f of list) {
    if (!ALLOWED.some(p => f.type.startsWith(p))) {
      errors.value.attach = 'Podržane su samo slike i video.'
      return false
    }
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      errors.value.attach = `Datoteka ${f.name} je veća od ${MAX_FILE_MB} MB.`
      return false
    }
  }
  errors.value.attach = ''
  return true
}

function onFilePick(e: Event) {
  resetStatus()
  const input = e.target as HTMLInputElement
  const list = Array.from(input.files || [])
  if (!validateFiles(list)) return
  attachments.value.push(...list)
  input.value = ''
}

function onDragOver() { dragOver.value = true }
function onDragLeave() { dragOver.value = false }
function onDrop(e: DragEvent) {
  resetStatus()
  dragOver.value = false
  const list = Array.from(e.dataTransfer?.files || [])
  if (!validateFiles(list)) return
  attachments.value.push(...list)
}

function removeFile(i: number) {
  attachments.value.splice(i, 1)
}

const submit = async () => {
  resetStatus()
  if (hp.value) return // spam
  if (!name.value || !email.value || !message.value) {
    errors.value.form = 'Ispunite sva obavezna polja.'
    return
  }
  loading.value = true
  try {
    const fd = new FormData()
    fd.append('name', name.value)
    fd.append('email', email.value)
    fd.append('message', message.value)
    for (const f of attachments.value) fd.append('files', f)

    await $fetch('/api/contact', { method: 'POST', body: fd })

    success.value = true
    name.value = email.value = message.value = ''
    attachments.value = []
    if (files.value) files.value.value = ''
  } catch (e) {
    errors.value.form = 'Došlo je do greške pri slanju. Pokušajte ponovno.'
    // console.error(e)
  } finally {
    loading.value = false
  }
}
</script>
