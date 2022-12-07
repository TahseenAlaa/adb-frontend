<template>
  <v-app>
    <link rel="icon" href="#">
<!--    START Navbar -->
    <div
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
        <img src="./assets/prs_logo.png" class="px-4" alt="Logo">
        <v-toolbar-title
            @click="$router.push({name: 'home'})"
            style="cursor: pointer"
        >
            <h3>Al-Hasan Metabolism, Endocrine & Diabetes Center (HMEDC)</h3>
        </v-toolbar-title>
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

      <!--
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
      -->
<!--      END Content Here-->
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          width="364px"
      >
        <v-list
            nav

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

            <v-list-item
                @click="$router.push({name: 'patients_management'})"
                v-if="can('list patients')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="purple">mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Patients Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'diagnosis_management'})"
                v-if="can('list diagnosis')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="cyan darken-3">mdi-air-filter</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Diagnosis Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'symptoms_management'})"
                v-if="can('list symptoms type')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="deep-orange darken-3">mdi-bacteria</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Symptoms Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'lab_management'})"
                v-if="can('list medical lab tests')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="cyan lighten-1">mdi-test-tube</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lab Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'drug-management'})"
                v-if="can('list drugs')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="blue darken-3">mdi-atom</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Drugs Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'committee-approval'})"
                v-if="can('access committee approval')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="light-green darken-1">mdi-certificate</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Committee Approval</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'pharmacy-management'})"
                v-if="can('list pharmacy')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="lime darken-3">mdi-mortar-pestle-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pharmacy Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'inventory_management'})"
                v-if="can('list inventory')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="deep-purple accent-2">mdi-warehouse</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inventory Management</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="$router.push({name: 'providers-management'})"
                v-if="can('list providers')"
            >
              <v-list-item-icon>
                <v-icon size="30" color="orange">mdi-rss-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Providers Management</v-list-item-title>
            </v-list-item>

            <v-list
                v-if="can('list users') || can('')"
            >
              <v-list-group
                  no-action
                  prepend-icon="mdi-cog"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Settings</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                    @click="$router.push({name: 'users_management'})"
                    v-if="can('list users')"
                >
                  <v-list-item-icon>
                    <v-icon size="30" color="orange">mdi-account-multiple</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Users Management</v-list-item-title>
                </v-list-item>

<!--                <v-list-item-->
<!--                    @click="$router.push({name: 'log_activities'})"-->
<!--                    v-if="can('access log')"-->
<!--                >-->
<!--                  <v-list-item-icon>-->
<!--                    <v-icon size="30" color="red">mdi-view-comfy</v-icon>-->
<!--                  </v-list-item-icon>-->
<!--                  <v-list-item-title>Log Activities</v-list-item-title>-->
<!--                </v-list-item>-->

              </v-list-group>
            </v-list>

            <v-list-item @click="aboutDevelopersDialog = true">
              <v-list-item-icon>
                <v-icon size="30" color="cyan darken-3">mdi-account-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About Developers</v-list-item-title>
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
    </div>

    <v-dialog
        v-model="aboutDevelopersDialog"
        width="600px"
    >
      <v-card>
        <v-card-title class="grey">
          <span class="text-h5 white--text">About Developers</span>
        </v-card-title>
        <v-card-text class="text-right">
          <p class="d-flex align-center justify-center">
            <v-img src="../src/assets/esite_logo.png" max-width="300" max-height="112" class="my-12"></v-img>
          </p>
          <h2>
            شركة الموقع لتقنية المعلومات، شركة عراقية مختصة في تطوير البرمجيات، و لهم الخبرة في مجال تطوير البرمجيات المخصصة لمدة تزيد عن ١٠ سنوات، و تقدم خدماتها لمختلف انواع الاعمال، وتتميز اعمالهم بالجودة العالية و استخدام احدث التقنيات في مجالات الويب و الموبايل. لا تتردد بالاتصال بنا على
            info@esite-iq.com أو +9647901611249
          </h2>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="aboutDevelopersDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<!--    END Navbar -->

<!--    START Login Authentication-->
    <v-main>
      <Login v-if="!isAuthenticated"/>
    </v-main>
<!--    END Login Authentication-->

    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->
  </v-app>
</template>

<script>

import Login from "@/views/LoginView";
import { mapActions} from "vuex";
import {httpGET} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    loading_Dialog: false,
    aboutDevelopersDialog: false
  }),

  components: {
    Login,
    LoadingDialogCompo
  },

  methods: {
    ...mapActions({
      validateLogin: 'validateLogin'
    }),

    logout(){
      this.loading_Dialog = true

      httpGET('api/v1/auth/logout')
          .then(() => {
            this.$store.commit('SET_AUTHENTICATED', false)
            this.$store.commit('SET_USER', {})
            localStorage.clear()
            this.$router.push({name: 'login'})
          })
          .catch(({response: {data}}) => {
              console.log(data)
          }).finally(() => {
        this.loading_Dialog = false
      });
     },

    // START Check Permissions
    can($permit) {
      return !!this.$store.getters.user.permissions.find(v => v.name === $permit);
    },
    // END Check Permissions

    },

  created() {
    this.validateLogin()
    document.title = "Alhasan Diabetes Center"
  },

  computed: {
    isAuthenticated() {
      return this.$store.state.authenticated
    },

    getUser() {
      return this.$store.getters.user
    }
  },
};
</script>
