<template>
  <h1>Pharmacy Section</h1>
</template>

<script>
export default {
  name: "PharmacyCompo",
  props: [
      'patient_uuid',
      'patient_history_uuid'
  ],

  methods: {
    humanReadableDateConverter (date) {
      let newDate = new Date(date)
      return newDate.toLocaleDateString()
    }
  },
}
</script>

<style scoped>

</style>