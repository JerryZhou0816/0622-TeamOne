import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  infoMsg: [
    {
      id: 1,
      content: "吃饭",
    },
    {
      id: 2,
      content: "睡觉",
    },
    {
      id: 3,
      content: "吃火锅",
    },
  ],
};

const mutations = {
  ADDCONTENT(content, state) {
    state.infoMsg.unshift(content.content);
  },
};

const actions = {
  addContent(context, content) {
    console.log(content);
    if (content.content.trim()) {
      let id = Date.now();
      let obj = {
        id,
        content,
      };
      context.commit("ADDCONTENT", { obj });
    }
    this.content = "";
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
