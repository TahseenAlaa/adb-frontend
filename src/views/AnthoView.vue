<template>
  <h1>Antho . {{ this.patient_uuid }}</h1>
</template>

<script>
export default {
  name: "AnthoView",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid
    }
  }
}
</script>

<style scoped>

</style>