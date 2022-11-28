<template>

  <v-container fluid>
    <v-card class="px-6 pb-12 mb-12">
      <v-card-title>Pharmacy Management</v-card-title>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Name</th>
            <th class="text-left">Drug Type</th>
            <th class="text-left">Available Quantity</th>
            <th class="text-left">Expire Date</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in drugs"
              :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.drugs.title }}</td>
            <td v-if="item.drugs.drug_type === 0">Normal Drug</td>
            <td v-if="item.drugs.drug_type === 1">Committee</td>
            <td>{{ item.diff }}</td>
            <td>{{ humanReadableDateConverter(item.expire_date) }}</td>
<!--            <td>-->
<!--              <v-btn-->
<!--                  x-small-->
<!--                  color="teal darken-1"-->
<!--                  dark-->
<!--                  class="px-1 mx-1"-->
<!--                  @click=""-->
<!--              >-->
<!--                <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>-->
<!--                Edit-->
<!--              </v-btn>-->
<!--              <v-btn-->
<!--                  x-small-->
<!--                  color="deep-orange darken-1 white&#45;&#45;text"-->
<!--                  class="px-1 mx-1"-->
<!--                  @click="activeDeleteDialog(test.id)"-->
<!--                  :disabled="disableDeleteBTN"-->
<!--              >-->
<!--                <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>-->
<!--                Delete-->
<!--              </v-btn>-->
<!--            </td>-->
          </tr>
          <!--              START Delete Dialog -->
<!--          <v-row justify="center">-->
<!--            <v-dialog-->
<!--                v-model="test_group.delete_dialog.active"-->
<!--                persistent-->
<!--                max-width="230"-->
<!--            >-->
<!--              <v-card>-->
<!--                <v-card-title class="text-h5">-->
<!--                  Delete Test-->
<!--                </v-card-title>-->
<!--                <v-card-text class="text-center">-->
<!--                  Are you sure to delete this Test?-->
<!--                </v-card-text>-->
<!--                <v-card-actions class="d-flex justify-center">-->
<!--                  <v-btn-->
<!--                      dark-->
<!--                      class="deep-grey"-->
<!--                      @click="test_group.delete_dialog.active = false"-->
<!--                  >-->
<!--                    Close-->
<!--                  </v-btn>-->
<!--                  <v-btn-->
<!--                      color="deep-orange darken-1"-->
<!--                      dark-->
<!--                      class="px-1 mx-1"-->
<!--                      @click="deleteLabTest"-->
<!--                      :loading="test_group.delete_dialog.loading"-->
<!--                  >-->
<!--                    <v-icon size="30" class="pr-1">mdi-delete-forever</v-icon>-->
<!--                    Delete-->
<!--                  </v-btn>-->
<!--                </v-card-actions>-->
<!--              </v-card>-->
<!--            </v-dialog>-->
<!--          </v-row>-->
          <!--              END Delete Dialog -->
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->
  </v-container>

</template>

<script>
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import {httpGET} from "@/utils/utils";

export default {
  name: "PharmacyManagementView.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      loading_Dialog: true,
      drugs: [],
      disableSaveBTN: false
    }
  },

  mounted() {
    this.loading_Dialog = true
  },

  methods: {
    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },
  },

  created() {
    // START Fetch All drugs in pharmacy
    httpGET('api/v1/pharmacy/index')
        .then(({data}) => {

          // Delete drugs quantity equal to ZERO
          this.drugs = data.data.filter(item => {
            if (item.diff > 0) {
              return true
            }
          })
          // console.log(data.data)
        }).catch(({response: {data}}) => {
      console.log(data)
    }).finally(() => {
      this.loading_Dialog = false
    });
    // END Fetch All drugs in pharmacy
  }
}
</script>

<style scoped>

</style>