import { _ as __nuxt_component_0 } from './nuxt-link-dLp-I9eo.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
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
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/posts/${route.params.slug}`, "$fhvmE-Di65")), __temp = await __temp, __restore(), __temp);
    const post = computed(() => data.value?.data || {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl px-4 py-12 prose prose-neutral dark:prose-invert" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-sm text-brand no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Natrag`);
          } else {
            return [
              createTextVNode("← Natrag")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mt-4">${ssrInterpolate(unref(post).title)}</h1><p class="opacity-70 text-sm">${ssrInterpolate(unref(post).date)}</p><p class="mt-6 whitespace-pre-line">${ssrInterpolate(unref(post).content)}</p></section>`);
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
//# sourceMappingURL=_slug_--ah2Gdu2.mjs.map
