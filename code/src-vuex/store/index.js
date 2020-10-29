import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0,
};

//这里写直接修改数据的方法，不能写条件表达式和异步代码
const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  },
};

//这里是专门用来让用户来操作的事件让用户触发，并且可以写异步和条件表达式
const actions = {
  increment(context) {
    context.commit("INCREMENT");
  },
  decrement(context) {
    context.commit("DECREMENT");
  },
  incrementOdd(context) {
    if (context.state.count % 2 === 1) {
      context.commit("INCREMENT");
    }
  },
  incrementAsync(context) {
    setTimeout(() => {
      context.commit("INCREMENT");
    }, 1000);
  },
};
//  getter 是根据已有的state内部数据计算而产生新的数据
const getters = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
