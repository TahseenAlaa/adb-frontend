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
              :date_of_insulin="this.date_of_insulin"
              :DateOfInsulinMenu="this.DateOfInsulinMenu"
              :activePicker="this.activePicker"
              :date_of_birthday="this.date_of_birthday"
              :menu="this.menu"
              :smoker="this.smoker"
              :drinker="this.drinker"
              :education_qualification="this.education_qualification"
              :familyHistoryOfDM="this.familyHistoryOfDM"
              :gestationalDM="this.gestationalDM"
              :hypertension="this.hypertension"
              :smbg="this.smbg"
              :ihd="this.ihd"
              :cva="this.cva"
              :pvd="this.pvd"
              :neuropathy="this.neuropathy"
              :retinopathy="this.retinopathy"
              :non_proliferative="this.non_proliferative"
              :maculopathy="this.maculopathy"
              :insulin="this.insulin"
              :amputation="this.amputation"
              :ed="this.ed"
              :nafld="this.nafld"
              :dermopathy="this.dermopathy"
              :diabeticFood="this.diabeticFood"
              :glycemicControl="this.glycemicControl"
              :lipidControl="this.lipidControl"
              :full_name="this.full_name"
              :phone="this.phone"
              :occupation="this.occupation"
              :marital_status="this.marital_status"
              :address="this.address"
              :family_history_of_dm="this.family_history_of_dm"
              :gestational_dm="this.gestational_dm"
              :weight_of_baby_at_birthday="this.weight_of_baby_at_birthday"
              :family_history_of_ihd="this.family_history_of_ihd"
              :parity="this.parity"
              :weight="this.weight"
              :height="this.height"
              :waist_circumference="this.waist_circumference"
              :bmi="this.bmi"
              :hip="this.hip"
              :diabetic_food="this.diabetic_food"
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
              :referral="this.referral"
              :proliferative_dr="this.proliferative_dr"
              :gender="this.gender"
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
          <LabCompo
              :test_name="this.test_name"
              :dm_f_blood_glucose="this.dm_f_blood_glucose"
              :dm_r_blood_glucose="this.dm_r_blood_glucose"
              :dm_hb_aic_turbo="this.dm_hb_aic_turbo"
              :dm_hb_aic_single_pr="this.dm_hb_aic_single_pr"
              :dm_hb_aic_dual_pr="this.dm_hb_aic_dual_pr"
              :dm_hb_aic_turbid="this.dm_hb_aic_turbid"
              :dm_hypoglycemia="this.dm_hypoglycemia"
              :dm_insulin="this.dm_insulin"
              :lipid_tg="this.lipid_tg"
              :lipid_hdl="this.lipid_hdl"
              :lipid_chol="this.lipid_chol"
              :lipid_ldl="this.lipid_ldl"
              :lipid_vldl="this.lipid_vldl"
              :lipid_non_hdl_c="this.lipid_non_hdl_c"
              :lipid_ldh="this.lipid_ldh"
              :kidney_proteinuria="this.kidney_proteinuria"
              :kidney_microalbuminuria="this.kidney_microalbuminuria"
              :kidney_creatinine="this.kidney_creatinine"
              :kidney_urea="this.kidney_urea"
              :kidney_bun="this.kidney_bun"
              :liver_s_albumin="this.liver_s_albumin"
              :liver_total_protein="this.liver_total_protein"
              :liver_ast="this.liver_ast"
              :liver_alt="this.liver_alt"
              :liver_ai_phos="this.liver_ai_phos"
              :liver_cpk="this.liver_cpk"
              :electrolite_anion_gap="this.electrolite_anion_gap"
              :electrolite_bicarb="this.electrolite_bicarb"
              :electrolite_uric_acid="this.electrolite_uric_acid"
              :electrolite_calcitonin="this.electrolite_calcitonin"
              :electrolite_ca="this.electrolite_ca"
              :electrolite_na="this.electrolite_na"
              :electrolite_k="this.electrolite_k"
              :electrolite_ci="this.electrolite_ci"
              :electrolite_ferritin="this.electrolite_ferritin"
              :electrolite_pth="this.electrolite_pth"
              :electrolite_25_oh_wt_d="this.electrolite_25_oh_wt_d"
              :electrolite_ttg_iga="this.electrolite_ttg_iga"
              :ras_glucometer_type="this.ras_glucometer_type"
              :ras_renin="this.ras_renin"
              :ras_aldosterone="this.ras_aldosterone"
              :ras_arr="this.ras_arr"
              :ras_cp_peptide="this.ras_cp_peptide"
              :thyroid_tsh="this.thyroid_tsh"
              :thyroid_ft4="this.thyroid_ft4"
              :thyroid_tt4="this.thyroid_tt4"
              :thyroid_tt3="this.thyroid_tt3"
              :endocrine_gad="this.endocrine_gad"
              :endocrine_dhea_s="this.endocrine_dhea_s"
              :endocrine_cortisol="this.endocrine_cortisol"
              :endocrine_acth="this.endocrine_acth"
              :endocrine_gh_basal="this.endocrine_gh_basal"
              :endocrine_gh_1hr="this.endocrine_gh_1hr"
              :endocrine_gh_2hr="this.endocrine_gh_2hr"
              :endocrine_gh_3hr="this.endocrine_gh_3hr"
              :endocrine_metanephric="this.endocrine_metanephric"
              :endocrine_n_metaneph="this.endocrine_n_metaneph"
              :endocrine_17_ch_pro="this.endocrine_17_ch_pro"
              :endocrine_17_ch_pro_1hr_after_syn="this.endocrine_17_ch_pro_1hr_after_syn"
              :endocrine_tpo="this.endocrine_tpo"
              :endocrine_trab="this.endocrine_trab"
              :endocrine_thyrolobulin="this.endocrine_thyrolobulin"
              :endocrine_ig_f1="this.endocrine_ig_f1"
              :endocrine_testosterone="this.endocrine_testosterone"
              :endocrine_free_testosterone="this.endocrine_free_testosterone"
              :endocrine_shbg="this.endocrine_shbg"
              :endocrine_fsh="this.endocrine_fsh"
              :endocrine_lh="this.endocrine_lh"
              :endocrine_prolactin="this.endocrine_prolactin"
              :endocrine_estradiol="this.endocrine_estradiol"
              :endocrine_progestrone="this.endocrine_progestrone"
              :endocrine_b_hcg="this.endocrine_b_hcg"
              :egfr="this.egfr"
              :hdma_r="this.hdma_r"
              :osmolamity="this.osmolamity"
              :notes="this.notes"
              :status="this.status"
              :created_by="this.created_by"
          ></LabCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Pharmacy</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <PharmacyCompo
              :drugsList="this.drugsList"
          ></PharmacyCompo>
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
      id: null,
      date_of_insulin: null,
      DateOfInsulinMenu: null,
      activePicker: null,
      menu: null,
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
      date_of_birthday: null,
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
      DoctorOfTests: null,

      test_name: null,
      dm_f_blood_glucose: null,
      dm_r_blood_glucose: null,
      dm_hb_aic_turbo: null,
      dm_hb_aic_single_pr: null,
      dm_hb_aic_dual_pr: null,
      dm_hb_aic_turbid: null,
      dm_hypoglycemia: null,
      dm_insulin: null,
      lipid_tg: null,
      lipid_hdl: null,
      lipid_chol: null,
      lipid_ldl: null,
      lipid_vldl: null,
      lipid_non_hdl_c: null,
      lipid_ldh: null,
      kidney_proteinuria: null,
      kidney_microalbuminuria: null,
      kidney_creatinine: null,
      kidney_urea: null,
      kidney_bun: null,
      liver_s_albumin: null,
      liver_total_protein: null,
      liver_ast: null,
      liver_alt: null,
      liver_ai_phos: null,
      liver_cpk: null,
      electrolite_anion_gap: null,
      electrolite_bicarb: null,
      electrolite_uric_acid: null,
      electrolite_calcitonin: null,
      electrolite_ca: null,
      electrolite_na: null,
      electrolite_k: null,
      electrolite_ci: null,
      electrolite_ferritin: null,
      electrolite_pth: null,
      electrolite_25_oh_wt_d: null,
      electrolite_ttg_iga: null,
      ras_glucometer_type: null,
      ras_renin: null,
      ras_aldosterone: null,
      ras_arr: null,
      ras_cp_peptide: null,
      thyroid_tsh: null,
      thyroid_ft4: null,
      thyroid_tt4: null,
      thyroid_tt3: null,
      endocrine_gad: null,
      endocrine_dhea_s: null,
      endocrine_cortisol: null,
      endocrine_acth: null,
      endocrine_gh_basal: null,
      endocrine_gh_1hr: null,
      endocrine_gh_2hr: null,
      endocrine_gh_3hr: null,
      endocrine_metanephric: null,
      endocrine_n_metaneph: null,
      endocrine_17_ch_pro: null,
      endocrine_17_ch_pro_1hr_after_syn: null,
      endocrine_tpo: null,
      endocrine_trab: null,
      endocrine_thyrolobulin: null,
      endocrine_ig_f1: null,
      endocrine_testosterone: null,
      endocrine_free_testosterone: null,
      endocrine_shbg: null,
      endocrine_fsh: null,
      endocrine_lh: null,
      endocrine_prolactin: null,
      endocrine_estradiol: null,
      endocrine_progestrone: null,
      endocrine_b_hcg: null,
      egfr: null,
      hdma_r: null,
      osmolamity: null,
      notes: null,
      status: null,
      created_by: null,

      drugsList: []
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
      this.date_of_insulin = data.patient_info.date_insulin
      this.DateOfInsulinMenu = data.patient_info.DateOfInsulinMenu
      this.activePicker = data.patient_info.activePicker
      this.date_of_birthday = data.patient_info.birthday
      this.menu = data.patient_info.menu
      this.smoker = data.patient_info.smoker
      this.drinker = data.patient_info.drinker
      this.education_qualification = data.patient_info.education_qualification
      this.familyHistoryOfDM = data.patient_info.familyHistoryOfDM
      this.gestationalDM = data.patient_info.gestationalDM
      this.hypertension = data.patient_info.hypertension
      this.smbg = data.patient_info.smbg
      this.ihd = data.patient_info.ihd
      this.cva = data.patient_info.cva
      this.pvd = data.patient_info.pvd
      this.neuropathy = data.patient_info.neuropathy
      this.retinopathy = data.patient_info.retinopathy
      this.non_proliferative = data.patient_info.non_proliferative
      this.maculopathy = data.patient_info.maculopathy
      this.insulin = data.patient_info.insulin
      this.amputation = data.patient_info.amputation
      this.ed = data.patient_info.ed
      this.nafld = data.patient_info.nafld
      this.dermopathy = data.patient_info.dermopathy
      this.diabeticFood = data.patient_info.diabeticFood
      this.glycemicControl = data.patient_info.glycemicControl
      this.lipidControl = data.patient_info.lipidControl
      this.full_name = data.patient_info.full_name
      this.phone = data.patient_info.phone
      this.occupation = data.patient_info.occupation
      this.marital_status = data.patient_info.marital_status
      this.address = data.patient_info.address
      this.family_history_of_dm = data.patient_info.family_dm
      this.gestational_dm = data.patient_info.gestational_dm
      this.weight_of_baby_at_birthday = data.patient_info.weight_baby
      this.family_history_of_ihd = data.patient_info.family_ihd
      this.parity = data.patient_info.parity
      this.weight = data.patient_info.weight
      this.height = data.patient_info.height
      this.waist_circumference = data.patient_info.waist_circumference
      this.bmi = data.patient_info.bmi
      this.hip = data.patient_info.hip
      this.diabetic_food = data.patient_info.diabetic_food
      this.duration_of_insulin = data.patient_info.duration_insulin
      this.duration_of_dm = data.patient_info.duration_dm
      this.glycemic_control = data.patient_info.glycemic_control
      this.lipid_control = data.patient_info.lipid_control
      this.pressure_control = data.patient_info.pressure_control
      this.father_height = data.patient_info.father_height
      this.mother_height = data.patient_info.mother_height
      this.mid_parent_height = data.patient_info.mid_parent_height
      this.first_a1c = data.patient_info.first_a1c
      this.second_a1c = data.patient_info.second_a1c
      this.referral = data.patient_info.referral
      this.proliferative_dr = data.patient_info.proliferative_dr
      this.gender = data.patient_info.gender

      // START Doctor Info
      this.patient_number = data.patient_latest_history.patient_number
      this.blood_pressure_systolic = data.patient_latest_history.blood_pressure_systolic
      this.blood_pressure_diastolic = data.patient_latest_history.blood_pressure_diastolic
      this.weight_by_doctor = data.patient_latest_history.weight
      this.height_by_doctor = data.patient_latest_history.height
      this.waist_circumference_by_doctor = data.patient_latest_history.waist_circumference
      this.bmi_by_doctor = data.patient_latest_history.bmi
      this.age_at_visit = data.patient_latest_history.age_at_visit
      this.clinical_notes = data.patient_latest_history.clinical_notes
      this.next_visit = data.patient_latest_history.next_visit
      this.created_by = data.doctorName.full_name
      // END Doctor Info

      // START Diagnosis Info
      this.diagnosisList = data.diagnosis
      this.DoctorOfDiagnosis = data.DoctorOfDiagnosis
      console.log(data.DoctorOfDiagnosis)
      // END Diagnosis Info

      // START Treatment
      this.treatmentList = data.treatment
      this.DoctorOfTreatment = data.DoctorOfTreatment
      // END Treatment

      // START Tests
      this.testsList = data.tests
      this.DoctorOfTests = data.DoctorOfTests
      // END Tests

      // START Medical Lab
      this.test_name = data.medical_history.test_name,
      this.dm_f_blood_glucose = data.medical_history.dm_f_blood_glucose,
      this.dm_r_blood_glucose = data.medical_history.dm_r_blood_glucose,
      this.dm_hb_aic_turbo = data.medical_history.dm_hb_aic_turbo,
      this.dm_hb_aic_single_pr = data.medical_history.dm_hb_aic_single_pr,
      this.dm_hb_aic_dual_pr = data.medical_history.dm_hb_aic_dual_pr,
      this.dm_hb_aic_turbid = data.medical_history.dm_hb_aic_turbid,
      this.dm_hypoglycemia = data.medical_history.dm_hypoglycemia,
      this.dm_insulin = data.medical_history.dm_insulin,
      this.lipid_tg = data.medical_history.lipid_tg,
      this.lipid_hdl = data.medical_history.lipid_hdl,
      this.lipid_chol = data.medical_history.lipid_chol,
      this.lipid_ldl = data.medical_history.lipid_ldl,
      this.lipid_vldl = data.medical_history.lipid_vldl,
      this.lipid_non_hdl_c = data.medical_history.lipid_non_hdl_c,
      this.lipid_ldh = data.medical_history.lipid_ldh,
      this.kidney_proteinuria = data.medical_history.kidney_proteinuria,
      this.kidney_microalbuminuria = data.medical_history.kidney_microalbuminuria,
      this.kidney_creatinine = data.medical_history.kidney_creatinine,
      this.kidney_urea = data.medical_history.kidney_urea,
      this.kidney_bun = data.medical_history.kidney_bun,
      this.liver_s_albumin = data.medical_history.liver_s_albumin,
      this.liver_total_protein = data.medical_history.liver_total_protein,
      this.liver_ast = data.medical_history.liver_ast,
      this.liver_alt = data.medical_history.liver_alt,
      this.liver_ai_phos = data.medical_history.liver_ai_phos,
      this.liver_cpk = data.medical_history.liver_cpk,
      this.electrolite_anion_gap = data.medical_history.electrolite_anion_gap,
      this.electrolite_bicarb = data.medical_history.electrolite_bicarb,
      this.electrolite_uric_acid = data.medical_history.electrolite_uric_acid,
      this.electrolite_calcitonin = data.medical_history.electrolite_calcitonin,
      this.electrolite_ca = data.medical_history.electrolite_ca,
      this.electrolite_na = data.medical_history.electrolite_na,
      this.electrolite_k = data.medical_history.electrolite_k,
      this.electrolite_ci = data.medical_history.electrolite_ci,
      this.electrolite_ferritin = data.medical_history.electrolite_ferritin,
      this.electrolite_pth = data.medical_history.electrolite_pth,
      this.electrolite_25_oh_wt_d = data.medical_history.electrolite_25_oh_wt_d,
      this.electrolite_ttg_iga = data.medical_history.electrolite_ttg_iga,
      this.ras_glucometer_type = data.medical_history.ras_glucometer_type,
      this.ras_renin = data.medical_history.ras_renin,
      this.ras_aldosterone = data.medical_history.ras_aldosterone,
      this.ras_arr = data.medical_history.ras_arr,
      this.ras_cp_peptide = data.medical_history.ras_cp_peptide,
      this.thyroid_tsh = data.medical_history.thyroid_tsh,
      this.thyroid_ft4 = data.medical_history.thyroid_ft4,
      this.thyroid_tt4 = data.medical_history.thyroid_tt4,
      this.thyroid_tt3 = data.medical_history.thyroid_tt3,
      this.endocrine_gad = data.medical_history.endocrine_gad,
      this.endocrine_dhea_s = data.medical_history.endocrine_dhea_s,
      this.endocrine_cortisol = data.medical_history.endocrine_cortisol,
      this.endocrine_acth = data.medical_history.endocrine_acth,
      this.endocrine_gh_basal = data.medical_history.endocrine_gh_basal,
      this.endocrine_gh_1hr = data.medical_history.endocrine_gh_1hr,
      this.endocrine_gh_2hr = data.medical_history.endocrine_gh_2hr,
      this.endocrine_gh_3hr = data.medical_history.endocrine_gh_3hr,
      this.endocrine_metanephric = data.medical_history.endocrine_metanephric,
      this.endocrine_n_metaneph = data.medical_history.endocrine_n_metaneph,
      this.endocrine_17_ch_pro = data.medical_history.endocrine_17_ch_pro,
      this.endocrine_17_ch_pro_1hr_after_syn = data.medical_history.endocrine_17_ch_pro_1hr_after_syn,
      this.endocrine_tpo = data.medical_history.endocrine_tpo,
      this.endocrine_trab = data.medical_history.endocrine_trab,
      this.endocrine_thyrolobulin = data.medical_history.endocrine_thyrolobulin,
      this.endocrine_ig_f1 = data.medical_history.endocrine_ig_f1,
      this.endocrine_testosterone = data.medical_history.endocrine_testosterone,
      this.endocrine_free_testosterone = data.medical_history.endocrine_free_testosterone,
      this.endocrine_shbg = data.medical_history.endocrine_shbg,
      this.endocrine_fsh = data.medical_history.endocrine_fsh,
      this.endocrine_lh = data.medical_history.endocrine_lh,
      this.endocrine_prolactin = data.medical_history.endocrine_prolactin,
      this.endocrine_estradiol = data.medical_history.endocrine_estradiol,
      this.endocrine_progestrone = data.medical_history.endocrine_progestrone,
      this.endocrine_b_hcg = data.medical_history.endocrine_b_hcg,
      this.egfr = data.medical_history.egfr,
      this.hdma_r = data.medical_history.hdma_r,
      this.osmolamity = data.medical_history.osmolamity,
      this.notes = data.medical_history.notes,
      this.status = data.medical_history.status,
      this.created_by = data.medical_history.created_by,
      // END Medical Lab

      // START Drugs Listing
      this.drugsList = data.drugs_list
      // END Drugs Listing
    }).catch(({response:{data}})=>{
      console.log(data)
    });
  },
}
</script>

<style scoped>

</style>