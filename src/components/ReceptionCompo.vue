<template>
<!--  <h1>{{ this.$props.patient_name }}</h1>-->

  <v-card class="px-6">
    <v-card-title class="subtitle-2">Personal Information</v-card-title>

    <v-row dense>
      <v-col cols="5">
        <v-text-field
            label="Full Name"
            v-model="full_name"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field
            label="ID"
            v-model="id"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field
            label="Last Visit"
            v-model="last_visit"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Birthday Date"
            v-model="date_of_birthday"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Phone"
            v-model="phone"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Gender"
            v-model="selectedGender"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
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
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Education Qualification"
            v-model="education_qualification"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Marital Status"
            v-model="marital_status"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
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
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Smoker"
            v-model="selectedSmoker"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Drinker"
            v-model="selectedDrinker"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Family History of DM"
            v-model="family_history_of_dm"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Gestational DM"
            v-model="gestational_dm"
            dense
            outlined
            readonly
            hint="ReadOnly"
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
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Hypertension"
            v-model="selectedHypertension"
            dense
            outlined
            readonly
            hint="ReadOnly"
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
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="SMBG"
            v-model="selectedSmbg"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="IHD"
            v-model="selectedIhd"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="CVA"
            v-model="selectedCva"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="6">
        <v-text-field
            label="PVD"
            v-model="selectedPvd"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
            label="Neuropathy"
            v-model="selectedNeuropathy"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-card-title class="subtitle-2">Physical Information</v-card-title>
    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Weight"
            v-model="weight"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Height"
            v-model="height"
            outlined
            dense
            readonly
            hint="ReadOnly"
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
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="BMI"
            v-model="bmi"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="HIP"
            v-model="hip"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Retinopathy"
            v-model="selectedRetinopathy"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Non proliferative"
            v-model="selectedNonProliferative"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Proliferative DR"
            v-model="selectedProliferativeDR"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Maculopathy"
            v-model="selectedMaculopathy"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Insulin"
            v-model="selectedInsulin"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Amputation"
            v-model="selectedAmputation"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="ED"
            v-model="selectedEd"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="NAFLD"
            v-model="selectedNafld"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Dermopathy"
            v-model="selectedDermopathy"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="4">
        <v-text-field
            label="Diabetic Food"
            v-model="diabetic_food"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Date of Insulin"
            v-model="date_of_insulin"
            outlined
            dense
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Duration of Insulin"
            v-model="duration_of_insulin"
            outlined
            dense
            readonly
            hint="ReadOnly"
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
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Glycemic Control"
            v-model="glycemic_control"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
            label="Lipid Control"
            v-model="lipid_control"
            dense
            outlined
            readonly
            hint="ReadOnly"
        ></v-text-field>
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
            readonly
            hint="ReadOnly"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: [
      'full_name',
      'id',
      'last_visit',
      'date_of_birthday',
      'phone',
      'selectedGender',
      'occupation',
      'education_qualification',
      'marital_status',
      'address',
      'selectedSmoker',
      'selectedDrinker',
      'family_history_of_dm',
      'gestational_dm',
      'weight_of_baby_at_birthday',
      'selectedHypertension',
      'family_history_of_ihd',
      'parity',
      'selectedSmbg',
      'selectedIhd',
      'selectedCva',
      'selectedPvd',
      'selectedNeuropathy',
      'weight',
      'height',
      'waist_circumference',
      'bmi',
      'hip',
      'selectedRetinopathy',
      'selectedNonProliferative',
      'selectedProliferativeDR',
      'selectedMaculopathy',
      'selectedInsulin',
      'selectedAmputation',
      'selectedEd',
      'selectedNafld',
      'selectedDermopathy',
      'diabetic_food',
      'date_of_insulin',
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
      'source_of_referral',
  ],
  name: "ReceptionCompo"
}
</script>

<style scoped>

</style>