import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default createStore({
  modules: {
  },
  state() {
    return {
      books: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
