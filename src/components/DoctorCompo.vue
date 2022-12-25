<template>

  <v-container class="mt-16" fluid>
          <v-card class="px-6">
            <v-card-title>Doctors</v-card-title>
            <v-card-subtitle>Find bellow the information history of the patient</v-card-subtitle>

            <!--              START Symptoms -->
            <div class="mt-6">
              <v-row dense align="center" justify="center">
                <v-card-title class="subtitle-2">Symptoms</v-card-title>
                <v-spacer></v-spacer>
              </v-row>

              <v-simple-table>
                <template>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Notes</th>
                    <th>Date of Symptoms</th>
                    <th>Doctor's Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in symptoms.list">
                    <td>{{ item.symptom.title }}</td>
                    <td>{{ item.clinical_notes }}</td>
                    <td>{{ humanReadableDateConverter(item.created_at) }}</td>
                    <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
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
                </div>
              </v-row>

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
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="test in tests">
                    <td>{{ test.test_groups.test_group }}</td>
                    <td>{{ test.test_groups.test_name }}</td>
                    <td>{{ test.doctor_notes }}</td>
                    <td v-if="test.sampling_status === 0"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
                    <td v-if="test.sampling_status === null"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
                    <td v-if="test.sampling_status === 1"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="20" color="green darken-3">mdi-check-circle</v-icon> Done</span></td>
                    <td v-if="test.result === null"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
                    <td v-if="test.result"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="20" color="green darken-3">mdi-check-circle</v-icon> Done</span></td>
                    <td>{{ humanReadableDateConverter(test.updated_at) }}</td>
                    <td>{{ test.updated_user? test.updated_user.full_name : test.user.full_name }}</td>
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
              </v-row>

              <v-simple-table>
                <template>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Diagnosis Notes</th>
                    <th>Date of Diagnosis</th>
                    <th>Doctor's Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="$item in diagnosis_list">
                    <td>{{ $item.diagnosis.title }}</td>
                    <td>{{ $item.diagnosis_notes }}</td>
                    <td>{{ humanReadableDateConverter($item.created_at) }}</td>
                    <td>{{ $item.updated_user? $item.updated_user.full_name : $item.user.full_name }}</td>
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
              </v-row>
            </div>
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

                    <td v-if="item.drugs.drug_type === 0"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl d-inline"><v-icon size="20" color="yellow darken-4">mdi-clock-time-four</v-icon> Pending</span></td>
                    <td v-if="item.drugs.drug_type === 1"><span class="blue-grey lighten-5 px-2 py-2 rounded-xl"><v-icon size="25" color="green darken-3">mdi-check-circle</v-icon> Done</span></td>

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
            <!--              END Treatment -->

            <v-row dense class="py-12">
              <v-col cols="10">
                <v-textarea
                    label="Clinical Notes"
                    v-model="clinical_notes"
                    outlined
                    dense
                    readonly
                    hint="ReadOnly"
                    persistent-hint
                ></v-textarea>
              </v-col>
              <v-col cols="2">
                <div>
                  <v-text-field
                      label="Date of Next Visit"
                      v-model="date_of_next_visit"
                      prepend-inner-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      hint="ReadOnly"
                      persistent-hint
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-card>
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "DoctorCompo",
  props: [
      'patient_uuid',
      'patient_history_uuid'
  ],
  methods: {
    humanReadableDateConverter (date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    },

    // START Fetch treatment
    fetchTreatments() {
      httpPOST('api/v1/history/show-treatments', {
        patient_history_uuid: this.patient_history_uuid
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
  },
  data() {
    return {
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
      diagnosis_edit: {
        dialog: false,
        type: null,
        notes: null,
        temp_id: null
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
      },
      treatment: {
        drugs: [],
        drug: null,
        frequency: null,
        per: null,
        meal: null,
        notes: null
      }
    }
  },

  mounted() {
    this.dialogs.loading.active = true
  },

  created() {
    this.dialogs.loading.active = true

    // Fetch treatment
    this.fetchTreatments()

    // START Fetch symptoms of this patient
    httpPOST('api/v1/history/show-symptoms', {
      patient_history_uuid: this.patient_history_uuid
    })
        .then(({data}) => {
          this.symptoms.list = data.data
          // console.log(data.data)
        }).catch(({response:{data}})=>{
      console.log(data)
    });
    // END Fetch symptoms of this patient

    // START Fetch the tests of this patient
    httpPOST('api/v1/history/show-tests', {
      patient_history_uuid: this.patient_history_uuid
    })
        .then(({data}) => {
          this.tests = data.data
        }).catch(({response: {data}}) => {
      console.log(data)
    });
    // END Fetch the tests of this patient


    // START Fetch diagnosis list
    httpPOST('api/v1/history/show-diagnosis', {
      patient_history_uuid: this.patient_history_uuid
    })
        .then(({data}) => {
          this.diagnosis_list = data.data
        }).catch(({response:{data}})=>{
      console.log(data)
    });
    // END Fetch diagnosis list

    // START Fetch Clinical Notes and next visit
    httpPOST('api/v1/history/show-history', {
      patient_history_uuid: this.patient_history_uuid
    })
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