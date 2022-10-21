<template>

  <v-card class="px-6">
    <v-card-title class="subtitle-2">Personal Information</v-card-title>

        <v-row dense>
          <v-col cols="4">
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
          <v-col cols="4">
            <div>
              <v-text-field
                  label="Date of Birth"
                  v-model="date_of_birthday"
                  prepend-icon="mdi-calendar"
                  dense
                  outlined
                  readonly
                  hint="ReadOnly"
                  persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-select>
          </v-col>
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-select>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
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
          <v-col cols="3">
            <v-text-field
                label="Social Status"
                v-model="social_status"
                outlined
                dense
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
          <v-col cols="3">
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
          <v-col cols="3">
            <v-text-field
                label="Old Patient File Number"
                v-model="patient_number"
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
          <v-col cols="3">
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
          <v-col cols="3">
            <div>
              <v-text-field
                  label="Date of Insulin"
                  v-model="date_of_insulin"
                  prepend-icon="mdi-calendar"
                  dense
                  outlined
                  readonly
                  hint="ReadOnly"
                  persistent-hint
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="3">
            <div>
            <v-text-field
                    label="Date of DM"
                    v-model="date_of_dm"
                    prepend-icon="mdi-calendar"
                    readonly
                    dense
                    outlined
                ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="6">
            <v-text-field
                label="Blood Pressure Systolic"
                v-model="blood_pressure_systolic"
                outlined
                dense
                type="number"
                counter="3"
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                label="Blood Pressure Diastolic"
                v-model="blood_pressure_diastolic"
                outlined
                dense
                type="number"
                counter="3"
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="3">
            <v-checkbox
                label="Family History of IHD"
                v-model="family_history_of_ihd"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Weight at birth > 4.5kg"
                v-model="weight_of_baby_at_birthday"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Family History of DM"
                v-model="family_history_of_dm"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Gestational DM"
                v-model="gestational_dm"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Hypertension"
                v-model="hypertension"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Smoker"
                v-model="smoker"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>

          <v-col cols="3">
            <v-checkbox
                label="Drinker"
                v-model="drinker"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="IHD"
                v-model="ihd"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="CVA"
                v-model="cva"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Lipid Control"
                v-model="lipid_control"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Neuropathy"
                v-model="neuropathy"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Pressure Control"
                v-model="pressure_control"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Glycemic Control"
                v-model="glycemic_control"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Proliferative DR"
                v-model="proliferative_dr"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Maculopathy"
                v-model="maculopathy"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Insulin"
                v-model="insulin"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="ED"
                v-model="ed"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="NAFLD"
                v-model="nafld"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-checkbox>
          </v-col>
          <v-col cols="3">
            <v-checkbox
                label="Dermopathy"
                v-model="dermopathy"
                dense
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
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
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card>

</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  props: [
      'patient_uuid'
      // 'date_of_insulin',
      // 'DateOfInsulinMenu',
      // 'activePicker',
      // 'date_of_birthday',
      // 'menu',
      // 'smoker',
      // 'drinker',
      // 'education_qualification',
      // 'familyHistoryOfDM',
      // 'gestationalDM',
      // 'hypertension',
      // 'smbg',
      // 'ihd',
      // 'cva',
      // 'pvd',
      // 'neuropathy',
      // 'retinopathy',
      // 'non_proliferative',
      // 'maculopathy',
      // 'insulin',
      // 'amputation',
      // 'ed',
      // 'nafld',
      // 'dermopathy',
      // 'diabeticFood',
      // 'glycemicControl',
      // 'lipidControl',
      // 'full_name',
      // 'phone',
      // 'occupation',
      // 'marital_status',
      // 'address',
      // 'family_history_of_dm',
      // 'gestational_dm',
      // 'weight_of_baby_at_birthday',
      // 'family_history_of_ihd',
      // 'parity',
      // 'weight',
      // 'height',
      // 'waist_circumference',
      // 'bmi',
      // 'hip',
      // 'diabetic_food',
      // 'duration_of_insulin',
      // 'duration_of_dm',
      // 'glycemic_control',
      // 'lipid_control',
      // 'pressure_control',
      // 'father_height',
      // 'mother_height',
      // 'mid_parent_height',
      // 'first_a1c',
      // 'second_a1c',
      // 'referral',
      // 'proliferative_dr',
      // 'gender',
  ],
  name: "ReceptionCompo",
  created() {
    httpGET('api/v1/patients/' + this.patient_uuid)
        .then(({data}) => {
          console.log(data.patient_info)
        }).catch(({response:{data}})=>{
          console.log(data)
        });
  }
}
</script>

<style scoped>

</style>