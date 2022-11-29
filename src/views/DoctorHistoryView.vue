<template>
  <DoctorCompo></DoctorCompo>
</template>

<script>
import DoctorCompo from "@/components/DoctorCompo";

export default {
  name: "DoctorHistoryView.vue",
  components: {
    DoctorCompo
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