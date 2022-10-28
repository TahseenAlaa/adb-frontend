<template>

  <v-container class="mb-16">
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
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

      <v-expansion-panel>
      <v-expansion-panel-header><h2>Doctors</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form>
            <v-card class="px-6">
              <v-card-title>Doctors</v-card-title>
              <v-card-subtitle>Enter the data of the patient</v-card-subtitle>

<!--              START Symptoms -->
              <div class="mt-6">
                <v-row dense align="center" justify="center">
                  <v-card-title class="subtitle-2">Symptoms</v-card-title>
                  <v-spacer></v-spacer>
                  <div>
                    <v-col>
                      <v-dialog
                          v-model="symptoms.Dialog"
                          max-width="800px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              class="deep-purple white--text"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            ADD NEW Symptoms
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Adding new Symptoms</span>
                          </v-card-title>
                          <v-card-subtitle class="subtitle-1">Please fill the information below to add a Symptoms record to patient visit record.</v-card-subtitle>
                          <v-card-text>
                            <v-card-subtitle class="subtitle-2">Symptoms Information</v-card-subtitle>
                            <v-container>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-autocomplete
                                      label="Symptoms Type"
                                      v-model="symptoms.type_model"
                                      outlined
                                      dense
                                      :items="symptoms.types"
                                      item-text="title"
                                      item-value="id"
                                      multiple
                                      clearable
                                      solo
                                      chips
                                      small-chips
                                      deletable-chips
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-textarea
                                      label="Symptoms Notes"
                                      v-model="symptoms.notes"
                                      outlined
                                      dense
                                  >
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
                                @click="symptoms.Dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="storeSymptomsData"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </div>
                </v-row>

<!--                START Symptoms Edit -->
                <div>
                  <v-col>
                    <v-dialog
                        v-model="symptoms.edit.dialog"
                        max-width="800px"
                    >
                      <v-card>
                        <v-card-title>
                          <span class="text-h5">Edit Symptom</span>
                        </v-card-title>
                        <v-card-subtitle class="subtitle-1">Please fill the information below to edit a Symptom record of the patient.</v-card-subtitle>
                        <v-card-text>
                          <v-card-subtitle class="subtitle-2">Symptoms Information</v-card-subtitle>
                          <v-container>
                            <v-row>
                              <v-col
                                  cols="12"
                              >
                                <v-autocomplete
                                    label="Symptoms Type"
                                    v-model="symptoms.edit.value"
                                    outlined
                                    dense
                                    :items="symptoms.types"
                                    item-text="title"
                                    item-value="id"
                                    clearable
                                    solo
                                    chips
                                    small-chips
                                    deletable-chips
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col
                                  cols="12"
                              >
                                <v-textarea
                                    label="Symptoms Notes"
                                    v-model="symptoms.edit.notes"
                                    outlined
                                    dense
                                >
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
                              @click="symptoms.edit.dialog = false"
                          >
                            Close
                          </v-btn>
                          <v-btn
                              class="deep-purple white--text"
                              text
                              @click="editSymptomData"
                          >
                            Edit
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </div>
<!--                END Symptoms Edit -->

                <v-simple-table>
                  <template>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Notes</th>
                      <th>Date of Symptoms</th>
                      <th>Doctor's Name</th>
                      <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in symptoms.list">
                      <td>{{ item.symptom.title }}</td>
                      <td>{{ item.clinical_notes }}</td>
                      <td>{{ humanReadableDateConverter(item.created_at) }}</td>
                      <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
                      <td>
                        <v-btn
                            x-small
                            color="teal darken-1"
                            dark
                            class="px-1 mx-1"
                            @click="editSymptomDialogAction(item.id)"
                        >
                          <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                          Edit
                        </v-btn>
                        <v-btn
                            x-small
                            color="deep-orange darken-1"
                            dark
                            class="px-1 mx-1"
                            @click="deleteDialogPopup('Symptom', item.id)"
                        >
                          <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                          Delete
                        </v-btn>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
<!--              END Symptoms -->

<!--              START medical lab tests-->
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
                                  <v-autocomplete
                                      label="Test Group"
                                      v-model="test.group_value"
                                      outlined
                                      dense
                                      :items="test.group"
                                      item-text="test_group"
                                      item-value="test_group"
                                      @change="fetchTestList"
                                  ></v-autocomplete>
                                  <v-autocomplete
                                      label="Test Name"
                                      v-model="test.list_value"
                                      outlined
                                      dense
                                      :items="test.list"
                                      item-text="test_name"
                                      item-value="id"
                                      clearable
                                      solo
                                      chips
                                      small-chips
                                      deletable-chips
                                      multiple
                                  ></v-autocomplete>
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
                                      v-model="test.notes"
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
                                @click="storeTestData"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </div>
                </v-row>

                <!--                START Test Edit -->
                <div>
                  <v-col>
                    <v-dialog
                        v-model="test.edit.dialog"
                        max-width="800px"
                    >
                      <v-card>
                        <v-card-title>
                          <span class="text-h5">Edit Test</span>
                        </v-card-title>
                        <v-card-subtitle class="subtitle-1">Please fill the information below to edit a test record of the patient.</v-card-subtitle>
                        <v-card-text>
                          <v-card-subtitle class="subtitle-2">Test Information</v-card-subtitle>
                          <v-container>
                            <v-row>
                              <v-col
                                  cols="12"
                              >
                                <v-autocomplete
                                    label="Test Group"
                                    v-model="test.group_value"
                                    outlined
                                    dense
                                    :items="test.group"
                                    item-text="test_group"
                                    item-value="test_group"
                                    @change="fetchTestListForEdit"
                                    @load="fetchTestListForEdit"
                                ></v-autocomplete>
                                <v-autocomplete
                                    label="Test Name"
                                    v-model="test.list_value"
                                    outlined
                                    dense
                                    :items="test.list"
                                    item-text="test_name"
                                    item-value="id"
                                    clearable
                                    solo
                                    chips
                                    small-chips
                                    deletable-chips
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col
                                  cols="12"
                              >
                                <v-textarea
                                    label="Test Notes"
                                    v-model="test.edit.notes"
                                    outlined
                                    dense
                                >
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
                              @click="test.edit.dialog = false"
                          >
                            Close
                          </v-btn>
                          <v-btn
                              class="deep-purple white--text"
                              text
                              @click="editTestData"
                          >
                            Edit
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </div>
                <!--                END Test Edit -->

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
                      <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="test in tests">
                      <td>{{ test.test_groups.test_group }}</td>
                      <td>{{ test.test_groups.test_name }}</td>
                      <td>{{ test.doctor_notes }}</td>
                      <td v-if="test.sampling_status === 0"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
                      <td v-if="test.sampling_status === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
                      <td v-if="test.sampling_status === 1"><span class="green px-2 py-2 rounded-xl">Done</span></td>
                      <td v-if="test.result === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
                      <td v-if="test.result"><span class="green px-2 py-2 rounded-xl">Done</span></td>
                      <td>{{ humanReadableDateConverter(test.updated_at) }}</td>
                      <td>{{ test.updated_user? test.updated_user.full_name : test.user.full_name }}</td>
                      <td>
                        <div
                            v-if="!test.sampling_status"
                        >
                          <v-btn
                              x-small
                              color="teal darken-1"
                              dark
                              class="px-1 mx-1"
                              @click="editTestDialogAction(test.id)"
                          >
                            <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                            Edit
                          </v-btn>
                          <v-btn
                              x-small
                              color="deep-orange darken-1"
                              dark
                              class="px-1 mx-1"
                              @click="deleteDialogPopup('Test', test.id)"
                          >
                            <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                            Delete
                          </v-btn>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
<!--              END medical lab tests-->

<!--              START Diagnosis -->
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
                                  <v-autocomplete
                                      label="Diagnosis Type"
                                      v-model="diagnosis_type_model"
                                      outlined
                                      dense
                                      :items="diagnosis_types"
                                      item-text="title"
                                      item-value="id"
                                      multiple
                                      clearable
                                      solo
                                      chips
                                      small-chips
                                      deletable-chips
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col
                                    cols="12"
                                >
                                  <v-textarea
                                      label="Diagnosis Notes"
                                      v-model="diagnosis_notes"
                                      outlined
                                      dense
                                  >
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
                                @click="diagnosisDialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="storeDiagnosisData"
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
                      <th>Diagnosis Notes</th>
                      <th>Date of Diagnosis</th>
                      <th>Doctor's Name</th>
                      <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="$item in diagnosis_list">
                      <td>{{ $item.diagnosis.title }}</td>
                      <td>{{ $item.diagnosis_notes }}</td>
                      <td>{{ humanReadableDateConverter($item.created_at) }}</td>
                      <td>{{ $item.user.full_name }}</td>
                      <td>
                        <v-btn
                            x-small
                            color="teal darken-1"
                            dark
                            class="px-1 mx-1"
                        >
                          <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                          Edit
                        </v-btn>
                        <v-btn
                            x-small
                            color="deep-orange darken-1"
                            dark
                            class="px-1 mx-1"
                            @click="deleteDialogPopup('diagnosis', $item.id)"
                        >
                          <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                          Delete
                        </v-btn>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
<!--              END Diagnosis -->

<!--              START Treatment -->
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
                                  <v-autocomplete
                                      label="Drugs"
                                      outlined
                                      dense
                                      :items="['Item1', 'Item2', 'Item3', 'Item4', 'Item5']"
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                              <v-row dense>
                                <v-col
                                    cols="3"
                                >
                                  <v-autocomplete
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
                                      label="Per"
                                      outlined
                                      dense
                                      :items="['Day', 'Week', 'Month']"
                                  ></v-autocomplete>
                                </v-col>
                                <v-col
                                    cols="3"
                                >
                                  <v-autocomplete
                                      label="Meal"
                                      outlined
                                      dense
                                      :items="['Before Meal', 'In Meal', 'After Meal', 'Without Preference']"
                                  ></v-autocomplete>
                                </v-col>
                                <v-col
                                    cols="3"
                                >
                                  <v-text-field
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
                                @click="treatmentDialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                                class="deep-purple white--text"
                                text
                                @click="storeTreatmentData"
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
                      <th>Drug</th>
                      <th>Dose</th>
                      <th>Status</th>
                      <th>Date of Adding Record</th>
                      <th>Doctor's Name</th>
                      <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in treatments">
                      <td>{{ item.name }}</td>
                      <td>{{ item.dose }}</td>
                      <td v-if="item.status === 0"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
                      <td v-if="item.status === null"><span class="yellow px-2 py-2 rounded-xl">...Pending</span></td>
                      <td v-if="item.status === 1"><span class="green px-2 py-2 rounded-xl">Done</span></td>
                      <td>{{ item.created_at }}</td>
                      <td>{{ item.created_by }}</td>
                      <td>
                        <v-btn
                            x-small
                            color="teal darken-1"
                            dark
                            class="px-1 mx-1"
                            @click=""
                        >
                          <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                          Edit
                        </v-btn>
                        <v-btn
                            x-small
                            color="deep-orange darken-1"
                            dark
                            class="px-1 mx-1"
                        >
                          <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                          Delete
                        </v-btn>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
<!--              END Treatment -->

              <v-row dense class="py-12">
                <v-col cols="10">
                  <v-textarea
                      label="Clinical Notes"
                      v-model="clinical_notes"
                      outlined
                      dense
                  ></v-textarea>
                </v-col>
                <v-col cols="2">
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

            </v-card>
          </v-form>
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
          <v-icon size="60">mdi-history</v-icon>
          <h3 class="text-capitalize">PREVIOUS VISIT</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
      >
        <v-col @click="postPatientData">
          <v-icon size="60">mdi-content-save</v-icon>
          <h3 class="text-capitalize">SAVE CHANGES</h3>
        </v-col>
      </v-btn>
    </v-row>
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
<!--    START Loading Dialog -->
    <LoadingDialogCompo :loading_-dialog="dialogs.loading.active" />
<!--    END Loading Dialog -->
  </v-container>

</template>

<script>
import {httpDELETE, httpGET, httpPOST} from "@/utils/utils";
import ReceptionCompo from "@/components/ReceptionCompo";
import AnthoCompo from "@/components/AnthoCompo";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "DoctorsView",
  components: {
    ReceptionCompo,
    AnthoCompo,
    LoadingDialogCompo
  },
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      patient_history_uuid: null,
      diagnosis_type_model: null,
      diagnosis: [],
      diagnosis_types: [],
      diagnosis_notes: null,
      diagnosisDialog: false,
      diagnosis_list: null,
      treatmentDialog: false,
      labDialog: false,
      autoOpenPanel:[2],
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
      DateOfNextVisitMenu: false,
      successAlert: false,
      errorAlert: false,
      created_by: null,
      created_at: null,
      treatment_name: null,
      treatment_dose: null,
      treatments: [],
      test_name: null,
      test_notes: null,
      tests: [],
      symptoms: {
        Dialog: false,
        edit: {
          dialog: false,
          value: null,
          notes: null,
          temp_id: null
        },
        type_model: [],
        types: [],
        notes: null,
        list: [],
        delete_dialog: {
          active: false,
          title: 'Delete Symptom',
          url: null,
          loading: false
        }
      },
      test: {
        dialog: false,
        edit: {
          dialog: false,
          group_value: null,
          test_value: null,
          notes: null,
          temp_id: null,
          temp_group_value: null,
          temp_test_value: null
        },
        group: [],
        group_value: null,
        list: [],
        list_value: null,
        notes: null
      },
      receptionView: {
        date_of_birthday: null,
        smoker: null,
        drinker: null,
        education_qualification: null,
        gestationalDM: null,
        hypertension: null,
        smbg: null,
        ihd: null,
        cva: null,
        pvd: null,
        neuropathy: null,
        retinopathy: null,
        non_proliferative: null,
        maculopathy: null,
        insulin: null,
        amputation: null,
        ed: null,
        nafld: null,
        dermopathy: null,
        glycemicControl: null,
        lipidControl: null,
        full_name: null,
        phone: null,
        occupation: null,
        marital_status: null,
        address: null,
        family_history_of_dm: null,
        gestational_dm: null,
        weight_of_baby_at_birthday: null,
        family_history_of_ihd: null,
        parity: null,
        weight: null,
        height: null,
        waist_circumference: null,
        bmi: null,
        hip: null,
        diabetic_food: null,
        duration_of_insulin: null,
        duration_of_dm: null,
        glycemic_control: null,
        lipid_control: null,
        pressure_control: null,
        father_height: null,
        mother_height: null,
        mid_parent_height: null,
        first_a1c: null,
        second_a1c: null,
        referral: null,
        proliferative_dr: null,
        gender: null,
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
      }
    }
  },

  mounted() {
    this.dialogs.loading.active = true
  },

  methods: {
    postPatientData(e) {
      httpPOST('api/v1/patients/updatePatientHistory', {
        patient_uuid: this.patient_uuid,
        clinical_notes: this.clinical_notes,
        next_visit: this.date_of_next_visit,
      })
      .then(({data})=>{
        this.successAlert = true
        setTimeout(() => {
          this.$router.push({path: `/viewpanels/${this.patient_uuid}`})
        }, 2000)
        // console.log(data)
      }).catch(({response:{data}})=>{
        this.errorAlert = true
        console.log(data)
      });
      e.preventDefault()
    },

    calcBMI() {
      if (this.weight && this.height) {
        let weight = parseInt(this.weight)
        let height = parseInt(this.height/100)
        this.bmi = weight / (height ^ 2)
      }
    },
    storeDiagnosisData(e) {
      this.dialogs.loading.active = true
        httpPOST('api/v1/diagnosis/store', {
          patient_uuid: this.$route.params.patient_uuid,
          diagnosis_id: this.diagnosis_type_model,
          diagnosis_notes: this.diagnosis_notes
        })
        .then(({data})=>{
          this.diagnosis_list = data.data
          console.log(data.data)
        }).catch(({response:{data}})=>{
          console.log(data)
        });
        e.preventDefault()
        this.diagnosisDialog = false
      this.dialogs.loading.active = false
      this.diagnosis_type_model = null
      this.diagnosis_notes = null
    },

    storeTreatmentData(e) {
      if (this.treatment_name && this.treatment_dose) {
        httpPOST('api/v1/treatment/store', {
          patient_uuid: this.$route.params.patient_uuid,
          name: this.treatment_name,
          dose: this.treatment_dose,
        })
        .then(({data}) => {
          this.treatments.push(data.data)
          data.data.created_by = data.doctor_name
          data.data.created_at = this.humanReadableDateConverter(data.data.created_at)
          console.log(this.diagnosis)
        }).catch(({response: {data}}) => {
          console.log(data)
        });
        e.preventDefault()
        this.treatmentDialog = false
      }
    },

    storeTestData(e) {
      if (this.test.group_value && this.test.list_value) {
        httpPOST('api/v1/lab/store', {
          patient_uuid: this.$route.params.patient_uuid,
          test_id: this.test.list_value,
          notes: this.test.notes,
        })
        .then(({data}) => {
          this.tests = data.data
          console.log(data.data)
        }).catch(({response: {data}}) => {
          console.log(data)
        });
        e.preventDefault()
      }
      this.labDialog = false
      this.test.group_value = null
      this.test.list_value = null
      this.test.notes = null
    },

    // START Store Symptoms Data
    storeSymptomsData() {
      if (this.symptoms.type_model) {
        httpPOST('api/v1/symptoms/store', {
          patient_uuid: this.patient_uuid,
          symptoms_type_id: this.symptoms.type_model,
          symptoms_notes: this.symptoms.notes,
        })
            .then(({data}) => {
              this.symptoms.Dialog = false
              // console.log(data.data)
            }).catch(({response: {data}}) => {
              console.log(data)
            });
        this.symptoms.type_model = null
        this.symptoms.notes = null
        // START Fetch symptoms of this patient
        httpGET('api/v1/symptoms/show/' + this.patient_uuid)
            .then(({data}) => {
              this.symptoms.list = null
              this.symptoms.list = data.data
              console.log(data.data)
            }).catch(({response:{data}})=>{
          console.log(data)
        });
        // END Fetch symptoms of this patient
      }
    },
    // END Store Symptoms Data

    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },

    // START fetch test list
    fetchTestList() {
      httpPOST('api/v1/lab-test-groups/index-test-names', {
        test_group: this.test.group_value
      }).then(({data}) => {
        this.test.list = data.data
        // console.log(data.data)
      }).catch(({response: {data}}) => {
        console.log(data)
      });
    },
    // END fetch test list

    // START fetch test list for edit
    fetchTestListForEdit() {
      httpPOST('api/v1/lab-test-groups/index-test-names', {
        test_group: this.test.group_value
      }).then(({data}) => {
        this.test.list = data.data
        // console.log(data.data)
      }).catch(({response: {data}}) => {
        console.log(data)
      });
    },
    // END fetch test list for edit


    // START Test dialog and action
    editTestDialogAction($itemId) {
      this.dialogs.loading.active = true

      this.test.edit.temp_id = $itemId
      this.test.edit.dialog = true
      // console.log($itemId)
      this.test.group_value = this.tests.find(v => v.id === $itemId).test_groups.test_group
      this.fetchTestListForEdit()
      this.test.list_value = this.tests.find(v => v.id === $itemId).test_groups.id
      this.test.edit.notes = this.tests.find(v => v.id === $itemId).doctor_notes
      // console.log(this.test.list_value)

      this.dialogs.loading.active = false
    },

    editTestData() {
      this.dialogs.loading.active = true

      httpPOST('api/v1/lab/edit' , {
        patient_uuid: this.patient_uuid,
        test_id: this.test.list_value,
        doctor_notes: this.test.edit.notes
      })
          .then(({data}) => {
            this.tests = data.data
            // console.log(data.data)
          })
          .catch(({response:{data}})=>{
            console.log(data)
          })
          .finally(() => {
            this.test.edit.dialog = false
            this.dialogs.loading.active = false
          });
    },
    // END Test dialog and action

    // START Delete Dialog and action
    deleteDialogPopup($title, $id) {
      this.dialogs.delete.title = $title
      this.dialogs.delete.temp_id = $id
      this.dialogs.delete.active = true
    },

    deleteDialogAction() {
      if (this.dialogs.delete.title === 'Symptom') {
        this.deleteSymptom()
      } else if (this.dialogs.delete.title === 'Test') {
        this.deleteTest()
      } else if (this.dialogs.delete.title === 'diagnosis') {
        this.deleteDiagnosis()
      }
    },
    // END Delete Dialog and action

    // START Delete a symptom
    deleteSymptom() {
      this.dialogs.delete.loading = true
      httpDELETE('api/v1/symptoms/delete/' + parseInt(this.dialogs.delete.temp_id) + '/' + this.patient_uuid)
          .then(({data}) => {
            this.symptoms.list = []
            this.symptoms.list = data.data
            console.log(data.data)
          }).catch(({response:data}) => {
        console.log(data.response)
      })
      this.dialogs.delete.loading = false
      this.dialogs.delete.active = false
      this.dialogs.delete.temp_id = null
      this.dialogs.delete.title = null
    },
    // END Delete a symptom

    // START Edit symptom dialog action
    editSymptomDialogAction($itemId) {
      this.symptoms.edit.dialog = true
      this.symptoms.edit.temp_id = $itemId
      this.symptoms.edit.value = this.symptoms.list.find(v => v.id ===$itemId).symptom
      this.symptoms.edit.notes = this.symptoms.list.find(v => v.id ===$itemId).clinical_notes
    },
    // END Edit symptom dialog action

    // START Edit symptom
    editSymptomData() {
      this.dialogs.loading.active = true

      httpPOST('api/v1/symptoms/edit', {
        patient_uuid: this.patient_uuid,
        id: this.symptoms.edit.temp_id,
        symptoms_id: this.symptoms.edit.value,
        clinical_notes: this.symptoms.edit.notes,
      }).then(({data}) => {
        this.symptoms.list = data.data
        this.symptoms.edit.dialog = false
      }).catch(({response:{data}})=>{
        console.log(data)
      }).finally(() => {
        this.dialogs.loading.active = false
      });
    },
    // END Edit symptom

    // START delete a test
    deleteTest() {
      this.dialogs.delete.loading = true

      httpDELETE('api/v1/lab/destroy/' + this.dialogs.delete.temp_id + '/' + this.patient_uuid)
          .then(({data}) => {
            this.tests = data.data
            // console.log(data.data)
          }).catch(({response:data}) => {
        console.log(data.response)
      })
      this.dialogs.delete.loading = false
      this.dialogs.delete.active = false
      this.dialogs.delete.temp_id = null
      this.dialogs.delete.title = null
    },
    // END delete a test

    // START Delete a diagnosis
    deleteDiagnosis() {
      this.dialogs.delete.loading = true

      httpDELETE('api/v1/diagnosis/destroy/' + this.dialogs.delete.temp_id + '/' + this.patient_uuid)
          .then(({data}) => {
            this.diagnosis_list = data.data
            // console.log(data.data)
          }).catch(({response:data}) => {
        console.log(data.response)
      })
      this.dialogs.delete.loading = false
      this.dialogs.delete.active = false
      this.dialogs.delete.temp_id = null
      this.dialogs.delete.title = null
    }
    // END Delete a diagnosis
  },

  created() {
    this.dialogs.loading.active = true

    // START Fetch symptoms types list
    httpGET('api/v1/symptoms-types/index')
        .then(({data}) => {
          this.symptoms.types = data.data
        }).catch(({response:{data}})=>{
      console.log(data)
    });
    // END Fetch symptoms types list

    // START Fetch symptoms of this patient
    httpGET('api/v1/symptoms/show/' + this.patient_uuid)
        .then(({data}) => {
          this.symptoms.list = data.data
          console.log(data.data)
        }).catch(({response:{data}})=>{
      console.log(data)
    });
    // END Fetch symptoms of this patient

    // START Fetch lab tests with groups
    httpGET('api/v1/lab-test-groups/index-group-names')
        .then(({data}) => {
          this.test.group = data.data
          console.log(data.data)
        }).catch(({response: {data}}) => {
      console.log(data)
    });
    // END Fetch lab tests with groups

    // START Fetch the tests of this patient
    httpGET('api/v1/lab/' + this.patient_uuid)
        .then(({data}) => {
          this.tests = data.data
        }).catch(({response: {data}}) => {
          console.log(data)
        });
    // END Fetch the tests of this patient

    // START fetch diagnosis types
    httpGET('api/v1/diagnosis/types')
        .then(({data}) => {
          this.diagnosis_types = data.data
        }).catch(({response:{data}})=>{
          console.log(data)
    });
    // END fetch diagnosis types

    // START Fetch diagnosis list
    httpGET('api/v1/diagnosis/show/' + this.patient_uuid)
        .then(({data}) => {
          this.diagnosis_list = data.data
        }).catch(({response:{data}})=>{
          console.log(data)
        });
    // END Fetch diagnosis list

    // START Fetch Clinical Notes and next visit
    httpGET('api/v1/patients/show-patient-history/' + this.patient_uuid)
        .then(({data}) => {
          this.clinical_notes = data.data.clinical_notes
          this.date_of_next_visit = data.data.next_visit
        }).catch(({response:{data}})=>{
          console.log(data)
        }).finally(() => {
      this.dialogs.loading.active = false
    });
    // END Fetch Clinical Notes and next visit
  },
}
</script>

<style scoped>

</style>