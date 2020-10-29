import Vue from "vue";
import App from "@/App";
// import "@babel/polyfill";

new Vue({
  el: "#root",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
