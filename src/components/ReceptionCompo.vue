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
            <div>
              <v-text-field
                  label="Date of Birth"
                  v-model="birthday"
                  prepend-inner-icon="mdi-calendar"
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
                  label="Duration of Insulin (Years)"
                  v-model="date_of_insulin"
                  prepend-inner-icon="mdi-calendar"
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
                    label="Duration of DM (Years)"
                    v-model="date_of_dm"
                    prepend-inner-icon="mdi-calendar"
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
                v-model="family_dm"
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

    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <a :href="baseURL + 'invoice/reception-info/' + patient_uuid" class="text-decoration-none" target="_blank">
      <v-btn
          class="my-2 deep-purple white--text"
      >
          <v-row>
            <v-icon size="20">mdi-printer</v-icon>
            <h3 class="text-capitalize">Print Reception Invoice</h3>
          </v-row>
      </v-btn>
      </a>
    </v-row>

      </v-card>

</template>

<script>
import {httpGET, httpPOST, baseURLLink} from "@/utils/utils";

export default {
  props: [
      'patient_uuid'
  ],
  data() {
    return {
      full_name: null,
      id: null,
      phone: null,
      birthday: null,
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
      glycemic_control: null,
      lipid_control: null,
      pressure_control: null,
      first_a1c: null,
      referral: null,
      education_qualification: null,
      marital_status: null,
      blood_pressure_systolic: null,
      blood_pressure_diastolic: null,
      notes: null,
      family_history_of_ihd: null,
      weight_of_baby_at_birthday: null,
      date_of_dm: null,
      patient_number: null,
      social_status: null,
      baseURL: baseURLLink()
    }
  },
  name: "ReceptionCompo",
  created() {
    httpGET('api/v1/patients/' + this.patient_uuid)
        .then(({data}) => {
              this.full_name =  data.patient_info.full_name,
              this.id =  data.patient_info.id,
              this.phone =  data.patient_info.phone,
              this.birthday =  data.patient_info.birthday,
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
              this.blood_pressure_systolic =  data.patient_info.blood_pressure_systolic,
              this.blood_pressure_diastolic =  data.patient_info.blood_pressure_diastolic,
              this.notes =  data.patient_info.notes,
              this.date_of_dm =  data.patient_info.duration_dm,
              this.date_of_insulin =  data.patient_info.duration_insulin,
              this.patient_number =  data.patient_info.patient_number,
              this.social_status =  data.patient_info.social_status,
              this.blood_pressure_systolic = data.patient_latest_history.blood_pressure_systolic,
              this.blood_pressure_diastolic = data.patient_latest_history.blood_pressure_diastolic
        }).catch(({response:{data}})=>{
          console.log(data)
        });
  },

  methods: {
    printReceptionReport() {
      this.$router.push(baseURLLink() + this.patient_uuid)
    }
  }
}
</script>

<style scoped>

</style>