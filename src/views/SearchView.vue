<template>

  <v-container>
    <v-form>
      <v-card class="px-6">
        <v-card-title>Search</v-card-title>
        <v-card-subtitle>You can search on patient record by Name, Phone or Patient ID</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                      label="Full Name"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                      label="Phone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      label="Patient ID"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>
      </v-card>


        <v-row dense align="center" justify="center">
          <v-spacer></v-spacer>
            <v-btn
                dark
                class="px-8 py-12 mt-6 mx-8"
                color="#6200EE"
            >
              <div class="d-flex flex-column align-content-center justify-center">


                <v-icon size="40">mdi-magnify</v-icon>
                <div class="text-capitalize text-center">Search</div>
              </div>
            </v-btn>
        </v-row>
    </v-form>

      <v-card class="px-6 mt-16">
        <v-card-title>Search Results</v-card-title>
        <v-card-subtitle>You can select the matched result and acces patient information or create a new visit</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>
        <v-simple-table>
          <template>
            <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Date of Birthday</th>
              <th>Gender</th>
              <th>Last Visit</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Mohammed Ali Qlay</td>
              <td>0781456325</td>
              <td>16/2/1990</td>
              <td>Male</td>
              <td>1/1/2021</td>
              <td>
                <v-btn dark>View</v-btn>
                <v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    <p class="grey--text">Not found ?  You can create a new patient record by clicking on new patient button</p>

    <v-row dense>
      <v-col>
        <router-link to="/reception">
        <v-btn
            class="px-8 py-12 mt-6 mx-8 white--text"
            color="#FFFFFF"
        >
          <v-col>
            <v-img
                src="../assets/loading_icon.svg"
                width="50px"
                height="50px"
                class="mx-auto"
            >

            </v-img>
            <h2 class="text-capitalize" style="color: #6200EE">New Patient</h2>
          </v-col>
        </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "SearchView"
}
</script>

<style scoped>

</style>