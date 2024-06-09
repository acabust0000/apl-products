import { mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { DoubleArrowRightIcon } from "@radix-icons/vue";
import "./Separator-BEMmav6B.js";
import "radix-vue";
import "./index-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Article",
  __ssrInlineRender: true,
  props: {
    article: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "flex-responsive sm:gap-responsive items-center" }, _attrs))}><div class="w-full aspect-square sm:py-responsive"><img${ssrRenderAttr("src", __props.article.img)}${ssrRenderAttr("alt", __props.article.title)} width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto"></div><div class="container-text py-4"><h5 class="text-4xl">${ssrInterpolate(__props.article.title)}</h5><p>${ssrInterpolate(__props.article.description)}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.article.url,
        class: "items-center underline sm:no-underline hover:underline text-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Citeste mai mult `);
            _push2(ssrRenderComponent(unref(DoubleArrowRightIcon), { class: "inline" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Citeste mai mult "),
              createVNode(unref(DoubleArrowRightIcon), { class: "inline" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/blog/components/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
