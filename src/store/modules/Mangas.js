const state = {
  fullpage: true,
  isContinuous: false,
  isVertical: true
}

const getters = {
  getFullPage: (state) => state.fullpage,
  getIsContinuous: (state) => state.isContinuous,
  getIsVertical: (state) => state.isVertical
}

const mutations = {
  toggleFullPage: function (state, payload) {
    state.fullpage = payload
  },
  toggleVertical: function (state) {
    state.isVertical = !state.isVertical
  },
  toggleContinuous: function (state) {
    state.isContinuous = !state.isContinuous
  }
}

export default {
  state,
  getters,
  mutations
}
