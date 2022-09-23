<template>
  <v-app id="inspire">
    <v-main class="mainbg">
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
                      label="Email"
                      name="Email"
                      append-icon="mdi-account"
                      v-model="auth.email"
                      type="text"
                      @keyup.enter="login()"
                      @keydown="toggleShowSignInBtn"
                  ></v-text-field>

                  <v-text-field
                      outlined
                      id="password"
                      label="Password"
                      name="password"
                      append-icon="mdi-lock"
                      type="password"
                      v-model="auth.password"
                      @keyup.enter="login()"
                      @keydown="toggleShowSignInBtn"
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
                    :loading="loadingbtn"
                    :disabled="ShowSignInBtn"
                >Sign In</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import axios from "axios";

export default {
  name:"login",
  data(){
    return {
      auth:{
        email:"",
        password:""
      },
      processing:false,
      errorMsg: null,
      ShowSignInBtn: true
    }
  },
  methods:{
    ...mapActions({
      signIn:'auth/login'
    }),

    async login(){
      const baseURL = 'http://127.0.0.1:8000/';
      this.errorMsg = null;

      await axios.get(baseURL + 'sanctum/csrf-cookie', {
        headers: {
          'Content-Type' : 'application/json',
          'Accept'       : 'application/json'
        }
      })
      await axios.post(baseURL + 'api/v1/auth/login',this.auth, {
        headers: {
          'Content-Type' : 'application/json',
          'Accept'       : 'application/json'
        },
      }).then(({data})=>{
        localStorage.setItem('esite_token', data['token'].toString())
        this.signIn()
        this.$store.state.isLoggedIn = true
      }).catch(({response:{data}})=>{
        this.errorMsg = data.message;
      })
    },
  },

  computed: {
    toggleShowSignInBtn() {
      if (this.auth.email && this.auth.password) {
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