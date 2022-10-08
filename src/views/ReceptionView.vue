<template>

  <v-container class="mb-16">
    <v-form>
      <v-card class="px-6">
        <v-card-title>Reception & Statistics</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Personal Information</v-card-title>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Full Name"
                v-model="full_name"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <div>
              <v-menu
                  ref="menu_birthday"
                  v-model="menu_birthday"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      label="Date of Birth"
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
                    @change="save_birthday"
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
                counter="11"
                :rules="[phoneRules]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>

        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-select
                :items="['Single', 'Married', 'Divorced', 'Widowed']"
                label="Marital Status"
                v-model="marital_status"
                dense
                outlined
            ></v-select>
          </v-col>
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
                label="Education Qualification"
                v-model="education_qualification"
                dense
                outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-text-field
                label="Source of referral"
                v-model="referral"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Social Status"
                v-model="social_status"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Address"
                v-model="address"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Old Patient File Number"
                v-model="patient_number"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

          <v-row dense>
            <v-col cols="3">
              <v-text-field
                  label="Parity"
                  v-model="parity"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                  label="First A1c"
                  v-model="first_a1c"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <div>
                <v-menu
                    ref="menu_insulin"
                    v-model="menu_insulin"
                    :close-on-content-click="false"
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
                        v-bind="attrs"
                        v-on="on"
                        dense
                        outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="date_of_insulin"
                      :active-picker.sync="activePicker"
                      :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                      min="1900-01-01"
                      @change="save_insulin"
                  ></v-date-picker>
                </v-menu>
              </div>
            </v-col>
            <v-col cols="3">
              <div>
                <v-menu
                    ref="menu_dm"
                    v-model="menu_dm"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        label="Date of DM"
                        v-model="date_of_dm"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        dense
                        outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="date_of_dm"
                      :active-picker.sync="activePicker"
                      :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                      min="1990"
                      @change="save_dm"
                  ></v-date-picker>
                </v-menu>
              </div>
            </v-col>
          </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Family History of IHD"
                v-model="family_history_of_ihd"
                dense
                outlined
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Weight at birth > 4.5kg"
                v-model="weight_of_baby_at_birthday"
                dense
                outlined
            ></v-checkbox>
          </v-col>
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
                label="Hypertension"
                v-model="hypertension"
                dense
                outlined
            ></v-checkbox>
          </v-col>
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
        </v-row>

        <v-row dense>
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
                label="Lipid Control"
                v-model="lipid_control"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row dense>
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
          <v-col cols="3">
            <v-checkbox
                label="Pressure Control"
                v-model="pressure_control"
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
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Non proliferative DR"
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
          <v-col cols="3">
            <v-checkbox
                label="Insulin"
                v-model="insulin"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row dense>
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
          <v-col cols="3">
            <v-checkbox
                label="Dermopathy"
                v-model="dermopathy"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Diabetic Food"
                v-model="diabetic_food"
                dense
                outlined
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <v-textarea
                label="Notes"
                v-model="notes"
                outlined
                dense
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card>

      <v-row dense align="center" justify="center" class="mb-16">
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
            class="px-2 py-12 mt-6 mx-2 deep-purple"
            dark
        >
          <v-col>
            <v-icon size="60">mdi-camera</v-icon>
            <h3 class="text-capitalize">CAPTURE PHOTO</h3>
          </v-col>
        </v-btn>

        <v-btn
            @click="postReceptionData"
            class="px-2 py-12 mt-6 mx-2 deep-purple"
            dark
        >
          <v-col>
            <v-icon size="60">mdi-file-plus</v-icon>
            <h3 class="text-capitalize">Create patient Profile</h3>
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
      DateOfDMMenu: null,
      date_of_dm: null,
      date_of_birthday: null,
      menu_birthday: false,
      menu_insulin: false,
      menu_dm: false,
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
      weight_of_baby_at_birthday: false,
      family_history_of_ihd: null,
      parity: null,
      diabetic_food: null,
      glycemic_control: null,
      lipid_control: null,
      pressure_control: null,
      first_a1c: null,
      referral: null,
      proliferative_dr: null,
      patient_number: null,
      patient_uuid: this.$route.params.patient_uuid,
      social_status: null,
      notes: null
    }
  },
  watch: {
    menu_birthday (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
    menu_insulin (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
    menu_dm (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save_birthday (date) {
      this.$refs.menu_birthday.save(date)
      this.menu_birthday = false
    },
    save_insulin (date) {
      this.$refs.menu_insulin.save(date)
      this.menu_insulin = false
    },
    save_dm (date) {
      this.$refs.menu_dm.save(date)
      this.menu_dm = false
    },
    postReceptionData(e) {
      httpPOST('api/v1/patients/store', {
        full_name: this.full_name,
        phone: this.phone,
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
        glycemic_control: this.glycemic_control,
        lipid_control: this.lipid_control,
        pressure_control: this.pressure_control,
        father_height: this.father_height,
        m_height: this.mother_height,
        mother_height: this.mid_parent_height,
        first_a1c: this.first_a1c,
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

    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
      return 'Number has to be between 0 and 999';
    },
    phoneRules: [
      v => !!v || "Phone number is required",
      v => (v && v.length >= 11) || "The phone number must be 11 digits or more."
    ]
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