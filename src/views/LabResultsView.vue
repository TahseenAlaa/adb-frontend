<template>

  <v-container class="mt-16" fluid>
    <v-card>
      <v-card-title>
        <span class="text-h5">Lab Resulting</span>
      </v-card-title>
      <v-card-subtitle class="subtitle-1">Please enter the results of the tests</v-card-subtitle>
      <v-card-text>
        <v-card-subtitle class="subtitle-2">Tests Information</v-card-subtitle>
      </v-card-text>

      <v-form v-model="valid" lazy-validation ref="form">
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
              <td class="pt-2">
                <v-text-field
                    v-model="inputs[test.id]"
                    dense
                    outlined
                    :rules="[numberRule]"
                ></v-text-field>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-form>
      <v-row justify="center" align="center">
        <v-spacer></v-spacer>

        <!-- START History       -->
        <v-dialog
            v-model="historyDialog"
            max-width="800px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
                :loading="loading"
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
        <!-- END History       -->

        <v-col cols="2" class="my-4">
          <v-btn
              class="deep-purple white--text"
              @click="postResultsData"
              :disabled="!valid"
          >
            <v-icon size="20">mdi-check-decagram</v-icon>
            Save Results
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <!--    START Loading Dialog -->
    <LoadingDialogCompo :loading_-dialog="dialogs.loading.active" />
    <!--    END Loading Dialog -->
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "LabResultsView.vue",
  components: {
    LoadingDialogCompo
  },
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

    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },

    // START post result data
    postResultsData() {
      this.dialogs.loading.active = true

      this.inputs.forEach((v, n) => {
        // console.log(n + ' ' + v)
        httpPOST('api/v1/lab-results/store', {
          patient_uuid: this.patient_uuid,
          id: parseInt(n),
          result: parseInt(v),
        })
            .then(({data}) => {
              // console.log(data.data)
            })
            .catch(({response:{data}})=>{
              console.log(data)
            })
            .finally(() => {
              // START Fetch the tests of this patient
              httpGET('api/v1/lab/' + this.patient_uuid)
                  .then(({data}) => {
                    // console.log(data.data)
                    this.tests = data.data
                  }).catch(({response: {data}}) => {
                console.log(data)
              });
              // END Fetch the tests of this patient
              this.dialogs.loading.active = false
            });
      })
    },
    // END post result data

    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
      return 'Numbers only accepted!';
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