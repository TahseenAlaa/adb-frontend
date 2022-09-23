<template>
  <v-app>
    <v-app-bar
      color="deep-purple darken-2"
      dark
      max-height="64px"
    >
      <v-container class="fill-height">
        <v-row align="center" justify="center" class="fill-height">

          <v-spacer></v-spacer>

            <v-img
                :src="require('./assets/logo.png')"
                contain
                height="25"
                width="25"
                max-width="25px"
                max-height="25px"
            />
            <router-link to="/" class="text-decoration-none white--text"><h3>Alhasan Diabetes Center</h3></router-link>

          <v-spacer></v-spacer>

          <div
          v-if="isAuthenticated"
          >
            <v-row>
              <v-img
                  :src="require('./assets/logo.png')"
                  contain
                  height="25"
                  width="25"
                  max-width="25px"
                  max-height="25px"
                  class="mr-6"
              />
              <h4>Username</h4>

              <span class="text-center">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="deep-purple darken-2"
                        dark
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        class="px-0 mx-0"
                    >
                      <v-img
                      :src="require('../src/assets/3_dots_icon.svg')"
                      contain
                      height="25"
                      width="25"
                      max-width="25px"
                      max-height="25px"
                      class="mr-6"
                      />
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item link dense>
                      <v-list-item-title
                          @click="logout"
                      >Logout</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </span>

            </v-row>
          </div>
        </v-row>
      </v-container>

    </v-app-bar>

    <v-main>
      <Login v-if="!isAuthenticated"/>
      <router-view v-if="isAuthenticated"/>
    </v-main>

    <v-footer>
      <v-container class="fill-height">
        <v-divider></v-divider>
        <v-row align="center" justify="center" class="fill-height">
          <p>@ 2022 Alhasan Diabetes Center. All Right Reserved.</p>
          <v-spacer></v-spacer>
          <div class="">
            <span class="px-2">Contact US</span>
            <span class="px-2">FAQ</span>
            <span class="px-2">Terms</span>
            <span class="px-2">Privacy</span>
          </div>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

import Login from "@/views/LoginView";
import { mapActions} from "vuex";

export default {
  name: 'App',
  components: {Login},

  methods: {
    ...mapActions({
      validateLogin: 'validateLogin'
    }),

    logout(){
       this.$store.commit('SET_AUTHENTICATED', false)
       this.$store.commit('SET_USER', {})
       localStorage.clear()
       this.$router.push({name: 'login'})
     },
    },

  created() {
    this.validateLogin()
  },

  computed: {
    isAuthenticated() {
      return this.$store.state.authenticated
    }
  },
  data: () => ({
    //
  }),
};
</script>
