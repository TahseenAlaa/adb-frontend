<template>

  <v-container>
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
      <v-expansion-panel>
      <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>Content goes here</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
      <v-expansion-panel-header><h2>Doctors</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form>
            <v-card class="px-6">
              <v-card-title>Doctors</v-card-title>
              <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
              <v-card-title class="subtitle-2">Personal Information</v-card-title>

              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                      label="Patient Number"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="Date of Visit"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Blood Pressure Systolic"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Blood Pressure Diastolic"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="Weight"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Height"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Waist Circumference"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                      label="BMI"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      label="Age at Visit"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12">
                  <v-textarea
                      label="Clinical Notes"
                      outlined
                      dense
                  ></v-textarea>
                </v-col>
              </v-row>

              <div class="mt-6">
                <v-row dense align="center" justify="center">
                  <v-card-title class="subtitle-2">Diagnosis</v-card-title>
                  <v-spacer></v-spacer>
                  <div>
                    <v-col>
                      <v-dialog
                          v-model="diagnosisDialog"
                          max-width="800px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              class="deep-purple white--text"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            ADD NEW DIAGNOSIS
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Adding new Diagnosis</span>
                          </v-card-title>
                          <v-card-subtitle class="subtitle-1">Please fill the information below to add a diagnosis record to patient visit record.</v-card-subtitle>
                          <v-card-text>
                            <v-card-subtitle class="subtitle-2">Diagnosis Information</v-card-subtitle>
                            <v-container>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-text-field
                                      label="Symptoms"
                                      required
                                      outlined
                                      dense
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-select
                                      :items="['Suspected', 'Confirmed']"
                                      label="Suspected or Confirmed"
                                      required
                                      outlined
                                      dense
                                  ></v-select>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-textarea
                                      outlined
                                      dense
                                      label="Clinical Notes"
                                  >Clinical Notes</v-textarea>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="diagnosisDialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="diagnosisDialog = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </div>
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
                  <div>
                    <v-col>
                      <v-dialog
                          v-model="treatmentDialog"
                          max-width="800px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              class="deep-purple white--text"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            ADD NEW TREATMENT
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Adding new Treatment</span>
                          </v-card-title>
                          <v-card-subtitle class="subtitle-1">Please fill the information below to add a treatment record to patient visit record.</v-card-subtitle>
                          <v-card-text>
                            <v-card-subtitle class="subtitle-2">Treatment Information</v-card-subtitle>
                            <v-container>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-text-field
                                      label="Name"
                                      required
                                      outlined
                                      dense
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-text-field
                                      label="Dose"
                                      required
                                      outlined
                                      dense
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-textarea
                                      outlined
                                      dense
                                      label="Notes"
                                  >Notes</v-textarea>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="treatmentDialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="treatmentDialog = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </div>
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
                  <div>
                    <v-col>
                      <v-dialog
                          v-model="testDialog"
                          max-width="800px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              class="deep-purple white--text"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            ADD NEW TEST
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Adding new Test</span>
                          </v-card-title>
                          <v-card-subtitle class="subtitle-1">Please fill the information below to add a test record to patient visit record.</v-card-subtitle>
                          <v-card-text>
                            <v-card-subtitle class="subtitle-2">Test Information</v-card-subtitle>
                            <v-container>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-text-field
                                      label="Name"
                                      required
                                      outlined
                                      dense
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-textarea
                                      outlined
                                      dense
                                      label="Notes"
                                  >Notes</v-textarea>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="testDialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="testDialog = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </div>
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
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      diagnosisDialog: false,
      treatmentDialog: false,
      testDialog: false,
      autoOpenPanel:[1]
    }
  },
  name: "DoctorsView"
}
</script>

<style scoped>

</style>