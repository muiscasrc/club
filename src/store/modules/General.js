const state = {
  initialize: false,
  connector: undefined
}

const getters = {
  getConnector: (state) => state.connector,
  getInitialize: (state) => state.initialize
}

const mutations = {
  setConnector: function (state, payload) {
    state.connector = payload
  },
  setInitialize: function (state, payload) {
    state.initialize = payload
  }
}

export default {
  state,
  getters,
  mutations
}
