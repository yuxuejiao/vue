import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "111"
  },
  mutations: {},
  actions: {},
  // 除了发布环境，开启严格模式
  // strict: process.env.NODE_ENV !== "production"
});
