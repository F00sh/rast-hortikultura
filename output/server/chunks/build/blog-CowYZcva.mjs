import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-B81-QzfC.mjs';
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
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "blogCard",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    function formatDate(d) {
      return new Date(d).toLocaleDateString("hr-HR", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/blog/${_ctx.post.slug}`,
        class: "group block overflow-hidden rounded-xl border dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 hover:shadow-lg transition"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", _ctx.post.image)}${ssrRenderAttr("alt", _ctx.post.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"${_scopeId}></div><div class="p-4"${_scopeId}><p class="text-xs text-neutral-500 dark:text-neutral-400"${_scopeId}>${ssrInterpolate(formatDate(_ctx.post.date))}</p><h3 class="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100"${_scopeId}>${ssrInterpolate(_ctx.post.title)}</h3><p class="mt-1 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3"${_scopeId}>${ssrInterpolate(_ctx.post.excerpt)}</p><span class="mt-3 inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-sm"${_scopeId}>Pročitaj više →</span></div>`);
          } else {
            return [
              createVNode("div", { class: "aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 overflow-hidden" }, [
                createVNode("img", {
                  src: _ctx.post.image,
                  alt: _ctx.post.title,
                  class: "w-full h-full object-cover group-hover:scale-105 transition duration-500",
                  loading: "lazy"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "p-4" }, [
                createVNode("p", { class: "text-xs text-neutral-500 dark:text-neutral-400" }, toDisplayString(formatDate(_ctx.post.date)), 1),
                createVNode("h3", { class: "mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100" }, toDisplayString(_ctx.post.title), 1),
                createVNode("p", { class: "mt-1 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3" }, toDisplayString(_ctx.post.excerpt), 1),
                createVNode("span", { class: "mt-3 inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-sm" }, "Pročitaj više →")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/blogCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlogCard = Object.assign(_sfc_main$2, { __name: "BlogCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "blogGrid",
  __ssrInlineRender: true,
  props: {
    posts: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-20 bg-neutral-100 dark:bg-neutral-950" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="max-w-3xl"><h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">Blog</h1><p class="mt-4 text-neutral-700 dark:text-neutral-300"> Savjeti, sezonske preporuke i praktične teme iz hortikulture – iz prakse Rast tima. </p></div><div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(_ctx.posts, (p) => {
        _push(ssrRenderComponent(BlogCard, {
          key: p.slug,
          post: p
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/blogGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogGrid = Object.assign(_sfc_main$1, { __name: "BlogGrid" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/blog", "$2z6oLJDZB8")), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => data.value?.posts || []);
    useHead({
      title: "Blog – RAST hortikultura",
      meta: [
        { name: "description", content: "Savjeti i vodiči: projektiranje vrtova, košnja i održavanje, travnati tepisi, navodnjavanje, sadnja, rad u maslinicima i dekorativno uređenje." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BlogGrid, mergeProps({ posts: unref(posts) }, _attrs), null, _parent));
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
//# sourceMappingURL=blog-CowYZcva.mjs.map
