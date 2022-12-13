<template>

  <v-container class="mb-16" fluid>
    <v-expansion-panels
        focusable
        multiple
        v-model="autoOpenPanel"
    >
      <v-expansion-panel>
        <v-expansion-panel-header><h2>Patient Information</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <ReceptionCompo
              ref="reception_compo_ref"
             :patient_uuid="this.patient_uuid"
          ></ReceptionCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row dense align="center" justify="center">
      <v-spacer></v-spacer>
      <v-btn
          class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
      >
        <v-col @click="storeDate">
          <v-icon size="60">mdi-content-save</v-icon>
          <h3 class="text-capitalize">SAVE CHANGES</h3>
        </v-col>
      </v-btn>
    </v-row>

    <loading-dialog-compo
        :loading_-dialog="loadingDialogActive"
    ></loading-dialog-compo>
  </v-container>

</template>

<script>
import ReceptionCompo from "@/components/ReceptionCompo";
import loadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "ViewPanels",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      autoOpenPanel: [0],
      loadingDialogActive: false,
    }
  },
  components: {
    ReceptionCompo,
    loadingDialogCompo
  },


  methods: {
    storeDate() {
      this.loadingDialogActive = true
      this.storePatientUpdatedInfo()
      setTimeout(() => {
        this.$router.push({path: '/search/reception'})
      }, 2000)
    },

    storePatientUpdatedInfo() {
      // Call the update patient function from the Reception Component
      this.$nextTick(() => {
        this.$refs.reception_compo_ref.storePatientUpdatedInfo()
      })
    },
  }
}
</script>

<style scoped>

</style>