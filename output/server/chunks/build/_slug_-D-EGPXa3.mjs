import { _ as __nuxt_component_0 } from './nuxt-link-B81-QzfC.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useRoute, c as createError } from './server.mjs';
import { u as useFetch } from './fetch-riWDYnj7.mjs';
import { u as useHead } from './composables-BTOgT7CB.mjs';
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
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/blog", "$fhvmE-Di65")), __temp = await __temp, __restore(), __temp);
    const all = data.value?.posts || [];
    const post = all.find((p) => p.slug === route.params.slug);
    if (!post) {
      throw createError({ statusCode: 404, statusMessage: "Objava nije pronađena" });
    }
    useHead({
      title: `${post.title} – RAST blog`,
      meta: [{ name: "description", content: post.excerpt }]
    });
    function formatDate(d) {
      if (!d) return "";
      return new Date(d).toLocaleDateString("hr-HR", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "pb-16" }, _attrs))}><header class="bg-neutral-100 dark:bg-neutral-950"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Natrag na blog`);
          } else {
            return [
              createTextVNode("← Natrag na blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mt-3 text-3xl md:text-4xl font-bold tracking-tight">${ssrInterpolate(unref(post)?.title)}</h1><p class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">${ssrInterpolate(formatDate(unref(post)?.date))}</p></div><div class="aspect-[16/9] md:rounded-b-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800"><img${ssrRenderAttr("src", unref(post)?.image)}${ssrRenderAttr("alt", unref(post)?.title)} class="w-full h-full object-cover"></div><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-6">`);
      if (unref(post)?.credit) {
        _push(`<p class="text-xs text-neutral-500 dark:text-neutral-400"> Foto: <a${ssrRenderAttr("href", unref(post).credit.url)} target="_blank" class="hover:underline">${ssrInterpolate(unref(post).credit.label)}</a></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert"><!--[-->`);
      ssrRenderList(unref(post)?.content, (para, i) => {
        _push(`<p>${ssrInterpolate(para)}</p>`);
      });
      _push(`<!--]--></section></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-D-EGPXa3.mjs.map
