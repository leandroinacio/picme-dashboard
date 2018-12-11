const state = {
  users: ["test", "222"],
  page: 1,
  recordsPerPage: 20,
  selectedUser: 0,
  openUser: {}
};

const getters = {
  userList: state => {
    return state.users;
  },
  currentUser: state => {
    return state.openUser;
  }
};

const actions = {
  login({ commit }, request) {
    commit("login", request);
  },
  saveUser({ commit }, user) {
    commit("saveUser", user);
  },
  fetchUsers({ commit }, page, size) {
    commit("fetchUsers", { page, size });
  },
  deleteUser({ commit }, user) {
    commit("deleteUser", user);
  }
};

const mutations = {
  saveUser(state, user) {
    console.log(user);
  },
  fetchUsers(state, { page, size }) {
    console.log(page + " " + size);
  },
  deleteUser(state, user) {
    console.log(user);
  },
  login(state, request) {
    console.log(request);
  },
  logoff(state, request) {
    console.log(request);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
