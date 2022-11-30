<template>
  <v-container class="mt-16" fluid>
    <!--              START medical lab tests-->
    <div class="mt-6">
      <v-row dense align="center" justify="center">
        <v-card-title class="subtitle-2">Lab Tests</v-card-title>
        <v-spacer></v-spacer>
      </v-row>

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
            <th>Result By</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="test in tests">
            <td>{{ test.test_groups.test_group }}</td>
            <td>{{ test.test_groups.test_name }}</td>
            <td>{{ test.doctor_notes }}</td>
            <td v-if="test.sampling_status === 0"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
            <td v-if="test.sampling_status === null"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
            <td v-if="test.sampling_status === 1"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="25" color="green darken-3">mdi-check-circle</v-icon> Done</span></td>
            <td v-if="test.result === null"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
            <td v-if="test.result"><span class=" px-2 py-2 rounded-xl">{{ test.result }}</span></td>
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
            <td>{{ test.result_user? test.result_user.full_name : null }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <!--              END medical lab tests-->
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "LabCompo",
  props: [
      'patient_uuid',
      'patient_history_uuid'
  ],

  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      valid: false,
      dialogs: {
        loading: {
          active: false
        }
      },
      tests: [],
      loading_state: false,
      inputs: [],
      historyDialog: false,
      patientHistoryList: [],
    }
  },

  methods: {
    humanReadableDateConverter (date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    },
  },

  created() {
    // START Fetch the tests of this patient
    httpPOST('api/v1/history/show-tests', {
      patient_history_uuid: this.patient_history_uuid
    })
        .then(({data}) => {
          // console.log(data.data)
          this.tests = data.data
        }).catch(({response: {data}}) => {
      console.log(data)
    });
    // END Fetch the tests of this patient
  },
}
</script>

<style scoped>

</style>