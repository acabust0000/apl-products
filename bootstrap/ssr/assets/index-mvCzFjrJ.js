import { watch, mergeProps, unref, useSSRContext, provide, inject, computed, withCtx, renderSlot, ref, createTextVNode, createVNode, withDirectives, openBlock, createBlock, toDisplayString, Transition, withModifiers, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList } from "vue/server-renderer";
import { L as Layout, _ as _sfc_main$b, a as _sfc_main$c, b as _sfc_main$d } from "./default-Cod5iNBP.js";
import { useForm } from "@inertiajs/vue3";
import { DoubleArrowUpIcon, DoubleArrowDownIcon } from "@radix-icons/vue";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import { toast } from "vue-sonner";
import { _ as _sfc_main$a } from "./index-Cnt_7mC-.js";
import { useTextareaAutosize, useVModel } from "@vueuse/core";
import { c as cn } from "./index-H80jjgLf.js";
import { a as _sfc_main$8, _ as _sfc_main$9 } from "./Input-DAOY0rtt.js";
import { FieldContextKey, useIsFieldValid, useIsFieldDirty, useIsFieldTouched, useFieldError, Field } from "vee-validate";
import { useId, Label, Slot, Primitive } from "radix-vue";
import "clsx";
import "./Separator-BEMmav6B.js";
import { _ as _sfc_main$e } from "./Announcement-CUy7w7bK.js";
import { _ as _export_sfc } from "./Messenger-C-DU8Y_0.js";
import "class-variance-authority";
import "tailwind-merge";
const _sfc_main$7 = {
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    defaultValue: { type: [String, Number], required: false },
    modelValue: { type: [String, Number], required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { textarea, input } = useTextareaAutosize();
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    watch(input, (input2) => modelValue.value = input2);
    watch(props.modelValue, (a) => input = a);
    __expose({
      input
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        ref_key: "textarea",
        ref: textarea,
        class: unref(cn)(
          "flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), "textarea")}>${ssrInterpolate(unref(input))}</textarea>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/textarea/Textarea.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FORM_ITEM_INJECTION_KEY = Symbol();
const _sfc_main$6 = {
  __name: "FormItem",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const id = useId();
    provide(FORM_ITEM_INJECTION_KEY, id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("space-y-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/form/FormItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function useFormField() {
  const fieldContext = inject(FieldContextKey);
  const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY);
  const fieldState = {
    valid: useIsFieldValid(),
    isDirty: useIsFieldDirty(),
    isTouched: useIsFieldTouched(),
    error: useFieldError()
  };
  if (!fieldContext)
    throw new Error("useFormField should be used within <FormField>");
  const { name } = fieldContext;
  const id = fieldItemContext;
  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
}
const _sfc_main$5 = {
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: { type: String, required: false },
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Label), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          props.class
        )
      }, _attrs), {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/label/Label.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "FormLabel",
  __ssrInlineRender: true,
  props: {
    for: { type: String, required: false },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { error, formItemId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$5), mergeProps({
        class: unref(cn)(unref(error) && "text-destructive", props.class),
        for: unref(formItemId)
      }, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/form/FormLabel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "FormControl",
  __ssrInlineRender: true,
  setup(__props) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Slot), mergeProps({
        id: unref(formItemId),
        "aria-describedby": !unref(error) ? `${unref(formDescriptionId)}` : `${unref(formDescriptionId)} ${unref(formMessageId)}`,
        "aria-invalid": !!unref(error)
      }, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/form/FormControl.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "FormDescription",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const { formDescriptionId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        id: unref(formDescriptionId),
        class: unref(cn)("inline text-sm font-medium", props.class)
      }, _attrs))}> (`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`) </p>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/form/FormDescription.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    class: { type: null, required: false },
    as: { type: null, required: false, default: "h3" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: unref(cn)("text-start ", props.class)
      }, _attrs), {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    url: String,
    faqs: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      description: null
    });
    const formRef = ref(null);
    const textarea = ref(null);
    const submit = () => form.post(
      props.url,
      {
        onSuccess: () => {
          toast.success("Va multumim de contact!", {
            description: "Incercam sa luam cat mai rapid legatura cu dumneavoastra."
          });
          form.reset();
          form.clearErrors();
          textarea.value.input = "";
        },
        onError: () => toast.error("Din pacate, contactul dumneavoastra nu a putut fi trimis.", {
          description: "Va rugam sa incercati din nou"
        })
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section id="contactCard" class="px-responsive sm:py-responsive gap-responsive items-start flex-responsive border-none shadow-none bg-transparent" data-v-5f6872f0${_scopeId}><div class="w-full flex flex-col gap-responsive-xs" data-v-5f6872f0${_scopeId}><div data-v-5f6872f0${_scopeId}><span class="font-script w-min" data-v-5f6872f0${_scopeId}> Contact </span><h1 data-v-5f6872f0${_scopeId}> Nu ezita sa ne contactezi! </h1></div><p data-v-5f6872f0${_scopeId}> Dacă aveți întrebări, sugestii sau nevoie de asistență, nu ezitați să ne contactați. Echipa noastră de suport este disponibilă pentru a vă ajuta cu orice informație legată de produsele noastre. Ne puteți contacta prin telefon, email sau completând formularul de contact de pe site. De asemenea, ne puteți găsi pe rețelele sociale pentru ultimele noutăți și actualizări. Suntem aici pentru a vă oferi suportul necesar și pentru a vă asigura că experiența dumneavoastră cu produsele noastre este cât mai plăcută și eficientă. </p></div><form class="w-full space-y-6" data-v-5f6872f0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "name",
              "validate-on-blur": !_ctx.isFieldDirty,
              ref_key: "formRef",
              ref: formRef
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), ssrGetDirectiveProps(_ctx, unref(vAutoAnimate)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nume`);
                            } else {
                              return [
                                createTextVNode("Nume")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Prenumele si numele de familie.`);
                            } else {
                              return [
                                createTextVNode("Prenumele si numele de familie.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$8), {
                                type: "text",
                                placeholder: "Maria Elena",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$8), {
                                  type: "text",
                                  placeholder: "Maria Elena",
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          text: unref(form).errors.name
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Nume")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Prenumele si numele de familie.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), {
                                type: "text",
                                placeholder: "Maria Elena",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.name
                          }, null, 8, ["text"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Nume")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Prenumele si numele de familie.")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), {
                              type: "text",
                              placeholder: "Maria Elena",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), {
                          text: unref(form).errors.name
                        }, null, 8, ["text"])
                      ]),
                      _: 1
                    })), [
                      [unref(vAutoAnimate)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              "validate-on-blur": !_ctx.isFieldDirty
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), ssrGetDirectiveProps(_ctx, unref(vAutoAnimate)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Email`);
                            } else {
                              return [
                                createTextVNode("Email")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Adresa casutei electronice.`);
                            } else {
                              return [
                                createTextVNode("Adresa casutei electronice.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$8), {
                                type: "email",
                                placeholder: "maria.elena@yahoo.com",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$8), {
                                  type: "email",
                                  placeholder: "maria.elena@yahoo.com",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          text: unref(form).errors.email
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Adresa casutei electronice.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), {
                                type: "email",
                                placeholder: "maria.elena@yahoo.com",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.email
                          }, null, 8, ["text"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Email")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Adresa casutei electronice.")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), {
                              type: "email",
                              placeholder: "maria.elena@yahoo.com",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), {
                          text: unref(form).errors.email
                        }, null, 8, ["text"])
                      ]),
                      _: 1
                    })), [
                      [unref(vAutoAnimate)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), {
              name: "phone",
              "validate-on-blur": !_ctx.isFieldDirty
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), ssrGetDirectiveProps(_ctx, unref(vAutoAnimate)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Telefon`);
                            } else {
                              return [
                                createTextVNode("Telefon")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Numarul de phone la care puteti fi contactat.`);
                            } else {
                              return [
                                createTextVNode("Numarul de phone la care puteti fi contactat.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$8), {
                                type: "phone",
                                placeholder: "+7078123456",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$8), {
                                  type: "phone",
                                  placeholder: "+7078123456",
                                  modelValue: unref(form).phone,
                                  "onUpdate:modelValue": ($event) => unref(form).phone = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          text: unref(form).errors.phone
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Telefon")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Numarul de phone la care puteti fi contactat.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), {
                                type: "phone",
                                placeholder: "+7078123456",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.phone
                          }, null, 8, ["text"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Telefon")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Numarul de phone la care puteti fi contactat.")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), {
                              type: "phone",
                              placeholder: "+7078123456",
                              modelValue: unref(form).phone,
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), {
                          text: unref(form).errors.phone
                        }, null, 8, ["text"])
                      ]),
                      _: 1
                    })), [
                      [unref(vAutoAnimate)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), {
              name: "description",
              "validate-on-blur": !_ctx.isFieldDirty
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), ssrGetDirectiveProps(_ctx, unref(vAutoAnimate)), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Detalii`);
                            } else {
                              return [
                                createTextVNode("Detalii")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comunicati-ne mai multe detalii de ce ne contactati `);
                            } else {
                              return [
                                createTextVNode("Comunicati-ne mai multe detalii de ce ne contactati ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$3), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$7), {
                                ref_key: "textarea",
                                ref: textarea,
                                type: "text",
                                placeholder: "Doresc sa aflu mai multe informatii despre...",
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$7), {
                                  ref_key: "textarea",
                                  ref: textarea,
                                  type: "text",
                                  placeholder: "Doresc sa aflu mai multe informatii despre...",
                                  modelValue: unref(form).description,
                                  "onUpdate:modelValue": ($event) => unref(form).description = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), {
                          text: unref(form).errors.description
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Detalii")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Comunicati-ne mai multe detalii de ce ne contactati ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$7), {
                                ref_key: "textarea",
                                ref: textarea,
                                type: "text",
                                placeholder: "Doresc sa aflu mai multe informatii despre...",
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.description
                          }, null, 8, ["text"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4), null, {
                          default: withCtx(() => [
                            createTextVNode("Detalii")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), null, {
                          default: withCtx(() => [
                            createTextVNode("Comunicati-ne mai multe detalii de ce ne contactati ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$3), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), {
                              ref_key: "textarea",
                              ref: textarea,
                              type: "text",
                              placeholder: "Doresc sa aflu mai multe informatii despre...",
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), {
                          text: unref(form).errors.description
                        }, null, 8, ["text"])
                      ]),
                      _: 1
                    })), [
                      [unref(vAutoAnimate)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end w-full" data-v-5f6872f0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Trimite `);
                } else {
                  return [
                    createTextVNode(" Trimite ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></section><section class="flex flex-col p-responsive gap-responsive lg:pt-0 container" data-v-5f6872f0${_scopeId}><div class="container-text" data-v-5f6872f0${_scopeId}><div data-v-5f6872f0${_scopeId}><span data-v-5f6872f0${_scopeId}> Intrebari Frecvente </span><h2 data-v-5f6872f0${_scopeId}> Afla mai multe </h2></div><p data-v-5f6872f0${_scopeId}> Produsele noastre sunt concepute pentru a vă simplifica rutina zilnică de îngrijire a sănătății. Fie că este vorba de suplimente alimentare, echipamente de fitness sau dispozitive de monitorizare a sănătății, ne asigurăm că fiecare produs este intuitiv și ușor de utilizat. În plus, oferim ghiduri detaliate și asistență tehnică pentru a vă ajuta să beneficiați la maxim de produsele noastre. Dacă aveți întrebări sau întâmpinați dificultăți, echipa noastră de suport este aici pentru a vă oferi răspunsuri rapide și soluții eficiente. </p></div><!--[-->`);
            ssrRenderList(__props.faqs, (faq) => {
              _push2(`<div class="flex flex-col gap-3" data-v-5f6872f0${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$b), null, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$c), { class: "flex justify-between w-full items-center" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1), { as: "h4" }, null, _parent4, _scopeId3));
                          _push4(`<div class="relative shrink-0 w-12 flex items-center justify-center" data-v-5f6872f0${_scopeId3}>`);
                          if (open) {
                            _push4(ssrRenderComponent(unref(DoubleArrowUpIcon), { class: "absolute size-5" }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(unref(DoubleArrowDownIcon), { class: "absolute size-5" }, null, _parent4, _scopeId3));
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1), {
                              textContent: toDisplayString(faq.title),
                              as: "h4"
                            }, null, 8, ["textContent"]),
                            createVNode("div", { class: "relative shrink-0 w-12 flex items-center justify-center" }, [
                              createVNode(Transition, { name: "fade" }, {
                                default: withCtx(() => [
                                  open ? (openBlock(), createBlock(unref(DoubleArrowUpIcon), {
                                    key: 0,
                                    class: "absolute size-5"
                                  })) : (openBlock(), createBlock(unref(DoubleArrowDownIcon), {
                                    key: 1,
                                    class: "absolute size-5"
                                  }))
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$d), {
                      as: "p",
                      class: "mt-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$c), { class: "flex justify-between w-full items-center" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1), {
                            textContent: toDisplayString(faq.title),
                            as: "h4"
                          }, null, 8, ["textContent"]),
                          createVNode("div", { class: "relative shrink-0 w-12 flex items-center justify-center" }, [
                            createVNode(Transition, { name: "fade" }, {
                              default: withCtx(() => [
                                open ? (openBlock(), createBlock(unref(DoubleArrowUpIcon), {
                                  key: 0,
                                  class: "absolute size-5"
                                })) : (openBlock(), createBlock(unref(DoubleArrowDownIcon), {
                                  key: 1,
                                  class: "absolute size-5"
                                }))
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$d), {
                        as: "p",
                        innerHTML: faq.description,
                        class: "mt-4"
                      }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></section>`);
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              title: "title",
              description: "title",
              actions: {
                "Blog": _ctx.route("views.blog"),
                "Galerie": _ctx.route("views.gallery")
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("section", {
                id: "contactCard",
                class: "px-responsive sm:py-responsive gap-responsive items-start flex-responsive border-none shadow-none bg-transparent"
              }, [
                createVNode("div", { class: "w-full flex flex-col gap-responsive-xs" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "font-script w-min" }, " Contact "),
                    createVNode("h1", null, " Nu ezita sa ne contactezi! ")
                  ]),
                  createVNode("p", null, " Dacă aveți întrebări, sugestii sau nevoie de asistență, nu ezitați să ne contactați. Echipa noastră de suport este disponibilă pentru a vă ajuta cu orice informație legată de produsele noastre. Ne puteți contacta prin telefon, email sau completând formularul de contact de pe site. De asemenea, ne puteți găsi pe rețelele sociale pentru ultimele noutăți și actualizări. Suntem aici pentru a vă oferi suportul necesar și pentru a vă asigura că experiența dumneavoastră cu produsele noastre este cât mai plăcută și eficientă. ")
                ]),
                createVNode("form", {
                  class: "w-full space-y-6",
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode(unref(Field), {
                    name: "name",
                    "validate-on-blur": !_ctx.isFieldDirty,
                    ref_key: "formRef",
                    ref: formRef
                  }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Nume")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Prenumele si numele de familie.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), {
                                type: "text",
                                placeholder: "Maria Elena",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.name
                          }, null, 8, ["text"])
                        ]),
                        _: 1
                      })), [
                        [unref(vAutoAnimate)]
                      ])
                    ]),
                    _: 1
                  }, 8, ["validate-on-blur"]),
                  createVNode(unref(Field), {
                    name: "email",
                    "validate-on-blur": !_ctx.isFieldDirty
                  }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Email")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Adresa casutei electronice.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), {
                                type: "email",
                                placeholder: "maria.elena@yahoo.com",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.email
                          }, null, 8, ["text"])
                        ]),
                        _: 1
                      })), [
                        [unref(vAutoAnimate)]
                      ])
                    ]),
                    _: 1
                  }, 8, ["validate-on-blur"]),
                  createVNode(unref(Field), {
                    name: "phone",
                    "validate-on-blur": !_ctx.isFieldDirty
                  }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Telefon")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Numarul de phone la care puteti fi contactat.")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8), {
                                type: "phone",
                                placeholder: "+7078123456",
                                modelValue: unref(form).phone,
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.phone
                          }, null, 8, ["text"])
                        ]),
                        _: 1
                      })), [
                        [unref(vAutoAnimate)]
                      ])
                    ]),
                    _: 1
                  }, 8, ["validate-on-blur"]),
                  createVNode(unref(Field), {
                    name: "description",
                    "validate-on-blur": !_ctx.isFieldDirty
                  }, {
                    default: withCtx(() => [
                      withDirectives((openBlock(), createBlock(unref(_sfc_main$6), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$4), null, {
                            default: withCtx(() => [
                              createTextVNode("Detalii")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createTextVNode("Comunicati-ne mai multe detalii de ce ne contactati ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$3), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$7), {
                                ref_key: "textarea",
                                ref: textarea,
                                type: "text",
                                placeholder: "Doresc sa aflu mai multe informatii despre...",
                                modelValue: unref(form).description,
                                "onUpdate:modelValue": ($event) => unref(form).description = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), {
                            text: unref(form).errors.description
                          }, null, 8, ["text"])
                        ]),
                        _: 1
                      })), [
                        [unref(vAutoAnimate)]
                      ])
                    ]),
                    _: 1
                  }, 8, ["validate-on-blur"]),
                  createVNode("div", { class: "flex justify-end w-full" }, [
                    createVNode(unref(_sfc_main$a), { type: "submit" }, {
                      default: withCtx(() => [
                        createTextVNode(" Trimite ")
                      ]),
                      _: 1
                    })
                  ])
                ], 32)
              ]),
              createVNode("section", { class: "flex flex-col p-responsive gap-responsive lg:pt-0 container" }, [
                createVNode("div", { class: "container-text" }, [
                  createVNode("div", null, [
                    createVNode("span", null, " Intrebari Frecvente "),
                    createVNode("h2", null, " Afla mai multe ")
                  ]),
                  createVNode("p", null, " Produsele noastre sunt concepute pentru a vă simplifica rutina zilnică de îngrijire a sănătății. Fie că este vorba de suplimente alimentare, echipamente de fitness sau dispozitive de monitorizare a sănătății, ne asigurăm că fiecare produs este intuitiv și ușor de utilizat. În plus, oferim ghiduri detaliate și asistență tehnică pentru a vă ajuta să beneficiați la maxim de produsele noastre. Dacă aveți întrebări sau întâmpinați dificultăți, echipa noastră de suport este aici pentru a vă oferi răspunsuri rapide și soluții eficiente. ")
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(__props.faqs, (faq) => {
                  return openBlock(), createBlock("div", { class: "flex flex-col gap-3" }, [
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(({ open }) => [
                        createVNode(unref(_sfc_main$c), { class: "flex justify-between w-full items-center" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1), {
                              textContent: toDisplayString(faq.title),
                              as: "h4"
                            }, null, 8, ["textContent"]),
                            createVNode("div", { class: "relative shrink-0 w-12 flex items-center justify-center" }, [
                              createVNode(Transition, { name: "fade" }, {
                                default: withCtx(() => [
                                  open ? (openBlock(), createBlock(unref(DoubleArrowUpIcon), {
                                    key: 0,
                                    class: "absolute size-5"
                                  })) : (openBlock(), createBlock(unref(DoubleArrowDownIcon), {
                                    key: 1,
                                    class: "absolute size-5"
                                  }))
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(_sfc_main$d), {
                          as: "p",
                          innerHTML: faq.description,
                          class: "mt-4"
                        }, null, 8, ["innerHTML"])
                      ]),
                      _: 2
                    }, 1024)
                  ]);
                }), 256))
              ]),
              createVNode(unref(_sfc_main$e), {
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f6872f0"]]);
export {
  index as default
};
