<template>

  <v-container class="mb-16">
    <v-card>
      <v-card-title>
        <span class="text-h5">Lab Sampling</span>
      </v-card-title>
      <v-card-subtitle class="subtitle-1">Please use bellow information to take the samples from the patient</v-card-subtitle>
      <v-card-text>
        <v-card-subtitle class="subtitle-2">Samples Information</v-card-subtitle>
      </v-card-text>

      <v-simple-table>
        <template>
          <thead>
          <tr>
            <th>Group</th>
            <th>Name</th>
            <th>Notes</th>
            <th>Sampling</th>
            <th>Result</th>
            <th>Date of Adding Record</th>
            <th>Doctor's Name</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="test in tests">
            <td>{{ test.test_groups.test_group }}</td>
            <td>{{ test.test_groups.test_name }}</td>
            <td>{{ test.doctor_notes }}</td>
            <td v-if="test.sampling_status === 0"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
            <td v-if="test.sampling_status === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
            <td v-if="test.sampling_status === 1"><span class="green px-2 py-2 rounded-xl">Done</span></td>
            <td v-if="test.result === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
            <td v-if="test.result"><span class="green px-2 py-2 rounded-xl">Done</span></td>
            <td>{{ humanReadableDateConverter(test.created_at) }}</td>
            <td>{{ test.user.full_name }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

<!--    START Save Button -->
    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
          :loading="loading_state"
      >
        <v-col @click="postSamplingData">
          <v-icon size="60">mdi-needle</v-icon>
          <h3 class="text-capitalize">Confirmation Sampling</h3>
        </v-col>
      </v-btn>
    </v-row>
<!--    END Save Button -->
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "LabSamplingView.vue",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      tests: [],
      loading_state: false
    }
  },
  methods: {
    // START Post Sampling Data
    postSamplingData() {
      this.loading_state = true

      httpPOST('api/v1/lab-sampling/store', {
        patient_uuid: this.patient_uuid,
        tests: this.tests,
      }).then(({data}) => {
        this.tests = data.data
        // console.log('Done!')
      }).catch(({response:{data}})=>{
        console.log(data)
      });
      this.loading_state = false
    },
    // END Post Sampling Data

    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    }
  },
  created() {
    // START Fetch the tests of this patient
    httpGET('api/v1/lab/' + this.patient_uuid)
        .then(({data}) => {
          // console.log(data.data)
          this.tests = data.data
        }).catch(({response: {data}}) => {
      console.log(data)
    });
    // END Fetch the tests of this patient
  }
}
</script>

<style scoped>

</style>