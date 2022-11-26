<template>

  <v-container class="mb-16">
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <ReceptionCompo
              ref="reception_compo_ref"
              :patient_uuid="this.patient_uuid"
          ></ReceptionCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>
    <v-form v-model="valid" lazy-validation ref="form">
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
            @click="storePatientUpdatedInfo"
            class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
            :disabled="!valid"
        >
          <v-col>
            <v-icon size="60">mdi-account-details</v-icon>
            <h3 class="text-capitalize">Save Patient Info</h3>
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
import {httpGET} from "@/utils/utils";
import ReceptionCompo from "@/components/ReceptionCompo";

export default {
  name: "ModifyPatientInfo.vue",

  components: {
    ReceptionCompo
  },
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
      autoOpenPanel: [0],
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
    storePatientUpdatedInfo() {
      // Call the update patient function from the Reception Component
      this.$nextTick(() => {
        this.$refs.reception_compo_ref.storePatientUpdatedInfo()
      })

      setTimeout(() => {
        this.$router.push({name: 'patients_management'})
      }, 2000)
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