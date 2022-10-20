<template>
  <v-container>
    <v-card class="px-6 pb-12 mb-12">
      <v-card-title>Lab Tests Management</v-card-title>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Group</th>
            <th class="text-left">Name</th>
            <th class="text-left">Range (Min - Max)</th>
            <th class="text-left">Added by</th>
            <th class="text-left">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="test in test_groups"
              :key="test.id"
          >
            <td>{{ test.test_group }}</td>
            <td>{{ test.test_name }}</td>
            <td>
              <v-icon
                  v-if="test.gender === 'Male'"
                  size="20"
              >mdi-gender-male</v-icon>
              <v-icon
                  v-else-if="test.gender === 'Female'"
                  size="20"
              >mdi-gender-female</v-icon>
              {{ test.min_range + ' - ' + test.max_range + ' ' + test.measurement_unit }}
            </td>
            <td>{{ test.user.full_name }}</td>
            <td>
              <v-btn
                  x-small
                  color="deep-orange darken-1"
                  dark
                  class="px-1 mx-1"
              >
                <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                Delete
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>

<!--      START New Test Button -->
      <v-row dense align="center" justify="center" class="py-6">
        <v-col cols="10"></v-col>
        <v-col cols="2">
          <v-btn
              class="px-2 py-12 mt-6 mx-2 deep-purple white--text"

          >
            <v-col>
              <v-icon size="60">mdi-folder-plus</v-icon>
              <h3 class="text-capitalize">Add New Test</h3>
            </v-col>
          </v-btn>
        </v-col>
      </v-row>
<!--      END New Test Button -->
    </v-card>
    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->
  </v-container>

</template>

<script>
import {httpGET} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "LabManagementView.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      test_groups: [],
      loading_Dialog: true
    }
  },
  created() {
    this.loading_Dialog = true
    // START Fetch All tests
    httpGET('api/v1/lab-test-groups/index')
        .then(({data}) => {
          this.test_groups = data.data
          // console.log(data)
        }).catch(({response: {data}}) => {
          console.log(data)
        });
    // END Fetch All tests
    this.loading_Dialog = false
  }
}
</script>

<style scoped>

</style>