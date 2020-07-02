import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '@/assets/scripts/firebase.config'

firebase.initializeApp(firebaseConfig)

const currentUser = firebase.auth().currentUser

const state = {
  loginUser: false,
  currentUser: undefined,
  user: currentUser
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
