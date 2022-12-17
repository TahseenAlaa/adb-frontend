<template>

  <v-container class="mb-16" fluid>
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Lab Results</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form v-model="valid" lazy-validation ref="form" id="new-form">
      <v-card class="px-16">
        <v-card-title>Pharmacy</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <!--              START Treatment -->
        <v-card-text class="mb-12">
          <div>
            <v-col>
              <v-dialog
                  v-model="treatment_edit.dialog"
                  max-width="800px"
              >
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Editing Treatment</span>
                  </v-card-title>
                  <v-card-subtitle class="subtitle-1">Please fill the information below to add a treatment record to patient visit record.</v-card-subtitle>
                  <v-card-text>
                    <v-card-subtitle class="subtitle-2">Treatment Information</v-card-subtitle>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                        >
                          <v-autocomplete
                              label="Drugs"
                              outlined
                              dense
                              :items="treatment.drugs"
                              v-model="treatment_edit.drug"
                              item-text="drugs.title"
                              item-value="drug_id"
                          ></v-autocomplete>
                        </v-col>
                      </v-row>
                      <v-row dense>
                        <v-col
                            cols="3"
                        >
                          <v-autocomplete
                              v-model="treatment_edit.frequency"
                              label="Frequency"
                              outlined
                              dense
                              :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                          ></v-autocomplete>
                        </v-col>
                        <v-col
                            cols="3"
                        >
                          <v-autocomplete
                              v-model="treatment_edit.per"
                              label="Per"
                              outlined
                              dense
                              :items="[
                                          {
                                            text: 'Day',
                                            value: 1
                                          },
                                          {
                                            text: 'Week',
                                            value: 2
                                          },
                                          {
                                            text: 'Month',
                                            value: 3
                                          },
                                      ]"
                          ></v-autocomplete>
                        </v-col>
                        <v-col
                            cols="3"
                        >
                          <v-autocomplete
                              v-model="treatment_edit.meal"
                              label="Meal"
                              outlined
                              dense
                              :items="[
                                          {
                                            text: 'Before Meal',
                                            value: 1
                                          },
                                          {
                                            text: 'In Meal',
                                            value: 2
                                          },
                                          {
                                            text: 'After Meal',
                                            value: 3
                                          },
                                          {
                                            text: 'On Demand',
                                            value: 4
                                          },
                                      ]"
                          ></v-autocomplete>
                        </v-col>
                        <v-col
                            cols="3"
                        >
                          <v-text-field
                              v-model="treatment_edit.dose"
                              label="Dose"
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
                              v-model="treatment_edit.notes"
                              dense
                              label="Notes"
                              outlined
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="deep-purple white--text"
                        text
                        @click="treatment_edit.dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                        class="deep-purple white--text"
                        text
                        @click="editTreatmentData"
                    >
                      Edit
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </div>

          <div class="mt-6">
            <v-row dense align="center" justify="center">
              <v-card-title class="subtitle-2">Treatment</v-card-title>
              <v-spacer></v-spacer>
            </v-row>

            <v-simple-table>
              <template>
                <thead>
                <tr>
                  <th>Drug</th>
                  <th>Frequency</th>
                  <th>Per</th>
                  <th>Meal</th>
                  <th>Dose</th>
                  <th>Approval</th>
                  <th>Status</th>
                  <th>Date of Adding Record</th>
                  <th>Doctor's Name</th>
                  <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in treatments">
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

                  <!--                  TODO Check if Committee Approved or not -->
                  <td v-if="item.drugs.drug_type === 1">
                    <span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span>
<!--                    <span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="25" color="green darken-3">mdi-check-circle</v-icon> Done</span>-->
                  </td>

                  <td v-if="item.status === 0"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
                  <td v-if="item.status === null"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
                  <td v-if="item.status === 1"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="25" color="green darken-3">mdi-check-circle</v-icon> Done</span></td>

                  <td>{{ humanReadableDateConverter(item.updated_at) }}</td>
                  <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
                  <td>{{ item.notes }}</td>
                  <!--                      <td>{{ humanReadableDateConverter(item.created_at) }}</td>-->
                  <!--                      <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>-->
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card-text>
      </v-card>
        <!--              END Treatment -->

      <v-card>
        <!-- START Drugs withdrawal       -->
        <v-card-text class="mb-12">
          <v-card>
            <v-card-text>
              <v-row
                  dense
                  v-for="(item,k) in newItem" :key="k"
              >
                <v-text-field
                    label="id"
                    v-model="item.drug_id"
                    v-show="false"
                ></v-text-field>
                <v-col cols="2">
                  <v-select
                      v-model="item.name"
                      :items="drugs"
                      label="Item Name"
                      item-text="drugs.title"
                      item-value="id"
                      outlined
                      dense
                      @change="fetchItemInfo(item, k)"
                  ></v-select>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                      v-model="item.batch"
                      label="Batch Number"
                      outlined
                      dense
                      readonly
                      hint="ReadOnly"
                      persistent-hint
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                >
                      <v-text-field
                          v-model="item.expire_date"
                          label="Expire Date"
                          prepend-inner-icon="mdi-calendar"
                          hint="ReadOnly"
                          persistent-hint
                          readonly
                          outlined
                          dense
                      ></v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                      v-model="item.quantity"
                      label="Quantity"
                      outlined
                      dense
                      :rules="[rules.required,
                          v => {
                              if (v !== null) {
                                if (v.trim() === '' || null) return true;
                                if (!v.trim()) return true;
                              }
                              if (!isNaN(parseFloat(v)) && v >= 1 && v <= item.diff) return true;
                              return 'Quantity Error!';
                            },
                          ]"
                  ></v-text-field>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                      v-model="item.diff"
                      label="Available Quantity"
                      outlined
                      dense
                      readonly
                      hint="ReadOnly"
                      persistent-hint
                  ></v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-text-field
                      v-model="item.notes"
                      label="Notes"
                      outlined
                      dense
                      readonly
                      hint="ReadOnly"
                      persistent-hint
                  ></v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-btn
                      @click="remove(k)" v-show="k || ( !k && newItem.length > 1)"
                      class="red white--text"
                      icon
                      elevation="2"
                      outlined
                      dense
                  >
                    X
                  </v-btn>
                </v-col>
                <v-btn
                    @click="add(k)" v-show="k === newItem.length-1"
                    class="deep-purple white--text"
                >
                  Add Item Record
                </v-btn>
              </v-row>

              <!--              START Flash Message -->
              <v-row dense align="center" justify="center">
                <v-spacer></v-spacer>
                <v-alert
                    type="success"
                    class="mt-10 mr-4"
                    v-if="successAlert"
                    dense
                >Document Information stored successfully!</v-alert>
                <v-alert
                    prominent
                    type="error"
                    class="mt-10 mr-4"
                    v-if="errorAlert"
                    dense
                >Save data Failed!
                </v-alert>

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
                                           @click="$router.push({path: '/treatment-history/' + item.uuid})"
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

                <v-btn
                    class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
                >
                  <v-col @click="storeOutputDocumentDataOfPharmacy">
                    <v-icon size="60">mdi-content-save</v-icon>
                    <h3 class="text-capitalize">SAVE</h3>
                  </v-col>
                </v-btn>
              </v-row>
              <!--              END Flash Message -->
            </v-card-text>
          </v-card>
        </v-card-text>
        <!-- END Drugs withdrawal       -->
      </v-card>
    </v-form>
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
    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->

    <!--    START Required Fields -->
    <RequiredFieldsCompo :required_fields_-dialog="required_fields_Dialog"></RequiredFieldsCompo>
    <!--    END Required Fields -->

    <!--    START Error Message -->
    <ErrorCompo
        :active-dialog="this.errorDialogActive"
        :message="this.errorDialogMessage"
    ></ErrorCompo>
    <!--    END Error Message -->

    <!--              START Delete Dialog -->
    <v-row justify="center">
      <v-dialog
          v-model="dialogs.delete.active"
          persistent
          max-width="230"
      >
        <v-card>
          <v-card-title class="text-h5">
            Delete {{ this.dialogs.delete.title }}
          </v-card-title>
          <v-card-text class="text-center">
            Are you sure to delete this {{ this.dialogs.delete.title }}?
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                dark
                class="deep-grey"
                @click="dialogs.delete.active = false"
            >
              Close
            </v-btn>
            <v-btn
                color="deep-orange darken-1"
                dark
                class="px-1 mx-1"
                @click="deleteDialogAction"
                :loading="dialogs.delete.loading"
            >
              <v-icon size="30" class="pr-1">mdi-delete-forever</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--              END Delete Dialog -->

    <!--              START Edit Dialog -->
    <v-row justify="center">
      <v-dialog
          v-model="dialogs.edit.active"
          persistent
          max-width="230"
      >
        <v-card>
          <v-card-title class="text-h5">
            Delete {{ this.dialogs.edit.title }}
          </v-card-title>
          <v-card-text class="text-center">
            Are you sure to delete this {{ this.dialogs.edit.title }}?
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                dark
                class="deep-grey"
                @click="dialogs.edit.active = false"
            >
              Close
            </v-btn>
            <v-btn
                color="deep-orange darken-1"
                dark
                class="px-1 mx-1"
                @click=""
                :loading="dialogs.edit.loading"
            >
              <v-icon size="30" class="pr-1">mdi-delete-forever</v-icon>
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--              END Edit Dialog -->

        <LoadingDialogCompo :loading_-dialog="dialog.loading.active" />
  </v-container>

</template>

<script>
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import RequiredFieldsCompo from "@/components/RequiredFieldsCompo";
import ErrorCompo from "@/components/ErrorCompo";
import {httpDELETE, httpGET, httpPOST} from "@/utils/utils";
import ReceptionCompo from "@/components/ReceptionCompo";
import AnthoCompo from "@/components/AnthoCompo";

export default {
  name: "PharmacyView",
  components: {
    ReceptionCompo,
    AnthoCompo,
    LoadingDialogCompo,
    RequiredFieldsCompo,
    ErrorCompo
  },

  data() {
    return {
      valid: false,
      loading_Dialog: true,
      required_fields_Dialog: false,
      patient_uuid: this.$route.params.patient_uuid,
      patient_history_uuid: null,
      successAlert: false,
      errorAlert: false,
      errorDialogActive: false,
      errorDialogMessage: '',
      treatmentDialog: false,
      treatments: [],
      autoOpenPanel: [0],
      rules: {
        required: value => !!value || 'Required Field',
      },
      treatment_edit: {
        dialog: false,
        temp_id: null,
        drug: null,
        frequency: null,
        per: null,
        meal: null,
        dose: null,
        notes: null
      },
      dialog: {
        doc_menu: false,
        loading: {
          active: false
        }
      },
      dialogs: {
        edit: {
          active: false,
          title: null,
          loading: false
        },
        delete: {
          active: false,
          title: null,
          loading: false,
          temp_id: null
        },
        loading: {
          active: false
        }
      },
      treatment: {
        drugs: [],
        drug: null,
        frequency: null,
        per: null,
        meal: null,
        notes: null
      },
      newItem: [{
        drug_id: null,
        name: null,
        batch: null,
        expire_date: null,
        quantity: 1,
        diff: null,
        notes: null,
        dialog: {
          expire: false
        }
      }],
      historyDialog: false,
      patientHistoryList: [],
    }
  },

  mounted() {
    this.loading_Dialog = true
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

    add () {
      this.newItem.push({
        drug_id: null,
        name: null,
        batch: null,
        expire_date: null,
        quantity: 1,
        diff: null,
        notes: null,
        dialog: {
          expire: false
        }
      })
      // console.log(JSON.stringify(this.newItem))
    },

    remove (index) {
      this.newItem.splice(index, 1)
    },

    // START Store output document data
    storeOutputDocumentDataOfPharmacy() {
      // console.log(this.newItem)
      this.dialog.loading.active = true

      httpPOST('api/v1/pharmacy/store-treatment', {
        patient_uuid: this.patient_uuid,
        treatments: this.treatments,
        newItems: this.newItem
      })
          .then(({data}) => {
            this.successAlert = true
            setTimeout(() => {
              this.$router.push({path: '/search/pharmacy'})
            }, 2000)
          })
          .catch(({response:{data}})=>{
            this.errorAlert = true
            console.log(data)
          })
          .finally(() => {
            this.dialog.loading.active = false
          });
    },
    // END Store output document data

    // START get Drug Id from Item ID
    drugIdFromItemId($itemId) {
      return this.drugs.find(v => v.id === this.newItem[$itemId].name).drugs.id
    },
    // END get Drug Id from Item ID

    // START Fetch New Item information
    fetchItemInfo($item, $k) {
      // console.log(this.drugIdFromItemId($k))
      this.newItem[$k].drug_id = this.drugs.find(v => v.id === this.newItem[$k].name).drug_id
      this.newItem[$k].batch = this.drugs.find(v => v.id === this.newItem[$k].name).batch_no
      this.newItem[$k].expire_date = this.drugs.find(v => v.id === this.newItem[$k].name).expire_date
      // this.newItem[$k].quantity = this.drugs.find(v => v.id === this.newItem[$k].name).quantity
      this.newItem[$k].diff = this.drugs.find(v => v.id === this.newItem[$k].name).diff
      this.newItem[$k].notes = this.drugs.find(v => v.id === this.newItem[$k].name).notes
    },
    // END Fetch New Item information

    humanReadableDateConverter(date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },

    // START Check Permissions
    can($permit) {
      return !!this.$store.getters.user.permissions.find(v => v.name === $permit);
    },
    // END Check Permissions

    // START Rules
    nameRule: value => {
      const pattern = /^([^0-9]*)$/;
      return pattern.test(value) || 'Only Letters Accepted'
    },

    numberRule: v => {
      if (v !== null) {
        if (v.trim() === '' || null) return true;
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 1000000) return true;
      return 'Number Only Accepted';
    },
    // END Rules

    // START Fetch treatment
    fetchTreatments() {
      httpPOST('api/v1/treatment/show', {
        patient_uuid: this.patient_uuid
      })
          .then(({data}) => {
            this.treatments = data.data
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          console.log(data)
          // this.errorDialogMessage = data.message
          // this.errorDialogActive = true
        }
      }).finally(() => {
        this.loading_Dialog = false
      });
    },
    // END Fetch treatment

    storeTreatmentData(e) {
      if (
          this.treatment.drug &&
          this.treatment.dose &&
          this.treatment.per &&
          this.treatment.meal &&
          this.treatment.frequency
      ) {
        httpPOST('api/v1/treatment/store', {
          patient_uuid: this.$route.params.patient_uuid,
          drug: this.treatment.drug,
          per: this.treatment.per,
          meal: this.treatment.meal,
          dose: this.treatment.dose,
          frequency: this.treatment.frequency,
          notes: this.treatment.notes,
        })
            .then(({data}) => {
              this.treatments = data.data
              this.treatment.drug = null
              this.treatment.dose = null
              this.treatment.per = null
              this.treatment.meal = null
              this.treatment.frequency = null
              this.treatment.notes = null
            }).catch(({response: {data}}) => {
          console.log(data)
        });
        e.preventDefault()
        this.treatmentDialog = false
      }
    },

    // STAR Edit Treatment Data
    editTreatmentDialogAction($itemId) {
      this.treatment_edit.dialog = true
      this.treatment_edit.temp_id = $itemId
      this.treatment_edit.drug = this.treatments.find(v => v.id === $itemId).drug_id
      this.treatment_edit.frequency = this.treatments.find(v => v.id === $itemId).frequency
      this.treatment_edit.per = this.treatments.find(v => v.id === $itemId).day_we_mo
      this.treatment_edit.meal = this.treatments.find(v => v.id === $itemId).meal
      this.treatment_edit.dose = this.treatments.find(v => v.id === $itemId).dose
      this.treatment_edit.notes = this.treatments.find(v => v.id === $itemId).notes
    },

    editTreatmentData() {
      this.dialogs.loading.active = true

      httpPOST('api/v1/treatment/update', {
        id: this.treatment_edit.temp_id,
        patient_uuid: this.patient_uuid,
        drug_id: this.treatment_edit.drug,
        frequency: this.treatment_edit.frequency,
        per: this.treatment_edit.per,
        meal: this.treatment_edit.meal,
        dose: this.treatment_edit.dose,
        status: 0,
        notes: this.treatment_edit.notes,
      })
          .then(({data}) => {
            this.treatments = data.data

            this.treatment.drug = null
            this.treatment.per = null
            this.treatment.meal = null
            this.treatment.dose = null
            this.treatment.notes = null
            this.treatment.frequency = null
          })
          .catch(({response:{data}})=>{
            console.log(data)
          })
          .finally(() => {
            this.dialogs.loading.active = false
            this.treatment_edit.dialog = false
          });
    },
    // STAR Edit Treatment Data

    // START Delete Dialog and action
    deleteDialogPopup($title, $id) {
      this.dialogs.delete.title = $title
      this.dialogs.delete.temp_id = $id
      this.dialogs.delete.active = true
    },

    deleteDialogAction() {
      if (this.dialogs.delete.title === "treatment") {
        this.deleteTreatment()
      }
    },
    // END Delete Dialog and action

    // START Delete a treatment
    deleteTreatment() {
      this.dialogs.delete.loading = true

      httpDELETE('api/v1/treatment/destroy/' + this.dialogs.delete.temp_id + '/' + this.patient_uuid)
          .then(({data}) => {
            this.treatments = data.data
            // console.log(data.data)
          }).catch(({response:data}) => {
        console.log(data.response)
      })
      this.dialogs.delete.loading = false
      this.dialogs.delete.active = false
      this.dialogs.delete.temp_id = null
      this.dialogs.delete.title = null
    },
    // END Delete a treatment
  },

  created() {
    // START Fetch Drugs List that available in the pharmacy
    httpGET('api/v1/pharmacy/index')
        .then(({data}) => {
          this.drugs = data.data
          console.log(data.data)
          // console.log(data.inputInInventory)
          // console.log(data.inPharmacy)
        })
        .catch(({response:{data}})=>{
          console.log(data)
        })
        .finally(() => {
          this.dialog.loading.active = false
        });
    // END Fetch Drugs List that available in the pharmacy

    // Fetch treatment
    this.fetchTreatments()

    // START Fetch available drugs in the pharmacy
    httpGET('api/v1/pharmacy/index')
        .then(({data}) => {
          this.treatment.drugs = data.data
          // console.log(this.treatment.drugs)
        }).catch(({response: {data}}) => {
      // Redirect to login page if not authenticated
      if (!data || data.message === "Unauthenticated.") {
        this.$store.commit('SET_AUTHENTICATED', false)
      } else {
        console.log(data)
      }
    }).finally(() => {
      this.dialogs.loading.active = false
    });
    // END Fetch available drugs in the pharmacy
    console.log(this.treatments)
  }
}
</script>

<style scoped>

</style>