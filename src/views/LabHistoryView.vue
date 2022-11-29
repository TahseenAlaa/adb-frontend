<template>
  <LabCompo></LabCompo>
</template>

<script>
import LabCompo from "@/components/LabCompo";

export default {
  name: "LabHistoryView.vue",
  components: {
    LabCompo
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