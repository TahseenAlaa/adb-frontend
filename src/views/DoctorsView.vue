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
                      v-model="patient_number"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="Age at Visit"
                      v-model="age_at_visit"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Blood Pressure Systolic"
                      v-model="blood_pressure_systolic"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Blood Pressure Diastolic"
                      v-model="blood_pressure_diastolic"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="Weight"
                      v-model="weight"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Height"
                      v-model="height"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Waist Circumference"
                      v-model="waist_circumference"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="BMI"
                      v-model="bmi"
                      outlined
                      dense
                      readonly
                      hint="ReadOnly"
                      persistent-hint
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn
                      dark
                      class="deep-purple"
                      @click="calcBMI"
                  >Calculate</v-btn>
                </v-col>
                <v-col cols="4">
                  <div>
                    <v-menu
                        v-model="DateOfNextVisitMenu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            label="Date of Next Visit"
                            v-model="date_of_next_visit"
                            prepend-icon="mdi-calendar"
                            readonly
                            outlined
                            dense
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                          v-model="date_of_next_visit"
                          @input="DateOfNextVisitMenu = false"
                      ></v-date-picker>
                    </v-menu>
                  </div>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12">
                  <v-textarea
                      label="Clinical Notes"
                      v-model="clinical_notes"
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
                          v-model="labDialog"
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
                                @click="labDialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="labDialog = false"
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

    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-icon size="60">mdi-camera</v-icon>
          <h3 class="text-capitalize">CAPTURE PHOTO</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-icon size="60">mdi-printer</v-icon>
          <h3 class="text-capitalize">PRINT</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
      >
        <v-col>
          <v-icon size="60">mdi-content-save</v-icon>
          <h3 class="text-capitalize">SAVE CHANGES</h3>
        </v-col>
      </v-btn>
    </v-row>

  </v-container>

</template>

<script>
export default {
  data() {
    return {
      diagnosisDialog: false,
      treatmentDialog: false,
      labDialog: false,
      autoOpenPanel:[1],
      weight: null,
      height: null,
      bmi: null,
      clinical_notes: null,
      waist_circumference: null,
      blood_pressure_diastolic: null,
      blood_pressure_systolic: null,
      age_at_visit: null,
      patient_number: null,
      date_of_next_visit: null,
      DateOfNextVisitMenu: false
    }
  },
  methods: {
    calcBMI() {
      if (this.weight && this.height) {
        let weight = parseInt(this.weight)
        let height = parseInt(this.height/100)
        this.bmi = weight / (height ^ 2)
      }
    }
  },
  name: "DoctorsView"
}
</script>

<style scoped>

</style>