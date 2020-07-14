const state = {
  viewMenu: false
}

const getters = {
  getViewMenu: (state) => state.viewMenu
}

const mutations = {
  setViewMenu (state, payload) {
    state.viewMenu = payload
  }
}

export default {
  state,
  getters,
  mutations
}
