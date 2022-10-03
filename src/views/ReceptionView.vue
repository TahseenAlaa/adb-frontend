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
                :items="['Male', 'Female']"
                label="Gender"
                v-model="gender"
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
            <v-text-field
                label="Weight of Baby at Birthday"
                v-model="weight_of_baby_at_birthday"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="['Single', 'Married', 'Divorced']"
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

        <v-row
            dense
        >
          <v-col cols="3">
            <v-checkbox
                label="Family History of DM"
                v-model="family_history_of_dm"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Gestational DM"
                v-model="gestational_dm"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Education Qualification"
                v-model="education_qualification"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Hypertension"
                v-model="hypertension"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row
            dense
        >
          <v-col cols="3">
            <v-checkbox
                label="Smoker"
                v-model="smoker"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Drinker"
                v-model="drinker"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="SMBG"
                v-model="smbg"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="IHD"
                v-model="ihd"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row
            dense
        >
          <v-col cols="3">
            <v-checkbox
                label="CVA"
                v-model="cva"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="PVD"
                v-model="pvd"
                dense
                outlined
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Neuropathy"
                v-model="neuropathy"
                dense
                outlined
            ></v-checkbox>
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
            <v-text-field
                label="Duration of DM"
                v-model="duration_of_dm"
                outlined
                dense
            ></v-text-field>
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

          </v-col>
          <v-col cols="4">

          </v-col>
          <v-col cols="4">

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
                v-model="referral"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Retinopathy"
                v-model="retinopathy"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Non proliferative"
                v-model="non_proliferative"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Proliferative DR"
                v-model="proliferative_dr"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Maculopathy"
                v-model="maculopathy"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Insulin"
                v-model="insulin"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Amputation"
                v-model="amputation"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="ED"
                v-model="ed"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="NAFLD"
                v-model="nafld"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Dermopathy"
                v-model="dermopathy"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Diabetic Food"
                v-model="diabetic_food"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Glycemic Control"
                v-model="glycemic_control"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Lipid Control"
                v-model="lipid_control"
                dense
                outlined
            ></v-checkbox>
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
      smoker: null,
      drinker: null,
      education_qualification: null,
      familyHistoryOfDM: null,
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
      diabeticFood: null,
      glycemicControl: null,
      lipidControl: null,
      full_name: null,
      dateOfBirthday: null,
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
        gender: this.gender,
        birthday: this.date_of_birthday,
        occupation: this.occupation,
        address: this.address,
        smoker: this.smoker,
        drinker: this.drinker,
        family_dm: this.family_history_of_dm,
        gestational_dm: this.gestational_dm,
        weight_baby: this.weight_of_baby_at_birthday,
        hypertension: this.hypertension,
        family_ihd: this.family_history_of_ihd,
        parity: this.parity,
        smbg: this.smbg,
        ihd: this.ihd,
        cva: this.cva,
        pvd: this.pvd,
        neuropathy: this.neuropathy,
        weight: this.weight,
        height: this.height,
        waist_circumference: this.waist_circumference,
        bmi: this.bmi,
        hip: this.hip,
        retinopathy: this.retinopathy,
        non_proliferative: this.non_proliferative,
        proliferative_dr: this.proliferative_dr,
        maculopathy: this.maculopathy,
        insulin: this.insulin,
        amputation: this.amputation,
        ed: this.ed,
        nafld: this.nafld,
        dermopathy: this.dermopathy,
        diabetic_food: this.diabetic_food,
        date_insulin: this.date_of_insulin,
        duration_insulin: this.duration_of_insulin,
        duration_dm: this.duration_of_dm,
        glycemic_control: this.glycemic_control,
        lipid_control: this.lipid_control,
        pressure_control: this.pressure_control,
        father_height: this.father_height,
        m_height: this.mother_height,
        mother_height: this.mid_parent_height,
        first_a1c: this.first_a1c,
        second_a1c: this.second_a1c,
        referral: this.referral,
        education_qualification: this.education_qualification,
        marital_status: this.marital_status
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