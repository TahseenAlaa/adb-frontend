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
            :items="educationQualification"
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
            :items="maritalStatus"
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
            :items="smoker"
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
            :items="drinker"
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
            :items="familyHistoryOfDM"
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
            :items="gestationalDM"
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
            :items="hypertension"
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
            :items="smbg"
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
            :items="ihd"
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
            :items="cva"
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
            :items="pvd"
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
            :items="neuropathy"
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
            :items="retinopathy"
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
            :items="nonProliferative"
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
            :items="proliferativeDR"
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
            :items="maculopathy"
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
            :items="insulin"
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
            :items="amputation"
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
            :items="ed"
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
            :items="nafld"
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
            :items="dermopathy"
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
            :items="diabeticFood"
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
            :items="glycemicControl"
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
            :items="lipidControl"
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
     'phone',
     'date_of_birthday',
     'occupation',
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
      'date_of_insulin',
      'DateOfInsulinMenu',
      'activePicker',
      'date_of_birthday',
      'menu',
      'gender',
      'maritalStatus',
      'smoker',
      'drinker',
      'educationQualification',
      'familyHistoryOfDM',
      'gestationalDM',
      'hypertension',
      'smbg',
      'ihd',
      'cva',
      'pvd',
      'neuropathy',
      'retinopathy',
      'nonProliferative',
      'proliferativeDR',
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
      'dateOfBirthday',
      'phone',
      'occupation',
      'education_qualification',
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
      'source_of_referral',
      'selectedGender',
      'selectedCva',
      'selectedPvd',
      'selectedNeuropathy',
      'selectedRetinopathy',
      'selectedNonProliferative',
      'selectedProliferativeDR',
      'selectedMaculopathy',
      'selectedInsulin',
      'selectedAmputation',
      'selectedEd',
      'selectedNafld',
      'selectedDermopathy',
      'selectedSmoker',
      'selectedDrinker',
      'selectedSmbg',
      'selectedIhd',
      'selectedHypertension',
  ],

  data() {
    return {
      // 'full_name': this.$props.patient_name,
      full_name: this.$props.full_name,
      phone: this.$props.phone,
      birthday: this.$props.date_of_birthday,
      occupation: this.$props.occupation,
      address: this.$props.address,
      smoker: this.$props.selectedSmoker,
      drinker: this.$props.selectedDrinker,
      family_dm: this.$props.family_history_of_dm,
      gestational_dm: this.$props.gestational_dm,
      weight_baby: this.$props.weight_of_baby_at_birthday,
      hypert: this.$props.selectedHypertension,
      family_ihd: this.$props.family_history_of_ihd,
      parity: this.$props.parity,
      smbg: this.$props.selectedSmbg,
      ihd: this.$props.selectedIhd,
      cva: this.$props.selectedCva,
      pvd: this.$props.selectedPvd,
      neuro: this.$props.selectedNeuropathy,
      weight: this.$props.weight,
      height: this.$props.height,
      wc: this.$props.waist_circumference,
      bmi: this.$props.bmi,
      hip: this.$props.hip,
      retino: this.$props.selectedRetinopathy,
      nonpro: this.$props.selectedNonProliferative,
      prolif: this.$props.selectedProliferativeDR,
      macul: this.$props.selectedMaculopathy,
      insul: this.$props.selectedInsulin,
      amput: this.$props.selectedAmputation,
      ed: this.$props.selectedEd,
      nafld: this.$props.selectedNafld,
      dermo: this.$props.selectedDermopathy,
      dfoot: this.$props.diabetic_food,
      date_insulin: this.$props.date_of_insulin,
      duration_insulin: this.$props.duration_of_insulin,
      duration_dm: this.$props.duration_of_dm,
      glycemic: this.$props.glycemic_control,
      lipid: this.$props.lipid_control,
      pressure: this.$props.pressure_control,
      f_height: this.$props.father_height,
      m_height: this.$props.mother_height,
      mid_height: this.$props.mid_parent_height,
      fa1c: this.$props.first_a1c,
      sa2c: this.$props.second_a1c,
      referral: this.$props.source_of_referral
    }
  },
  name: "ReceptionCompo"
}
</script>

<style scoped>

</style>