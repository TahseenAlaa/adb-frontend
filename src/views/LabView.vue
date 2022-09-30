<template>

  <v-container>
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>Content goes here</v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Doctors</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          Doctors contents goes here
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Medical Lab</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form>
            <v-card class="px-6">
              <v-card-title>Medical Lab</v-card-title>
              <v-card-subtitle>Enter the results of the tests</v-card-subtitle>
              <v-card-title class="subtitle-2">DM</v-card-title>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="F Blood Glucose"
                      v-model="dm_f_blood_glucose"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="R Blood Glucose"
                      v-model="dm_r_blood_glucose"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Turbo"
                      v-model="dm_hb_aic_turbo"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Single PR"
                      v-model="dm_hb_aic_single_pr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Dual PR"
                      v-model="dm_hb_aic_dual_pr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Turbid"
                      v-model="dm_hb_aic_turbid"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Hypoglycemia"
                      v-model="dm_hypoglycemia"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Insulin"
                      v-model="dm_insulin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Lipid Profile</v-card-title>
              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="TG"
                      v-model="lipid_tg"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HDL"
                      v-model="lipid_hdl"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="CHOL"
                      v-model="lipid_chol"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="LDL"
                      v-model="lipid_ldl"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="VLDL"
                      v-model="lipid_vldl"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Non HDL-C"
                      v-model="lipid_non_hdl_c"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="LDH"
                      v-model="lipid_ldh"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Kidney function</v-card-title>
              <v-row dense>
                <v-col cols="2">
                  <v-text-field
                      label="Proteinuria"
                      v-model="kidney_proteinuria"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                      label="Microalbuminuria"
                      v-model="kidney_microalbuminuria"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                      label="Creatinine"
                      v-model="kidney_creatinine"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                      label="Urea"
                      v-model="kidney_urea"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="BUN"
                      v-model="kidney_bun"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Liver Function</v-card-title>
              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="S-Albumin"
                      v-model="liver_s_albumin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Total protein"
                      v-model="liver_total_protein"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="AST"
                      v-model="liver_ast"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="ALT"
                      v-model="liver_alt"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="AI-Phos"
                      v-model="liver_ai_phos"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="CPK"
                      v-model="liver_cpk"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Electrolite + Biochemicals</v-card-title>
              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Anion Gap"
                      v-model="electrolite_anion_gap"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Bicarb"
                      v-model="electrolite_bicarb"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Uric Acid"
                      v-model="electrolite_uric_acid"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Calcitonin"
                      v-model="electrolite_calcitonin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Ca"
                      v-model="electrolite_ca"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Na"
                      v-model="electrolite_na"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="K"
                      v-model="electrolite_k"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="CI"
                      v-model="electrolite_ci"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Ferritin"
                      v-model="electrolite_ferritin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="PTH"
                      v-model="electrolite_pth"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="25-OH-Wt-D"
                      v-model="electrolite_25_oh_wt_d"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TTG-IGA"
                      v-model="electrolite_ttg_iga"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">RAS</v-card-title>
              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="Glucometer type"
                      v-model="ras_glucometer_type"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Renin"
                      v-model="ras_renin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Aldosterone"
                      v-model="ras_aldosterone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="ARR"
                      v-model="ras_arr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Cp Peptide"
                      v-model="ras_cp_peptide"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Thyroid</v-card-title>
              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="TSH"
                      v-model="thyroid_tsh"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="FT4"
                      v-model="thyroid_ft4"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TT4"
                      v-model="thyroid_tt4"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TT3"
                      v-model="thyroid_tt3"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Endocrine</v-card-title>
              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="GAD"
                      v-model="endocrine_gad"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="DHEA-S"
                      v-model="endocrine_dhea_s"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Cortisol"
                      v-model="endocrine_cortisol"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="ACTH"
                      v-model="endocrine_acth"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="GH-Basal"
                      v-model="endocrine_gh_basal"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="GH-1Hr"
                      v-model="endocrine_gh_1hr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="GH-2Hr"
                      v-model="endocrine_gh_2hr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="GH-3Hr"
                      v-model="endocrine_gh_3hr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Metanephric"
                      v-model="endocrine_metanephric"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="N-Metaneph"
                      v-model="endocrine_n_metaneph"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="17-CH-Pro"
                      v-model="endocrine_17_ch_pro"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="17-CH-Pro 1hr after syn"
                      v-model="endocrine_17_ch_pro_1hr_after_syn"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="TPO"
                      v-model="endocrine_tpo"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TRAB"
                      v-model="endocrine_trab"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Thyrolobulin"
                      v-model="endocrine_thyrolobulin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="IG-F1"
                      v-model="endocrine_ig_f1"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Testosterone"
                      v-model="endocrine_testosterone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Free-Testosterone"
                      v-model="endocrine_free_testosterone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="SHBG"
                      v-model="endocrine_shbg"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="FSH"
                      v-model="endocrine_fsh"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="LH"
                      v-model="endocrine_lh"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Prolactin"
                      v-model="endocrine_prolactin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Estradiol"
                      v-model="endocrine_estradiol"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Progestrone"
                      v-model="endocrine_progestrone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="B-HCG"
                      v-model="endocrine_b_hcg"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-card-title class="subtitle-2">Others</v-card-title>
              <v-row dense>
                <v-col cols="10">
                  <v-text-field
                      label="eGFR"
                      v-model="egfr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                  <v-col
                      cols="2"
                  >
                    <v-btn
                        class="deep-purple white--text"
                    >
                      CALCULATE
                    </v-btn>
                  </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="10">
                  <v-text-field
                      label="HDMA-R"
                      v-model="hdma_r"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="2"
                >
                  <v-btn
                      class="deep-purple white--text"
                  >
                    CALCULATE
                  </v-btn>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="10">
                  <v-text-field
                      label="Osmolamity"
                      v-model="osmolamity"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="2"
                >
                  <v-btn
                      class="deep-purple white--text"
                  >
                    CALCULATE
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <v-alert
          type="success"
          class="mt-10 mr-4"
          v-if="successAlert"
          dense
      >Tests Information Stored Successfully!</v-alert>
      <v-alert
          type="error"
          class="mt-10 mr-4"
          v-if="errorAlert"
          dense
      >Save data Failed!</v-alert>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-img
              src="../assets/loading_icon.svg"
              width="50px"
              height="50px"
              class="mx-auto"
          >

          </v-img>
          <h3 class="text-capitalize">SHOW HISTORY</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 white deep-purple--text"
      >
        <v-col>
          <v-img
              src="../assets/print_icon.svg"
              width="50px"
              height="50px"
              class="mx-auto"
          >

          </v-img>
          <h3 class="text-capitalize">PRINT</h3>
        </v-col>
      </v-btn>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
      >
        <v-col
            @click="storeLabDate"
        >
          <v-img
              src="../assets/search_icon.svg"
              width="50px"
              height="50px"
              class="mx-auto"
          >

          </v-img>
          <h3 class="text-capitalize">SAVE CHANGES</h3>
        </v-col>
      </v-btn>
    </v-row>
  </v-container>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      autoOpenPanel: [2],
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
      successAlert: false,
      errorAlert: false
    }
  },

  methods: {
    storeLabDate(e) {
      let baseURL = this.$store.getters.baseURL

        axios.post(baseURL + 'api/v1/lab/update', {
           patient_uuid: this.$route.params.patient_uuid,
           dm_f_blood_glucose: this.dm_f_blood_glucose,
           dm_r_blood_glucose: this.dm_r_blood_glucose,
           dm_hb_aic_turbo: this.dm_hb_aic_turbo,
           dm_hb_aic_single_pr: this.dm_hb_aic_single_pr,
           dm_hb_aic_dual_pr: this.dm_hb_aic_dual_pr,
           dm_hb_aic_turbid: this.dm_hb_aic_turbid,
           dm_hypoglycemia: this.dm_hypoglycemia,
           dm_insulin: this.dm_insulin,
           lipid_tg: this.lipid_tg,
           lipid_hdl: this.lipid_hdl,
           lipid_chol: this.lipid_chol,
           lipid_ldl: this.lipid_ldl,
           lipid_vldl: this.lipid_vldl,
           lipid_non_hdl_c: this.lipid_non_hdl_c,
           lipid_ldh: this.lipid_ldh,
           kidney_proteinuria: this.kidney_proteinuria,
           kidney_microalbuminuria: this.kidney_microalbuminuria,
           kidney_creatinine: this.kidney_creatinine,
           kidney_urea: this.kidney_urea,
           kidney_bun: this.kidney_bun,
           liver_s_albumin: this.liver_s_albumin,
           liver_total_protein: this.liver_total_protein,
           liver_ast: this.liver_ast,
           liver_alt: this.liver_alt,
           liver_ai_phos: this.liver_ai_phos,
           liver_cpk: this.liver_cpk,
           electrolite_anion_gap: this.electrolite_anion_gap,
           electrolite_bicarb: this.electrolite_bicarb,
           electrolite_uric_acid: this.electrolite_uric_acid,
           electrolite_calcitonin: this.electrolite_calcitonin,
           electrolite_ca: this.electrolite_ca,
           electrolite_na: this.electrolite_na,
           electrolite_k: this.electrolite_k,
           electrolite_ci: this.electrolite_ci,
           electrolite_ferritin: this.electrolite_ferritin,
           electrolite_pth: this.electrolite_pth,
           electrolite_25_oh_wt_d: this.electrolite_25_oh_wt_d,
           electrolite_ttg_iga: this.electrolite_ttg_iga,
           ras_glucometer_type: this.ras_glucometer_type,
           ras_renin: this.ras_renin,
           ras_aldosterone: this.ras_aldosterone,
           ras_arr: this.ras_arr,
           ras_cp_peptide: this.ras_cp_peptide,
           thyroid_tsh: this.thyroid_tsh,
           thyroid_ft4: this.thyroid_ft4,
           thyroid_tt4: this.thyroid_tt4,
           thyroid_tt3: this.thyroid_tt3,
           endocrine_gad: this.endocrine_gad,
           endocrine_dhea_s: this.endocrine_dhea_s,
           endocrine_cortisol: this.endocrine_cortisol,
           endocrine_acth: this.endocrine_acth,
           endocrine_gh_basal: this.endocrine_gh_basal,
           endocrine_gh_1hr: this.endocrine_gh_1hr,
           endocrine_gh_2hr: this.endocrine_gh_2hr,
           endocrine_gh_3hr: this.endocrine_gh_3hr,
           endocrine_metanephric: this.endocrine_metanephric,
           endocrine_n_metaneph: this.endocrine_n_metaneph,
           endocrine_17_ch_pro: this.endocrine_17_ch_pro,
           endocrine_17_ch_pro_1hr_after_syn: this.endocrine_17_ch_pro_1hr_after_syn,
           endocrine_tpo: this.endocrine_tpo,
           endocrine_trab: this.endocrine_trab,
           endocrine_thyrolobulin: this.endocrine_thyrolobulin,
           endocrine_ig_f1: this.endocrine_ig_f1,
           endocrine_testosterone: this.endocrine_testosterone,
           endocrine_free_testosterone: this.endocrine_free_testosterone,
           endocrine_shbg: this.endocrine_shbg,
           endocrine_fsh: this.endocrine_fsh,
          endocrine_lh: this.endocrine_lh,
           endocrine_prolactin: this.endocrine_prolactin,
           endocrine_estradiol: this.endocrine_estradiol,
           endocrine_progestrone: this.endocrine_progestrone,
           endocrine_b_hcg: this.endocrine_b_hcg,
           egfr: this.egfr,
           hdma_r: this.hdma_r,
           osmolamity: this.osmolamity,

        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('esite_token')
          }
        }).then(({data}) => {
          this.successAlert = true
          setTimeout(() => {this.$router.push({path: '/'})}, 2000)
          // console.log(data)
        }).catch(({response: {data}}) => {
          this.errorAlert = true
          console.log(data)
        });
        e.preventDefault()
      }
  },
  name: "LabView"
}
</script>

<style scoped>

</style>