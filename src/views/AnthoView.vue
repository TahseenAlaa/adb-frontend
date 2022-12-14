<template>
  <v-container class="mt-16" fluid>
    <v-form v-model="valid" lazy-validation ref="form">
      <v-card class="px-6">
        <v-card-title>Anthropometric Measurements</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Physical Information</v-card-title>

        <v-row dense>
          <v-col cols="2">
            <v-text-field
                label="Weight in kg"
                v-model="weight"
                outlined
                dense
                :rules="[rules.required, weightRule]"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Height in cm"
                v-model="height"
                outlined
                dense
                :rules="[rules.required, heightRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Waist Circumference"
                v-model="waist_circumference"
                outlined
                dense
                :rules="[numberRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="HIP"
                v-model="hip"
                outlined
                dense
                :rules="[numberRule]"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-text-field
                label="BMI"
                v-model="bmi"
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
                dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="2">
            <v-text-field
                label="Father's Height"
                v-model="father_height"
                outlined
                dense
                :rules="[heightRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Mother's Height"
                v-model="mother_height"
                outlined
                dense
                :rules="[heightRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-radio-group
                v-model="gender"
                dense
                row
                readonly
                persistent-hint
                hint="ReadOnly"
            >
              <v-radio v-if="gender === 0" label="Male" :value="gender"></v-radio>
              <v-radio v-if="gender === 1" label="Female" :value="gender"></v-radio>
              <v-radio v-if="gender === null" label="Gender Not Found"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-btn
                @click="calcMidParentAndBMI()"
                class="deep-purple white--text"
                :disabled="!valid"
            >Calculate</v-btn>
          </v-col>

          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-text-field
                label="Mid-Parent Height"
                v-model="mid_parent_height"
                outlined
                dense
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6">
            <v-text-field
                label="Blood Pressure Systolic"
                v-model="blood_pressure_systolic"
                outlined
                dense
                :rules="[bloodPressureRule]"
                type="number"
                counter="3"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                label="Blood Pressure Diastolic"
                v-model="blood_pressure_diastolic"
                outlined
                dense
                :rules="[bloodPressureRule]"
                type="number"
                counter="3"
            ></v-text-field>
          </v-col>
        </v-row>
        <small>Note:// Mid-Parent Height will not calculated if gender is not specified.</small>
      </v-card>

      <v-row dense align="center" justify="center">
        <v-spacer></v-spacer>
        <v-alert
            type="success"
            class="mt-10 mr-4"
            v-if="successAlert"
            dense
        >Patient Information stored successfully!</v-alert>
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
                                   @click="$router.push({path: '/antho-history/' + item.uuid})"
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
            :disabled="!valid"
            :loading="loading"
        >
          <v-col @click="postAnthoData">
              <v-icon size="60">mdi-content-save</v-icon>
              <h3 class="text-capitalize">SAVE CHANGES</h3>
          </v-col>
        </v-btn>
      </v-row>
    </v-form>
    <!--    START Required Fields Dialog-->
    <v-row justify="center">
      <v-dialog
          v-model="required_fields_Dialog"
          persistent
          max-width="300"
      >
        <v-card>
          <v-card-title class="text-h5 red">
            Error
          </v-card-title>
          <v-card-text class="text-center pt-6 text-h5">
            Please enter patient information.
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                @click="required_fields_Dialog = false"
                dark
                class="deep-purple"
            >
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--    END Required Fields Dialog-->
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "AnthoView",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      patient_history_uuid: null,
      valid: false,
      loading: false,
      weight: null,
      height: null,
      waist_circumference: null,
      bmi: null,
      hip: null,
      father_height: null,
      mother_height: null,
      mid_parent_height: null,
      gender: null,
      successAlert: false,
      errorAlert: false,
      blood_pressure_systolic: null,
      blood_pressure_diastolic: null,
      historyDialog: false,
      patientHistoryList: [],
      rules: {
        required: value => !!value || 'Required.',
      },
      required_fields_Dialog: false
    }
  },

  methods: {

    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },

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
    calcMidParentAndBMI() {
      // Calc BMI
      if (this.weight && this.height) {
        let weight = parseInt(this.weight)
        let height = parseInt(this.height / 100)
        this.bmi = this.roundToTwo(weight / (height ^ 2))
      }

      // Calc Mid-Parent
      if (this.father_height && this.mother_height) {
        if (this.gender === 0) { // Male
          this.mid_parent_height = parseInt(((parseInt(this.mother_height) + 13) + parseInt(this.father_height)) / 2)
        } else if (this.gender === 1) { // Female
          this.mid_parent_height = parseInt(((parseInt(this.father_height) - 13) + parseInt(this.mother_height)) / 2)
        }
      }
    },
    roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
    },

    // START Rules
    numberRule: v  => {
      if (v !== null) {
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
      return 'Number has to be between 0 and 999';
    },
    weightRule: v  => {
      if (v !== null) {
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 300) return true;
      return 'Number has to be between 1 and 300';
    },
    heightRule: v  => {
      if (v !== null) {
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 210) return true;
      return 'Number has to be between 1 and 210';
    },
    bloodPressureRule: v => {
      if (v !== null) {
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 300) return true;
      return 'Number has to be between 0 and 300';
    },
    // END Rules

    postAnthoData() {
      // if (
      //     !this.weight ||
      //     !this.height ||
      //     !this.weight.trim() ||
      //     !this.height.trim()
      // ) {
      //   this.required_fields_Dialog = true
      // } else {
        this.loading = true
        // this.valid = false
        httpPOST('api/v1/patients/update-patient-history-by-antho/' + this.patient_history_uuid, {
          weight: this.weight,
          height: this.height,
          waist_circumference: this.waist_circumference,
          bmi: this.bmi,
          hip: this.hip,
          father_height: this.father_height,
          mother_height: this.mother_height,
          mid_height: this.mid_parent_height,
          blood_pressure_systolic: this.blood_pressure_systolic,
          blood_pressure_diastolic: this.blood_pressure_diastolic,
        }).then(()=>{
          setTimeout(() => {
            this.$router.push({path: '/search/antho'})
          }, 2000)
        }).catch(({response:{data}})=>{
          this.errorAlert = true
          console.log(data)
        }).finally(() => {
          this.loading = false
        });
      //   this.loading = false
      // }
    },
  },
  created() {
    //  START Fetch patient history from the last visit
    httpGET('api/v1/patients/show-patient-history/' + this.patient_uuid)
        .then(({data}) => {
          this.patient_history_uuid = data.data.uuid
          this.weight = data.data.weight
          this.height = data.data.height
          this.waist_circumference = data.data.waist_circumference
          this.hip = data.data.hip
          this.bmi = data.data.bmi
          this.blood_pressure_systolic = data.data.blood_pressure_systolic
          this.blood_pressure_diastolic = data.data.blood_pressure_diastolic
          this.father_height = data.data.father_height
          this.mother_height = data.data.mother_height
          this.mid_parent_height = data.data.mid_height
          this.gender = data.data.gender
        }).catch(({response:{data}})=>{
      console.log(data)
    });
    //  END Fetch patient history from the last visit

    // START Fetch Gender
    httpPOST('api/v1/patients/fetch-gender', {
      patient_uuid: this.patient_uuid
    })
        .then(({data}) => {
          this.gender = data.data.gender
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
    // End Fetch Gender
  },
}
</script>

<style scoped>

</style>