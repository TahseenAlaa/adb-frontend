<template>

  <v-container>
    <v-form>
      <v-card class="px-6">
        <v-card-title>Reception & Statistics</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

        <v-row dense>
          <v-col cols="12">
            <v-text-field
                label="Patient Number"
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
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Blood Pressure Diastolic"
                v-model="blood_pressure_diastolic"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Weight"
                v-model="weight"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Height"
                v-model="height"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Waist Circumference"
                v-model="waist_circumference"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="BMI"
                v-model="bmi"
                outlined
                dense
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn
                dark
                class="deep-purple"
                @click="calcBMI"
            >Calculate</v-btn>
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
    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
      return 'Number has to be between 0 and 999';
    },

    calcBMI() {
      if (this.weight && this.height) {
        let weight = parseInt(this.weight)
        let height = parseInt(this.height/100)
        this.bmi = weight / (height ^ 2)
      }
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