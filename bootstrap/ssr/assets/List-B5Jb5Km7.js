import { unref, mergeProps, withCtx, renderSlot, useSSRContext, computed, createVNode, openBlock, createBlock, createCommentVNode, ref, Fragment, renderList, createTextVNode, toDisplayString, onMounted, TransitionGroup, withModifiers, Transition } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport } from "vue/server-renderer";
import { useEventBus, useUrlSearchParams, useDebounceFn } from "@vueuse/core";
import { useForm, router } from "@inertiajs/vue3";
import "./Separator-BEMmav6B.js";
import { c as cn } from "./index-H80jjgLf.js";
import { L as Layout } from "./default-Cod5iNBP.js";
import { CalendarIcon } from "@radix-icons/vue";
import { _ as _sfc_main$j, a as _sfc_main$k, b as _sfc_main$l, c as _sfc_main$m, d as _sfc_main$n, e as _sfc_main$x } from "./Gallery-CIV5BME0.js";
import { useForwardPropsEmits, DialogRoot, DialogPortal, DialogOverlay, DialogContent, DialogClose, RangeCalendarRoot, useForwardProps, RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarHeader, RangeCalendarHeading, RangeCalendarNext, RangeCalendarPrev, PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent } from "radix-vue";
import "clsx";
import { X, ChevronRight, ChevronLeft } from "lucide-vue-next";
import { _ as _sfc_main$y } from "./Announcement-CUy7w7bK.js";
import { _ as _sfc_main$o, a as _sfc_main$p } from "./Input-DAOY0rtt.js";
import { b as buttonVariants, _ as _sfc_main$w } from "./index-Cnt_7mC-.js";
import { _ as _sfc_main$q, a as _sfc_main$r, b as _sfc_main$s, c as _sfc_main$t, d as _sfc_main$u, e as _sfc_main$v } from "./SelectScrollDownButton-C4KlHYoX.js";
import { parseDate, DateFormatter, now, getLocalTimeZone } from "@internationalized/date";
import "tailwind-merge";
import "vue-sonner";
import "./Messenger-C-DU8Y_0.js";
import "embla-carousel-vue";
import "class-variance-authority";
const _sfc_main$i = {
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/Dialog.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    trapFocus: { type: Boolean, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false },
    hideClose: { type: Boolean, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed left-1/2 top-1/2 z-50 grid w-full max-w-md md:max-w-xl lg:max-w-6xl -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-sm sm:rounded-3xl",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  if (!__props.hideClose) {
                    _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                          _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                        } else {
                          return [
                            createVNode(unref(X), { class: "w-4 h-4" }),
                            createVNode("span", { class: "sr-only" }, "Close")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    !__props.hideClose ? (openBlock(), createBlock(unref(DialogClose), {
                      key: 0,
                      class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "w-4 h-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-md md:max-w-xl lg:max-w-6xl -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-sm sm:rounded-3xl",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  !__props.hideClose ? (openBlock(), createBlock(unref(DialogClose), {
                    key: 0,
                    class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "w-4 h-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "Preview",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const data = ref({});
    const carousel = ref(null);
    useEventBus("preview").on((payload) => {
      open.value = true;
      data.value = payload.data;
      setTimeout(() => {
        var _a;
        (_a = carousel.value) == null ? void 0 : _a.carouselApi.scrollTo(payload.scrollTo, true);
      }, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$i), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$h), {
              class: "bg-transparent border-none shadow-none",
              hideClose: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$j), {
                    ref_key: "carousel",
                    ref: carousel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$k), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(data.value, (src, alt) => {
                                _push5(ssrRenderComponent(unref(_sfc_main$l), { class: "aspect-square" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<img${ssrRenderAttr("src", src)}${ssrRenderAttr("alt", alt)} loading="lazy" class="h-full w-auto object-scale-down rounded-3xl"${_scopeId5}>`);
                                    } else {
                                      return [
                                        createVNode("img", {
                                          src,
                                          alt,
                                          loading: "lazy",
                                          class: "h-full w-auto object-scale-down rounded-3xl"
                                        }, null, 8, ["src", "alt"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(data.value, (src, alt) => {
                                  return openBlock(), createBlock(unref(_sfc_main$l), { class: "aspect-square" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src,
                                        alt,
                                        loading: "lazy",
                                        class: "h-full w-auto object-scale-down rounded-3xl"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="w-full flex justify-between"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$m), { class: "sm:absolute" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$n), { class: "sm:absolute" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(_sfc_main$k), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(data.value, (src, alt) => {
                                return openBlock(), createBlock(unref(_sfc_main$l), { class: "aspect-square" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src,
                                      alt,
                                      loading: "lazy",
                                      class: "h-full w-auto object-scale-down rounded-3xl"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "w-full flex justify-between" }, [
                            createVNode(unref(_sfc_main$m), { class: "sm:absolute" }),
                            createVNode(unref(_sfc_main$n), { class: "sm:absolute" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$j), {
                      ref_key: "carousel",
                      ref: carousel
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$k), null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(data.value, (src, alt) => {
                              return openBlock(), createBlock(unref(_sfc_main$l), { class: "aspect-square" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src,
                                    alt,
                                    loading: "lazy",
                                    class: "h-full w-auto object-scale-down rounded-3xl"
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "w-full flex justify-between" }, [
                          createVNode(unref(_sfc_main$m), { class: "sm:absolute" }),
                          createVNode(unref(_sfc_main$n), { class: "sm:absolute" })
                        ])
                      ]),
                      _: 1
                    }, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$h), {
                class: "bg-transparent border-none shadow-none",
                hideClose: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$j), {
                    ref_key: "carousel",
                    ref: carousel
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$k), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(data.value, (src, alt) => {
                            return openBlock(), createBlock(unref(_sfc_main$l), { class: "aspect-square" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src,
                                  alt,
                                  loading: "lazy",
                                  class: "h-full w-auto object-scale-down rounded-3xl"
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "w-full flex justify-between" }, [
                        createVNode(unref(_sfc_main$m), { class: "sm:absolute" }),
                        createVNode(unref(_sfc_main$n), { class: "sm:absolute" })
                      ])
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/modals/Preview.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "RangeCalendar",
  __ssrInlineRender: true,
  props: {
    defaultPlaceholder: { type: null, required: false },
    defaultValue: { type: Object, required: false },
    modelValue: { type: Object, required: false },
    placeholder: { type: null, required: false },
    pagedNavigation: { type: Boolean, required: false },
    preventDeselect: { type: Boolean, required: false },
    weekStartsOn: { type: Number, required: false },
    weekdayFormat: { type: String, required: false },
    calendarLabel: { type: String, required: false },
    fixedWeeks: { type: Boolean, required: false },
    maxValue: { type: null, required: false },
    minValue: { type: null, required: false },
    locale: { type: String, required: false },
    numberOfMonths: { type: Number, required: false },
    disabled: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    initialFocus: { type: Boolean, required: false },
    isDateDisabled: { type: Function, required: false },
    isDateUnavailable: { type: Function, required: false },
    dir: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "update:modelValue",
    "update:placeholder",
    "update:startValue"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarRoot), mergeProps({
        class: unref(cn)("p-3", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx(({ grid, weekDays }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$7), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4)),
                    createVNode(unref(_sfc_main$6)),
                    createVNode(unref(_sfc_main$5))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              _push2(ssrRenderComponent(unref(_sfc_main$c), {
                key: month.value.toString()
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$a), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  _push5(ssrRenderComponent(unref(_sfc_main$8), { key: day }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(day)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(day), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(_sfc_main$8), { key: day }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(day), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$9), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  return openBlock(), createBlock(unref(_sfc_main$8), { key: day }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$b), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            _push4(ssrRenderComponent(unref(_sfc_main$9), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    _push5(ssrRenderComponent(unref(_sfc_main$e), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(_sfc_main$d), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$d), {
                                              day: weekDate,
                                              month: month.value
                                            }, null, 8, ["day", "month"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      return openBlock(), createBlock(unref(_sfc_main$e), {
                                        key: weekDate.toString(),
                                        date: weekDate
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$d), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, 8, ["day", "month"])
                                        ]),
                                        _: 2
                                      }, 1032, ["date"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              return openBlock(), createBlock(unref(_sfc_main$9), {
                                key: `weekDate-${index}`,
                                class: "mt-2 w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    return openBlock(), createBlock(unref(_sfc_main$e), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$d), {
                                          day: weekDate,
                                          month: month.value
                                        }, null, 8, ["day", "month"])
                                      ]),
                                      _: 2
                                    }, 1032, ["date"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$a), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$8), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$9), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$e), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$d), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$7), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4)),
                  createVNode(unref(_sfc_main$6)),
                  createVNode(unref(_sfc_main$5))
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  return openBlock(), createBlock(unref(_sfc_main$c), {
                    key: month.value.toString()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$a), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$8), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$b), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$9), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$e), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$d), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "RangeCalendarCell",
  __ssrInlineRender: true,
  props: {
    date: { type: null, required: true },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarCell), mergeProps({
        class: unref(cn)(
          "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-outside-month])]:bg-accent/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarCell.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "RangeCalendarCellTrigger",
  __ssrInlineRender: true,
  props: {
    day: { type: null, required: true },
    month: { type: null, required: true },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarCellTrigger), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal data-[selected]:opacity-100",
          "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
          // Selection Start
          "data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground",
          // Selection End
          "data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground",
          // Outside months
          "data-[outside-month]:pointer-events-none data-[outside-month]:text-muted-foreground data-[outside-month]:opacity-50 [&[data-outside-month][data-selected]]:bg-accent/50 [&[data-outside-month][data-selected]]:text-muted-foreground [&[data-outside-month][data-selected]]:opacity-30",
          // Disabled
          "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
          // Unavailable
          "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarCellTrigger.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "RangeCalendarGrid",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGrid), mergeProps({
        class: unref(cn)("w-full border-collapse space-y-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGrid.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "RangeCalendarGridBody",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridBody), mergeProps(props, _attrs), {
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGridBody.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "RangeCalendarGridHead",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridHead), mergeProps(props, _attrs), {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGridHead.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "RangeCalendarGridRow",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridRow), mergeProps({
        class: unref(cn)("flex mt-2 w-full", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarGridRow.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "RangeCalendarHeadCell",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarHeadCell), mergeProps({
        class: unref(cn)(
          "w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarHeadCell.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "RangeCalendarHeader",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarHeader), mergeProps({
        class: unref(cn)("relative flex w-full items-center justify-between pt-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "RangeCalendarHeading",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarHeading), mergeProps({
        class: unref(cn)("text-sm font-medium", props.class)
      }, unref(forwardedProps), _attrs), {
        default: withCtx(({ headingValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { headingValue }, () => {
              _push2(`${ssrInterpolate(headingValue)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { headingValue }, () => [
                createTextVNode(toDisplayString(headingValue), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarHeading.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "RangeCalendarNextButton",
  __ssrInlineRender: true,
  props: {
    step: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarNext), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronRight), { class: "h-4 w-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarNextButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "RangeCalendarPrevButton",
  __ssrInlineRender: true,
  props: {
    step: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarPrev), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeft), { class: "h-4 w-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/range-calendar/RangeCalendarPrevButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Popover",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, required: false },
    open: { type: Boolean, required: false },
    modal: { type: Boolean, required: false }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverRoot), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/popover/Popover.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PopoverTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/popover/PopoverTrigger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "PopoverContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean, required: false },
    trapFocus: { type: Boolean, required: false },
    side: { type: null, required: false },
    sideOffset: { type: Number, required: false, default: 4 },
    align: { type: null, required: false, default: "center" },
    alignOffset: { type: Number, required: false },
    avoidCollisions: { type: Boolean, required: false },
    collisionBoundary: { type: null, required: false },
    collisionPadding: { type: [Number, Object], required: false },
    arrowPadding: { type: Number, required: false },
    sticky: { type: String, required: false },
    hideWhenDetached: { type: Boolean, required: false },
    updatePositionStrategy: { type: String, required: false },
    prioritizePosition: { type: Boolean, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    disableOutsidePointerEvents: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PopoverPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/popover/PopoverContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      sort: props.form.sort,
      start: props.form.start ? parseDate(props.form.start) : null,
      end: props.form.end ? parseDate(props.form.end) : null
    });
    const params = useUrlSearchParams("history");
    const date = ref();
    const search = ref(form.search);
    const loading = ref(false);
    const df = new DateFormatter("ro", {
      dateStyle: "long",
      format: "F Y"
    });
    const format = () => {
      var _a, _b;
      let start = (_a = form.start) == null ? void 0 : _a.toDate(getLocalTimeZone());
      let end = (_b = form.end) == null ? void 0 : _b.toDate(getLocalTimeZone());
      return `${df.format(start)} - ${df.format(end)}`;
    };
    const dateListener = ({ start, end }) => {
      form.start = start;
      form.end = end;
    };
    const transform = (data) => {
      if (data.start || data.end) {
        data.start = data.start.toString();
        data.end = data.end.toString();
      }
      return data;
    };
    const submit = () => {
      loading.value = true;
      router.reload({
        preserveScroll: true,
        data: transform(form.data()),
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
        sort: null,
        start: null,
        end: null
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
    onMounted(() => {
      if (params.scrollTo)
        lenis.scrollTo(`#${params.scrollTo}`);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$g, null, null, _parent));
      }, "body", false, _parent);
      _push(ssrRenderComponent(Layout, { class: "relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            if (loading.value) {
              _push2(`<div class="absolute z-20 flex size-full backdrop-blur-sm rounded-3xl"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-24 animate-spin m-auto stroke-theme-primary-dark"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"${_scopeId}></path></svg></div>`);
            }
            _push2(`<!--]--><section class="px-responsive flex flex-col gap-responsive"${_scopeId}><div class="container-text"${_scopeId}><div class="container-text"${_scopeId}><div${_scopeId}><span${_scopeId}>Galerie</span><h1${_scopeId}>Echipa APL</h1></div><p${_scopeId}> Asociaţii APL adoră să călătorească în lume! Şi, de multe ori, APL acoperă cheltuielile lor. De exemplu, în fiecare an în noiembrie, îi luăm pe cei care s-au calificat în croazieră. Am vizitat deja Caraibe, Europa şi Asia de Est. De asemenea, am plecat din Singapore, Cuba şi Miami... Şi nu ne vom opri să explorăm cele mai iconice locuri de pe planeta noastră. Călătoriile noastre sunt pline de entuziasm, emoţie şi surprize exclusive! Urcaţi la bord cu noi! </p></div><form class="w-full flex-responsive-reverse-lg gap-responsive-xs items-end"${_scopeId}><div class="w-full lg:w-min min-w-64"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$o), {
              text: unref(form).errors.search
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$p), {
              placeholder: "Cauta dupa denumire",
              modelValue: search.value,
              "onUpdate:modelValue": [($event) => search.value = $event, unref(handleSearch)]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$q), {
              modelValue: unref(form).sort,
              "onUpdate:modelValue": [($event) => unref(form).sort = $event, submit]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$r), { class: "lg:w-min min-w-64" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$s), { placeholder: "Sorteaza" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$s), { placeholder: "Sorteaza" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$t), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$u), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$v), { value: "desc" }, {
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
                              _push5(ssrRenderComponent(unref(_sfc_main$v), { value: "asc" }, {
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
                                createVNode(unref(_sfc_main$v), { value: "desc" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cele mai recente ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$v), { value: "asc" }, {
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
                          createVNode(unref(_sfc_main$u), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$v), { value: "desc" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cele mai recente ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$v), { value: "asc" }, {
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
                    createVNode(unref(_sfc_main$r), { class: "lg:w-min min-w-64" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$s), { placeholder: "Sorteaza" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$t), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$u), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$v), { value: "desc" }, {
                              default: withCtx(() => [
                                createTextVNode(" Cele mai recente ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$v), { value: "asc" }, {
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
            _push2(`<div class="w-full lg:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$o), {
                          text: unref(form).errors.start
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$o), {
                          text: unref(form).errors.end
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$w), {
                          variant: "outline",
                          class: unref(cn)(
                            "lg:w-64 justify-start text-left font-normal",
                            !date.value && "text-muted-foreground"
                          )
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }, null, _parent5, _scopeId4));
                              _push5(` ${ssrInterpolate(unref(form).start ? format() : "Filtreaza data")}`);
                            } else {
                              return [
                                createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                                createTextVNode(" " + toDisplayString(unref(form).start ? format() : "Filtreaza data"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode(unref(_sfc_main$o), {
                              text: unref(form).errors.start
                            }, null, 8, ["text"]),
                            createVNode(unref(_sfc_main$o), {
                              text: unref(form).errors.end
                            }, null, 8, ["text"]),
                            createVNode(unref(_sfc_main$w), {
                              variant: "outline",
                              class: unref(cn)(
                                "lg:w-64 justify-start text-left font-normal",
                                !date.value && "text-muted-foreground"
                              )
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                                createTextVNode(" " + toDisplayString(unref(form).start ? format() : "Filtreaza data"), 1)
                              ]),
                              _: 1
                            }, 8, ["class"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    class: "w-auto p-0",
                    side: "bottom"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$f), {
                          "initial-focus": "",
                          "v-model": [unref(form).start, unref(form).end],
                          locale: "ro",
                          "onUpdate:modelValue": [dateListener, submit],
                          maxValue: unref(now)().subtract({ days: 1 })
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$f), {
                            "initial-focus": "",
                            "v-model": [unref(form).start, unref(form).end],
                            locale: "ro",
                            "onUpdate:modelValue": [dateListener, submit],
                            maxValue: unref(now)().subtract({ days: 1 })
                          }, null, 8, ["v-model", "maxValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode(unref(_sfc_main$o), {
                            text: unref(form).errors.start
                          }, null, 8, ["text"]),
                          createVNode(unref(_sfc_main$o), {
                            text: unref(form).errors.end
                          }, null, 8, ["text"]),
                          createVNode(unref(_sfc_main$w), {
                            variant: "outline",
                            class: unref(cn)(
                              "lg:w-64 justify-start text-left font-normal",
                              !date.value && "text-muted-foreground"
                            )
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                              createTextVNode(" " + toDisplayString(unref(form).start ? format() : "Filtreaza data"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      class: "w-auto p-0",
                      side: "bottom"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$f), {
                          "initial-focus": "",
                          "v-model": [unref(form).start, unref(form).end],
                          locale: "ro",
                          "onUpdate:modelValue": [dateListener, submit],
                          maxValue: unref(now)().subtract({ days: 1 })
                        }, null, 8, ["v-model", "maxValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (filters.value) {
              _push2(ssrRenderComponent(unref(_sfc_main$w), {
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
              ssrRenderList(__props.data, (gallery) => {
                _push2(ssrRenderComponent(_sfc_main$x, { gallery }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="w-full h-[50vh] flex text-center"${_scopeId}><span class="font-display text-2xl m-auto opacity-75"${_scopeId}> Opa... Ne pare rau dar din pacate nu am gasit nici un rezultat </span></div>`);
            }
            _push2(`</section>`);
            _push2(ssrRenderComponent(unref(_sfc_main$y), {
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
              createVNode("section", { class: "px-responsive flex flex-col gap-responsive" }, [
                createVNode("div", { class: "container-text" }, [
                  createVNode("div", { class: "container-text" }, [
                    createVNode("div", null, [
                      createVNode("span", null, "Galerie"),
                      createVNode("h1", null, "Echipa APL")
                    ]),
                    createVNode("p", null, " Asociaţii APL adoră să călătorească în lume! Şi, de multe ori, APL acoperă cheltuielile lor. De exemplu, în fiecare an în noiembrie, îi luăm pe cei care s-au calificat în croazieră. Am vizitat deja Caraibe, Europa şi Asia de Est. De asemenea, am plecat din Singapore, Cuba şi Miami... Şi nu ne vom opri să explorăm cele mai iconice locuri de pe planeta noastră. Călătoriile noastre sunt pline de entuziasm, emoţie şi surprize exclusive! Urcaţi la bord cu noi! ")
                  ]),
                  createVNode("form", {
                    class: "w-full flex-responsive-reverse-lg gap-responsive-xs items-end",
                    onSubmit: withModifiers(() => {
                    }, ["prevent"])
                  }, [
                    createVNode("div", { class: "w-full lg:w-min min-w-64" }, [
                      createVNode(unref(_sfc_main$o), {
                        text: unref(form).errors.search
                      }, null, 8, ["text"]),
                      createVNode(unref(_sfc_main$p), {
                        placeholder: "Cauta dupa denumire",
                        modelValue: search.value,
                        "onUpdate:modelValue": [($event) => search.value = $event, unref(handleSearch)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(unref(_sfc_main$q), {
                      modelValue: unref(form).sort,
                      "onUpdate:modelValue": [($event) => unref(form).sort = $event, submit]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$r), { class: "lg:w-min min-w-64" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$s), { placeholder: "Sorteaza" })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$t), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$u), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$v), { value: "desc" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cele mai recente ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$v), { value: "asc" }, {
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
                    createVNode("div", { class: "w-full lg:w-auto" }, [
                      createVNode(unref(_sfc_main$3), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode(unref(_sfc_main$o), {
                                  text: unref(form).errors.start
                                }, null, 8, ["text"]),
                                createVNode(unref(_sfc_main$o), {
                                  text: unref(form).errors.end
                                }, null, 8, ["text"]),
                                createVNode(unref(_sfc_main$w), {
                                  variant: "outline",
                                  class: unref(cn)(
                                    "lg:w-64 justify-start text-left font-normal",
                                    !date.value && "text-muted-foreground"
                                  )
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                                    createTextVNode(" " + toDisplayString(unref(form).start ? format() : "Filtreaza data"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["class"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$1), {
                            class: "w-auto p-0",
                            side: "bottom"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$f), {
                                "initial-focus": "",
                                "v-model": [unref(form).start, unref(form).end],
                                locale: "ro",
                                "onUpdate:modelValue": [dateListener, submit],
                                maxValue: unref(now)().subtract({ days: 1 })
                              }, null, 8, ["v-model", "maxValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Transition, { name: "fade" }, {
                      default: withCtx(() => [
                        filters.value ? (openBlock(), createBlock(unref(_sfc_main$w), {
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
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (gallery) => {
                        return openBlock(), createBlock(_sfc_main$x, { gallery }, null, 8, ["gallery"]);
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
              ]),
              createVNode(unref(_sfc_main$y), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/gallery/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
