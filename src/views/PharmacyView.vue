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
          Doctors contents goes here
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Medical Lab</h2></v-expansion-panel-header>
        <v-expansion-panel-content>Content Here</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Pharmacy</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="mt-6">
            <v-row dense align="center" justify="center">
              <v-card-title class="subtitle-2">Add the treatment to the patient</v-card-title>
              <v-spacer></v-spacer>
              <div>
                <v-col>
                  <v-dialog
                      v-model="pharmacyDialog"
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
                                  v-model="name"
                                  required
                                  outlined
                                  dense
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col
                                cols="6"
                            >
                              <v-text-field
                                  label="Batch No."
                                  v-model="batch_no"
                                  required
                                  outlined
                                  dense
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="6"
                            >
                              <div>
                                <v-menu
                                    v-model="expireDateMenu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        label="Expire Date"
                                        v-model="expire_date"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        outlined
                                        dense
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-date-picker
                                      v-model="expire_date"
                                      @input="expireDateMenu = false"
                                  ></v-date-picker>
                                </v-menu>
                              </div>
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col
                                cols="4"
                            >
                              <v-text-field
                                  label="Treatment Type"
                                  v-model="treatment_type"
                                  required
                                  outlined
                                  dense
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="4"
                            >
                              <v-text-field
                                  label="Dosage"
                                  v-model="dosage"
                                  required
                                  outlined
                                  dense
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="4"
                            >
                              <v-text-field
                                  label="Quantity"
                                  v-model="quantity"
                                  required
                                  outlined
                                  dense
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row dense>
                            <v-col
                                cols="12"
                            >
                              <v-textarea
                                  outlined
                                  dense
                                  label="Notes"
                                  v-model="notes"
                              >
                                Notes
                              </v-textarea>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="deep-purple white--text"
                            text
                            @click="pharmacyDialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                            class="deep-purple white--text"
                            text
                            @click="storePharmacyData"
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
                  <th>Batch No.</th>
                  <th>Expire Date</th>
                  <th>Treatment Type</th>
                  <th>Dosage</th>
                  <th>Quantity</th>
                  <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="drug in drugs">
                  <td>{{ drug.name }}</td>
                  <td>{{ drug.batch_no }}</td>
                  <td>{{ humanReadableDateConverter(drug.expire_date) }}</td>
                  <td>{{ drug.treatment_type }}</td>
                  <td>{{ drug.dosage }}</td>
                  <td>{{ drug.quantity }}</td>
                  <td>{{ drug.notes }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <v-alert
          type="success"
          class="mt-10 mr-4"
          v-if="successAlert"
          dense
      >Patient Information stored successfully!</v-alert>
      <v-alert
          type="error"
          class="mt-10 mr-4"
          v-if="errorAlert"
          dense
      >Save data Failed!</v-alert>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-icon size="50" class="pb-2">mdi-camera</v-icon>
          <h3 class="text-capitalize">CAPTURE PHOTO</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-icon size="50" class="pb-2">mdi-history</v-icon>
          <h3 class="text-capitalize">SHOW HISTORY</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-icon size="50" class="pb-2">mdi-cloud-print</v-icon>
          <h3 class="text-capitalize">PRINT</h3>
        </v-col>
      </v-btn>
      <v-btn
          @click="backToHome"
          class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
      >
        <v-col>
          <v-icon size="50" class="pb-2">mdi-content-save</v-icon>
          <h3 class="text-capitalize">SAVE CHANGES</h3>
        </v-col>
      </v-btn>
    </v-row>
  </v-container>

</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  data() {
    return {
      expireDateMenu: false,
      pharmacyDialog: false,
      autoOpenPanel: [3],
      name: null,
      batch_no: null,
      expire_date: null,
      treatment_type: null,
      dosage: null,
      quantity: null,
      notes: null,
      drugs: [],
      successAlert: false,
      errorAlert: false
    }
  },

  methods: {
    storePharmacyData(e) {
      if (this.dosage) {
        httpPOST('api/v1/pharmacy/store', {
          patient_uuid: this.$route.params.patient_uuid,
          name: this.name,
          batch_no: this.batch_no,
          expire_date: this.expire_date,
          treatment_type: this.treatment_type,
          dosage: this.dosage,
          quantity: this.quantity,
          notes: this.notes,
        })
        .then(({data}) => {
          data.data.created_at = this.humanReadableDateConverter(data.data.created_at)
          this.drugs.push(data.data)

          console.log(this.drugs)
        }).catch(({response: {data}}) => {
          console.log(data)
        });
        e.preventDefault()
        this.pharmacyDialog = false
      }
    },

    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },

    backToHome() {
      this.successAlert = true
      setTimeout(() => {this.$router.push({path: '/'})}, 2000)
    }
  },

  name: "PharmacyView"
}
</script>

<style scoped>

</style>