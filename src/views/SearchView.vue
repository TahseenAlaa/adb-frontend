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
                      v-model="full_name"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                      label="Phone"
                      outlined
                      dense
                      v-model="phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      label="Patient ID"
                      outlined
                      dense
                      v-model="patient_id"
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
                @click="searchPatient"
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
            <tr v-for="item in search_result['data']">
              <td>{{ item.full_name }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.birthday }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ humanReadableDateConverter(item.updated_at) }}</td>
              <td>
                <router-link :to="'/reception/' + item.uuid"><v-btn dark>View</v-btn></router-link>
                <router-link :to="'/reception/' + item.uuid"><v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn></router-link>
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
import axios from "axios";

export default {
  name: "SearchView",
  data() {
    return {
      full_name: null,
      phone: null,
      patient_id: null,
      search_result: [],
    }
  },

  methods: {
    searchPatient() {
      let baseURL = 'http://127.0.0.1:8000/';

      if (this.patient_id) {
        axios.get(baseURL + 'api/v1/patients/search-by-patient-id/' + this.patient_id, {
          headers: {
            'Content-Type' : 'application/json',
            'Accept'       : 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('esite_token')
          }
        }).then(({data})=>{
          this.search_result = data
          console.log(data)
        }).catch(({response:{data}})=>{
          console.log(data)
        });
      } else if (this.phone) {
        axios.get(baseURL + 'api/v1/patients/search-by-phone/' + this.phone, {
          headers: {
            'Content-Type' : 'application/json',
            'Accept'       : 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('esite_token')
          }
        }).then(({data})=>{
          this.search_result = data
          console.log(data)
        }).catch(({response:{data}})=>{
          console.log(data)
        });

      } else if (this.full_name) {
        axios.get(baseURL + 'api/v1/patients/search-by-full-name/' + this.full_name, {
          headers: {
            'Content-Type' : 'application/json',
            'Accept'       : 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('esite_token')
          }
        }).then(({data})=>{
          this.search_result = data
          console.log(this.search_result)
        }).catch(({response:{data}})=>{
          console.log(data)
        });
      }
    },
    humanReadableDateConverter (date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    }
  }
}
</script>

<style scoped>

</style>