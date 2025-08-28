import { _ as __nuxt_component_0 } from './nuxt-link-B81-QzfC.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, d as useRouter } from './server.mjs';
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

function useScrollDirection(offset = 8) {
  const hidden = ref(false);
  return { hidden };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const { hidden } = useScrollDirection(10);
    const isDark = ref(false);
    const route = useRoute();
    const router = useRouter();
    const goTop = async () => {
      if (route.path !== "/") await router.push("/");
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-dvh flex flex-col" }, _attrs))} data-v-fc8638f2><header class="${ssrRenderClass([
        "sticky top-0 z-50 transition-transform duration-300 will-change-transform border-b",
        "bg-white/70 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800",
        unref(hidden) && !unref(open) ? "-translate-y-full" : "translate-y-0"
      ])}" data-v-fc8638f2><nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4" data-v-fc8638f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 font-black tracking-wide text-neutral-900 dark:text-neutral-100",
        onClick: goTop,
        "aria-label": "RAST – Početak stranice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-block w-3.5 h-3.5 rounded-full bg-emerald-600" data-v-fc8638f2${_scopeId}></span><span class="text-base" data-v-fc8638f2${_scopeId}>RAST</span>`);
          } else {
            return [
              createVNode("span", { class: "inline-block w-3.5 h-3.5 rounded-full bg-emerald-600" }),
              createVNode("span", { class: "text-base" }, "RAST")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="hidden md:flex items-center gap-6 text-sm uppercase" data-v-fc8638f2><li data-v-fc8638f2><a href="/#onama" class="nav-link" data-v-fc8638f2>O nama</a></li><li data-v-fc8638f2><a href="/#usluge" class="nav-link" data-v-fc8638f2>Usluge</a></li><li data-v-fc8638f2><a href="/#galerija" class="nav-link" data-v-fc8638f2>Galerija</a></li><li data-v-fc8638f2><a href="/#kontakt" class="nav-link" data-v-fc8638f2>Kontakt</a></li></ul><div class="flex items-center gap-2" data-v-fc8638f2><button class="hidden md:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" aria-label="Promijeni temu" data-v-fc8638f2><span aria-hidden="true" data-v-fc8638f2>${ssrInterpolate(unref(isDark) ? "🌙" : "☀️")}</span><span class="hidden lg:inline" data-v-fc8638f2>${ssrInterpolate(unref(isDark) ? "Dark" : "Light")}</span></button><button class="md:hidden rounded-md px-3 py-1.5 text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"${ssrRenderAttr("aria-expanded", unref(open) ? "true" : "false")} aria-controls="mobile-menu" aria-label="Menu" data-v-fc8638f2>`);
      if (!unref(open)) {
        _push(`<span data-v-fc8638f2>☰</span>`);
      } else {
        _push(`<span data-v-fc8638f2>✕</span>`);
      }
      _push(`</button></div></nav><div id="mobile-menu" style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="md:hidden absolute inset-x-0 top-full z-40 border-b bg-white/90 backdrop-blur dark:bg-neutral-900/90 dark:border-neutral-800" data-v-fc8638f2><ul class="px-4 py-3 space-y-2 uppercase text-sm text-neutral-900 dark:text-neutral-100" data-v-fc8638f2><li data-v-fc8638f2><a href="/#onama" class="mobile-item" data-v-fc8638f2>O nama</a></li><li data-v-fc8638f2><a href="/#usluge" class="mobile-item" data-v-fc8638f2>Usluge</a></li><li data-v-fc8638f2><a href="/#galerija" class="mobile-item" data-v-fc8638f2>Galerija</a></li><li data-v-fc8638f2><a href="/#kontakt" class="mobile-item" data-v-fc8638f2>Kontakt</a></li><li class="pt-1" data-v-fc8638f2><button class="w-full mobile-item !justify-between" aria-label="Promijeni temu" data-v-fc8638f2><span data-v-fc8638f2>Tema</span><span aria-hidden="true" data-v-fc8638f2>${ssrInterpolate(unref(isDark) ? "🌙" : "☀️")}</span></button></li></ul></div></header><main class="flex-1" data-v-fc8638f2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t bg-white/60 backdrop-blur dark:bg-neutral-900/60 dark:border-neutral-800" data-v-fc8638f2><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-700 dark:text-neutral-300 flex flex-col md:flex-row md:items-center md:justify-between gap-3" data-v-fc8638f2><span data-v-fc8638f2>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} RAST – Uređenje vrtova</span><div class="flex flex-wrap items-center gap-4" data-v-fc8638f2><a class="hover:text-emerald-700 dark:hover:text-emerald-400 underline underline-offset-4" href="mailto:upiti@rast-hortikultura.hr" data-v-fc8638f2>upiti@rast-hortikultura.hr</a><a class="hover:text-emerald-700 dark:hover:text-emerald-400 underline underline-offset-4" href="tel:+385959988777" data-v-fc8638f2>+385 95 998 8777</a></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc8638f2"]]);

export { _default as default };
//# sourceMappingURL=default-BGdn4F6g.mjs.map
