<template>

    <v-card class="px-6">
      <v-card-title class="subtitle-2">Personal Information</v-card-title>

      <v-row dense>
        <v-col cols="12">
          <v-text-field
              label="Patient Number"
              v-model="patient_number"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="4">
          <v-text-field
              label="Date of Visit"
              v-model="date_of_visit"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Blood Pressure Systolic"
              v-model="blood_pressure_systolic"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Blood Pressure Diastolic"
              v-model="blood_pressure_diastolic"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="4">
          <v-text-field
              label="Weight"
              v-model="weight_by_doctor"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Height"
              v-model="height_by_doctor"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Waist Circumference"
              v-model="waist_circumference_by_doctor"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="3">
          <v-text-field
              label="BMI"
              v-model="bmi_by_doctor"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Next Visit"
              v-model="next_visit"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Doctor's Name"
              v-model="created_by_dr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-textarea
              label="Clinical Notes"
              v-model="clinical_notes"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-textarea>
        </v-col>
      </v-row>

      <div class="mt-6">
        <v-row dense align="center" justify="center">
          <v-card-title class="subtitle-2">Diagnosis</v-card-title>
          <v-spacer></v-spacer>
        </v-row>

        <v-simple-table>
          <template>
            <thead>
            <tr>
              <th>Name</th>
              <th>Suspected or Confirmed</th>
              <th>Date of Diagnosis</th>
              <th>Doctor's Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="diagnosis in diagnosisList">
              <td>{{ diagnosis.symptoms }}</td>
              <td v-if="diagnosis.is_confirmed === 1">Confirmed</td>
              <td v-if="diagnosis.is_confirmed === 0">Suspected</td>
              <td>{{ humanReadableDateConverter(diagnosis.created_at) }}</td>
              <td>Dr. Name</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div class="mt-6">
        <v-row dense align="center" justify="center">
          <v-card-title class="subtitle-2">Treatment</v-card-title>
          <v-spacer></v-spacer>
        </v-row>

        <v-simple-table>
          <template>
            <thead>
            <tr>
              <th>Name</th>
              <th>Dose</th>
              <th>Status</th>
              <th>Date of Adding Record</th>
              <th>Doctor's Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="drug in treatmentList">
              <td>{{ drug.name }}</td>
              <td>{{ drug.dose }}</td>
              <td v-if="parseInt(drug.status) === 0"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
              <td v-if="parseInt(drug.status) === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
              <td v-if="parseInt(drug.status) === 1"><span class="green px-2 py-2 rounded-xl">Done</span></td>
              <td>{{ humanReadableDateConverter(drug.created_at) }}</td>
              <td>Dr. Name</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div class="mt-6">
        <v-row dense align="center" justify="center">
          <v-card-title class="subtitle-2">Required Lab Tests</v-card-title>
          <v-spacer></v-spacer>
        </v-row>

        <v-simple-table>
          <template>
            <thead>
            <tr>
              <th>Name</th>
              <th>Notes</th>
              <th>Status</th>
              <th>Date of Adding Record</th>
              <th>Doctor's Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="test in testsList">
              <td>{{ test.test_name }}</td>
              <td>{{ test.notes }}</td>
              <td v-if="parseInt(test.status) === 0"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
              <td v-if="parseInt(test.status) === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
              <td v-if="parseInt(test.status) === 1"><span class="green px-2 py-2 rounded-xl">Done</span></td>
              <td>{{ humanReadableDateConverter(test.created_at) }}</td>
              <td>Dr. Name</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card>

</template>

<script>
export default {
  props: [
      'patient_number',
      'date_of_visit',
      'blood_pressure_systolic',
      'blood_pressure_diastolic',
      'weight_by_doctor',
      'height_by_doctor',
      'waist_circumference_by_doctor',
      'bmi_by_doctor',
      'age_at_visit',
      'clinical_notes',
      'next_visit',
      'created_by_dr',
      'diagnosisList',
      'treatmentList',
      'testsList'
      // 'DoctorOfDiagnosis',
      // 'DoctorOfTreatment',
      // 'DoctorOfTests',
  ],
  name: "DoctorCompo",
  methods: {
    humanReadableDateConverter (date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    }
  },
}
</script>

<style scoped>

</style>