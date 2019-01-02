import Vue from "vue";
import Vuex from "vuex";
import security from "@/store/modules/security.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    security
  }
});
