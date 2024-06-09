import { onMounted, withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { L as Layout } from "./default-Cod5iNBP.js";
import { _ as _sfc_main$1 } from "./index-Cnt_7mC-.js";
import { _ as _sfc_main$3 } from "./Announcement-CUy7w7bK.js";
import { Link } from "@inertiajs/vue3";
import _sfc_main$2 from "./Product-Dv37c6Tc.js";
import "vue-sonner";
import "@vueuse/core";
import "@radix-icons/vue";
import "./Separator-BEMmav6B.js";
import "radix-vue";
import "./index-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./Messenger-C-DU8Y_0.js";
import "class-variance-authority";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    products: Object
  },
  setup(__props) {
    onMounted(() => {
      gsap.fromTo(
        "#hero>div:first-child",
        {
          yPercent: 100,
          scale: 0.5,
          opacity: 0
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 3,
          ease: "expo"
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section id="hero" class="px-responsive sm:gap-responsive flex-responsive-reverse items-center sm:py-0"${_scopeId}><div class="w-full aspect-square sm:py-responsive"${_scopeId}><img src="/products/all.webp" alt="Apl Products" width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto sm:scale-150"${_scopeId}></div><div class="container-text"${_scopeId}><div${_scopeId}><span${_scopeId}> Apl Products </span><h1${_scopeId}> Produsele care schimba lumea </h1></div><p${_scopeId}> Acumullit SA (Tehnologia de acumulare a puterii) – Tehnologia noastră revoluţionară susţine şi întinereşte proprietăţile benefice ale ingredientelor naturale care facilitează absorbţia celulară. </p><div class="flex flex-wrap sm:flex-nowrap gap-responsive-xs pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              size: "lg",
              asChild: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a${ssrRenderAttr("href", _ctx.$page.props.apl)} target="_blank" class="w-full sm:w-auto"${_scopeId2}> Magazin APL </a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: _ctx.$page.props.apl,
                      target: "_blank",
                      class: "w-full sm:w-auto"
                    }, " Magazin APL ", 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              variant: "outline",
              size: "lg",
              class: "grow sm:grow-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("views.blog")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Blog `);
                      } else {
                        return [
                          createTextVNode(" Blog ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("views.blog")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Blog ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              variant: "outline",
              size: "lg",
              class: "grow sm:grow-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("views.gallery")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Galerie `);
                      } else {
                        return [
                          createTextVNode(" Galerie ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("views.gallery")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Galerie ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></section><section id="products" class="p-responsive gap-responsive-xs flex flex-col container items-center relative"${_scopeId}><div class="container-text text-center"${_scopeId}><div${_scopeId}><span${_scopeId}> Calitatea </span><h2${_scopeId}> Produsele seriei Acumullit SA </h2></div><p${_scopeId}> Când spunem că produsul nostru va schimba lumea, suntem sinceri. Datorită tehnologiei noastre inovatoare Acumullit SA®, toată lumea de pe planetă are şansa de a încerca acest produs unic. Această tehnologie ne oferă capacitatea de a folosi în produsele noastre puterea naturală a ierburilor, fructelor, fructelor de pădure şi a legumelor. Fiecare drajeu Acumullit SA® este o mică torpillă, îndreptată direct către celulele dumneavoastră, care oferă organismului nutriţia şi mineralele atât de necesare. Am avut mare grijă în alegerea fiecărei componente a drajeurilor noastre. </p></div><!--[-->`);
            ssrRenderList(__props.products, (product, identifier) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                url: product.url,
                identifier,
                span: product.span,
                img: product.img,
                title: product.title,
                description: product.description
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></section>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              title: "Inca nu esti convins?",
              description: "Descopera mai multe informatii despre produsele Apl",
              actions: {
                "Blog": _ctx.route("views.blog"),
                "Galerie": _ctx.route("views.gallery")
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("section", {
                id: "hero",
                class: "px-responsive sm:gap-responsive flex-responsive-reverse items-center sm:py-0"
              }, [
                createVNode("div", { class: "w-full aspect-square sm:py-responsive" }, [
                  createVNode("img", {
                    src: "/products/all.webp",
                    alt: "Apl Products",
                    width: "256",
                    height: "256",
                    loading: "lazy",
                    class: "h-full w-auto object-scale-down rounded-md mx-auto sm:scale-150"
                  })
                ]),
                createVNode("div", { class: "container-text" }, [
                  createVNode("div", null, [
                    createVNode("span", null, " Apl Products "),
                    createVNode("h1", null, " Produsele care schimba lumea ")
                  ]),
                  createVNode("p", null, " Acumullit SA (Tehnologia de acumulare a puterii) – Tehnologia noastră revoluţionară susţine şi întinereşte proprietăţile benefice ale ingredientelor naturale care facilitează absorbţia celulară. "),
                  createVNode("div", { class: "flex flex-wrap sm:flex-nowrap gap-responsive-xs pt-4" }, [
                    createVNode(unref(_sfc_main$1), {
                      size: "lg",
                      asChild: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: _ctx.$page.props.apl,
                          target: "_blank",
                          class: "w-full sm:w-auto"
                        }, " Magazin APL ", 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      variant: "outline",
                      size: "lg",
                      class: "grow sm:grow-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("views.blog")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Blog ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      variant: "outline",
                      size: "lg",
                      class: "grow sm:grow-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("views.gallery")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Galerie ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode("section", {
                id: "products",
                class: "p-responsive gap-responsive-xs flex flex-col container items-center relative"
              }, [
                createVNode("div", { class: "container-text text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", null, " Calitatea "),
                    createVNode("h2", null, " Produsele seriei Acumullit SA ")
                  ]),
                  createVNode("p", null, " Când spunem că produsul nostru va schimba lumea, suntem sinceri. Datorită tehnologiei noastre inovatoare Acumullit SA®, toată lumea de pe planetă are şansa de a încerca acest produs unic. Această tehnologie ne oferă capacitatea de a folosi în produsele noastre puterea naturală a ierburilor, fructelor, fructelor de pădure şi a legumelor. Fiecare drajeu Acumullit SA® este o mică torpillă, îndreptată direct către celulele dumneavoastră, care oferă organismului nutriţia şi mineralele atât de necesare. Am avut mare grijă în alegerea fiecărei componente a drajeurilor noastre. ")
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product, identifier) => {
                  return openBlock(), createBlock(_sfc_main$2, {
                    url: product.url,
                    identifier,
                    span: product.span,
                    img: product.img,
                    title: product.title,
                    description: product.description
                  }, null, 8, ["url", "identifier", "span", "img", "title", "description"]);
                }), 256))
              ]),
              createVNode(unref(_sfc_main$3), {
                title: "Inca nu esti convins?",
                description: "Descopera mai multe informatii despre produsele Apl",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
