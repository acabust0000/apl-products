import { ref, computed, resolveComponent, withCtx, unref, createVNode, createTextVNode, TransitionGroup, openBlock, createBlock, createCommentVNode, withModifiers, Transition, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderTeleport, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useDebounceFn } from "@vueuse/core";
import { useForm, router } from "@inertiajs/vue3";
import { L as Layout } from "./default-Cod5iNBP.js";
import _sfc_main$a from "./Article-DxDlbaAC.js";
import { _ as _sfc_main$b } from "./Announcement-CUy7w7bK.js";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Input-DAOY0rtt.js";
import { _ as _sfc_main$9 } from "./index-Cnt_7mC-.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7, e as _sfc_main$8 } from "./SelectScrollDownButton-C4KlHYoX.js";
import "clsx";
import "vue-sonner";
import "@radix-icons/vue";
import "./Separator-BEMmav6B.js";
import "radix-vue";
import "./index-H80jjgLf.js";
import "tailwind-merge";
import "./Messenger-C-DU8Y_0.js";
import "class-variance-authority";
import "lucide-vue-next";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: {
    data: Object,
    form: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      search: props.form.search,
      sort: props.form.sort
    });
    const search = ref(form.search);
    const loading = ref(false);
    const submit = () => {
      loading.value = true;
      router.reload({
        preserveScroll: true,
        data: form.data(),
        onSuccess: () => {
          form.clearErrors();
        },
        onError: (error) => {
          form.setError(error);
        },
        onFinish: () => {
          loading.value = false;
        }
      });
    };
    const reset = () => {
      form.defaults({
        search: null,
        sort: null
      });
      form.reset();
      search.value = null;
      submit();
    };
    const filters = computed(() => {
      return !!Object.values(form.data()).filter((e) => !!e).length;
    });
    const handleSearch = useDebounceFn((e) => {
      form.search = e;
      submit();
    }, 500);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Preview = resolveComponent("Preview");
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_Preview, null, null, _parent));
      }, "body", false, _parent);
      _push(ssrRenderComponent(Layout, { class: "relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            if (loading.value) {
              _push2(`<div class="absolute z-20 flex size-full backdrop-blur-sm rounded-3xl"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-24 animate-spin m-auto stroke-theme-primary-dark"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"${_scopeId}></path></svg></div>`);
            }
            _push2(`<!--]--><section${_scopeId}><div class="container px-responsive flex flex-col"${_scopeId}><div class="flex flex-col gap-responsive-xs"${_scopeId}><div class="container-text"${_scopeId}><div${_scopeId}><span${_scopeId}>Blog</span><h1${_scopeId}>Articolele noastre</h1></div><p${_scopeId}> Misiunea APL este de a schimba vieţile oamenilor spre bine! Suntem o echipă care ajută pe cei cu care lucrăm să devină o versiune mai bună decât sunt. Iar cei cu care colaborăm devin oameni care merită o rundă de APLauze. </p></div><form class="w-full flex-responsive-reverse-lg gap-responsive-xs items-end"${_scopeId}><div class="w-full lg:w-min min-w-64"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              text: unref(form).errors.search
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$2), {
              placeholder: "Cauta dupa denumire",
              modelValue: search.value,
              "onUpdate:modelValue": [($event) => search.value = $event, unref(handleSearch)]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              modelValue: unref(form).sort,
              "onUpdate:modelValue": [($event) => unref(form).sort = $event, submit]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "lg:w-min min-w-64" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), { placeholder: "Sorteaza" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), { placeholder: "Sorteaza" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$7), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$8), { value: "desc" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cele mai recente `);
                                  } else {
                                    return [
                                      createTextVNode(" Cele mai recente ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$8), { value: "asc" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cele mai vechi `);
                                  } else {
                                    return [
                                      createTextVNode(" Cele mai vechi ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$8), { value: "desc" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cele mai recente ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$8), { value: "asc" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cele mai vechi ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$7), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), { value: "desc" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cele mai recente ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$8), { value: "asc" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cele mai vechi ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "lg:w-min min-w-64" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), { placeholder: "Sorteaza" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), { value: "desc" }, {
                              default: withCtx(() => [
                                createTextVNode(" Cele mai recente ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$8), { value: "asc" }, {
                              default: withCtx(() => [
                                createTextVNode(" Cele mai vechi ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (filters.value) {
              _push2(ssrRenderComponent(unref(_sfc_main$9), {
                onClick: reset,
                class: "w-full lg:w-auto"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Reseteaza filtrele `);
                  } else {
                    return [
                      createTextVNode(" Reseteaza filtrele ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</form></div>`);
            if (Object.keys(__props.data).length) {
              _push2(`<div class="flex flex-col gap-responsive"${_scopeId}><!--[-->`);
              ssrRenderList(__props.data, (article) => {
                _push2(ssrRenderComponent(_sfc_main$a, { article }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="w-full h-[50vh] flex text-center"${_scopeId}><span class="font-display text-2xl m-auto opacity-75"${_scopeId}> Opa... Ne pare rau dar din pacate nu am gasit nici un rezultat </span></div>`);
            }
            _push2(`</div></section>`);
            _push2(ssrRenderComponent(unref(_sfc_main$b), {
              title: "title",
              description: "title",
              actions: {
                "Blog": _ctx.route("views.blog"),
                "Galerie": _ctx.route("views.gallery")
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(TransitionGroup, { name: "fade" }, {
                default: withCtx(() => [
                  loading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute z-20 flex size-full backdrop-blur-sm rounded-3xl"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "3",
                      stroke: "currentColor",
                      class: "size-24 animate-spin m-auto stroke-theme-primary-dark"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      })
                    ]))
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode("section", null, [
                createVNode("div", { class: "container px-responsive flex flex-col" }, [
                  createVNode("div", { class: "flex flex-col gap-responsive-xs" }, [
                    createVNode("div", { class: "container-text" }, [
                      createVNode("div", null, [
                        createVNode("span", null, "Blog"),
                        createVNode("h1", null, "Articolele noastre")
                      ]),
                      createVNode("p", null, " Misiunea APL este de a schimba vieţile oamenilor spre bine! Suntem o echipă care ajută pe cei cu care lucrăm să devină o versiune mai bună decât sunt. Iar cei cu care colaborăm devin oameni care merită o rundă de APLauze. ")
                    ]),
                    createVNode("form", {
                      class: "w-full flex-responsive-reverse-lg gap-responsive-xs items-end",
                      onSubmit: withModifiers(() => {
                      }, ["prevent"])
                    }, [
                      createVNode("div", { class: "w-full lg:w-min min-w-64" }, [
                        createVNode(unref(_sfc_main$1), {
                          text: unref(form).errors.search
                        }, null, 8, ["text"]),
                        createVNode(unref(_sfc_main$2), {
                          placeholder: "Cauta dupa denumire",
                          modelValue: search.value,
                          "onUpdate:modelValue": [($event) => search.value = $event, unref(handleSearch)]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(unref(_sfc_main$3), {
                        modelValue: unref(form).sort,
                        "onUpdate:modelValue": [($event) => unref(form).sort = $event, submit]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), { class: "lg:w-min min-w-64" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { placeholder: "Sorteaza" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$7), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$8), { value: "desc" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cele mai recente ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$8), { value: "asc" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Cele mai vechi ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(Transition, { name: "fade" }, {
                        default: withCtx(() => [
                          filters.value ? (openBlock(), createBlock(unref(_sfc_main$9), {
                            key: 0,
                            onClick: reset,
                            class: "w-full lg:w-auto"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Reseteaza filtrele ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ], 40, ["onSubmit"])
                  ]),
                  Object.keys(__props.data).length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col gap-responsive"
                  }, [
                    createVNode(TransitionGroup, { name: "list" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (article) => {
                          return openBlock(), createBlock(_sfc_main$a, { article }, null, 8, ["article"]);
                        }), 256))
                      ]),
                      _: 1
                    })
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "w-full h-[50vh] flex text-center"
                  }, [
                    createVNode("span", { class: "font-display text-2xl m-auto opacity-75" }, " Opa... Ne pare rau dar din pacate nu am gasit nici un rezultat ")
                  ]))
                ])
              ]),
              createVNode(unref(_sfc_main$b), {
                title: "title",
                description: "title",
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/blog/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
