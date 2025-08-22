import { _ as __nuxt_component_0 } from './nuxt-link-dLp-I9eo.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-D2QB1thI.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/posts", "$2z6oLJDZB8")), __temp = await __temp, __restore(), __temp);
    const posts = data.value?.data || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-4 py-16" }, _attrs))}><h1 class="text-3xl md:text-4xl font-bold">Blog</h1><div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<article class="border rounded-xl p-5 bg-white dark:bg-neutral-900 dark:border-neutral-800"><h2 class="font-semibold text-lg">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${post.slug}`,
          class: "hover:text-brand"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2><p class="text-sm text-neutral-700 dark:text-neutral-300 mt-2">${ssrInterpolate(post.excerpt)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${post.slug}`,
          class: "text-brand mt-3 inline-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Pročitaj više`);
            } else {
              return [
                createTextVNode("Pročitaj više")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-zOF5XzRE.mjs.map
