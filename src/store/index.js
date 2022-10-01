import Vue from 'vue'
import Vuex from 'vuex'
import {httpGET, httpPOST} from "@/utils/utils";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    user: {},
  },

  getters: {
    authenticated(state) {
      return state.authenticated
    },
    user(state) {
      return state.user
    },
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },
    SET_USER (state, value) {
      state.user = value
    }
  },

  actions: {
    login({commit}) {
      httpGET('api/v1/auth/user')
        .then(({data}) => {
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', data)
        }).catch(() => {
          commit('SET_AUTHENTICATED', false)
          commit('SET_USER', {})
        })
    },

    // logout({commit}){
    //   const baseURL = 'http://127.0.0.1:8000/';
    //   const token = localStorage.getItem('esite_token');
    //
    //   return axios.post(baseURL + 'api/v1/auth/logout', {
    //     timeout: 1000,
    //     headers: {
    //       'Content-Type'     : 'application/json',
    //       'Accept'           : 'application/json',
    //       'Authorization'    : 'Bearer ' + token
    //     },
    //   }).then(() => {
    //     commit('SET_AUTHENTICATED', false)
    //     commit('SET_USER', {})
    //     localStorage.clear()
    //   })
    // },

    validateLogin({commit}) {
      if (localStorage.getItem('esite_token').toString().length >= 1) {
        httpGET('api/v1/auth/user')
        .then(({data}) => {
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', data)
        })
      } else {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', {})
      }
    }
  },
  modules: {
  }
})
