<template>
  <v-container class="mt-16" fluid>
    <div class="mt-6">
      <v-row dense align="center" justify="center">
        <v-card-title class="subtitle-2">Drugs list for this patient</v-card-title>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <v-simple-table>
      <template>
        <thead>
        <tr>
          <th>Name</th>
          <th>Batch No.</th>
          <th>Quantity</th>
          <th>Date of Adding Record</th>
          <th>Pharmacist Name</th>
          <th>Notes</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in drugs">
          <td>{{ item.drugs.title }}</td>
          <td>{{ item.batch_no }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ humanReadableDateConverter(item.updated_at) }}</td>
          <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
          <td>{{ item.notes }}</td>
          <!--                      <td>{{ humanReadableDateConverter(item.created_at) }}</td>-->
          <!--                      <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>-->
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!--              END Treatment -->
  </v-container>
</template>

<script>
import {httpPOST} from "@/utils/utils";

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

  data() {
    return {
      drugs: []
    }
  },

  created() {
    httpPOST('api/v1/history/show-drugs-history', {
      patient_history_uuid: this.patient_history_uuid
    })
        .then(({data}) => {
          this.drugs = data.data
          console.log(data.data)
        }).catch(({response:{data}})=>{
      console.log(data)
    }).finally(() => {
      // this.dialogs.loading.active = false
    });
  }
}
</script>

<style scoped>

</style>