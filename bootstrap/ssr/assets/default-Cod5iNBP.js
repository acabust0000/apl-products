import { unref, mergeProps, useSSRContext, withCtx, renderSlot, ref, createTextVNode, createVNode, onMounted } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderTeleport, ssrRenderClass } from "vue/server-renderer";
import { Toaster } from "vue-sonner";
import { Link } from "@inertiajs/vue3";
import { useMediaQuery } from "@vueuse/core";
import { HamburgerMenuIcon } from "@radix-icons/vue";
import { _ as _sfc_main$7 } from "./Separator-BEMmav6B.js";
import { useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from "radix-vue";
import { _ as _export_sfc, F as Facebook, I as Instagram, Y as Youtube } from "./Messenger-C-DU8Y_0.js";
const _sfc_main$6 = {
  __name: "Sonner",
  __ssrInlineRender: true,
  props: {
    invert: { type: Boolean, required: false },
    theme: { type: String, required: false },
    position: { type: String, required: false },
    hotkey: { type: Array, required: false },
    richColors: { type: Boolean, required: false },
    expand: { type: Boolean, required: false },
    duration: { type: Number, required: false },
    gap: { type: Number, required: false },
    visibleToasts: { type: Number, required: false },
    closeButton: { type: Boolean, required: false },
    toastOptions: { type: Object, required: false },
    class: { type: String, required: false },
    style: { type: null, required: false },
    offset: { type: [String, Number], required: false },
    dir: { type: String, required: false },
    icons: { type: Object, required: false },
    containerAriaLabel: { type: String, required: false },
    pauseWhenPageIsHidden: { type: Boolean, required: false },
    cn: { type: Function, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Toaster), mergeProps({ class: "toaster group" }, props, { "toast-options": {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      } }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/sonner/Sonner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { open })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/collapsible/Collapsible.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "CollapsibleTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/collapsible/CollapsibleTrigger.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CollapsibleContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleContent), mergeProps(props, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/collapsible/CollapsibleContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isDesktop = useMediaQuery("(min-width: 640px)");
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isDesktop)) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "text-input w-full flex flex-row justify-between px-24 py-12 text-nowrap" }, _attrs))} data-v-bcbbca62><div data-v-bcbbca62></div><div class="flex w-min gap-responsive-sm" data-v-bcbbca62><a${ssrRenderAttr("href", _ctx.$page.props.links.apl)} target="_blank" class="font-semibold underline decoration-primary items-center inline-block whitespace-nowrap" data-v-bcbbca62> Magazin APL </a>`);
        _push(ssrRenderComponent(unref(_sfc_main$7), { orientation: "vertical" }, null, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("views.index"),
          class: {
            "": _ctx.route("views.index") == _ctx.$page.props.links.active
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Despre `);
            } else {
              return [
                createTextVNode(" Despre ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("views.blog"),
          class: {
            "": _ctx.route("views.blog") == _ctx.$page.props.links.active
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Blog `);
            } else {
              return [
                createTextVNode(" Blog ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("views.gallery"),
          class: {
            "": _ctx.route("views.gallery") == _ctx.$page.props.links.active
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Galerie `);
            } else {
              return [
                createTextVNode(" Galerie ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("views.contact"),
          class: {
            "": _ctx.route("views.contact") == _ctx.$page.props.links.active
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact `);
            } else {
              return [
                createTextVNode(" Contact ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></header>`);
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$5), mergeProps({
          open: open.value,
          "onUpdate:open": ($event) => open.value = $event,
          as: "header",
          class: "relative bg-background text-input"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full flex flex-row justify-between px-5 py-4 text-nowrap font-thin items-center" data-v-bcbbca62${_scopeId}><div data-v-bcbbca62${_scopeId}></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), { asChild: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(HamburgerMenuIcon), { class: "cursor-pointer stroke-black hover:stroke-primary transition-all" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(HamburgerMenuIcon), { class: "cursor-pointer stroke-black hover:stroke-primary transition-all" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$3), { class: "bg-background w-full fixed z-10" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-background flex flex-col-reverse gap-6 px-5 py-8" data-v-bcbbca62${_scopeId2}><a${ssrRenderAttr("href", _ctx.$page.props.links.apl)} target="_blank" class="font-semibold underline decoration-primary items-center" data-v-bcbbca62${_scopeId2}> Magazin APL </a>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("views.index"),
                      class: {
                        "": _ctx.route("views.index") == _ctx.$page.props.links.active
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Despre `);
                        } else {
                          return [
                            createTextVNode(" Despre ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("views.blog"),
                      class: {
                        "": _ctx.route("views.blog") == _ctx.$page.props.links.active
                      }
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
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("views.gallery"),
                      class: {
                        "": _ctx.route("views.gallery") == _ctx.$page.props.links.active
                      }
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
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("views.contact"),
                      class: {
                        "": _ctx.route("views.contact") == _ctx.$page.props.links.active
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Contact `);
                        } else {
                          return [
                            createTextVNode(" Contact ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-background flex flex-col-reverse gap-6 px-5 py-8" }, [
                        createVNode("a", {
                          href: _ctx.$page.props.links.apl,
                          target: "_blank",
                          class: "font-semibold underline decoration-primary items-center"
                        }, " Magazin APL ", 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("views.index"),
                          class: {
                            "": _ctx.route("views.index") == _ctx.$page.props.links.active
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Despre ")
                          ]),
                          _: 1
                        }, 8, ["href", "class"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("views.blog"),
                          class: {
                            "": _ctx.route("views.blog") == _ctx.$page.props.links.active
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Blog ")
                          ]),
                          _: 1
                        }, 8, ["href", "class"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("views.gallery"),
                          class: {
                            "": _ctx.route("views.gallery") == _ctx.$page.props.links.active
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Galerie ")
                          ]),
                          _: 1
                        }, 8, ["href", "class"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("views.contact"),
                          class: {
                            "": _ctx.route("views.contact") == _ctx.$page.props.links.active
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Contact ")
                          ]),
                          _: 1
                        }, 8, ["href", "class"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "w-full flex flex-row justify-between px-5 py-4 text-nowrap font-thin items-center" }, [
                  createVNode("div"),
                  createVNode(unref(_sfc_main$4), { asChild: "" }, {
                    default: withCtx(() => [
                      createVNode(unref(HamburgerMenuIcon), { class: "cursor-pointer stroke-black hover:stroke-primary transition-all" })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(unref(_sfc_main$3), { class: "bg-background w-full fixed z-10" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-background flex flex-col-reverse gap-6 px-5 py-8" }, [
                      createVNode("a", {
                        href: _ctx.$page.props.links.apl,
                        target: "_blank",
                        class: "font-semibold underline decoration-primary items-center"
                      }, " Magazin APL ", 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("views.index"),
                        class: {
                          "": _ctx.route("views.index") == _ctx.$page.props.links.active
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Despre ")
                        ]),
                        _: 1
                      }, 8, ["href", "class"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("views.blog"),
                        class: {
                          "": _ctx.route("views.blog") == _ctx.$page.props.links.active
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Blog ")
                        ]),
                        _: 1
                      }, 8, ["href", "class"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("views.gallery"),
                        class: {
                          "": _ctx.route("views.gallery") == _ctx.$page.props.links.active
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Galerie ")
                        ]),
                        _: 1
                      }, 8, ["href", "class"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("views.contact"),
                        class: {
                          "": _ctx.route("views.contact") == _ctx.$page.props.links.active
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Contact ")
                        ]),
                        _: 1
                      }, 8, ["href", "class"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navbar/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bcbbca62"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background p-responsive flex flex-col gap-responsive" }, _attrs))} data-v-70072e22><div class="flex-responsive justify-between gap-10 [&amp;&gt;div]:w-full [&amp;&gt;div&gt;span]:font-semibold [&amp;&gt;div&gt;span]:mb-4" data-v-70072e22><div data-v-70072e22><span data-v-70072e22> Galerie </span><!--[-->`);
      ssrRenderList(_ctx.$page.props.links.gallery, (gallery) => {
        _push(ssrRenderComponent(unref(Link), {
          href: gallery.url
        }, null, _parent));
      });
      _push(`<!--]--></div><div data-v-70072e22><span data-v-70072e22> Articole </span><!--[-->`);
      ssrRenderList(_ctx.$page.props.links.blog, (article) => {
        _push(ssrRenderComponent(unref(Link), {
          href: article.url
        }, null, _parent));
      });
      _push(`<!--]--></div><div data-v-70072e22><span data-v-70072e22> Pagini </span><a${ssrRenderAttr("href", _ctx.$page.props.links.apl)} target="_blank" data-v-70072e22> Magazin APL </a>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("views.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Despre `);
          } else {
            return [
              createTextVNode(" Despre ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("views.blog")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("views.gallery")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Galerie `);
          } else {
            return [
              createTextVNode(" Galerie ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("views.contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col gap-8" data-v-70072e22>`);
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`<div class="flex-responsive-reverse justify-between text-sm gap-responsive-sm" data-v-70072e22><div class="flex-responsive-reverse gap-6" data-v-70072e22><span data-v-70072e22> Apl Products 2024 </span><div class="flex-responsive-reverse gap-responsive-xs" data-v-70072e22>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("legal.privacy")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Politica de confidentialitate `);
          } else {
            return [
              createTextVNode(" Politica de confidentialitate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("legal.terms")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Termeni si conditii `);
          } else {
            return [
              createTextVNode(" Termeni si conditii ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("legal.cookies")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Politica Cookie `);
          } else {
            return [
              createTextVNode(" Politica Cookie ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-row gap-responsive-xs" data-v-70072e22><a target="_blank" href="platforms.Facebook" class="btn-social" data-v-70072e22>`);
      _push(ssrRenderComponent(unref(Facebook), null, null, _parent));
      _push(`</a><a target="_blank" href="platforms.Facebook" class="btn-social" data-v-70072e22>`);
      _push(ssrRenderComponent(unref(Instagram), null, null, _parent));
      _push(`</a><a target="_blank" href="platforms.Facebook" class="btn-social" data-v-70072e22>`);
      _push(ssrRenderComponent(unref(Youtube), null, null, _parent));
      _push(`</a></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/footer/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-70072e22"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  props: {
    class: String
  },
  setup(__props) {
    onMounted(() => {
      gsap.fromTo(
        "main>div:first-child>svg:nth-child(odd)",
        {
          xPercent: 20,
          opacity: 0
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 3,
          ease: "expo"
        }
      );
      gsap.fromTo(
        "main>div:first-child>svg:nth-child(even)",
        {
          xPercent: -20,
          opacity: 0
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 3,
          ease: "expo"
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(unref(_sfc_main$6), {
          position: "top-right",
          richColors: "",
          duration: "5000"
        }, null, _parent));
      }, "body", false, _parent);
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<main class="${ssrRenderClass([__props.class, "relative h-auto flex flex-col overflow-hidden text-input"])}" data-v-5b5e6ec6><div class="absolute mt-20 sm:mt-60 -z-10 opacity-10" data-v-5b5e6ec6><!--[-->`);
      ssrRenderList(20, (n) => {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.17 57.42" data-v-5b5e6ec6><path d="M56.62,9.61c-1.99,4.53-4.5,7.71-8.8,11.65-7.84,6.93-6.37,21.26-2.16,29.78-9.47-5.69-3.21-23.86-12.25-33.1C29.29,11.82,13.33,6.61,7.13,0c9.85,21.21-3.2,29.25,23.03,45.94-15.33-6.6-14.63-.23-30.16,2.77,9.03,3.19,11.42,8.69,19.76,8.71,8.57.01,12.39-7.45,20.54-3.54-1.58-2.45-5.33-4.93-6.16-5.7,3.84,1.91,7.44,3.25,11.91,3.76.25.56.49.89.85,1.22-.31-7.87,2.97-8.68,6.71-12.6,6.89-7.81,6.33-13.38,3.93-22.31-.66-2.26-.79-5.68-.91-8.64ZM36.31,51.41c-13.46-5.42-16.39-1.53-30.82-2.34,15.17-.59,16.61-4.53,30.82,2.34ZM11.87,7.35c11.29,17.27,11.01,27.67,28.91,41.48C21.55,38.85,18.61,19.08,11.87,7.35ZM45.8,48.64c-2.58-16.35,4.67-20.86,9.03-32.1-2.43,10.95-9.9,15.69-9.03,32.1Z" data-v-5b5e6ec6></path></svg>`);
      });
      _push(`<!--]--></div><div data-v-5b5e6ec6>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b5e6ec6"]]);
export {
  Layout as L,
  _sfc_main$5 as _,
  _sfc_main$4 as a,
  _sfc_main$3 as b
};
