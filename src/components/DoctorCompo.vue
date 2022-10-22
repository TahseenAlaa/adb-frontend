<template>
  <h1>Doctor Section</h1>
</template>

<script>
export default {
  props: [
      'patient_uuid'
  ],
  name: "DoctorCompo",
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