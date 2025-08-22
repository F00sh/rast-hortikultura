import { defineComponent, mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

const heroSrc = "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/rast%20hero%202.png";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "relative isolate"
      }, _attrs))}><div class="absolute inset-0 -z-10 bg-center bg-cover bg-green-300 dark:bg-green-500 md:mx-20 lg:mx-80 rounded-b-3xl" style="${ssrRenderStyle({ backgroundImage: `url('${heroSrc}')` })}" aria-hidden="true"></div><div class="absolute inset-0 -z-10 bg-black/35 dark:bg-black/45 md:mx-20 lg:mx-80 rounded-b-3xl" aria-hidden="true"></div><div class="mx-auto max-w-6xl px-4 py-20 sm:py-24 lg:py-28 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center"><div><h1 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-sm"> Prirodan rast vašeg prostora </h1><p class="mt-4 max-w-2xl text-white/90"> Projektiranje vrtova, travnati tepisi, navodnjavanje i održavanje – diljem Hrvatske. </p><div class="mt-8 flex flex-wrap gap-3"><a href="#kontakt" class="bg-white text-brand px-5 py-2 rounded-md font-medium">Zatraži ponudu</a><a href="#galerija" class="border border-white/40 text-white px-5 py-2 rounded-md">Pogledaj galeriju</a></div></div></div></section>`);
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
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "onama",
        class: "bg-neutral-50 dark:bg-neutral-900 h-full"
      }, _attrs))}><div class="mx-auto md:mx-20 lg:mx-80 max-w-6xl py-16 grid md:grid-cols-2 gap-8 items-center h-full"><div class="overflow-hidden shadow-subtle dark:shadow-none reveal mx-10"><div class="reveal sm:px-0 mb-6"><h2 class="text-2xl md:text-3xl font-bold">O nama</h2></div><img src="https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/TIM.png" alt="Tim na terenu" class="object-center md:mr-auto md:mx-0 bg-orange-600 dark:bg-green-800 object-cover rounded-3xl"></div><div class="reveal px-10 sm:px-0"><p class="mt-4 text-neutral-700 dark:text-neutral-300"> Radimo brzo, čisto i održivo, koristeći modernu opremu i iskustvo na nepristupačnim terenima. Putujemo širom Hrvatske i okolnih zemalja. </p><ul class="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300"><li>• Projektiranje vrtova i okućnica</li><li>• Navodnjavanje i automatizacija</li><li>• Održavanje, sadnja, radovi u maslinicima</li></ul></div></div></section>`);
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
const _sfc_main$4 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    image: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group block rounded-lg overflow-hidden shadow hover:shadow-lg" }, _attrs))}><a${ssrRenderAttr("href", _ctx.link)} target="_blank" rel="noopener noreferrer"><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.title)} class="w-full h-60 object-cover transform transition duration-500 group-hover:scale-105"></a><div class="p-4 bg-green-400 dark:bg-orange-700 h-full"><h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">${ssrInterpolate(__props.title)}</h3><p class="text-gray-600 dark:text-gray-200 text-sm">${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "usluge",
        class: "py-20 bg-gray-300 dark:bg-green-900 lg:mx-80 h-full rounded-3xl reveal"
      }, _attrs))}><div class="max-w-6xl mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><div class="col-span-full text-left"><h1 class="text-2xl md:text-3xl font-bold">Usluge</h1></div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Projektiranje vrtova",
        description: "Kreiramo jedinstvene vrtne prostore prema vašim željama.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/garden%20plan.png",
        link: "https://example.com/odrzavanje-vrta"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Sadnja biljaka",
        description: "Sadnja i njega biljaka svih vrsta.",
        image: "https://picsum.photos/id/1020/600/400"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Uređenje okućnice",
        description: "Planiranje i izvedba uređenja okućnica.",
        image: "https://picsum.photos/id/1024/600/400",
        link: "https://example.com/uredjenje"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Projektiranje vrtova",
        description: "Kreiramo jedinstvene vrtne prostore prema vašim željama.",
        image: "https://raw.githubusercontent.com/F00sh/rast-assets/refs/heads/main/garden%20plan.png",
        link: "https://example.com/odrzavanje-vrta"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Sadnja biljaka",
        description: "Sadnja i njega biljaka svih vrsta.",
        image: "https://picsum.photos/id/1020/600/400"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Uređenje okućnice",
        description: "Planiranje i izvedba uređenja okućnica.",
        image: "https://picsum.photos/id/1024/600/400",
        link: "https://example.com/uredjenje"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GalleryCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ref(["https://images.unsplash.com/photo-1523419409543-8c4f62b72c8f?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1523419367-bbd3cc89fb19?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1523419409543-8c4f62b72c8f?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1523419367-bbd3cc89fb19?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"]);
    const index2 = ref(0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "galerija",
        class: "mx-auto max-w-6xl px-4 py-16"
      }, _attrs))}><h2 class="text-2xl md:text-3xl font-bold reveal">Galerija</h2><div class="mt-6 relative overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 dark:border-neutral-800"><div class="flex transition-transform duration-500 ease-out select-none" style="${ssrRenderStyle({ transform: `translateX(-${index2.value * 100}%)` })}"><!--[-->`);
      ssrRenderList(images.value, (src, i) => {
        _push(`<div class="min-w-full"><div class="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800"><img${ssrRenderAttr("src", src)}${ssrRenderAttr("alt", `Foto ${i + 1}`)} class="w-full h-full object-cover"></div></div>`);
      });
      _push(`<!--]--></div><button class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur border dark:border-neutral-700 rounded-full p-2">‹</button><button class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur border dark:border-neutral-700 rounded-full p-2">›</button><div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2"><!--[-->`);
      ssrRenderList(images.value, (src, i) => {
        _push(`<button class="${ssrRenderClass([i === index2.value ? "bg-brand" : "bg-white/80 dark:bg-neutral-700 border dark:border-neutral-600", "w-2.5 h-2.5 rounded-full"])}"></button>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryCarousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "GalleryCarousel" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "kontakt",
        class: "mx-auto lg:mx-80 px-10 py-16 bg-orange-400 dark:bg-green-800 reveal rounded-3xl"
      }, _attrs))} data-v-1e4551db><h2 class="text-2xl md:text-3xl font-bold reveal" data-v-1e4551db>Kontakt</h2><p class="mt-2 text-neutral-700 dark:text-neutral-300 reveal" data-v-1e4551db> Slobodno nas kontaktirajte mailom na <a class="text-brand underline text-white dark:text-orange-400" href="mailto:fooshmoola@gmail.com" data-v-1e4551db>fooshmoola@gmail.com</a> ili telefonom na <a class="text-brand underline text-white dark:text-orange-400" href="tel:+385955448400" data-v-1e4551db>+385 95 544 8400</a>. </p><form class="mt-8 grid gap-4 max-w-xl" data-v-1e4551db><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Ime i prezime" class="input" required data-v-1e4551db><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" class="input" required data-v-1e4551db><textarea rows="5" placeholder="Poruka" class="input" required data-v-1e4551db>${ssrInterpolate(message.value)}</textarea><label class="text-sm text-neutral-700 dark:text-neutral-300" data-v-1e4551db>Dodaj slike ili video (po želji):</label><input type="file" multiple accept="image/*,video/*" class="block w-full text-sm text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-neutral-700 rounded-md cursor-pointer focus:outline-none bg-white dark:bg-neutral-900" data-v-1e4551db><button class="bg-orange-500 text-white px-5 py-2 rounded-md w-fit" data-v-1e4551db>Pošalji</button></form></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-1e4551db"]]), { __name: "Contact" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  const _component_About = __nuxt_component_1;
  const _component_Services = _sfc_main$3;
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
//# sourceMappingURL=index-BHCL93MW.mjs.map
