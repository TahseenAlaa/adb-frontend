<template>
  <v-app>
<!--    START Navbar -->
    <v-card
        v-if="isAuthenticated"
        class="mx-auto overflow-hidden fill-height rounded-0"
        style="min-width: 100%;"
    >
      <v-app-bar
          color="deep-purple"
          dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-toolbar-title
            @click="$router.push({name: 'home'})"
            style="cursor: pointer"
        >
          <h2>Alhasan Diabetes Center</h2></v-toolbar-title>
        <v-spacer></v-spacer>

        <v-icon
            v-if="isAuthenticated"
            size="52"
            class="d-inline-block"
        >
          mdi-account-tie
        </v-icon>
        <div
        v-if="isAuthenticated"
        >
            <div class="d-inline-block pt-6">
              <h4>{{ getUser['full_name'] }}</h4>
              <p>{{ getUser['job_title'] }}</p>
            </div>
        </div>

      </v-app-bar>
<!--      Start Content Here-->
      <v-main>
        <router-view />
      </v-main>

      <v-footer fixed padless>
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
<!--      END Content Here-->
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item @click="$router.push({name: 'home'})">
              <v-list-item-icon>
                <v-icon size="30" color="blue">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item @click="$router.push({name: 'patientslist'})">
              <v-list-item-icon>
                <v-icon size="30" color="purple">mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Patients List</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="red">mdi-view-comfy</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Log Activities</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="orange">mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Users List</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="cyan darken-3">mdi-air-filter</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Diagnosis List</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="deep-orange darken-3">mdi-bacteria</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Symptoms List</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="lime darken-3">mdi-mortar-pestle-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pharmacy</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="deep-purple accent-2">mdi-warehouse</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Drugs Inventory</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="orange">mdi-rss-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Drugs Providers</v-list-item-title>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-icon>
                <v-icon size="30" color="brown">mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>

            <v-list-item @click="$router.push({name: 'signup'})">
              <v-list-item-icon>
                <v-icon size="30" color="blue">mdi-account-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Signup</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="this.logout"
            >
              <v-list-item-icon>
                <v-icon size="30" color="red">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>

      </v-navigation-drawer>
    </v-card>
<!--    END Navbar -->

<!--    START Login Authentication-->
    <v-main>
      <Login v-if="!isAuthenticated"/>
    </v-main>
<!--    END Login Authentication-->
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
    drawer: false,
    group: null,
  }),
};
</script>
