import axios from "axios";
import router from "@/router";

export default {
    namespaced: true,
    state: {
        // authenticated: false,
        user: {}
    },

    getters: {
        // authenticated(state) {
        //     return state.authenticated
        // },
        user(state) {
            return state.user
        }
    },

    mutations: {
        // SET_AUTHENTICATED (state, value) {
        //     state.authenticated = value
        // },
        SET_USER (state, value) {
            state.user = value
        }
    },

    actions:{
        login({commit}){
            return axios.get('/api/v1/auth/login').then(({data})=>{
                commit('SET_USER',data)
                commit('SET_AUTHENTICATED',true)
                router.push({name:'home'})
            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
            })
        },
        logout({commit}){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
        },

        validateLogin () {
            const token = localStorage.getItem('esite_token');
            const baseURL = 'http://127.0.0.1:8000/';

            console.log(token)
            axios.get(baseURL + 'api/user', {
                timeout: 1000,
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept'       : 'application/json',
                    'Authorization': 'Bearer '+token
                },
            }).then(()=>{
                this.$store.state.isLoggedIn = true
            }).catch(({response:{data}})=>{
                console.log('no')
            })
        }
    }

}