const state = {
  loginUser: false,
  currentUser: undefined,
  user: null
}

const getters = {
  getLoginUser: (state) => state.loginUser,
  getCurrentUser: (state) => state.currentUser,
  getUser: (state) => state.user
}

const mutations = {
  setLoginUser (state, payload) {
    state.loginUser = payload
  },
  setCurrentUser (state, payload) {
    state.currentUser = payload
  }
}

export default {
  state,
  getters,
  mutations
}
