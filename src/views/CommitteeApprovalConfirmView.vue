<template>

  <v-container>
    <h1>Committee Approval confirm</h1>
    <h2>{{ this.patient_history_uuid }}</h2>
  </v-container>
</template>

<script>
export default {
  name: "CommitteeApprovalConfirmView.vue",
  data() {
    return {
      patient_history_uuid: this.$route.params.patient_history_uuid
    }
  }
}
</script>

<style scoped>

</style>