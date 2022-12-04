<template>
  <v-container>

    <v-card class="px-6">
      <v-card-title>Anthropology Measurement</v-card-title>
      <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
      <v-card-title class="subtitle-2">Physical Information</v-card-title>

      <v-row dense>
        <v-col cols="2">
          <v-text-field
              label="Weight in kg"
              v-model="weight"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Height in cm"
              v-model="height"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Waist Circumference"
              v-model="waist_circumference"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="HIP"
              v-model="hip"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-text-field
              label="BMI"
              v-model="bmi"
              outlined
              denser
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="2">
          <v-text-field
              label="Father's Height"
              v-model="father_height"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Mother's Height"
              v-model="mother_height"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-radio-group
              v-model="gender"
              dense
              row
              readonly
              persistent-hint
              hint="ReadOnly"
          >
            <v-radio v-if="gender === 0" label="Male" :value="gender"></v-radio>
            <v-radio v-if="gender === 1" label="Female" :value="gender"></v-radio>
            <v-radio v-if="gender === null" label="Gender Not Found"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="2">

        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-text-field
              label="Mid-Parent Height"
              v-model="mid_parent_height"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <v-text-field
              label="Blood Pressure Systolic"
              v-model="blood_pressure_systolic"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Blood Pressure Diastolic"
              v-model="blood_pressure_diastolic"
              outlined
              dense
              readonly
              hint="ReadOnly"
              persistent-hint
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {httpPOST} from "@/utils/utils";

export default {
  name: "AnthoCompo.vue",
  props: [
      'patient_uuid',
      'patient_history_uuid'
  ],
  data() {
    return {
      weight: null,
      height: null,
      waist_circumference: null,
      hip: null,
      bmi: null,
      father_height: null,
      mother_height: null,
      gender: null,
      mid_parent_height: null,
      blood_pressure_systolic: null,
      blood_pressure_diastolic: null
    }
  },
  created() {
    // START Fetch Antho information
    httpPOST('api/v1/antho/show', {
      patient_uuid: this.patient_uuid,
      patient_history_uuid: this.patient_history_uuid
    })
        .then(({data}) => {
          this.weight = data.patient_latest_history.weight
          this.height = data.patient_latest_history.height
          this.waist_circumference = data.patient_latest_history.waist_circumference
          this.hip = data.patient_latest_history.hip
          this.bmi = data.patient_latest_history.bmi
          this.father_height = data.patient_latest_history.father_height
          this.mother_height = data.patient_latest_history.mother_height
          this.gender = data.patient_info.gender
          this.mid_parent_height = data.patient_latest_history.mid_height
          this.blood_pressure_systolic = data.patient_latest_history.blood_pressure_systolic
          this.blood_pressure_diastolic = data.patient_latest_history.blood_pressure_diastolic
    }).catch(({response:{data}})=>{
      console.log(data)
    });
    // END Fetch Antho information
  }
}
</script>

<style scoped>

</style>