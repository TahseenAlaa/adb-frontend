<template>

  <v-container>
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <ReceptionCompo
              :full_name="this.full_name"
              :id="this.id"
              :last_visit="this.last_visit"
              :date_of_birthday="this.date_of_birthday"
              :phone="this.phone"
              :selectedGender="this.selectedGender"
              :occupation="this.occupation"
              :education_qualification="this.education_qualification"
              :marital_status="this.marital_status"
              :address="this.address"
              :selectedSmoker="this.selectedSmoker"
              :selectedDrinker="this.selectedDrinker"
              :family_history_of_dm="this.family_history_of_dm"
              :gestational_dm="this.gestational_dm"
              :weight_of_baby_at_birthday="this.weight_of_baby_at_birthday"
              :selectedHypertension="this.selectedHypertension"
              :family_history_of_ihd="this.family_history_of_ihd"
              :parity="this.parity"
              :selectedSmbg="this.selectedSmbg"
              :selectedIhd="this.selectedIhd"
              :selectedCva="this.selectedCva"
              :selectedPvd="this.selectedPvd"
              :selectedNeuropathy="this.selectedNeuropathy"
              :weight="this.weight"
              :height="this.height"
              :waist_circumference="this.waist_circumference"
              :bmi="this.bmi"
              :hip="this.hip"
              :selectedRetinopathy="this.selectedRetinopathy"
              :selectedNonProliferative="this.selectedNonProliferative"
              :selectedProliferativeDR="this.selectedProliferativeDR"
              :selectedMaculopathy="this.selectedMaculopathy"
              :selectedInsulin="this.selectedInsulin"
              :selectedAmputation="this.selectedAmputation"
              :selectedEd="this.selectedEd"
              :selectedNafld="this.selectedNafld"
              :selectedDermopathy="this.selectedDermopathy"
              :diabetic_food="this.diabetic_food"
              :date_of_insulin="this.date_of_insulin"
              :duration_of_insulin="this.duration_of_insulin"
              :duration_of_dm="this.duration_of_dm"
              :glycemic_control="this.glycemic_control"
              :lipid_control="this.lipid_control"
              :pressure_control="this.pressure_control"
              :father_height="this.father_height"
              :mother_height="this.mother_height"
              :mid_parent_height="this.mid_parent_height"
              :first_a1c="this.first_a1c"
              :second_a1c="this.second_a1c"
              :source_of_referral="this.source_of_referral"
          ></ReceptionCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Doctors</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <DoctorCompo
              :patient_number="this.patient_number"
              :date_of_visit="this.last_visit"
              :blood_pressure_systolic="this.blood_pressure_systolic"
              :blood_pressure_diastolic="this.blood_pressure_diastolic"
              :weight_by_doctor="this.weight_by_doctor"
              :height_by_doctor="this.height_by_doctor"
              :waist_circumference_by_doctor="this.waist_circumference_by_doctor"
              :bmi_by_doctor="this.bmi_by_doctor"
              :age_at_visit="this.age_at_visit"
              :clinical_notes="this.clinical_notes"
              :next_visit="this.next_visit"
              :created_by_dr="this.created_by_dr"
              :diagnosisList="this.diagnosisList"
              :treatmentList="this.treatmentList"
              :testsList="this.testsList"
              :DoctorOfDiagnosis="this.DoctorOfDiagnosis"
              :DoctorOfTreatment="this.DoctorOfTreatment"
              :DoctorOfTests="this.DoctorOfTests"
          >
          </DoctorCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Medical Lab</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <LabCompo></LabCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Pharmacy</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <PharmacyCompo></PharmacyCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>

</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";
import ReceptionCompo from "@/components/ReceptionCompo";
import DoctorCompo from "@/components/DoctorCompo";
import LabCompo from "@/components/LabCompo";
import PharmacyCompo from "@/components/PharmacyCompo";


export default {
  name: "ViewPanels",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      autoOpenPanel: [0],
      full_name: null,
      id: null,
      last_visit: null,
      date_of_birthday: null,
      phone: null,
      selectedGender: null,
      occupation: null,
      education_qualification: null,
      marital_status: null,
      address: null,
      selectedSmoker: null,
      selectedDrinker: null,
      family_history_of_dm: null,
      gestational_dm: null,
      weight_of_baby_at_birthday: null,
      selectedHypertension: null,
      family_history_of_ihd: null,
      parity: null,
      selectedSmbg: null,
      selectedIhd: null,
      selectedCva: null,
      selectedPvd: null,
      selectedNeuropathy: null,
      weight: null,
      height: null,
      waist_circumference: null,
      bmi: null,
      hip: null,
      selectedRetinopathy: null,
      selectedNonProliferative: null,
      selectedProliferativeDR: null,
      selectedMaculopathy: null,
      selectedInsulin: null,
      selectedAmputation: null,
      selectedEd: null,
      selectedNafld: null,
      selectedDermopathy: null,
      diabetic_food: null,
      date_of_insulin: null,
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

      patient_number: null,
      blood_pressure_systolic: null,
      blood_pressure_diastolic: null,
      weight_by_doctor: null,
      height_by_doctor: null,
      waist_circumference_by_doctor: null,
      bmi_by_doctor: null,
      age_at_visit: null,
      clinical_notes: null,
      next_visit: null,
      created_by_dr: null,
      diagnosisList: [],
      treatmentList: [],
      testsList: [],
      DoctorOfDiagnosis: null,
      DoctorOfTreatment: null,
      DoctorOfTests: null

    }
  },
  components: {
    ReceptionCompo,
    DoctorCompo,
    LabCompo,
    PharmacyCompo
  },

  created() {
    httpGET('api/v1/patients/' + this.patient_uuid)
    .then(({data})=>{
      this.full_name = data.patient_info.full_name
      this.id = data.patient_info.id
      this.last_visit = data.patient_info.last_visit
      this.date_of_birthday = data.patient_info.birthdate
      this.phone = data.patient_info.phone
      this.selectedGender = data.patient_info.gender
      this.occupation = data.patient_latest_history.occupation
      this.education_qualification = data.patient_latest_history.education_qualification
      this.marital_status = data.patient_latest_history.marital_status
      this.address = data.patient_latest_history.address
      this.selectedSmoker = data.patient_latest_history.smoker
      this.selectedDrinker = data.patient_latest_history.drinker
      this.family_history_of_dm = data.patient_latest_history.family_dm
      this.gestational_dm = data.patient_latest_history.gestational_dm
      this.weight_of_baby_at_birthday = data.patient_latest_history.weight_baby
      this.selectedHypertension = data.patient_latest_history.hypert
      this.family_history_of_ihd = data.patient_latest_history.family_ihd
      this.parity = data.patient_latest_history.parity
      this.selectedSmbg = data.patient_latest_history.smbg
      this.selectedIhd = data.patient_latest_history.ihd
      this.selectedCva = data.patient_latest_history.cva
      this.selectedPvd = data.patient_latest_history.pvd
      this.selectedNeuropathy = data.patient_latest_history.neuro
      this.weight = data.patient_latest_history.weight
      this.height = data.patient_latest_history.height
      this.waist_circumference = data.patient_latest_history.wc
      this.bmi = data.patient_latest_history.bmi
      this.hip = data.patient_latest_history.hip
      this.selectedRetinopathy = data.patient_latest_history.retino
      this.selectedNonProliferative = data.patient_latest_history.nonpro
      this.selectedProliferativeDR = data.patient_latest_history.prolif
      this.selectedMaculopathy = data.patient_latest_history.macul
      this.selectedInsulin = data.patient_latest_history.insul
      this.selectedAmputation = data.patient_latest_history.amput
      this.selectedEd = data.patient_latest_history.ed
      this.selectedNafld = data.patient_latest_history.nafld
      this.selectedDermopathy = data.patient_latest_history.dermo
      this.diabetic_food = data.patient_latest_history.dfoot
      this.date_of_insulin = data.patient_latest_history.date_insulin
      this.duration_of_insulin = data.patient_latest_history.duration_insulin
      this.duration_of_dm = data.patient_latest_history.duration_dm
      this.glycemic_control = data.patient_latest_history.glycemic
      this.lipid_control = data.patient_latest_history.lipid
      this.pressure_control = data.patient_latest_history.pressure
      this.father_height = data.patient_latest_history.f_height
      this.mother_height = data.patient_latest_history.m_height
      this.mid_parent_height = data.patient_latest_history.mid_height
      this.first_a1c = data.patient_latest_history.fa1c
      this.second_a1c = data.patient_latest_history.sa2c
      this.source_of_referral = data.patient_latest_history.referral

      // START Doctor Info
      this.patient_number = data.patient_latest_history.patient_number
      this.blood_pressure_systolic = data.patient_latest_history.blood_pressure_systolic
      this.blood_pressure_diastolic = data.patient_latest_history.blood_pressure_diastolic
      this.weight_by_doctor = data.patient_latest_history.weight_by_dr
      this.height_by_doctor = data.patient_latest_history.height_by_dr
      this.waist_circumference_by_doctor = data.patient_latest_history.waist_circumference_by_dr
      this.bmi_by_doctor = data.patient_latest_history.bmi_by_dr
      this.age_at_visit = data.patient_latest_history.age_at_visit
      this.clinical_notes = data.patient_latest_history.clinical_notes
      this.next_visit = data.patient_latest_history.next_visit
      this.created_by_dr = data.doctorName.full_name
      // END Doctor Info

      // START Diagnosis Info
      this.diagnosisList = data.diagnosis
      this.treatmentList = data.treatment
      this.testsList = data.tests
      this.DoctorOfDiagnosis = data.DoctorOfDiagnosis
      this.DoctorOfTreatment = data.DoctorOfTreatment
      this.DoctorOfTests = data.DoctorOfTests
      console.log(data.DoctorOfDiagnosis)
      // END Diagnosis Info

      // START Treatment
      // END Treatment

      // START Tests

      // END Tests
    }).catch(({response:{data}})=>{
      console.log(data)
    });
  },
}
</script>

<style scoped>

</style>