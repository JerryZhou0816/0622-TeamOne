import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  users: [
    {
      id: 1,
      con: "吃饭",
      isOver: false,
    },
    {
      id: 2,
      con: "火锅",
      isOver: false,
    },
    {
      id: 3,
      con: "吃大蒜",
      isOver: true,
    },
  ],
};
const mutations = {
  //添加方法
  ADDCONTENT(state, obj) {
    state.users.unshift(obj);
  },
  // 更新复选框的方法
  UPPDATECONTENT(state, index) {
    state.users[index].isOver = !state.users[index].isOver;
  },
  DELETECONTENT(state, index) {
    state.users.splice(index, 1);
  },
  UPPDATEALL(state, val) {
    state.users.forEach((item) => (item.isOver = val));
  },
  DELETEALL(state) {
    state.users = state.users.filter((item) => item.isOver == false);
  },
};

const actions = {
  addContent({ commit }, obj) {
    commit("ADDCONTENT", obj);
    console.log(obj);
  },
  uppdateContent({ commit }, index) {
    commit("UPPDATECONTENT", index);
  },
  deleteContent({ commit }, index) {
    commit("DELETECONTENT", index);
  },
  uppdateAll({ commit }, val) {
    commit("UPPDATEALL", val);
  },
  deleteAll({ commit }) {
    commit("DELETEALL");
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
