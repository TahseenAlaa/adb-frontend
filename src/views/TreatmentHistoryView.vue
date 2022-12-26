<template>
  <v-container class="mb-12" fluid>
    <PharmacyCompo
        :patient_history_uuid="patient_history_uuid"
    ></PharmacyCompo>

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
                                 @click="$router.push({path: '/lab-history/' + item.uuid}).catch(err => {})"
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

    <v-btn
        @click="$router.go(-1)"
        class="deep-purple white--text"
    >
      <v-icon size="30">mdi-chevron-left</v-icon>
      Back
    </v-btn>
  </v-container>
</template>

<script>
import PharmacyCompo from "@/components/PharmacyCompo";
import {httpPOST} from "@/utils/utils";

export default {
  name: "TreatmentHistoryView.vue",
  components: {
    PharmacyCompo
  },
  data() {
    return {
      patient_history_uuid: this.$route.params.patient_history_uuid,
      historyDialog: false,
      patientHistoryList: [],
    }
  },

  methods: {
    historyPopup() {
      httpPOST('api/v1/history/index', {
        patient_history_uuid: this.patient_history_uuid
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
    }
  }
}
</script>

<style scoped>

</style>