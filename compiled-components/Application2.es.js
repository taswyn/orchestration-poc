import { ref, openBlock, createElementBlock, toDisplayString, createBlock, createApp } from "vue";
var HelloDiv2_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  props: {
    msg: String
  },
  setup(__props) {
    ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "Application 2 says: " + toDisplayString(__props.msg), 1);
    };
  }
};
var HelloDiv2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1bf730e"]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(HelloDiv2, { msg: "Hello Vue 3 + Vite" });
    };
  }
};
createApp(_sfc_main).mount("#app");
