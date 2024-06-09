import { onMounted, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./index-Cnt_7mC-.js";
import { useMediaQuery } from "@vueuse/core";
import "class-variance-authority";
import "radix-vue";
import "./index-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    url: String,
    img: String,
    span: String,
    title: String,
    description: String,
    identifier: String
  },
  setup(__props) {
    const props = __props;
    const isDesktop = useMediaQuery("(min-width: 640px)");
    onMounted(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: `#${props.identifier}`,
          // @todo fix mobile
          start: isDesktop.value ? "center 150%" : "center 150%",
          end: isDesktop.value ? "center center" : "center center",
          scrub: 1
        }
      }).add("start").fromTo(
        `#${props.identifier}:nth-child(even)`,
        {
          xPercent: -20,
          opacity: 0
        },
        {
          xPercent: 0,
          opacity: 1
        },
        "start"
      ).fromTo(
        `#${props.identifier}:nth-child(odd)`,
        {
          xPercent: 20,
          opacity: 0
        },
        {
          xPercent: 0,
          opacity: 1
        },
        "start"
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: __props.identifier,
        class: "flex-responsive w-full items-center"
      }, _attrs))}><div class="flex flex-col gap-4 sm:gap-8 w-full"><div class="p-8 sm:p-12 flex flex-col gap-5 sm:gap-6"><div><span>${ssrInterpolate(__props.span)}</span><h3>${ssrInterpolate(__props.title)}</h3></div><p>${ssrInterpolate(__props.description)}</p><div class="items-center flex gap-4 pt-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a target="_blank"${ssrRenderAttr("href", __props.url)}${_scopeId}> Descopera produs </a>`);
          } else {
            return [
              createVNode("a", {
                target: "_blank",
                href: __props.url
              }, " Descopera produs ", 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="w-full"><img${ssrRenderAttr("src", __props.img)}${ssrRenderAttr("alt", __props.title)} width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/about/components/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
