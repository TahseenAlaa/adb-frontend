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
                          <v-row dense>
                            <v-col
                                cols="6"
                            >
                              <v-text-field
                                  label="Batch No."
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
                                  required
                                  outlined
                                  dense
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="4"
                            >
                              <v-text-field
                                  label="Quality"
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
                            @click="pharmacyDialog = false"
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
                  <th>Batch No.</th>
                  <th>Expire Date</th>
                  <th>Treatment Type</th>
                  <th>Dosage</th>
                  <th>Quantity</th>
                  <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>452</td>
                  <td>16/2/2023</td>
                  <td>Any</td>
                  <td>5</td>
                  <td>700</td>
                  <td>Notes Here</td>
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
export default {
  data() {
    return {
      expireDateMenu: false,
      expire_date: null,
      pharmacyDialog: false,
      autoOpenPanel: [3]
    }
  },
  name: "PharmacyView"
}
</script>

<style scoped>

</style>