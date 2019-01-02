import axios from "axios";

const state = {
  jwt: null
};

const getters = {
  user: state => {
    let result = null;
    if (state.jwt) {
      let base64Url = state.jwt.split(".")[1];
      let base64 = base64Url.replace("-", "+").replace("_", "/");
      result = JSON.parse(window.atob(base64));
    }
    return result;
  }
};

const actions = {
  login({ commit }, request) {
    axios.post("auth/login", request).then(data => commit("login", data));
  },
  logoff({ commit }) {
    commit("logoff");
  }
};

const mutations = {
  login(state, response) {
    if (response.status === 200) {
      state.jwt = response.data.jwt;
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        response.data.jwt
      }`;
    }
  },
  logoff(state) {
    state.jwt = null;
    axios.defaults.headers.common = {};
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
