import { _ as __nuxt_component_0 } from './nuxt-link-dLp-I9eo.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { a as useRoute, d as useRouter } from './server.mjs';
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
    const onNav = (e) => {
      const a = e.currentTarget;
      const href = a.getAttribute("href") || "";
      if (href.includes("#")) {
        e.preventDefault();
        const hash = href.slice(href.indexOf("#"));
        const el = (void 0).querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      open.value = false;
      (void 0).documentElement.classList.remove("overflow-hidden");
    };
    const goTop = async () => {
      if (route.path !== "/") await router.push("/");
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-dvh flex flex-col" }, _attrs))}><header class="${ssrRenderClass([
        "sticky top-0 z-50 border-b transition-transform duration-300 will-change-transform",
        "bg-white/80 backdrop-blur dark:bg-neutral-900/70 dark:border-neutral-800",
        unref(hidden) && !unref(open) ? "-translate-y-full" : "translate-y-0"
      ])}"><nav class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 font-black tracking-wide",
        onClick: goTop,
        "aria-label": "RAST – Početak stranice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-block w-3 h-3 rounded-full bg-brand"${_scopeId}></span><span${_scopeId}>RAST</span>`);
          } else {
            return [
              createVNode("span", { class: "inline-block w-3 h-3 rounded-full bg-brand" }),
              createVNode("span", null, "RAST")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="hidden md:flex gap-6 text-sm"><li><a href="/#onama" class="hover:text-brand">O nama</a></li><li><a href="/#usluge" class="hover:text-brand">Usluge</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "hover:text-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="/#galerija" class="hover:text-brand">Galerija</a></li><li><a href="/#kontakt" class="hover:text-brand">Kontakt</a></li></ul><div class="flex items-center gap-2"><button class="hidden md:inline-flex text-sm px-3 py-1.5 rounded-md border dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800" aria-label="Promijeni temu">${ssrInterpolate(unref(isDark) ? "🌙 Dark" : "☀️ Light")}</button><button class="md:hidden rounded-md border dark:border-neutral-700 px-3 py-1.5 text-sm"${ssrRenderAttr("aria-expanded", unref(open) ? "true" : "false")} aria-controls="mobile-menu" aria-label="Menu">${ssrInterpolate(unref(open) ? "✕" : "☰")}</button></div></nav><div id="mobile-menu" style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="md:hidden absolute inset-x-0 top-full z-40 border-b bg-white dark:bg-neutral-900 dark:border-neutral-800"><ul class="px-4 py-2 space-y-2"><li><a href="/#onama" class="block py-2">O nama</a></li><li><a href="/#usluge" class="block py-2">Usluge</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "block py-2",
        onClick: onNav
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="/#galerija" class="block py-2">Galerija</a></li><li><a href="/#kontakt" class="block py-2">Kontakt</a></li><li class="pt-2 border-t dark:border-neutral-800"><button class="w-full text-left text-sm py-2">${ssrInterpolate(unref(isDark) ? "🌙 Dark" : "☀️ Light")}</button></li></ul></div></header><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t dark:border-neutral-800"><div class="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col md:flex-row md:items-center md:justify-between gap-2"><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} RAST – Uređenje vrtova</span><div class="flex gap-4"><a class="hover:text-brand" href="mailto:fooshmoola@gmail.com">fooshmoola@gmail.com</a><a class="hover:text-brand" href="tel:+385955448400">+385 95 544 8400</a></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-evR0HM48.mjs.map
