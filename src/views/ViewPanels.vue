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
          <ReceptionCompo :selectedGender="this.patient_uuid"></ReceptionCompo>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header><h2>Doctors</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <DoctorCompo></DoctorCompo>
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
import ReceptionCompo from "@/components/ReceptionCompo";
import DoctorCompo from "@/components/DoctorCompo";
import LabCompo from "@/components/LabCompo";
import PharmacyCompo from "@/components/PharmacyCompo";


export default {
  name: "ViewPanels",
  data() {
    return {
      'patient_uuid': this.$route.params.patient_uuid,
      autoOpenPanel: [0],
    }
  },
  components: {
    ReceptionCompo,
    DoctorCompo,
    LabCompo,
    PharmacyCompo
  }
}
</script>

<style scoped>

</style>