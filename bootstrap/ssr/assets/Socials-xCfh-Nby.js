import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { Link2Icon } from "@radix-icons/vue";
import { W as WhatsApp, X, F as Facebook } from "./Messenger-C-DU8Y_0.js";
import { useThrottleFn } from "@vueuse/core";
import { toast } from "vue-sonner";
const _sfc_main = {
  __name: "Socials",
  __ssrInlineRender: true,
  props: {
    url: String
  },
  setup(__props) {
    const props = __props;
    useThrottleFn(() => {
      navigator.clipboard.writeText(props.url);
      toast.success("Link copiat!", {
        description: "Va multumim pentru interes."
      });
    }, 5e3);
    const platforms = {
      WhatsApp: `whatsapp://send/?text=${props.url}`,
      Facebook: `https://www.facebook.com/sharer.php?u=${props.url}`,
      X: `https://twitter.com/intent/tweet?url=${props.url}`
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button class="btn-social">`);
      _push(ssrRenderComponent(unref(Link2Icon), null, null, _parent));
      _push(`</button><a target="_blank"${ssrRenderAttr("href", platforms.WhatsApp)} class="btn-social">`);
      _push(ssrRenderComponent(unref(WhatsApp), null, null, _parent));
      _push(`</a><a target="_blank"${ssrRenderAttr("href", platforms.X)} class="btn-social">`);
      _push(ssrRenderComponent(unref(X), null, null, _parent));
      _push(`</a><a target="_blank"${ssrRenderAttr("href", platforms.Facebook)} class="btn-social">`);
      _push(ssrRenderComponent(unref(Facebook), null, null, _parent));
      _push(`</a><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/blog/components/Socials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
