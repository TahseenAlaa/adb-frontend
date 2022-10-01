<template>

  <v-container>
    <v-form>
      <v-card class="px-6">
        <v-card-title>Reception & Statistics</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

        <v-row dense>
          <v-col cols="12">
            <v-text-field
                label="Full Name"
                v-model="full_name"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <div>
              <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      label="Date of Birthday"
                      v-model="date_of_birthday"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      dense
                      outlined
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date_of_birthday"
                    :active-picker.sync="activePicker"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1900-01-01"
                    @change="save"
                ></v-date-picker>
              </v-menu>
            </div>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Phone"
                v-model="phone"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="gender"
                label="Gender"
                v-model="selectedGender"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Occupation"
                v-model="occupation"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="educationQualification"
                label="Education Qualification"
                v-model="education_qualification"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="maritalStatus"
                label="Marital Status"
                v-model="marital_status"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Address"
                v-model="address"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="smoker"
                label="Smoker"
                v-model="selectedSmoker"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="drinker"
                label="Drinker"
                v-model="selectedDrinker"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="familyHistoryOfDM"
                label="Family History of DM"
                v-model="family_history_of_dm"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="gestationalDM"
                label="Gestational DM"
                v-model="gestational_dm"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Weight of Baby at Birthday"
                v-model="weight_of_baby_at_birthday"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="hypertension"
                label="Hypertension"
                v-model="selectedHypertension"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Family History of IHD"
                v-model="family_history_of_ihd"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Parity"
                v-model="parity"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="smbg"
                label="SMBG"
                v-model="selectedSmbg"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="ihd"
                label="IHD"
                v-model="selectedIhd"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="cva"
                label="CVA"
                v-model="selectedCva"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6">
            <v-select
                :items="pvd"
                label="PVD"
                v-model="selectedPvd"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
                :items="neuropathy"
                label="Neuropathy"
                v-model="selectedNeuropathy"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-card-title class="subtitle-2">Physical Information</v-card-title>
        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Weight in kg"
                v-model="weight"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Height in cm"
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
                readonly
                hint="ReadOnly"
                persistent-hint
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn
            class="deep-purple white--text"
            @click="calcBMI"
            >
              Calculate
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="HIP"
                v-model="hip"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="retinopathy"
                label="Retinopathy"
                v-model="selectedRetinopathy"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="nonProliferative"
                label="Non proliferative"
                v-model="selectedNonProliferative"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="proliferativeDR"
                label="Proliferative DR"
                v-model="selectedProliferativeDR"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="maculopathy"
                label="Maculopathy"
                v-model="selectedMaculopathy"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="insulin"
                label="Insulin"
                v-model="selectedInsulin"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="amputation"
                label="Amputation"
                v-model="selectedAmputation"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="ed"
                label="ED"
                v-model="selectedEd"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="nafld"
                label="NAFLD"
                v-model="selectedNafld"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="dermopathy"
                label="Dermopathy"
                v-model="selectedDermopathy"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="diabeticFood"
                label="Diabetic Food"
                v-model="diabetic_food"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <div>
              <v-menu
                  v-model="DateOfInsulinMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      label="Date of Insulin"
                      v-model="date_of_insulin"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date_of_insulin"
                    @input="DateOfInsulinMenu = false"
                ></v-date-picker>
              </v-menu>
            </div>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Duration of Insulin"
                v-model="duration_of_insulin"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Duration of DM"
                v-model="duration_of_dm"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="glycemicControl"
                label="Glycemic Control"
                v-model="glycemic_control"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="lipidControl"
                label="Lipid Control"
                v-model="lipid_control"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="2">
            <v-text-field
                label="Pressure Control"
                v-model="pressure_control"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Father's Height"
                v-model="father_height"
                outlined
                dense
                :rules="[numberRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Mother's Height"
                v-model="mother_height"
                outlined
                dense
                :rules="[numberRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Mid-Parent Height"
                v-model="mid_parent_height"
                outlined
                dense
                readonly
                hint="ReadOnly"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn
                @click="calcMidParentHeight()"
                class="deep-purple white--text"
            >Calculate</v-btn>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6">
            <v-text-field
                label="First A1c"
                v-model="first_a1c"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                label="Second A1c"
                v-model="second_a1c"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
                label="Source of referral"
                v-model="source_of_referral"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>
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
            type="error"
            class="mt-10 mr-4"
            v-if="errorAlert"
            dense
        >Save data Failed!</v-alert>
        <v-btn
            @click="postReceptionData"
            class="mt-6 deep-purple white--text"
        >
          <v-col>
            <span class="text-capitalize">Create Patient Profile</span>
          </v-col>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>

</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  data() {
    return {
      successAlert: false,
      errorAlert: false,
      date_of_insulin: null,
      DateOfInsulinMenu: null,
      activePicker: null,
      date_of_birthday: null,
      menu: false,
      gender: ['Male', 'Female', 'Other'],
      maritalStatus: ['Single', 'Married', 'Divorced'],
      smoker: ['Yes', 'No'],
      drinker: ['Yes', 'No'],
      educationQualification :['Yes', 'No'],
      familyHistoryOfDM: ['Yes', 'No'],
      gestationalDM: ['Yes', 'No'],
      hypertension: ['Yes', 'No'],
      smbg: ['Yes', 'No'],
      ihd: ['Yes', 'No'],
      cva: ['Yes', 'No'],
      pvd: ['Yes', 'No'],
      neuropathy: ['Yes', 'No'],
      retinopathy: ['Yes', 'No'],
      nonProliferative: ['Yes', 'No'],
      proliferativeDR: ['Yes', 'No'],
      maculopathy: ['Yes', 'No'],
      insulin: ['Yes', 'No'],
      amputation: ['Yes', 'No'],
      ed: ['Yes', 'No'],
      nafld: ['Yes', 'No'],
      dermopathy: ['Yes', 'No'],
      diabeticFood: ['Yes', 'No'],
      glycemicControl: ['Yes', 'No'],
      lipidControl: ['Yes', 'No'],
      full_name: null,
      dateOfBirthday: null,
      phone: null,
      occupation: null,
      education_qualification: null,
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
      source_of_referral: null,
      selectedGender: null,
      selectedCva: null,
      selectedPvd: null,
      selectedNeuropathy: null,
      selectedRetinopathy: null,
      selectedNonProliferative: null,
      selectedProliferativeDR: null,
      selectedMaculopathy: null,
      selectedInsulin: null,
      selectedAmputation: null,
      selectedEd: null,
      selectedNafld: null,
      selectedDermopathy: null,
      selectedSmoker: null,
      selectedDrinker: null,
      selectedSmbg: null,
      selectedIhd: null,
      selectedHypertension: null,
      patient_uuid: this.$route.params.patient_uuid,
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    postReceptionData(e) {
      httpPOST('api/v1/patients/store', {
        full_name: this.full_name,
        phone: this.phone,
        gender: this.selectedGender,
        birthday: this.date_of_birthday,
        occupation: this.occupation,
        address: this.address,
        smoker: this.selectedSmoker,
        drinker: this.selectedDrinker,
        family_dm: this.family_history_of_dm,
        gestational_dm: this.gestational_dm,
        weight_baby: this.weight_of_baby_at_birthday,
        hypert: this.selectedHypertension,
        family_ihd: this.family_history_of_ihd,
        parity: this.parity,
        smbg: this.selectedSmbg,
        ihd: this.selectedIhd,
        cva: this.selectedCva,
        pvd: this.selectedPvd,
        neuro: this.selectedNeuropathy,
        weight: this.weight,
        height: this.height,
        wc: this.waist_circumference,
        bmi: this.bmi,
        hip: this.hip,
        retino: this.selectedRetinopathy,
        nonpro: this.selectedNonProliferative,
        prolif: this.selectedProliferativeDR,
        macul: this.selectedMaculopathy,
        insul: this.selectedInsulin,
        amput: this.selectedAmputation,
        ed: this.selectedEd,
        nafld: this.selectedNafld,
        dermo: this.selectedDermopathy,
        dfoot: this.diabetic_food,
        date_insulin: this.date_of_insulin,
        duration_insulin: this.duration_of_insulin,
        duration_dm: this.duration_of_dm,
        glycemic: this.glycemic_control,
        lipid: this.lipid_control,
        pressure: this.pressure_control,
        f_height: this.father_height,
        m_height: this.mother_height,
        mid_height: this.mid_parent_height,
        fa1c: this.first_a1c,
        sa2c: this.second_a1c,
        referral: this.source_of_referral
      })
      .then(({data})=>{
        this.successAlert = true
        setTimeout(() => {this.$router.push({path: '/'})}, 2000)
        console.log(data)
      }).catch(({response:{data}})=>{
        console.log(data)
      });
      e.preventDefault()
    },
    calcMidParentHeight() {
      if (this.father_height && this.mother_height) {
        this.mid_parent_height = (parseInt(this.father_height) + parseInt(this.mother_height)) / 2
      }
    },
    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
      return 'Number has to be between 0 and 999';
    },

    calcBMI() {
      if (this.weight && this.height) {
        let weight = parseInt(this.weight)
        let height = parseInt(this.height/100)
        this.bmi = weight / (height ^ 2)
      }
    }
  },

  created() {
    httpGET('api/v1/patients/' + this.patient_uuid)
    .then(({data})=>{
      console.log(data)
    }).catch(({response:{data}})=>{
      console.log(data)
    });
  },
  name: "ReceptionView.vue"
}
</script>

<style scoped>


</style>