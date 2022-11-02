<template>

  <v-container class="mb-12 pb-12">

    <v-card>
<!--      START Input Documents -->
      <v-tabs
          v-model="tab"
          background-color="deep-purple accent-4"
          dark
          icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-input">
          Input Documents
          <v-icon size="30">mdi-calendar-export</v-icon>
        </v-tab>

        <v-tab href="#tab-output">
          Output Documents
          <v-icon size="30">mdi-calendar-import</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
            value="tab-input"
        >
          <v-card flat>
            <v-card-text>
              <v-row dense>
                <v-col cols="2" class="my-4">
                  <router-link
                      :to="{ name: 'new_input_doc' }"
                      class="text-decoration-none black--text"
                  >
                    <v-btn
                        color="deep-purple white--text"
                        class="px-2 py-5 mx-2"
                    >
                      <v-icon size="30" class="pr-1">mdi-archive-arrow-down-outline</v-icon>
                      New Document
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>

              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">Source Name</th>
                    <th class="text-left">Source Reference</th>
                    <th class="text-left">Destination Name</th>
                    <th class="text-left">Destination Reference</th>
                    <th class="text-left">Approved By</th>
                    <th class="text-left">Created At</th>
                    <th class="text-left">Created By</th>
                    <th class="text-left">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in inventory">
                    <td>{{ item.source_name }}</td>
                    <td>{{ item.source_ref }}</td>
                    <td>{{ item.destination_name }}</td>
                    <td>{{ item.destination_ref }}</td>
                    <td>{{ item.approved_by }}</td>
                    <td>{{ humanReadableDateConverter(item.created_at) }}</td>
                    <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
                    <td></td>
<!--                    <td>-->
<!--                      <v-btn-->
<!--                          x-small-->
<!--                          color="teal darken-1"-->
<!--                          dark-->
<!--                          class="px-1 mx-1"-->
<!--                          @click=""-->
<!--                      >-->
<!--                        <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>-->
<!--                        Edit-->
<!--                      </v-btn>-->
<!--                      <v-btn-->
<!--                          x-small-->
<!--                          color="deep-orange darken-1 white&#45;&#45;text"-->
<!--                          class="px-1 mx-1"-->
<!--                          @click="activeDeleteDialog(test.id)"-->
<!--                          :disabled="disableDeleteBTN"-->
<!--                      >-->
<!--                        <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>-->
<!--                        Delete-->
<!--                      </v-btn>-->
<!--                    </td>-->
                  </tr>
                  <!--              START Delete Dialog -->
                  <v-row justify="center">
                    <v-dialog
                        persistent
                        max-width="230"
                    >
                      <v-card>
                        <v-card-title class="text-h5">
                          Delete Test
                        </v-card-title>
                        <v-card-text class="text-center">
                          Are you sure to delete this Test?
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn
                              dark
                              class="deep-grey"
                          >
                            Close
                          </v-btn>
                          <v-btn
                              color="deep-orange darken-1"
                              dark
                              class="px-1 mx-1"
                          >
                            <v-icon size="30" class="pr-1">mdi-delete-forever</v-icon>
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                  <!--              END Delete Dialog -->
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
<!--      END Input Documents -->


<!--      START Output Documents -->
      <v-tabs-items v-model="tab">
        <v-tab-item
            value="tab-output"
        >
          <v-card flat>
            <v-card-text>
              <v-row dense>
                <v-col cols="2" class="my-4">
                  <router-link
                      :to="{ name: 'new_output_doc' }"
                      class="text-decoration-none black--text"
                  >
                    <v-btn
                        color="deep-purple white--text"
                        class="px-2 py-5 mx-2"
                    >
                      <v-icon size="30" class="pr-1">mdi-archive-arrow-down-outline</v-icon>
                      New Document
                    </v-btn>
                  </router-link>
                </v-col>
              </v-row>

              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">Source</th>
                    <th class="text-left">Destination</th>
                    <th class="text-left">Source Name</th>
                    <th class="text-left">Destination Name</th>
                    <th class="text-left">Created At</th>
                    <th class="text-left">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                      <v-btn
                          x-small
                          color="teal darken-1"
                          dark
                          class="px-1 mx-1"
                          @click=""
                      >
                        <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                        Edit
                      </v-btn>
                      <v-btn
                          x-small
                          color="deep-orange darken-1 white--text"
                          class="px-1 mx-1"
                          @click="activeDeleteDialog(test.id)"
                          :disabled="disableDeleteBTN"
                      >
                        <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                        Delete
                      </v-btn>
                    </td>
                  </tr>
                  <!--              START Delete Dialog -->
                  <v-row justify="center">
                    <v-dialog
                        persistent
                        max-width="230"
                    >
                      <v-card>
                        <v-card-title class="text-h5">
                          Delete Test
                        </v-card-title>
                        <v-card-text class="text-center">
                          Are you sure to delete this Test?
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn
                              dark
                              class="deep-grey"
                          >
                            Close
                          </v-btn>
                          <v-btn
                              color="deep-orange darken-1"
                              dark
                              class="px-1 mx-1"
                          >
                            <v-icon size="30" class="pr-1">mdi-delete-forever</v-icon>
                            Delete
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                  <!--              END Delete Dialog -->
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
<!--      END Output Documents -->
    </v-card>



<LoadingDialogCompo :loading_-dialog="dialog.loading.active"></LoadingDialogCompo>
  </v-container>

</template>

<script>
import {httpGET} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "InventoryManagementView.vue",
  components: {
    LoadingDialogCompo
  },

  data() {
    return {
      inventory: [],
      tab: null,
      dialog: {
        loading: {
          active: false
        }
      }
    }
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

  mounted() {
    this.dialog.loading.active = true
  },

  created() {
    // START Fetch Documents List
    httpGET('api/v1/documents/index-inventory')
        .then(({data}) => {
          this.inventory = data.data
        })
        .catch(({response:{data}})=>{
          console.log(data)
        })
        .finally(() => {
          this.dialog.loading.active = false
        });
    // END Fetch Documents List
  }
}
</script>

<style scoped>

</style>