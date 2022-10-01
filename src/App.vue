<template>
  <v-app>
    <v-app-bar
      color="deep-purple darken-2"
      dark
      max-height="64px"
    >
      <v-container class="fill-height">
        <v-row align="center" :class="isAuthenticated? 'fill-height d-flex justify-space-between' : 'justify-center'">
          <div>
            <router-link
                v-if="isAuthenticated"
                to="/dashboard" class="text-decoration-none white--text">
              <v-icon size="30" class="px-2">mdi-monitor-dashboard</v-icon>
              <span>Dashboard</span>
            </router-link>
          </div>
          <div>
            <router-link to="/" class="text-decoration-none white--text"><h2>Alhasan Diabetes Center</h2></router-link>
          </div>



          <div
          v-if="isAuthenticated"
          >
            <v-row>
              <v-icon size="40">mdi-account-circle</v-icon>
              <h4>{{ getUser['full_name'] }}</h4>

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
                      <v-col class="d-flex flex-column">
                        <v-icon size="10" dense>mdi-circle</v-icon>
                        <v-icon size="10" dense>mdi-circle</v-icon>
                        <v-icon size="10" dense>mdi-circle</v-icon>
                      </v-col>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item link dense>
                       <router-link to="/signup" class="text-decoration-none black--text">
                          <v-list-item-title>Signup</v-list-item-title>
                       </router-link>
                      </v-list-item>
                    <v-list-item link dense @click="logout">
                      <v-list-item-title>Logout</v-list-item-title>
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
    },

    getUser() {
      return this.$store.getters.user
    }
  },
  data: () => ({
    //
  }),
};
</script>
