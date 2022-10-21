<template>

  <v-container class="mb-16">
    <v-form v-model="valid" lazy-validation ref="form">
      <v-card class="px-6">
        <v-card-title>Reception & Statistics</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

        <v-row dense>
          <v-col cols="3">
            <v-text-field
                label="Old Patient File Number"
                v-model="patient_number"
                outlined
                dense
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
          <v-col cols="3">
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
          <v-col cols="3">
            <v-text-field
                label="Blood Pressure Systolic"
                v-model="blood_pressure_systolic"
                outlined
                dense
                :rules="[bloodPressureRule, rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Blood Pressure Diastolic"
                v-model="blood_pressure_diastolic"
                outlined
                dense
                :rules="[bloodPressureRule, rules.required]"
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
            class="px-2 py-12 mt-6 mx-2 deep-purple"
            dark
        >
          <v-col>
            <v-icon size="60">mdi-account-details</v-icon>
            <h3 class="text-capitalize">Create New Visit</h3>
          </v-col>
        </v-btn>
      </v-row>
    </v-form>
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
    <!--    END Required Fields Dialog-->
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
      required_fields_Dialog: false,
      rules: {
        required: value => !!value || 'Required.',
      },
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
      if (
          !this.blood_pressure_systolic ||
          !this.blood_pressure_diastolic ||
          !this.blood_pressure_systolic.trim() ||
          !this.blood_pressure_diastolic.trim()
      ) {
        this.required_fields_Dialog = true
      } else {
        httpPOST('api/v1/patients/store/newvisit', {
          patient_uuid: this.$route.params.patient_uuid,
          patient_number: this.patient_number,
          blood_pressure_systolic: this.blood_pressure_systolic,
          blood_pressure_diastolic: this.blood_pressure_diastolic,
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
    }
  },
  created() {
    httpGET('api/v1/patients/patient-info-for-new-visit/' + this.patient_uuid)
        .then(({data}) => {
          this.age_at_visit = data.age;
          this.patient_number = data.patient_number
        }).catch(({response:{data}})=>{
      console.log(data)
    });
  }
}
</script>

<style scoped>

</style>