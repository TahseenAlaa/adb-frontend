<template>

  <v-container>
    <v-row justify="center" class="mt-16">
      <v-card max-width="50%">
        <v-card-title>
          <span class="text-h5">Signup New User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row dense>
              <v-col
                  cols="6"
              >
                <v-text-field
                    label="Full Name"
                    v-model="full_name"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                    label="Username"
                    v-model="username"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="6">
                <v-text-field
                    label="Job Title"
                    v-model="job_title"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                    label="Role"
                    :items="['Receptionist', 'Statistics', 'Doctor', 'Tester', 'Admin']"
                    v-model="role"
                    outlined
                    dense
                    hint="Select Only from the List"
                    persistent-hint
                >
                </v-autocomplete>
              </v-col>
            </v-row>

          <v-row dense>
              <v-col cols="12">
                <v-text-field
                    label="Password"
                    v-model="password"
                    type="password"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
          </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              dark
              text
              class="deep-purple"
              @click="toggleSignUp"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "SignupView",
  data() {
    return {
      full_name: null,
      username: null,
      job_title: null,
      role: null,
      password: null
    }
  },

  methods: {
    toggleSignUp() {
      httpPOST('api/v1/auth/signup', {
        full_name: this.full_name,
        username: this.username,
        job_title: this.job_title,
        role: this.role,
        password: this.password
      }).then(() => {
        console.log('User Registerd Succesfully!')
      }).catch(({res}) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>