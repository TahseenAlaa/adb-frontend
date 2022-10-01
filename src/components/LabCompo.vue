<template>

    <v-card class="px-6">
      <v-card-title class="subtitle-2">DM</v-card-title>

      <v-row dense>
        <v-col cols="3">
          <v-text-field
              label="Test Name"
              v-model="test_name"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="F Blood Glucose"
              v-model="dm_f_blood_glucose"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="R Blood Glucose"
              v-model="dm_r_blood_glucose"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Turbo"
              v-model="dm_hb_aic_turbo"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Dual PR"
              v-model="dm_hb_aic_dual_pr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Turbid"
              v-model="dm_hb_aic_turbid"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HDL"
              v-model="lipid_hdl"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="CHOL"
              v-model="lipid_chol"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="LDL"
              v-model="lipid_ldl"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Non HDL-C"
              v-model="lipid_non_hdl_c"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="LDH"
              v-model="lipid_ldh"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Microalbuminuria"
              v-model="kidney_microalbuminuria"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Creatinine"
              v-model="kidney_creatinine"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Urea"
              v-model="kidney_urea"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="BUN"
              v-model="kidney_bun"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Total protein"
              v-model="liver_total_protein"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="AST"
              v-model="liver_ast"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="ALT"
              v-model="liver_alt"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="CPK"
              v-model="liver_cpk"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Bicarb"
              v-model="electrolite_bicarb"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Uric Acid"
              v-model="electrolite_uric_acid"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Calcitonin"
              v-model="electrolite_calcitonin"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Na"
              v-model="electrolite_na"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="K"
              v-model="electrolite_k"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="CI"
              v-model="electrolite_ci"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="PTH"
              v-model="electrolite_pth"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="25-OH-Wt-D"
              v-model="electrolite_25_oh_wt_d"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TTG-IGA"
              v-model="electrolite_ttg_iga"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Renin"
              v-model="ras_renin"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Aldosterone"
              v-model="ras_aldosterone"
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
              label="ARR"
              v-model="ras_arr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Cp Peptide"
              v-model="ras_cp_peptide"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="FT4"
              v-model="thyroid_ft4"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TT4"
              v-model="thyroid_tt4"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TT3"
              v-model="thyroid_tt3"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="DHEA-S"
              v-model="endocrine_dhea_s"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Cortisol"
              v-model="endocrine_cortisol"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="ACTH"
              v-model="endocrine_acth"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="GH-1Hr"
              v-model="endocrine_gh_1hr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="GH-2Hr"
              v-model="endocrine_gh_2hr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="GH-3Hr"
              v-model="endocrine_gh_3hr"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="N-Metaneph"
              v-model="endocrine_n_metaneph"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="17-CH-Pro"
              v-model="endocrine_17_ch_pro"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="17-CH-Pro 1hr after syn"
              v-model="endocrine_17_ch_pro_1hr_after_syn"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TRAB"
              v-model="endocrine_trab"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Thyrolobulin"
              v-model="endocrine_thyrolobulin"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="IG-F1"
              v-model="endocrine_ig_f1"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Free-Testosterone"
              v-model="endocrine_free_testosterone"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="SHBG"
              v-model="endocrine_shbg"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="FSH"
              v-model="endocrine_fsh"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Prolactin"
              v-model="endocrine_prolactin"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Estradiol"
              v-model="endocrine_estradiol"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Progestrone"
              v-model="endocrine_progestrone"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="9">
          <v-text-field
              label="B-HCG"
              v-model="endocrine_b_hcg"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Tester Name"
              v-model="created_by"
              outlined
              dense
              readonly
              hint="ReadOnly"
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
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col
            cols="2"
        >
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="10">
          <v-text-field
              label="HDMA-R"
              v-model="hdma_r"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col
            cols="2"
        >
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="10">
          <v-text-field
              label="Osmolamity"
              v-model="osmolamity"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col
            cols="2"
        >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
              label="notes"
              v-model="notes"
              outlined
              dense
              readonly
              hint="ReadOnly"
          >
          </v-textarea>
        </v-col>
      </v-row>
    </v-card>

</template>

<script>
export default {
  name: "LabCompo",
  props: [
    'test_name',
    'dm_f_blood_glucose',
    'dm_r_blood_glucose',
    'dm_hb_aic_turbo',
    'dm_hb_aic_single_pr',
    'dm_hb_aic_dual_pr',
    'dm_hb_aic_turbid',
    'dm_hypoglycemia',
    'dm_insulin',
    'lipid_tg',
    'lipid_hdl',
    'lipid_chol',
    'lipid_ldl',
    'lipid_vldl',
    'lipid_non_hdl_c',
    'lipid_ldh',
    'kidney_proteinuria',
    'kidney_microalbuminuria',
    'kidney_creatinine',
    'kidney_urea',
    'kidney_bun',
    'liver_s_albumin',
    'liver_total_protein',
    'liver_ast',
    'liver_alt',
    'liver_ai_phos',
    'liver_cpk',
    'electrolite_anion_gap',
    'electrolite_bicarb',
    'electrolite_uric_acid',
    'electrolite_calcitonin',
    'electrolite_ca',
    'electrolite_na',
    'electrolite_k',
    'electrolite_ci',
    'electrolite_ferritin',
    'electrolite_pth',
    'electrolite_25_oh_wt_d',
    'electrolite_ttg_iga',
    'ras_glucometer_type',
    'ras_renin',
    'ras_aldosterone',
    'ras_arr',
    'ras_cp_peptide',
    'thyroid_tsh',
    'thyroid_ft4',
    'thyroid_tt4',
    'thyroid_tt3',
    'endocrine_gad',
    'endocrine_dhea_s',
    'endocrine_cortisol',
    'endocrine_acth',
    'endocrine_gh_basal',
    'endocrine_gh_1hr',
    'endocrine_gh_2hr',
    'endocrine_gh_3hr',
    'endocrine_metanephric',
    'endocrine_n_metaneph',
    'endocrine_17_ch_pro',
    'endocrine_17_ch_pro_1hr_after_syn',
    'endocrine_tpo',
    'endocrine_trab',
    'endocrine_thyrolobulin',
    'endocrine_ig_f1',
    'endocrine_testosterone',
    'endocrine_free_testosterone',
    'endocrine_shbg',
    'endocrine_fsh',
    'endocrine_lh',
    'endocrine_prolactin',
    'endocrine_estradiol',
    'endocrine_progestrone',
    'endocrine_b_hcg',
    'egfr',
    'hdma_r',
    'osmolamity',
    'notes',
    'status',
    'created_by',
  ],

  methods: {
    humanReadableDateConverter (date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    }
  },
}
</script>

<style scoped>

</style>