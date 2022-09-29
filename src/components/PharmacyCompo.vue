<template>

  <div class="mt-6">
    <v-simple-table>
      <template>
        <thead>
        <tr>
          <th>Batch No.</th>
          <th>Expire Date</th>
          <th>Treatment Type</th>
          <th>Dosage</th>
          <th>Quantity</th>
          <th>Notes</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>452</td>
          <td>16/2/2023</td>
          <td>Any</td>
          <td>5</td>
          <td>700</td>
          <td>Notes Here</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>

</template>

<script>
export default {
  name: "PharmacyCompo"
}
</script>

<style scoped>

</style>