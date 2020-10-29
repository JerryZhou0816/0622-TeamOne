import Vue from "vue";
import App from "../src-proxy/node_modules/@/App";

new Vue({
  el: "#root",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
