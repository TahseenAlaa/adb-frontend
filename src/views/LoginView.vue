<template>
  <v-app id="inspire">
    <v-card
        class="mx-auto overflow-hidden fill-height rounded-0"
        style="min-width: 100%;"
    >
      <v-app-bar
          color="deep-purple"
          dark
      >

        <v-spacer></v-spacer>
        <v-toolbar-title><h2>Alhasan Diabetes Center</h2></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">

          <v-col cols="12" sm="8" md="4">
            <div class="justify-center align-center align-content-center d-flex flex pb-12 mb-6">
              <v-img contain class="printlogo mb-3" src="../assets/esite_logo.png" />
            </div>
            <v-card class="elevation-12">
              <v-card-text>
                <div class="mb-8 mt-4"><h1>Alhasan Diabetes Center</h1></div>
                <v-form>
                  <v-text-field
                      outlined
                      label="Username"
                      append-icon="mdi-account"
                      v-model="auth.username"
                      type="text"
                      @keyup.enter="login()"
                      @input="toggleShowSignInBtn"
                  ></v-text-field>

                  <v-text-field
                      outlined
                      id="password"
                      label="Password"
                      append-icon="mdi-lock"
                      type="password"
                      v-model="auth.password"
                      @keyup.enter="login()"
                      @input="toggleShowSignInBtn"
                  ></v-text-field>
                </v-form>
                <v-banner
                    v-if="errorMsg"
                    color="red"
                    single-line
                >
                  {{ errorMsg }}
                </v-banner>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    @click="login()"
                    :loading="showLoadingBtn"
                    :disabled="ShowSignInBtn"
                >Sign In</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-main class="mainbg">
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import router from "@/router";
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name:"login",
  data(){
    return {
      auth:{
        username:"",
        password:""
      },
      processing:false,
      errorMsg: null,
      ShowSignInBtn: true,
      showLoadingBtn: false
    }
  },
  methods:{
    ...mapActions({
      signIn:'login'
    }),

    async login(){
      this.errorMsg = null;
      this.showLoadingBtn = true;
      this.ShowSignInBtn = true;
      httpPOST('api/v1/auth/login',{
        username: this.auth.username,
        password: this.auth.password
      })
      .then(({data})=>{
        localStorage.setItem('esite_token', data['token'].toString())
        this.signIn()
        router.push({name: 'home'})
      }).catch(({response:{data}})=>{
        this.errorMsg = data.message;
        this.showLoadingBtn = false;
        this.ShowSignInBtn = false
      })
    },
  },

  computed: {
    toggleShowSignInBtn() {
      if (this.auth.username && this.auth.password) {
        this.ShowSignInBtn = null
      }
    },
  }
}
</script>

<style scoped>
.mainbg {
  background-size: cover;
  background-repeat: no-repeat;
}

.printlogo {
  max-width: 300px;
  max-height: 200px;
}

</style>