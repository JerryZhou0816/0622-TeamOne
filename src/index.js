import Vue from "vue";
import store from "@/store";
import App from "@/App";

new Vue({
  el: "#root",
  render: (h) => h(App),
  store,
});
