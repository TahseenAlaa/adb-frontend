<template>
<!--  <h1>{{ this.$props.patient_name }}</h1>-->

  <v-card class="px-6">
    <v-card-title class="subtitle-2">Personal Information</v-card-title>

    <v-row dense>
      <v-col cols="12">
        <v-text-field
            label="Full Name"
            v-model="full_name"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <div>
              <v-text-field
                  label="Date of Birth"
                  v-model="date_of_birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  dense
                  hint="ReadOnly"
                  persistent-hint
                  outlined
              ></v-text-field>
        </div>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Phone"
            v-model="phone"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-select
            :items="['Male', 'Female']"
            label="Gender"
            v-model="gender"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Weight of Baby at Birthday"
            v-model="weight_of_baby_at_birthday"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-select
            :items="['Single', 'Married', 'Divorced']"
            label="Marital Status"
            v-model="marital_status"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Family History of IHD"
            v-model="family_history_of_ihd"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Parity"
            v-model="parity"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense
    >
      <v-col cols="3">
        <v-checkbox
            label="Family History of DM"
            v-model="family_history_of_dm"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="Gestational DM"
            v-model="gestational_dm"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="Education Qualification"
            v-model="education_qualification"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="Hypertension"
            v-model="hypertension"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row dense
    >
      <v-col cols="3">
        <v-checkbox
            label="Smoker"
            v-model="smoker"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="Drinker"
            v-model="drinker"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="SMBG"
            v-model="smbg"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="IHD"
            v-model="ihd"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
    </v-row>
    <v-row dense
    >
      <v-col cols="3">
        <v-checkbox
            label="CVA"
            v-model="cva"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="PVD"
            v-model="pvd"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>

      <v-col cols="3">
        <v-checkbox
            label="Neuropathy"
            v-model="neuropathy"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Height in cm"
            v-model="height"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Waist Circumference"
            v-model="waist_circumference"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="HIP"
            v-model="hip"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <div>
              <v-text-field
                  label="Date of Insulin"
                  v-model="date_of_insulin"
                  prepend-icon="mdi-calendar"
                  readonly
                  outlined
                  dense
                  hint="ReadOnly"
                  persistent-hint
              ></v-text-field>
        </div>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Duration of Insulin"
            v-model="duration_of_insulin"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field
            label="Father's Height"
            v-model="father_height"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            :rules="[numberRule]"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field
            label="Mother's Height"
            v-model="mother_height"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="2">
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="6">
        <v-text-field
            label="First A1c"
            v-model="first_a1c"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
            label="Second A1c"
            v-model="second_a1c"
            outlined
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="3">
        <v-checkbox
            label="Retinopathy"
            v-model="retinopathy"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Non proliferative"
            v-model="non_proliferative"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Proliferative DR"
            v-model="proliferative_dr"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Maculopathy"
            v-model="maculopathy"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Amputation"
            v-model="amputation"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="ED"
            v-model="ed"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="NAFLD"
            v-model="nafld"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
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
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Diabetic Food"
            v-model="diabetic_food"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Glycemic Control"
            v-model="glycemic_control"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <v-checkbox
            label="Lipid Control"
            v-model="lipid_control"
            dense
            readonly
            hint="ReadOnly"
            persistent-hint
            outlined
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: [
      'date_of_insulin',
      'DateOfInsulinMenu',
      'activePicker',
      'date_of_birthday',
      'menu',
      'smoker',
      'drinker',
      'education_qualification',
      'familyHistoryOfDM',
      'gestationalDM',
      'hypertension',
      'smbg',
      'ihd',
      'cva',
      'pvd',
      'neuropathy',
      'retinopathy',
      'non_proliferative',
      'maculopathy',
      'insulin',
      'amputation',
      'ed',
      'nafld',
      'dermopathy',
      'diabeticFood',
      'glycemicControl',
      'lipidControl',
      'full_name',
      'phone',
      'occupation',
      'marital_status',
      'address',
      'family_history_of_dm',
      'gestational_dm',
      'weight_of_baby_at_birthday',
      'family_history_of_ihd',
      'parity',
      'weight',
      'height',
      'waist_circumference',
      'bmi',
      'hip',
      'diabetic_food',
      'duration_of_insulin',
      'duration_of_dm',
      'glycemic_control',
      'lipid_control',
      'pressure_control',
      'father_height',
      'mother_height',
      'mid_parent_height',
      'first_a1c',
      'second_a1c',
      'referral',
      'proliferative_dr',
      'gender',
  ],
  name: "ReceptionCompo"
}
</script>

<style scoped>

</style>