<template>
  <h1>Lab Section</h1>
</template>

<script>
export default {
  name: "LabCompo",
  props: [
    'patient_uuid'
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