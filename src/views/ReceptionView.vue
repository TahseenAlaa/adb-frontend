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
                      v-model="dateOfBirthday"
                      label="Date of Birthday"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      dense
                      outlined
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="dateOfBirthday"
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
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="gender"
                label="Gender"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Occupation"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="educationQualification"
                label="Education Qualification"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="maritalStatus"
                label="Marital Status"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Address"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="smoker"
                label="Smoker"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="drinker"
                label="Drinker"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="gestationalDM"
                label="Gestational DM"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Weight of Baby at Birthday"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Family History of IHD"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Parity"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="ihd"
                label="IHD"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="cva"
                label="CVA"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-select
                :items="neuropathy"
                label="Neuropathy"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-card-title class="subtitle-2">Physical Information</v-card-title>
        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Weight"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Height"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Waist Circumference"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="BMI"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn
            class="deep-purple white--text"
            >Calculate</v-btn>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="HIP"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="nonProliferative"
                label="Non proliferative"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="proliferativeDR"
                label="Proliferative DR"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="insulin"
                label="Insulin"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="amputation"
                label="Amputation"
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
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="nafld"
                label="NAFLD"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="dermopathy"
                label="Dermopathy"
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
                      v-model="dateOfInsulin"
                      label="Date of Insulin"
                      prepend-icon="mdi-calendar"
                      readonly
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="dateOfInsulin"
                    @input="DateOfInsulinMenu = false"
                ></v-date-picker>
              </v-menu>
            </div>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Duration of Insulin"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="4">
            <v-text-field
                label="Duration of DM"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="glycemicControl"
                label="Glycemic Control"
                dense
                outlined
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="lipidControl"
                label="Lipid Control"
                dense
                outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="2">
            <v-text-field
                label="Pressure Control"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Father's Height"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Mother's Height"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Mid-Parent Height"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn
                class="deep-purple white--text"
            >Calculate</v-btn>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6">
            <v-text-field
                label="First A1c"
                outlined
                dense
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                label="Second A1c"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
                label="Source of referral"
                outlined
                dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>


      <v-row dense align="center" justify="center">
        <v-spacer></v-spacer>
        <v-btn
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
export default {
  data: () => ({
    dateOfInsulin: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    activePicker: null,
    dateOfBirthday: null,
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
    lipidControl: ['Yes', 'No']
  }),
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
  },
  name: "ReceptionView.vue"
}
</script>

<style scoped>


</style>