<template>
  <v-container class="mb-12" fluid>
    <AnthoCompo
        :patient_history_uuid="patient_history_uuid"
    ></AnthoCompo>
    <v-btn
        @click="$router.go(-1)"
        class="deep-purple white--text"
    >
      <v-icon size="30">mdi-chevron-left</v-icon>
      Back
    </v-btn>
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