<template>

  <v-container class="mb-16">
    <v-form v-model="valid" lazy-validation ref="form">
      <v-card class="px-6">
        <v-card-title>Reception & Statistics</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

<!--        TODO Fetch patient number value from the main profile and can be edited-->
        <v-row dense>
          <v-col cols="12">
            <v-text-field
                label="Old Patient File Number"
                v-model="patient_number"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Age at Visit"
                v-model="age_at_visit"
                outlined
                dense
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Blood Pressure Systolic"
                v-model="blood_pressure_systolic"
                outlined
                dense
                :rules="[bloodPressureRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Blood Pressure Diastolic"
                v-model="blood_pressure_diastolic"
                outlined
                dense
                :rules="[bloodPressureRule]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>


      <v-row dense align="center" justify="center">
        <v-spacer></v-spacer>
        <v-alert
            type="success"
            class="mt-10 mr-4"
            v-if="successAlert"
            dense
        >Patient Information Stored Successfully!</v-alert>
        <v-alert
            type="error"
            class="mt-10 mr-4"
            v-if="errorAlert"
            dense
        >Save data Failed!</v-alert>
        <v-btn
            @click="postNewVisitData"
            class="mt-6 deep-purple white--text"
        >
          <v-col>
            <span class="text-capitalize">Create New Visit</span>
          </v-col>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>

</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "ReceptionNewVisitView",
  data() {
    return {
      valid: false,
      successAlert: false,
      errorAlert: false,
      activePicker: null,
      patient_uuid: this.$route.params.patient_uuid,
      patient_number: null,
      age_at_visit: null,
      blood_pressure_systolic: null,
      blood_pressure_diastolic: null,
      weight: null,
      height: null,
      waist_circumference: null,
      bmi: null,
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },

  methods: {
    bloodPressureRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 300) return true;
      return 'Number has to be between 0 and 300';
    },
    postNewVisitData(e) {
      httpPOST('api/v1/patients/store/newvisit', {
        patient_uuid: this.$route.params.patient_uuid,
        uuid: this.uuid,
        patient_number: this.patient_number,
        date_of_visit: this.date_of_visit,
        blood_pressure_systolic: this.blood_pressure_systolic,
        blood_pressure_diastolic: this.blood_pressure_diastolic,
        weight: this.weight,
        height: this.height,
        bmi: this.bmi,
      })
          .then(({data})=>{
        this.successAlert = true
        setTimeout(() => {this.$router.push({path: '/'})}, 2000)
        console.log(data)
      }).catch(({response:{data}})=>{
        console.log(data)
      });
      e.preventDefault()
    }
  },
  created() {
    httpGET('api/v1/patients/patient-age/' + this.patient_uuid)
        .then(({data}) => {
          this.age_at_visit = data.data;
        }).catch(({response:{data}})=>{
      console.log(data)
    });
  }
}
</script>

<style scoped>

</style>