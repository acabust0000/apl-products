import { ref, onMounted, mergeProps, unref, useSSRContext, withCtx, renderSlot, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { createInjectionState, useEventBus } from "@vueuse/core";
import "./Separator-BEMmav6B.js";
import emblaCarouselVue from "embla-carousel-vue";
import { c as cn } from "./index-H80jjgLf.js";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { _ as _sfc_main$6 } from "./index-Cnt_7mC-.js";
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    function onSelect(api) {
      canScrollNext.value = api.canScrollNext();
      canScrollPrev.value = api.canScrollPrev();
    }
    onMounted(() => {
      var _a, _b, _c;
      if (!emblaApi.value)
        return;
      (_a = emblaApi.value) == null ? void 0 : _a.on("init", onSelect);
      (_b = emblaApi.value) == null ? void 0 : _b.on("reInit", onSelect);
      (_c = emblaApi.value) == null ? void 0 : _c.on("select", onSelect);
      emits("init-api", emblaApi.value);
    });
    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation
    };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$5 = {
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: { type: null, required: false },
    plugins: { type: null, required: false },
    orientation: { type: String, required: false, default: "horizontal" },
    class: { type: null, required: false }
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const carouselArgs = useProvideCarousel(props, emits);
    __expose(carouselArgs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", unref(carouselArgs), null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/carousel/Carousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "border-input text-input touch-manipulation size-16 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-left-24 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "size-8 text-current" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowLeft), { class: "size-8 text-current" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "border-input text-input touch-manipulation size-16 rounded-full p-0 ",
          unref(orientation) === "horizontal" ? "-right-24 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "size-8 text-current" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowRight), { class: "size-8 text-current" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    gallery: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        id: __props.gallery.id,
        class: "flex flex-col gap-4 sm:gap-14"
      }, _attrs))}><div><span>${ssrInterpolate(__props.gallery.date)}</span><h2>${ssrInterpolate(__props.gallery.title)}</h2></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.gallery.data, (src, alt, index) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "sm:basis-[content] sm:h-[30rem] py-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", src)}${ssrRenderAttr("alt", alt)} width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md hover:scale-110 transition-all cursor-pointer"${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src,
                              alt,
                              width: "256",
                              height: "256",
                              loading: "lazy",
                              class: "h-full w-auto object-scale-down rounded-md hover:scale-110 transition-all cursor-pointer",
                              onClick: ($event) => unref(useEventBus)("preview").emit({
                                data: __props.gallery.data,
                                scrollTo: index
                              })
                            }, null, 8, ["src", "alt", "onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.gallery.data, (src, alt, index) => {
                      return openBlock(), createBlock(unref(_sfc_main$3), { class: "sm:basis-[content] sm:h-[30rem] py-6" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src,
                            alt,
                            width: "256",
                            height: "256",
                            loading: "lazy",
                            class: "h-full w-auto object-scale-down rounded-md hover:scale-110 transition-all cursor-pointer",
                            onClick: ($event) => unref(useEventBus)("preview").emit({
                              data: __props.gallery.data,
                              scrollTo: index
                            })
                          }, null, 8, ["src", "alt", "onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="justify-end ml-auto flex gap-6 mt-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.gallery.data, (src, alt, index) => {
                    return openBlock(), createBlock(unref(_sfc_main$3), { class: "sm:basis-[content] sm:h-[30rem] py-6" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src,
                          alt,
                          width: "256",
                          height: "256",
                          loading: "lazy",
                          class: "h-full w-auto object-scale-down rounded-md hover:scale-110 transition-all cursor-pointer",
                          onClick: ($event) => unref(useEventBus)("preview").emit({
                            data: __props.gallery.data,
                            scrollTo: index
                          })
                        }, null, 8, ["src", "alt", "onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              }),
              createVNode("div", { class: "justify-end ml-auto flex gap-6 mt-12" }, [
                createVNode(unref(_sfc_main$2)),
                createVNode(unref(_sfc_main$1))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/gallery/components/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  Gallery as G,
  _sfc_main$5 as _,
  _sfc_main$4 as a,
  _sfc_main$3 as b,
  _sfc_main$2 as c,
  _sfc_main$1 as d,
  _sfc_main as e
};
