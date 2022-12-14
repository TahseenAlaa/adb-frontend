<template>

  <v-form v-model="valid" lazy-validation ref="form">
  <v-card class="px-6">
    <v-card-title class="subtitle-2">Personal Information</v-card-title>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Full Name"
                v-model="full_name"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[nameRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <div>
              <v-text-field
                  label="ID"
                  v-model="id"
                  dense
                  outlined
                  readonly
                  hint="ReadOnly"
                  persistent-hint
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="2">

            <v-menu
                ref="menu_birthday"
                v-model="menu_birthday"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :disabled="patient_read_only"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    label="Date of Birth"
                    v-model="date_of_birthday"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    dense
                    outlined
                    :readonly="patient_read_only"
                    :hint="patient_read_only === false? '' : 'ReadOnly'"
                    :persistent-hint="patient_read_only"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date_of_birthday"
                  :active-picker.sync="activePicker"
                  :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  min="1900-01-01"
                  @change="save_birthday"
                  :readonly="patient_read_only"
                  :hint="patient_read_only === false? '' : 'ReadOnly'"
                  :persistent-hint="patient_read_only"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Phone"
                v-model="phone"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[phoneRule]"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>

        </v-row>

        <v-row dense>
          <v-col cols="2">
            <v-select
                :items="['Single', 'Married', 'Divorced', 'Widowed']"
                label="Marital Status"
                v-model="marital_status"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Occupation"
                v-model="occupation"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[nameRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="[
                    'غير متعلم',
                    'ابتدائية',
                    'متوسطة',
                    'اعدادية',
                    'معهد',
                    'بكالوريوس',
                    'ماجستير',
                    'دكتوراه',
                ]"
                label="Education Qualification"
                v-model="education_qualification"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-select>
          </v-col>

          <v-col cols="4">
            <v-radio-group
                v-model="gender"
                dense
                row
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            >

              <div v-if="patient_read_only">
                <v-radio v-if="gender === 0" label="Male" :value="gender"></v-radio>
                <v-radio v-if="gender === 1" label="Female" :value="gender"></v-radio>
                <v-radio v-if="gender === null" label="Gender Not Found"></v-radio>
              </div>

<!--              TODO Gender selection issue -->
              <div v-if="!patient_read_only">
                <v-radio label="Male" value="0"></v-radio>
                <v-radio label="Female" value="1"></v-radio>
              </div>

            </v-radio-group>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-text-field
                label="Source of referral"
                v-model="referral"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[nameRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Social Status"
                v-model="social_status"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[nameRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Address"
                v-model="address"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[nameRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Old Patient File Number"
                v-model="patient_number"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :rules="[nameRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="First A1c"
                v-model="first_a1c"
                outlined
                dense
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-text-field>
          </v-col>
          <v-col cols="3">

            <v-menu
                ref="menu_insulin"
                v-model="menu_insulin"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :disabled="patient_read_only"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    label="Date of Insulin"
                    v-model="date_of_insulin"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    dense
                    outlined
                    :readonly="patient_read_only"
                    :hint="patient_read_only === false? '' : 'ReadOnly'"
                    :persistent-hint="patient_read_only"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date_of_insulin"
                  :active-picker.sync="activePicker"
                  :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  min="1900-01-01"
                  @change="save_insulin"
                  :readonly="patient_read_only"
                  :hint="patient_read_only === false? '' : 'ReadOnly'"
                  :persistent-hint="patient_read_only"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="3">

            <v-menu
                ref="menu_dm"
                v-model="menu_dm"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
                :disabled="patient_read_only"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    label="Date of DM"
                    v-model="date_of_dm"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    dense
                    outlined
                    :readonly="patient_read_only"
                    :hint="patient_read_only === false? '' : 'ReadOnly'"
                    :persistent-hint="patient_read_only"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="date_of_dm"
                  :active-picker.sync="activePicker"
                  :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                  min="1990"
                  @change="save_dm"
                  :readonly="patient_read_only"
                  :hint="patient_read_only === false? '' : 'ReadOnly'"
                  :persistent-hint="patient_read_only"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Family History of IHD"
                v-model="family_history_of_ihd"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Weight at birth > 4.5kg"
                v-model="weight_of_baby_at_birthday"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Family History of DM"
                v-model="family_dm"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Gestational DM"
                v-model="gestational_dm"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Hypertension"
                v-model="hypertension"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Smoker"
                v-model="smoker"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Drinker"
                v-model="drinker"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="IHD"
                v-model="ihd"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="CVA"
                v-model="cva"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Lipid Control"
                v-model="lipid_control"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Neuropathy"
                v-model="neuropathy"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Pressure Control"
                v-model="pressure_control"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Glycemic Control"
                v-model="glycemic_control"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Proliferative DR"
                v-model="proliferative_dr"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Maculopathy"
                v-model="maculopathy"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Insulin"
                v-model="insulin"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="ED"
                v-model="ed"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="NAFLD"
                v-model="nafld"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Dermopathy"
                v-model="dermopathy"
                dense
                outlined
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
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
                :readonly="patient_read_only"
                :hint="patient_read_only === false? '' : 'ReadOnly'"
                :persistent-hint="patient_read_only"
            ></v-textarea>
          </v-col>
        </v-row>

    <v-row dense align="center" justify="center" v-if="patient_read_only">
      <v-spacer></v-spacer>
      <!--      START Patient Report -->
      <a :href="baseURL + 'invoice/patient-info/' + patient_uuid" class="text-decoration-none" target="_blank">
        <v-btn
            class="my-2 deep-purple white--text mx-2"
        >
          <v-row>
            <v-icon size="20">mdi-printer-wireless</v-icon>
            <h3 class="text-capitalize">Print Patient Report</h3>
          </v-row>
        </v-btn>
      </a>
      <!--      END Patient Report -->
      <!--      START Reception Invoice -->
      <a :href="baseURL + 'invoice/reception-info/' + patient_uuid" class="text-decoration-none" target="_blank">
      <v-btn
          class="my-2 deep-purple white--text mx-2"
      >
          <v-row>
            <v-icon size="20">mdi-printer</v-icon>
            <h3 class="text-capitalize">Print Reception Invoice</h3>
          </v-row>
      </v-btn>
      </a>
      <!--      END Reception Invoice -->
    </v-row>

      </v-card>
  </v-form>

</template>

<script>
import {httpGET, httpPOST, baseURLLink} from "@/utils/utils";

export default {
  props: [
      'patient_uuid',
      'patient_history_uuid',
  ],
  data() {
    return {
      valid: null,
      full_name: null,
      id: null,
      phone: null,
      date_of_birthday: null,
      activePicker: null,
      menu_birthday: false,
      occupation: null,
      address: null,
      smoker: null,
      drinker: null,
      family_dm: null,
      gestational_dm: null,
      weight_baby: null,
      hypertension: null,
      family_ihd: null,
      parity: null,
      smbg: null,
      ihd: null,
      cva: null,
      pvd: null,
      neuropathy: null,
      retinopathy: null,
      non_proliferative: null,
      proliferative_dr: null,
      maculopathy: null,
      insulin: null,
      amputation: null,
      ed: null,
      nafld: null,
      dermopathy: null,
      diabetic_food: null,
      date_of_insulin: null,
      menu_insulin: false,
      glycemic_control: null,
      lipid_control: null,
      pressure_control: null,
      first_a1c: null,
      referral: null,
      education_qualification: null,
      gender: null,
      marital_status: null,
      notes: null,
      family_history_of_ihd: null,
      weight_of_baby_at_birthday: null,
      date_of_dm: null,
      menu_dm: false,
      patient_number: null,
      social_status: null,
      baseURL: baseURLLink(),
      patient_read_only: null,
    }
  },
  name: "ReceptionCompo",

  created() {
      httpPOST('api/v1/patients/show', {
        patient_uuid: this.patient_uuid,
        patient_history_uuid: this.patient_history_uuid
      })
          .then(({data}) => {
            console.log(data.data)
            this.full_name =  data.patient_info.full_name,
                this.id =  data.patient_info.id,
                this.phone =  data.patient_info.phone,
                this.date_of_birthday =  data.patient_info.birthday,
                this.gender = data.patient_info.gender,
                this.occupation =  data.patient_info.occupation,
                this.address =  data.patient_info.address,
                this.smoker =  data.patient_info.smoker,
                this.drinker =  data.patient_info.drinker,
                this.family_dm =  data.patient_info.family_dm,
                this.gestational_dm =  data.patient_info.gestational_dm,
                this.weight_of_baby_at_birthday =  data.patient_info.weight_baby,
                this.hypertension =  data.patient_info.hypertension,
                this.family_history_of_ihd =  data.patient_info.family_ihd,
                this.parity =  data.patient_info.parity,
                this.smbg =  data.patient_info.smbg,
                this.ihd =  data.patient_info.ihd,
                this.cva =  data.patient_info.cva,
                this.pvd =  data.patient_info.pvd,
                this.neuropathy =  data.patient_info.neuropathy,
                this.retinopathy =  data.patient_info.retinopathy,
                this.non_proliferative =  data.patient_info.non_proliferative,
                this.proliferative_dr =  data.patient_info.proliferative_dr,
                this.maculopathy =  data.patient_info.maculopathy,
                this.insulin =  data.patient_info.insulin,
                this.amputation =  data.patient_info.amputation,
                this.ed =  data.patient_info.ed,
                this.nafld =  data.patient_info.nafld,
                this.dermopathy =  data.patient_info.dermopathy,
                this.diabetic_food =  data.patient_info.diabetic_food,
                this.glycemic_control =  data.patient_info.glycemic_control,
                this.lipid_control =  data.patient_info.lipid_control,
                this.pressure_control =  data.patient_info.pressure_control,
                this.first_a1c =  data.patient_info.first_a1c,
                this.referral =  data.patient_info.referral,
                this.education_qualification =  data.patient_info.education_qualification,
                this.marital_status =  data.patient_info.marital_status,
                this.notes =  data.patient_info.notes,
                this.date_of_dm =  data.patient_info.date_dm,
                this.date_of_insulin =  data.patient_info.date_insulin,
                this.patient_number =  data.patient_info.patient_number,
                this.social_status =  data.patient_info.social_status
          }).catch(({response:{data}})=>{
        console.log(data)
      });

      // Edit permission
      this.patient_read_only = !this.can('edit patient');
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

    numberRule: v  => {
      if (v !== null) {
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 1000000) return true;
      return 'Number Only Accepted';
    },
    phoneRule: v =>  {
      const pattern = /^0?7[0-9]{9}$/;
      if (!v.trim()) return true;
      if (!pattern.test(v)) return 'Wrong Phone Number Format';
    },
    nameRule: value =>  {
      const pattern = /^([^0-9]*)$/;
      return pattern.test(value) || 'Only Letters Accepted'
    },

    // START Check Permissions
    can($permit) {
      return !!this.$store.getters.user.permissions.find(v => v.name === $permit);
    },
    // END Check Permissions

    save_birthday(date) {
      this.$refs.menu_birthday.save(date)
      this.menu_birthday = false
    },
    save_insulin(date) {
      this.$refs.menu_insulin.save(date)
      this.menu_insulin = false
    },
    save_dm(date) {
      this.$refs.menu_dm.save(date)
      this.menu_dm = false
    },

    storePatientUpdatedInfo() {
      httpPOST('api/v1/patients/update/', {
        patient_uuid: this.patient_uuid,
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
        retinopathy: this.retinopathy,
        non_proliferative: this.non_proliferative,
        proliferative_dr: this.proliferative_dr,
        maculopathy: this.maculopathy,
        gender: this.gender,
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
        first_a1c: this.first_a1c,
        referral: this.referral,
        education_qualification: this.education_qualification,
        marital_status: this.marital_status,
        notes: this.notes,
        family_history_of_ihd: this.family_history_of_ihd,
        weight_of_baby_at_birthday: this.weight_of_baby_at_birthday,
        date_of_dm: this.date_of_dm,
        patient_number: this.patient_number,
        social_status: this.social_status,
      })
          .then(({data}) => {
            this.successAlert = true
            // setTimeout(() => {
            //   this.$router.push({path: `/viewpanels/${data.data.uuid}`})
            // }, 2000)
            console.log(data.data)
            console.log(data)
          }).catch(({response: {data}}) => {
        console.log(data)
      });
    },
  }
}
</script>

<style scoped>

</style>