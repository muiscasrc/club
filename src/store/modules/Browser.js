const state = {
  url: ''
}

const getters = {
  getUrl: (state) => state.url
}

const mutations = {
  setUrl: function (state, payload) {
    state.url = payload
  }
}

export default {
  state,
  getters,
  mutations
}
