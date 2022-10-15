<template>

  <v-container class="mb-16">
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
                      @keyup.enter="searchPatient()"
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
                      @keyup.enter="searchPatient()"
                      v-model="phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      label="Patient ID"
                      outlined
                      dense
                      @keyup.enter="searchPatient()"
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

<!--      START No Result Alert-->
    <div v-if="toggles.showNoResultAlert">
      <v-row dense>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <img src="../assets/undraw_file_searching_re_3evy.svg" alt="" width="301" height="315">
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-alert
          prominent
          type="error"
          class="mt-12"
      >
        <v-row align="center">
          <v-col class="grow">Unfortunately, No Results Found!</v-col>
          <v-col class="shrink">
                <router-link to="/reception">
                  <v-btn
                      class="px-2 py-6 deep-purple white--text"
                  >
                    <v-icon size="40" dark>mdi-folder-plus</v-icon>
                    <h3 class="text-capitalize">New Patient</h3>
                  </v-btn>
                </router-link>
          </v-col>
        </v-row>
      </v-alert>
    </div>
<!--      END No Result Alert-->

    <v-card class="px-6 mt-16"
              v-if="toggles.showResultsPanel"
      >
        <v-card-title>Search Results</v-card-title>
        <v-card-subtitle>You can select the matched result and acces patient information or create a new visit</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>
        <v-simple-table>
          <template>
            <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Last Visit</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="patient in search_result['data']">
              <td>{{ patient.full_name }}</td>
              <td>{{ patient.phone }}</td>
              <td>{{ humanReadableDateConverter(patient.birthday) }}</td>
              <td>{{ patient.gender }}</td>
              <td>{{ humanReadableDateConverter(patient.updated_at) }}</td>
              <td>
                <router-link
                    v-if="receptionTeam"
                    :to="'/viewpanels/' + patient.uuid"
                >
                  <v-btn dark>View</v-btn>
                </router-link>

                <router-link
                    v-if="receptionTeam"
                    :to="'/reception/newvisit/' + patient.uuid"
                >
                  <v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn>
                </router-link>

                <router-link
                    v-if="anthoTeam"
                    :to="'/antho/' + patient.uuid"
                >
                  <v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn>
                </router-link>

                <router-link
                    v-if="doctorsTeam"
                    :to="'/doctors/' + patient.uuid"
                >
                  <v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn>
                </router-link>

                <router-link
                    v-if="labTeam"
                    :to="'/lab/' + patient.uuid"
                >
                  <v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn>
                </router-link>

                <router-link
                    v-if="pharmacyTeam"
                    :to="'/pharmacy/' + patient.uuid"
                >
                  <v-btn color="#6200EE" class="white--text ml-6">New Visit</v-btn>
                </router-link>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    <p
        v-if="toggles.showResultsPanel"
       class="grey--text">Not found ?  You can create a new patient record by clicking on new patient button
    </p>

    <v-row
        v-if="toggles.showResultsPanel === true && receptionTeam === true"
        dense
    >
      <v-col cols="12">
        <v-alert
            prominent
            color="#2A3B4D"
            dark
            class="mt-12"
        >
          <v-row align="center">
            <v-col class="grow">No Results Found?</v-col>
            <v-col class="shrink">
              <router-link to="/reception">
                <v-btn
                    class="px-2 py-6 deep-purple white--text"
                >
                  <v-icon size="40" dark>mdi-folder-plus</v-icon>
                  <h3 class="text-capitalize">New Patient</h3>
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
<!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
<!--    END Loading Dialog-->
  </v-container>

</template>

<script>
import {httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "SearchView",
  components: {
    LoadingDialogCompo
  },

  data() {
    return {
      full_name: null,
      phone: null,
      gender: null,
      patient_id: null,
      search_result: [],
      receptionTeam: null,
      anthoTeam: null,
      doctorsTeam: null,
      labTeam: null,
      pharmacyTeam: null,
      department: this.$route.params.department,
      toggles:{
        showResultsPanel: false,
        showNewVisit: false,
        showNoResultAlert: false
      },
      loading_Dialog: false
    }
  },

  methods: {
    searchPatient() {
      this.loading_Dialog = true

      httpPOST('api/v1/patients/search-for-patients-of-today', {
        patient: this.patient_id,
        phone: this.phone,
        full_name: this.full_name
      }).then(({data}) => {
        this.search_result = data
        if (data.data.length > 0) {
          this.toggles.showResultsPanel = true
          this.toggles.showNoResultAlert = false
        } else {
          this.toggles.showResultsPanel = false
          this.toggles.showNoResultAlert = true
        }
      }).catch(({response:{data}})=>{
        console.log(data)
      });

      // if (this.patient_id) {
      //   httpPOST('api/v1/patients/search-by-patient-id/' + this.patient_id)
      //       .then(({data})=>{
      //     this.search_result = data
      //     if (data.data.length > 0) {
      //       this.toggles.showResultsPanel = true
      //       this.toggles.showNoResultAlert = false
      //     } else {
      //       this.toggles.showResultsPanel = false
      //       this.toggles.showNoResultAlert = true
      //     }
      //   }).catch(({response:{data}})=>{
      //     console.log(data)
      //   });
      // } else if (this.phone) {
      //   httpPOST('api/v1/patients/search-by-phone/' + this.phone)
      //   .then(({data})=>{
      //     this.search_result = data
      //     if (data) {
      //       this.toggles.showResultsPanel = true
      //     }
      //   }).catch(({response:{data}})=>{
      //     console.log(data)
      //   });
      //
      // } else if (this.full_name) {
      //   httpPOST('api/v1/patients/search-by-full-name/' + this.full_name)
      //   .then(({data})=>{
      //     this.search_result = data
      //     if (data) {
      //       this.toggles.showResultsPanel = true
      //     }
      //   }).catch(({response:{data}})=>{
      //     console.log(data)
      //   });
      // }
      if (this.department === 'reception') {
        this.receptionTeam = true;
      } else if (this.department === 'antho') {
        this.anthoTeam = true;
      } else if (this.department === 'doctors') {
        this.doctorsTeam = true
      } else if (this.department === 'lab') {
        this.labTeam = true
      } else if (this.department === 'pharmacy') {
        this.pharmacyTeam = true
      }
      this.loading_Dialog = false
    },
    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>