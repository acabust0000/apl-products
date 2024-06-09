import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { ArrowRightIcon } from "@radix-icons/vue";
import { Link } from "@inertiajs/vue3";
import "./Separator-BEMmav6B.js";
import { L as Layout } from "./default-Cod5iNBP.js";
import { _ as _sfc_main$2 } from "./Announcement-CUy7w7bK.js";
import _sfc_main$1 from "./Socials-xCfh-Nby.js";
import "radix-vue";
import "./index-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "vue-sonner";
import "@vueuse/core";
import "./Messenger-C-DU8Y_0.js";
import "./index-Cnt_7mC-.js";
import "class-variance-authority";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: String,
    url: String,
    content: String,
    published_at: String,
    img: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, mergeProps({ class: "relative" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="!hidden sm:flex px-responsive py-responsive sm:py-0 flex-responsive gap-responsive-xs sm:items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("views.blog"),
              class: "flex items-center gap-2 sm:hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Toate articolele `);
                } else {
                  return [
                    createTextVNode(" Toate articolele ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "size-6" }, null, _parent2, _scopeId));
            _push2(`<p class="sm:text-nowrap"${_scopeId}>${ssrInterpolate(__props.title)}</p></div><section class="flex-responsive-reverse gap-responsive-sm px-responsive items-center"${_scopeId}><div class="flex flex-col gap-responsive-xs sm:w-1/2"${_scopeId}><h1${_scopeId}>${ssrInterpolate(__props.title)}</h1><span${_scopeId}>${ssrInterpolate(__props.published_at)}</span></div><div class="sm:w-1/2 aspect-square sm:py-responsive"${_scopeId}><img${ssrRenderAttr("src", __props.img)}${ssrRenderAttr("alt", __props.title)} width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto"${_scopeId}></div></section><section class="container p-responsive flex flex-col gap-responsive"${_scopeId}><p${_scopeId}>${__props.content ?? ""}</p><div class="w-full flex flex-col items-center gap-5"${_scopeId}><div class="flex justify-center items-center gap-6"${_scopeId}><span${_scopeId}>Articol publicat de Apl Products</span></div><div class="flex gap-responsive-sm justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { url: __props.url }, null, _parent2, _scopeId));
            _push2(`</div></div></section>`);
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              title: "Descopera mai multe despre Apl Products",
              description: "title titletitletitletitletitletitletitletitletitletitletitletitletitletitletitle",
              actions: {
                "Blog": _ctx.route("views.blog"),
                "Galerie": _ctx.route("views.gallery")
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "!hidden sm:flex px-responsive py-responsive sm:py-0 flex-responsive gap-responsive-xs sm:items-center" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("views.blog"),
                  class: "flex items-center gap-2 sm:hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Toate articolele ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(ArrowRightIcon), { class: "size-6" }),
                createVNode("p", {
                  textContent: toDisplayString(__props.title),
                  class: "sm:text-nowrap"
                }, null, 8, ["textContent"])
              ]),
              createVNode("section", { class: "flex-responsive-reverse gap-responsive-sm px-responsive items-center" }, [
                createVNode("div", { class: "flex flex-col gap-responsive-xs sm:w-1/2" }, [
                  createVNode("h1", {
                    textContent: toDisplayString(__props.title)
                  }, null, 8, ["textContent"]),
                  createVNode("span", {
                    textContent: toDisplayString(__props.published_at)
                  }, null, 8, ["textContent"])
                ]),
                createVNode("div", { class: "sm:w-1/2 aspect-square sm:py-responsive" }, [
                  createVNode("img", {
                    src: __props.img,
                    alt: __props.title,
                    width: "256",
                    height: "256",
                    loading: "lazy",
                    class: "h-full w-auto object-scale-down rounded-md mx-auto"
                  }, null, 8, ["src", "alt"])
                ])
              ]),
              createVNode("section", { class: "container p-responsive flex flex-col gap-responsive" }, [
                createVNode("p", { innerHTML: __props.content }, null, 8, ["innerHTML"]),
                createVNode("div", { class: "w-full flex flex-col items-center gap-5" }, [
                  createVNode("div", { class: "flex justify-center items-center gap-6" }, [
                    createVNode("span", null, "Articol publicat de Apl Products")
                  ]),
                  createVNode("div", { class: "flex gap-responsive-sm justify-center" }, [
                    createVNode(_sfc_main$1, { url: __props.url }, null, 8, ["url"])
                  ])
                ])
              ]),
              createVNode(unref(_sfc_main$2), {
                title: "Descopera mai multe despre Apl Products",
                description: "title titletitletitletitletitletitletitletitletitletitletitletitletitletitletitle",
                actions: {
                  "Blog": _ctx.route("views.blog"),
                  "Galerie": _ctx.route("views.gallery")
                }
              }, null, 8, ["actions"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
