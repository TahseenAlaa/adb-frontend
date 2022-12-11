<template>

  <v-container class="mb-16" fluid>
    <v-form v-model="valid" lazy-validation ref="form">
      <v-card class="px-6">
        <v-card-title>Search</v-card-title>
        <v-card-subtitle>You can search on patient record by Name, Phone or Patient ID</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                      label="Full Name"
                      outlined
                      dense
                      @keyup.enter="searchPatient()"
                      v-model="full_name"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                      label="Old Patient Number"
                      outlined
                      dense
                      @keyup.enter="searchPatient()"
                      v-model="patient_number"
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
                      type="number"
                      counter="11"
                      :rules="[phoneRule]"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      label="Patient ID"
                      outlined
                      dense
                      @keyup.enter="searchPatient()"
                      v-model="patient_id"
                      :rules="[numberRule]"
                  ></v-text-field>
                </v-col>
              </v-row>
      </v-card>


        <v-row dense align="center" justify="center">
          <v-spacer></v-spacer>
            <v-btn
                class="px-8 py-12 mt-6 mx-8 deep-purple white--text"
                color="#6200EE"
                @click="searchPatient()"
                :loading="searchButtonLoading"
                :disabled="!valid"
            >
              <div class="d-flex flex-column align-content-center justify-center">


                <v-icon size="40">mdi-magnify</v-icon>
                <div class="text-capitalize text-center">Search</div>
              </div>
            </v-btn>
        </v-row>
    </v-form>

<div id="ResultsContainer">
  <!--      START No Result Alert-->
  <div v-if="toggles.showNoResultAlert">


    <v-alert
        prominent
        type="error"
        class="mt-12"
    >
      <v-row align="center">
        <v-col class="grow">Unfortunately, No Results Found!</v-col>
        <v-col class="shrink">

          <v-btn
              v-if="receptionTeam === true"
              @click="$router.push({ path: '/reception' })"
              class="px-2 py-6 deep-purple white--text"
          >
            <v-icon size="40" dark>mdi-folder-plus</v-icon>
            <h3 class="text-capitalize">New Patient</h3>
          </v-btn>

        </v-col>
      </v-row>
    </v-alert>

    <v-row dense>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <img src="../assets/undraw_file_searching_re_3evy.svg" alt="" width="301" height="315">
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

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
          <th>#</th>
          <th>Name</th>
          <th>Old Patient Number</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Last Visit</th>
          <th>Next Visit</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="patient in search_result['data']">
          <th>{{ patient.id }}</th>
          <td>{{ patient.full_name }}</td>
          <th>{{ patient.patient_number }}</th>
          <td>{{ patient.phone }}</td>
          <td>{{ humanReadableDateConverter(patient.birthday) }}</td>

          <td v-if="patient.gender === 0">Male</td>
          <td v-if="patient.gender === 1">Female</td>
          <td v-if="patient.gender === null"></td>

          <td>{{ humanReadableDateConverter(patient.last_visit) }}</td>
          <td>{{ patient.latest_patient_history? humanReadableDateConverter(patient.latest_patient_history.next_visit) : null }}</td>
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
          <v-col>No Results Found?</v-col>
          <v-spacer></v-spacer>
          <v-col md="3">

            <v-btn block @click="$router.push({ path: '/reception' })"
                   class="px-2 py-6 deep-purple white--text"
            >
              <v-icon size="40" dark>mdi-folder-plus</v-icon>
              <h3 class="text-capitalize">New Patient</h3>
            </v-btn>

          </v-col>
        </v-row>
      </v-alert>
    </v-col>
  </v-row>
</div>
<!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_Dialog="loading_Dialog"></LoadingDialogCompo>
<!--    END Loading Dialog-->

<!--    START Required Fields Dialog-->
    <v-row justify="center">
      <v-dialog
          v-model="required_fields_Dialog"
          persistent
          max-width="300"
      >
        <v-card>
          <v-card-title class="text-h5 red">
            Error
          </v-card-title>
          <v-card-text class="text-center pt-6 text-h5">
            Please enter patient information.
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                @click="required_fields_Dialog = false"
                dark
                class="deep-purple"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <p id="footer"></p>
<!--    END Required Fields Dialog-->

    <!--    START Error Message -->
    <ErrorCompo
        :active-dialog="this.errorDialogActive"
        :message="this.errorDialogMessage"
    ></ErrorCompo>
    <!--    END Error Message -->
  </v-container>

</template>

<script>
import {httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import ErrorCompo from "@/components/ErrorCompo";

export default {
  name: "SearchView",
  components: {
    LoadingDialogCompo,
    ErrorCompo
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
      patient_number: null,
      errorDialogActive: false,
      errorDialogMessage: '',
      toggles:{
        showResultsPanel: false,
        showNewVisit: false,
        showNoResultAlert: false
      },
      loading_Dialog: false,
      searchButtonLoading: false,
      required_fields_Dialog: false,
      valid: false,
    }
  },

  methods: {
    searchPatient() {
      if (this.valid) {
        this.loading_Dialog = true
        this.searchButtonLoading = true

        if (this.full_name || this.patient_number || this.phone || this.patient_id) {
          httpPOST('api/v1/patients/search-for-patients', JSON.stringify({
            patient: this.patient_id,
            patient_number: this.patient_number,
            phone: this.phone,
            full_name: this.full_name,
            department: this.department
          }))

              .then(({data}) => {
                this.search_result = data
                if (data.data.length > 0) {
                  this.toggles.showResultsPanel = true
                  this.toggles.showNoResultAlert = false
                } else {
                  this.toggles.showResultsPanel = false
                  this.toggles.showNoResultAlert = true
                }
              }).catch(({response: {data}}) => {
            // Redirect to login page if not authenticated
            if (!data || data.message === "Unauthenticated.") {
              this.$store.commit('SET_AUTHENTICATED', false)
            } else {
              this.errorDialogMessage = data.message
              this.errorDialogActive = true
              this.required_fields_Dialog = true
            }
          }).finally(() => {
            this.loading_Dialog = false
          });
        }

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
        this.searchButtonLoading = false

        //this.patient_id = null
        //this.phone = null
        //this.full_name = null
      }
      // Clean Fields
      // this.full_name = null
      // this.patient_number = null
      // this.phone = null
      // this.patient_id = null

      this.scrollToResul()
    },
    scrollToResul() {
      setTimeout(() => {
        document.getElementById("ResultsContainer").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 1000)

    },
    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },
    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 1000000) return true;
      return 'Number Only Accepted';
    },
    phoneRule: v =>  {
      const pattern = /^0?7[0-9]{9}$/;
      if (!v.trim()) return true;
      if (!pattern.test(v)) return 'Wrong Phone Number Format';
    },
    nameRule: value =>  {
      const pattern = /^([^0-9]*)$/;
      return pattern.test(value) || 'Only Letters Accepted'
    },
  }
}
</script>

<style scoped>

</style>