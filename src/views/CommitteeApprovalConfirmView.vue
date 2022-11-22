<template>

  <v-container class="mb-16">
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >

      <!--      START Reception Section -->
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <ReceptionCompo
              :patient_history_uuid="patient_history_uuid"
          ></ReceptionCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--      END Reception Section -->

      <!--      START Antho Section -->
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Antho</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <AnthoCompo
              :patient_history_uuid="patient_history_uuid"
          >
          </AnthoCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--      END Antho Section -->

      <!--      START Committee Approval Section -->
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Committee Approval Section</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form>
            <v-card class="px-6">
              <v-card-title>Committee Approval Section</v-card-title>

              <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">Drug</th>
                    <th class="text-left">Frequency</th>
                    <th class="text-left">Per</th>
                    <th class="text-left">Meal</th>
                    <th class="text-left">Dose</th>
                    <th class="text-left">Date of Add Record</th>
                    <th class="text-left">Doctor's Name</th>
                    <th class="text-left">Notes</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="item in treatments"
                      :key="item.name"
                  >
                    <td>{{ item.drugs.title }}</td>
                    <td>{{ item.frequency }}</td>

                    <td v-if="item.day_we_mo === 1">Day</td>
                    <td v-if="item.day_we_mo === 2">Week</td>
                    <td v-if="item.day_we_mo === 3">Month</td>

                    <td v-if="item.meal === 1">Before Meal</td>
                    <td v-if="item.meal === 2">In Meal</td>
                    <td v-if="item.meal === 3">After Meal</td>
                    <td v-if="item.meal === 4">On Demand</td>

                    <td>{{ item.dose }}</td>
                    <td>{{ humanReadableDateConverter(item.updated_at) }}</td>
                    <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
                    <td>{{ item.notes }}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>

            <v-row dense align="center" justify="center">
                <v-spacer></v-spacer>
                <v-btn
                    class="px-8 py-12 mt-6 mx-8 my-6 red white--text"
                    color="#6200EE"
                    @click="rejectionDialog = true"
                >
                  <div class="d-flex flex-column align-content-center justify-center">


                    <v-icon size="40">mdi-alpha-x-circle</v-icon>
                    <div class="text-capitalize text-center">Reject</div>
                  </div>
                </v-btn>
                <v-btn
                    class="px-8 py-12 mt-6 mx-8 my-6 green white--text"
                    color="#6200EE"
                    @click="approveDialog = true"
                >
                  <div class="d-flex flex-column align-content-center justify-center">


                    <v-icon size="40">mdi-check-decagram</v-icon>
                    <div class="text-capitalize text-center">Approve</div>
                  </div>
                </v-btn>
              </v-row>
          </v-form>

          <!--    START Approve Dialog-->
          <v-row justify="center">
            <v-dialog
                v-model="approveDialog"
                persistent
                max-width="450"
            >
              <v-card>
                <v-card-title class="text-h6 green">
                  Approve
                </v-card-title>
                <v-card-text class="text-center pt-6 text-h6">
                  Are you sure to approve this request?
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                  <v-btn
                      @click="approveDialog = false"
                      dark
                      class="deep-purple"
                  >
                    Ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!--    END Approve Dialog-->

          <!--    START Rejection Dialog-->
          <v-row justify="center">
            <v-dialog
                v-model="rejectionDialog"
                persistent
                max-width="450"
            >
              <v-card>
                <v-card-title class="text-h6 red">
                  Approve
                </v-card-title>
                <v-card-text class="text-center pt-6 text-h6">
                  Are you sure to reject this request?
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                  <v-btn
                      @click="rejectionDialog = false"
                      dark
                      class="deep-purple"
                  >
                    Ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!--    END Rejection Dialog-->
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!--      END Committee Approval Section -->
    </v-expansion-panels>
  </v-container>
</template>

<script>
import ReceptionCompo from "@/components/ReceptionCompo";
import AnthoCompo from "@/components/AnthoCompo";
import {httpGET} from "@/utils/utils";

export default {
  name: "CommitteeApprovalConfirmView.vue",
  components: {
    ReceptionCompo,
    AnthoCompo
  },
  data() {
    return {
      patient_history_uuid: this.$route.params.patient_history_uuid,
      autoOpenPanel: [2],
      treatments: [],
      approveDialog: false,
      rejectionDialog: false,
    }
  },

  methods: {
    // START Fetch All treatments
    fetchTreatments() {
      httpGET('api/v1/committee-approval/index')
          .then(({data}) => {
            this.treatments = data.data
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
    },
    // END Fetch All treatments

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
    // START Fetch All treatments
    this.fetchTreatments()
  }
}
</script>

<style scoped>

</style>