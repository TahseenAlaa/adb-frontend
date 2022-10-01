<template>

  <div class="mt-6">
    <v-simple-table>
      <template>
        <thead>
        <tr>
          <th>Name</th>
          <th>Batch No.</th>
          <th>Expire Date</th>
          <th>Treatment Type</th>
          <th>Dosage</th>
          <th>Quantity</th>
          <th>Notes</th>
          <th>Tester Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="drug in drugsList">
          <td>{{ drug.name }}</td>
          <td>{{ drug.batch_no }}</td>
          <td>{{ drug.expire_date }}</td>
          <td>{{ drug.treatment_type }}</td>
          <td>{{ drug.dosage }}</td>
          <td>{{ drug.quantity }}</td>
          <td>{{ drug.notes }}</td>
          <td>{{ drug.created_by }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>

</template>

<script>
export default {
  name: "PharmacyCompo",
  props: [
      'drugsList'
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