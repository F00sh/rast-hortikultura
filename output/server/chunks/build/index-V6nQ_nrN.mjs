import { defineComponent, mergeProps, withCtx, createTextVNode, computed, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B81-QzfC.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const heroSrc = "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/header%20background.png";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "relative isolate md:mx-20 lg:mx-80 mb-20 rounded-b-[200px] overflow-hidden"
      }, _attrs))}><div class="absolute inset-0 -z-10 bg-center bg-cover bg-green-300 dark:bg-green-500 rounded-b-3xl" style="${ssrRenderStyle({ backgroundImage: `url('${heroSrc}')` })}" aria-hidden="true"></div><div class="absolute inset-0 -z-10 bg-black/15 dark:bg-black/35 rounded-b-3xl" aria-hidden="true"></div><div class="mx-auto max-w-6xl px-10 py-20 sm:py-24 lg:py-28 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center"><div class="text-center text-white drop-shadow-sm mx-auto"><img src="https://raw.githubusercontent.com/F00sh/rast-assets/06485240a0bd4271141deef94f0de57e1c4466a0/rast%20logo.svg" alt="logo" class=""><h1 class="text-3xl md:text-5xl font-thin text-white drop-shadow-sm"> vaš partner u uređenju okućnice </h1><p class="mt-4 max-w-2xl text-white/90"> Projektiranje vrtova, travnati tepisi, navodnjavanje i održavanje – diljem Hrvatske. </p><div class="mt-8 flex flex-wrap gap-3 mx-auto justify-center"><a href="#kontakt" class="bg-white text-brand px-5 py-2 rounded-md font-medium">Zatraži ponudu</a><a href="#galerija" class="border border-white/40 text-white px-5 py-2 rounded-md">Pogledaj galeriju</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "Hero" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "onama",
        class: "relative overflow-hidden"
      }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid items-center gap-10 py-16 md:grid-cols-2 lg:gap-16 lg:py-24"><div class="reveal-left"><p class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-300 dark:border-emerald-800/60 dark:bg-emerald-900/30"> O nama </p><h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-brand dark:text-brand-light"> Stručnost koja se vidi u svakom detalju </h2><p class="mt-5 text-base leading-7 text-neutral-700 dark:text-neutral-300"> Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina. Naš tim stručnjaka, opremljen modernim alatima i tehnikama, posvećen je stvaranju zelenih oaza koje odišu ljepotom i funkcionalnošću. Bilo da se radi o malom vrtu ili velikom masliniku, svaki projekt tretiramo s istom pažnjom i predanošću. </p><ul class="mt-6 grid gap-3 sm:grid-cols-2"><li class="flex items-start gap-3"><svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg><span>Visoka razina stručnosti i pažnja prema detaljima</span></li><li class="flex items-start gap-3"><svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg><span>Brza i učinkovita izvedba radova</span></li><li class="flex items-start gap-3"><svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg><span>Korištenje moderne opreme koja omogućuje optimalne rezultate</span></li><li class="flex items-start gap-3"><svg class="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg><span>Stručni tim koji razumije potrebe svakog projekta</span></li></ul><p class="mt-5 text-base leading-7 text-neutral-700 dark:text-neutral-300"> S dugogodišnjim iskustvom u različitim vrstama projekata, nudimo širok spektar usluga, uključujući projektiranje, košnju, postavljanje travnatih tepiha, navodnjavanje, sadnju biljaka i rad u maslinicima. Bez obzira na to je li teren zahtjevan i nepristupačan, naš tim uvijek pronalazi optimalno rješenje kako bi klijentima pružio najbolje rezultate. </p><div class="mt-6 rounded-xl border bg-neutral-50 p-4 text-sm text-brand dark:border-neutral-800 dark:bg-neutral-900 dark:text-brand-light"> Putujemo širom Hrvatske i susjednih zemalja kako bismo svoje usluge učinili dostupnima svima kojima je potrebno stručno uređenje zelenih površina. Naša fleksibilnost i pouzdanost čine nas idealnim partnerom za projekte svih veličina. </div><div class="mt-8 flex flex-wrap items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#kontakt",
        class: "inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Zatraži ponudu `);
          } else {
            return [
              createTextVNode(" Zatraži ponudu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#usluge",
        class: "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-neutral-800 transition hover:bg-neutral-50 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pogledaj usluge `);
          } else {
            return [
              createTextVNode(" Pogledaj usluge ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="reveal-right relative"><div class="aspect-[4/3] overflow-hidden rounded-2xl border shadow-sm bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-800"><img src="https://raw.githubusercontent.com/F00sh/rast-assets/main/TIM.png" alt="Rast – tim na terenu" class="h-full w-full object-cover" loading="lazy"></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "About" });
const fallback = "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop";
const _sfc_main$4 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group rounded-2xl overflow-hidden border bg-white/80 dark:bg-neutral-900/80 dark:border-neutral-800 shadow-subtle hover:shadow transition reveal" }, _attrs))}><div class="relative aspect-[4/3] overflow-hidden"><img${ssrRenderAttr("src", __props.image || fallback)}${ssrRenderAttr("alt", __props.title)} class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105" loading="lazy"></div><div class="p-4 md:p-5"><h3 class="text-base md:text-lg font-semibold text-brand dark:text-brand-light">${ssrInterpolate(__props.title)}</h3><p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300">${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "usluge",
        class: "py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950"
      }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:rounded-3xl border-0 md:border dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"><div class="pt-10 md:pt-12 max-w-3xl"><h1 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase reveal text-brand dark:text-brand-light"> Usluge </h1><p class="mt-4 text-base text-neutral-700 dark:text-neutral-300 reveal"> Naš tim pruža širok spektar usluga za uređenje vrtova i okućnica – od projektiranja i sadnje biljaka do rada u maslinicima i postavljanja travnatih tepiha. Bez obzira na veličinu i zahtjevnost projekta, uvijek tražimo optimalna rješenja. </p></div><div class="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "reveal-left",
        title: "Projektiranje vrtova",
        description: "Kreiramo jedinstvene vrtne prostore prema vašim željama.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/22.png"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "reveal-right",
        title: "Košnja trave",
        description: "Brza i efikasna košnja svih vrsta travnjaka.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/9.png"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "reveal-left",
        title: "Postavljanje travnjaka",
        description: "Brza i kvalitetna ugradnja travnatih tepiha.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/4.png"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "reveal-right",
        title: "Sadnja biljaka",
        description: "Sadnja i njega biljaka svih vrsta.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/11.png"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "reveal-left",
        title: "Radovi u maslinicima",
        description: "Rezidba, berba i održavanje maslinika.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/8.png"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "reveal-right",
        title: "Vađenje stabala",
        description: "Sigurno uklanjanje stabala i čišćenje terena.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/23.png"
      }, null, _parent));
      _push(`</div><div class="h-10 md:h-12"></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "Services" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GalleryCarousel",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const props = __props;
    const fallbackImages = [
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/1.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/2.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/3.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/4.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/5.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/6.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/7.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/8.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/9.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/10.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/11.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/12.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/13.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/14.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/17.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/18.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/19.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/20.png",
      "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/22.png"
    ];
    const safeImages = computed(() => props.images?.length ? props.images : fallbackImages);
    const index2 = ref(0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "galerija",
        class: "py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950"
      }, _attrs))} data-v-1f5ad743><div class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 md:rounded-3xl border-0 md:border dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur" data-v-1f5ad743><div class="pt-10 md:pt-12 max-w-3xl px-4 sm:px-0" data-v-1f5ad743><h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-brand dark:text-brand-light" data-v-1f5ad743>Galerija</h2><p class="mt-4 text-base text-neutral-700 dark:text-neutral-300" data-v-1f5ad743> Pogledaj odabrane trenutke s terena – od projektiranja i sadnje do gotovih zelenih oaza. Naši projekti prikazuju spoj funkcionalnosti i estetike na različitim terenima diljem Hrvatske. </p></div><div class="mt-6 relative overflow-hidden border-y md:border rounded-none md:rounded-xl bg-white dark:bg-neutral-900 dark:border-neutral-800" data-v-1f5ad743><div class="flex transition-transform duration-500 ease-out select-none" style="${ssrRenderStyle({ transform: `translateX(-${index2.value * 100}%)` })}" data-v-1f5ad743><!--[-->`);
      ssrRenderList(safeImages.value, (src, i) => {
        _push(`<div class="min-w-full" data-v-1f5ad743><div class="h-[75vh] sm:h-[70vh] md:h-auto md:aspect-[16/9] bg-neutral-100 dark:bg-neutral-800" data-v-1f5ad743><img${ssrRenderAttr("src", src)}${ssrRenderAttr("alt", `Foto ${i + 1}`)} class="w-full h-full object-cover" loading="lazy" data-v-1f5ad743></div></div>`);
      });
      _push(`<!--]--></div><button type="button" aria-label="Prethodna fotografija" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/85 dark:bg-neutral-800/85 backdrop-blur border dark:border-neutral-700 rounded-full p-2" data-v-1f5ad743> ‹ </button><button type="button" aria-label="Sljedeća fotografija" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/85 dark:bg-neutral-800/85 backdrop-blur border dark:border-neutral-700 rounded-full p-2" data-v-1f5ad743> › </button><div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" data-v-1f5ad743><!--[-->`);
      ssrRenderList(safeImages.value, (src, i) => {
        _push(`<button type="button"${ssrRenderAttr("aria-label", `Idi na fotografiju ${i + 1}`)} class="${ssrRenderClass([i === index2.value ? "bg-brand" : "bg-white/80 dark:bg-neutral-700", "w-2.5 h-2.5 rounded-full border dark:border-neutral-600"])}" data-v-1f5ad743></button>`);
      });
      _push(`<!--]--></div></div><div class="h-8 md:h-12" data-v-1f5ad743></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryCarousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-1f5ad743"]]), { __name: "GalleryCarousel" });
const MAX_FILES = 8;
const MAX_FILE_MB = 25;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    ref(null);
    const attachments = ref([]);
    const dragOver = ref(false);
    const loading = ref(false);
    const success = ref(false);
    const hp = ref("");
    const errors = ref({});
    function formatSize(bytes) {
      const mb = bytes / (1024 * 1024);
      return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(0)} KB`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "kontakt",
        class: "py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950"
      }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid gap-8 md:grid-cols-2 items-start"><div class="reveal"><p class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-300 dark:border-emerald-800/60 dark:bg-emerald-900/30"> Kontakt </p><h2 class="mt-4 text-3xl md:text-4xl font-bold tracking-tight"> Javite nam se – tu smo za vaš projekt </h2><p class="mt-4 text-neutral-700 dark:text-neutral-300"> Slobodno nas kontaktirajte mailom na <a class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4" href="mailto:upiti@rast-hortikultura.hr">upiti@rast-hortikultura.hr</a> ili telefonom na <a class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4" href="tel:+385959988777">+385 95 998 8777</a>. </p><ul class="mt-6 space-y-2 text-neutral-700 dark:text-neutral-300"><li class="flex items-center gap-3"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span> Brz odgovor i jasni koraci izvedbe </li><li class="flex items-center gap-3"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span> Mogućnost dogovora termina na terenu </li><li class="flex items-center gap-3"><span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span> Priložite fotografije/video za precizniju ponudu </li></ul><div class="mt-6 rounded-xl border bg-white/70 dark:bg-neutral-900/60 dark:border-neutral-800 p-4"><p class="text-sm text-neutral-600 dark:text-neutral-300"> Radimo širom Hrvatske i susjednih zemalja. Javite nam osnovne informacije o projektu, lokaciju i okvirne rokove – predložit ćemo optimalno rješenje. </p></div></div><div class="reveal"><form class="rounded-2xl border bg-white/80 dark:bg-neutral-900/80 dark:border-neutral-800 p-5 md:p-6 shadow-subtle" novalidate><div class="grid gap-4"><div><label class="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Ime i prezime</label><input${ssrRenderAttr("value", name.value)} type="text" required autocomplete="name" class="w-full rounded-lg border bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"></div><div><label class="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Email</label><input${ssrRenderAttr("value", email.value)} type="email" required inputmode="email" autocomplete="email" class="w-full rounded-lg border bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"></div><div><label class="block text-sm mb-1 text-neutral-700 dark:text-neutral-300">Poruka</label><textarea rows="5" required class="w-full rounded-lg border bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" placeholder="Npr. lokacija, površina, željene usluge, rokovi…">${ssrInterpolate(message.value)}</textarea></div><div><label class="block text-sm mb-2 text-neutral-700 dark:text-neutral-300">Privitci (slike ili video, do 25 MB po datoteci)</label><div class="${ssrRenderClass([dragOver.value ? "border-emerald-500/60 bg-emerald-50/30 dark:bg-emerald-900/10" : "", "rounded-xl border-2 border-dashed bg-neutral-50 dark:bg-neutral-900/60 border-neutral-300 dark:border-neutral-700 p-4 flex flex-col items-center justify-center text-center transition hover:border-emerald-500/60"])}"><svg class="h-8 w-8 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 15l4 4L17 7"></path></svg><p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300"> Povuci i pusti datoteke ovdje ili <label for="fileInput" class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4 cursor-pointer">odaberi s uređaja</label>. </p><input id="fileInput" type="file" class="sr-only" multiple accept="image/*,video/*"><p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400"> Maks. ${ssrInterpolate(MAX_FILES)} datoteka · ${ssrInterpolate(MAX_FILE_MB)} MB po datoteci </p></div>`);
      if (attachments.value.length) {
        _push(`<ul class="mt-3 space-y-2"><!--[-->`);
        ssrRenderList(attachments.value, (f, i) => {
          _push(`<li class="flex items-center justify-between rounded-lg border bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 px-3 py-2"><div class="min-w-0"><p class="truncate text-sm text-neutral-800 dark:text-neutral-100">${ssrInterpolate(f.name)}</p><p class="text-xs text-neutral-500 dark:text-neutral-400">${ssrInterpolate(formatSize(f.size))}</p></div><button type="button" class="text-sm text-neutral-600 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-400"> Ukloni </button></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (errors.value.attach) {
        _push(`<p class="mt-2 text-sm text-red-600 dark:text-red-400">${ssrInterpolate(errors.value.attach)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><input${ssrRenderAttr("value", hp.value)} type="text" autocomplete="off" class="hidden" tabindex="-1" aria-hidden="true">`);
      if (success.value) {
        _push(`<p class="text-emerald-700 dark:text-emerald-400 text-sm">Hvala! Poruka je poslana.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (errors.value.form) {
        _push(`<p class="text-red-600 dark:text-red-400 text-sm">${ssrInterpolate(errors.value.form)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-2"><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:opacity-60">`);
      if (loading.value) {
        _push(`<svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="4" class="opacity-25"></circle><path d="M4 12a8 8 0 018-8" stroke-width="4" class="opacity-75"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(loading.value ? "Slanje…" : "Pošalji")}</span></button></div></div></form></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "Contact" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  const _component_About = __nuxt_component_1;
  const _component_Services = __nuxt_component_2;
  const _component_GalleryCarousel = __nuxt_component_3;
  const _component_Contact = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(ssrRenderComponent(_component_About, null, null, _parent));
  _push(ssrRenderComponent(_component_Services, null, null, _parent));
  _push(ssrRenderComponent(_component_GalleryCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-V6nQ_nrN.mjs.map
