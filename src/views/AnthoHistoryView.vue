<template>
  <v-container class="mt-16" fluid>
    <AnthoCompo
        :patient_history_uuid="patient_history_uuid"
    ></AnthoCompo>
  </v-container>
</template>

<script>
import AnthoCompo from "@/components/AnthoCompo";

export default {
  name: "AnthoHistoryView.vue",
  components: {
    AnthoCompo
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