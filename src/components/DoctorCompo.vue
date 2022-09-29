<template>

    <v-card class="px-6">
      <v-card-title class="subtitle-2">Personal Information</v-card-title>

      <v-row dense>
        <v-col cols="12">
          <v-text-field
              label="Patient Number"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Blood Pressure Systolic"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Blood Pressure Diastolic"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Height"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Waist Circumference"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="6">
          <v-text-field
              label="BMI"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Age at Visit"
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
            <tr>
              <td>Diabetes type C</td>
              <td>Confirmed</td>
              <td>16/2/1990</td>
              <td>Dr. Mohamed Ali</td>
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
            <tr>
              <td>Paracetamol</td>
              <td>100mg</td>
              <td><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
              <td>16/2/1990</td>
              <td>Dr. Mohamed Ali</td>
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
            <tr>
              <td>LDL</td>
              <td>-</td>
              <td><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
              <td>16/2/1990</td>
              <td>Dr. Mohamed Ali</td>
            </tr>
            <tr>
              <td>HDL</td>
              <td>-</td>
              <td><span class="green px-2 py-2 rounded-xl">Done</span></td>
              <td>16/2/1990</td>
              <td>Dr. Mohamed Ali</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card>

</template>

<script>
export default {
  name: "DoctorCompo"
}
</script>

<style scoped>

</style>