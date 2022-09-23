import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    user: {}
  },

  getters: {
    authenticated(state) {
      return state.authenticated
    },
    user(state) {
      return state.user
    }
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
      const baseURL = 'http://127.0.0.1:8000/';
      const token = localStorage.getItem('esite_token');

        return axios.get(baseURL + 'api/v1/auth/user', {
          timeout: 1000,
          headers: {
            'Content-Type'     : 'application/json',
            'Accept'           : 'application/json',
            'Authorization'    : 'Bearer ' + token
          },
        }).then(({data}) => {
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', data)
        }).catch(() => {
          commit('SET_AUTHENTICATED', false)
          commit('SET_USER', {})
        })
    },

    logout({commit}){
      commit('SET_USER',{})
      commit('SET_AUTHENTICATED',false)
    },

    validateLogin({commit}) {
      const baseURL = 'http://127.0.0.1:8000/';
      const token = localStorage.getItem('esite_token');

      if (token.toString().length === 43) {
        return axios.get(baseURL + 'api/v1/auth/user', {
          timeout: 10000,
          headers: {
            'Content-Type'    : 'application/json',
            'Accept'          : 'application/json',
            'Authorization'   : 'Bearer ' + token
          },
        }).then(({data}) => {
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
