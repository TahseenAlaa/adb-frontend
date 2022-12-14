<template>

  <v-container class="mb-16" fluid>
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Lab Sampling</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
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
            <th>Sampling By</th>
            <th>Sample No.</th>
            <th>Action</th>
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
            <td v-if="test.result"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="25" color="green darken-3">mdi-check-circle</v-icon> Done</span></td>
            <td>{{ humanReadableDateConverter(test.created_at) }}</td>
            <td>{{ test.user.full_name }}</td>
            <td>{{ test.sampling_user? test.sampling_user.full_name : null }}</td>
            <td v-if="test.sample_no">{{ test.sample_no }}</td>
            <td v-else-if="!test.sample_no">
              <v-text-field
                  outlined
                  dense
                  v-model="sample_no"
                  :readonly="!!test.sampling_status"
              >
              </v-text-field>
            </td>
            <td>
              <v-btn
                  class="px-2 py-2 deep-purple white--text"
                  :loading="loading_state"
                  :disabled="!!test.sampling_status"
              >
                <v-col @click="postSamplingData(test.id)">
                  <h3 class="text-capitalize"><v-icon size="30" class="px-2">mdi-needle</v-icon>Confirm</h3>
                </v-col>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <ReceptionCompo
              :patient_uuid="patient_uuid"
          >

          </ReceptionCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Antho</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <AnthoCompo
              :patient_uuid="patient_uuid"
          >

          </AnthoCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <!-- START History       -->
      <v-dialog
          v-model="historyDialog"
          max-width="800px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
              @click="historyPopup"
          >
            <v-col @click="">
              <v-icon size="60">mdi-reload</v-icon>
              <h3 class="text-capitalize">History</h3>
            </v-col>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Select History</span>
          </v-card-title>
          <v-card-subtitle class="subtitle-1">Please select one of the history points.</v-card-subtitle>
          <v-card-text>
            <v-card-subtitle class="subtitle-2">History Information</v-card-subtitle>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th class="text-left">Date</th>
                        <th class="text-left">Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr
                          v-for="item in patientHistoryList"
                          :key="item.id"
                      >
                        <td>{{ humanReadableDateConverter(item.created_at) }}</td>
                        <td>
                          <v-btn class="deep-purple white--text"
                                 @click="$router.push({path: '/lab-history/' + item.uuid})"
                          >View</v-btn>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                class="deep-purple white--text"
                text
                @click="historyDialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- END History       -->
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";
import AnthoCompo from "@/components/AnthoCompo";
import ReceptionCompo from "@/components/ReceptionCompo";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "LabSamplingView.vue",
  components: {
    ReceptionCompo,
    AnthoCompo,
    LoadingDialogCompo
  },
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      tests: [],
      loading_state: false,
      historyDialog: false,
      patientHistoryList: [],
      autoOpenPanel: [0],
      sample_no: null
    }
  },
  methods: {
    historyPopup() {
      httpPOST('api/v1/history/index', {
        patient_uuid: this.patient_uuid
      })
          .then(({data}) => {
            this.patientHistoryList = data.data
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          this.errorDialogMessage = data.message
          this.errorDialogActive = true
        }
      }).finally(() => {
        this.loading_Dialog = false
      });

      this.historyDialog = true
    },

    // START Post Sampling Data
    postSamplingData($testId) {
      this.loading_state = true

      httpPOST('api/v1/lab-sampling/store', {
        patient_uuid: this.patient_uuid,
        test_id: $testId,
        sample_no: this.sample_no
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