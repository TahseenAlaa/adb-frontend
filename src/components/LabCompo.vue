<template>

    <v-card class="px-6">
      <v-card-title class="subtitle-2">DM</v-card-title>

      <v-row dense>
        <v-col cols="3">
          <v-text-field
              label="F Blood Glucose"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="R Blood Glucose"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Turbo"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Turbo"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Dual PR"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HB AIC Turbid"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Hypoglycemia"
              outlined
              dense
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="3">
          <v-text-field
              label="Insulin"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="HDL"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="CHOL"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="LDL"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Non HDL-C"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="LDH"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Microalbuminuria"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Creatinine"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
              label="Urea"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="BUN"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Total protein"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="AST"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="ALT"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="CPK"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Bicarb"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Uric Acid"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Calcitonin"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Na"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="K"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="CI"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="PTH"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="25-OH-Wt-D"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TTG-IGA"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Renin"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Aldosterone"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Cp Peptide"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="FT4"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TT4"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TT3"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="DHEA-S"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Cortisol"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="ACTH"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="GH-1Hr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="GH-2Hr"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="GH-3Hr"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="N-Metaneph"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="17-CH-Pro"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="17-CH-Pro 1hr after syn"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="TRAB"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Thyrolobulin"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="IG-F1"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Free-Testosterone"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="SHBG"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="FSH"
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
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Prolactin"
              outlined
              dense
              readonly
              hint="ReadOnly""
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Estradiol"
              outlined
              dense
              readonly
              hint="ReadOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Progestrone"
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
              label="B-HCG"
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
    </v-card>

</template>

<script>
export default {
  name: "LabCompo"
}
</script>

<style scoped>

</style>