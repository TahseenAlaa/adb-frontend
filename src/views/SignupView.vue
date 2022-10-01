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
                    outlined
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                    label="Username"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12">
                <v-text-field
                    label="Email"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="6">
                <v-text-field
                    label="Job Title"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                    label="Role"
                    :items="['Receptionist', 'Statistics', 'Doctor', 'Tester', 'Admin']"
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
}
</script>

<style scoped>

</style>