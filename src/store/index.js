import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/store/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  getters: {
    authenticated(state) {
      return state.authenticated
    },
  },
  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.isLoggedIn = value
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
