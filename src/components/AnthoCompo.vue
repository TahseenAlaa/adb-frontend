<template>
  <h1>{{ this.patient_uuid }}</h1>
</template>

<script>
export default {
  name: "AnthoCompo.vue",
  props: [
      'patient_uuid'
  ]
}
</script>

<style scoped>

</style>