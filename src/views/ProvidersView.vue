<template>
  <v-container>
    <v-card class="px-6 pb-12 mb-12">
      <v-card-title>Providers Management</v-card-title>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Title</th>
            <th class="text-left">Created By</th>
            <th class="text-left">Created At</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in providers"
              :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
            <td>{{ humanReadableDateConverter(item.created_at) }}</td>
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
  name: "ProvidersView.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      loading_Dialog: true,
      providers: [],
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
    // START Fetch All providers
    httpGET('api/v1/providers/index')
        .then(({data}) => {
          this.providers = data.data
          // console.log(data.data)
        }).catch(({response: {data}}) => {
      console.log(data)
    }).finally(() => {
      this.loading_Dialog = false
    });
    // END Fetch All providers
  }
}
</script>

<style scoped>

</style>