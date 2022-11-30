<template>
  <PharmacyCompo
      :patient_history_uuid="patient_history_uuid"
  ></PharmacyCompo>
</template>

<script>
import PharmacyCompo from "@/components/PharmacyCompo";

export default {
  name: "TreatmentHistoryView.vue",
  components: {
    PharmacyCompo
  },
  data() {
    return {
      patient_history_uuid: this.$route.params.patient_history_uuid
    }
  }
}
</script>

<style scoped>

</style>