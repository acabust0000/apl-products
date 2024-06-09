import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./index-Cnt_7mC-.js";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Announcement",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    actions: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-responsive text-center items-center text-primary-foreground relative bg-primary overflow-hidden container-text" }, _attrs))}><div class="absolute size-screen flex justify-end"><svg class="-mt-[400px] sm:-mt-[1400px] h-[150%] fill-primary opacity-50 mix-blend-multiply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.17 57.42"><path d="M56.62,9.61c-1.99,4.53-4.5,7.71-8.8,11.65-7.84,6.93-6.37,21.26-2.16,29.78-9.47-5.69-3.21-23.86-12.25-33.1C29.29,11.82,13.33,6.61,7.13,0c9.85,21.21-3.2,29.25,23.03,45.94-15.33-6.6-14.63-.23-30.16,2.77,9.03,3.19,11.42,8.69,19.76,8.71,8.57.01,12.39-7.45,20.54-3.54-1.58-2.45-5.33-4.93-6.16-5.7,3.84,1.91,7.44,3.25,11.91,3.76.25.56.49.89.85,1.22-.31-7.87,2.97-8.68,6.71-12.6,6.89-7.81,6.33-13.38,3.93-22.31-.66-2.26-.79-5.68-.91-8.64ZM36.31,51.41c-13.46-5.42-16.39-1.53-30.82-2.34,15.17-.59,16.61-4.53,30.82,2.34ZM11.87,7.35c11.29,17.27,11.01,27.67,28.91,41.48C21.55,38.85,18.61,19.08,11.87,7.35ZM45.8,48.64c-2.58-16.35,4.67-20.86,9.03-32.1-2.43,10.95-9.9,15.69-9.03,32.1Z"></path></svg></div><div class="z-10"><span>${ssrInterpolate("ALĂTURĂ-TE")}</span><h2>${ssrInterpolate("Devino parte din familia APL")}</h2></div><p class="z-10 lg:max-w-7xl">${ssrInterpolate("Alăturați-vă familiei noastre și împărtășiți mesajul sănătății și bunăstării cu o comunitate dedicată. Suntem încântați să colaborăm cu persoane și organizații care împărtășesc valorile noastre. Prin parteneriatul cu noi, nu doar că vă veți promova produsele, dar veți deveni parte dintr-o rețea de oameni pasionați de îmbunătățirea stilului de viață. Indiferent dacă sunteți un brand nou sau bine cunoscut, ne dorim să lucrăm împreună pentru a crea inițiative care să inspire și să motiveze. Contactați-ne pentru a discuta cum putem colabora și crește împreună.")}</p><div class="z-10 flex gap-responsive-xs">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        variant: "outline",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.$page.props.links.apl
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), {
                href: _ctx.$page.props.links.apl,
                textContent: "Viziteaza magazin"
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        variant: "outline",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("views.contact")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Link), {
                href: _ctx.route("views.contact"),
                textContent: "Contact"
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/announcement/Announcement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
