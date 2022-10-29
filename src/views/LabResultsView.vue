<template>

  <v-container class="mt-16">
    <v-card>
      <v-card-title>
        <span class="text-h5">Lab Resulting</span>
      </v-card-title>
      <v-card-subtitle class="subtitle-1">Please enter the results of the tests</v-card-subtitle>
      <v-card-text>
        <v-card-subtitle class="subtitle-2">Tests Information</v-card-subtitle>
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
            <th class="text-left">Range (Min - Max)</th>
            <th>Date of Adding Record</th>
            <th>Doctor's Name</th>
            <th>Action</th>
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
            <td>
              <v-icon
                  v-if="test.test_groups.gender === 'Male'"
                  size="20"
              >mdi-gender-male</v-icon>
              <v-icon
                  v-else-if="test.test_groups.gender === 'Female'"
                  size="20"
              >mdi-gender-female</v-icon>
              {{ test.test_groups.min_range + ' - ' + test.test_groups.max_range + ' ' + test.test_groups.measurement_unit }}
            </td>
            <td>{{ humanReadableDateConverter(test.test_groups.created_at) }}</td>
            <td>{{ test.updated_user? test.updated_user.full_name : test.user.full_name }}</td>
            <td>
              <v-btn
                  class="deep-purple white--text"
              >
                <v-icon size="20">mdi-check-decagram</v-icon>
                Enter Result
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "LabResultsView.vue",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      tests: [],
      loading_state: false
    }
  },
  methods: {
    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },
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