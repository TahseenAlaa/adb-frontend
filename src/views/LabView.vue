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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="R Blood Glucose"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Turbo"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Turbo"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Single PR"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Dual PR"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HB AIC Turbid"
                      outlined
                      dense
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
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="HDL"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="CHOL"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="LDL"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="VLDL"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Non HDL-C"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="LDH"
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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                      label="Microalbuminuria"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                      label="Creatinine"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                      label="Urea"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="BUN"
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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Total protein"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="AST"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="ALT"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="AI-Phos"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="CPK"
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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Bicarb"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Uric Acid"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Calcitonin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Ca"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Na"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="K"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="CI"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Ferritin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="PTH"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="25-OH-Wt-D"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TTG-IGA"
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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Renin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Aldosterone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="4">
                  <v-text-field
                      label="ARR"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                      label="Cp Peptide"
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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="FT4"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TT4"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TT3"
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
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="DHEA-S"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Cortisol"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="ACTH"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="GH-Basal"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="GH-1Hr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="GH-2Hr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="GH-3Hr"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Metanephric"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="N-Metaneph"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="17-CH-Pro"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="17-CH-Pro 1hr after syn"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="TPO"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="TRAB"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Thyrolobulin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="IG-F1"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="Testosterone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Free-Testosterone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="SHBG"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="FSH"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="LH"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Prolactin"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Estradiol"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Progestrone"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="3">
                  <v-text-field
                      label="B-HCG"
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
        <v-col>
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
export default {
  data() {
    return {
      autoOpenPanel: [2]
    }
  },
  name: "LabView"
}
</script>

<style scoped>

</style>