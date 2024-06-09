import { withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { L as Layout } from "./default-Cod5iNBP.js";
import VueMarkdown from "vue-markdown-render";
import "vue-sonner";
import "@inertiajs/vue3";
import "@vueuse/core";
import "@radix-icons/vue";
import "./Separator-BEMmav6B.js";
import "radix-vue";
import "./index-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./Messenger-C-DU8Y_0.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    html: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VueMarkdown), {
              source: __props.html,
              class: "container"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VueMarkdown), {
                source: __props.html,
                class: "container"
              }, null, 8, ["source"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/legal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
