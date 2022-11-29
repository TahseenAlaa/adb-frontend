<template>

  <v-container class="mb-12 pb-12" fluid>

    <v-card>
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

<!--      START Input Documents -->
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
                    <th class="text-left">Source</th>
                    <th class="text-left">Destination</th>
                    <th class="text-left">Source Name</th>
                    <th class="text-left">Destination Name</th>
                    <th class="text-left">Created At</th>
                    <th class="text-left">Created By</th>
                    <th class="text-left">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in inventory">
                    <td>{{ item.source.title }}</td>
                    <td>{{ item.destination.title }}</td>
                    <td>{{ item.source_name }}</td>
                    <td>{{ item.destination_name }}</td>
                    <td>{{ humanReadableDateConverter(item.created_at) }}</td>
                    <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
                    <td>
<!--                      <v-btn-->
<!--                          x-small-->
<!--                          color="teal darken-1"-->
<!--                          dark-->
<!--                          class="px-1 mx-1"-->
<!--                          @click="editInputDocument(item.id)"-->
<!--                      >-->
<!--                        <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>-->
<!--                        Edit-->
<!--                      </v-btn>-->
                      <v-btn
                          x-small
                          color="deep-orange darken-1 white--text"
                          class="px-1 mx-1"
                          @click="deleteDialogPopup('Input Document', item.id)"
                      >
                        <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                        Delete
                      </v-btn>
                    </td>
                  </tr>
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
                    <th class="text-left">Created By</th>
                    <th class="text-left">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in outputDocs">
                    <td>{{ item.source.title }}</td>
                    <td>{{ item.destination.title }}</td>
                    <td>{{ item.source_name }}</td>
                    <td>{{ item.destination_name }}</td>
                    <td>{{ humanReadableDateConverter(item.created_at) }}</td>
                    <td>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</td>
                    <td>
<!--                      <v-btn-->
<!--                          x-small-->
<!--                          color="teal darken-1"-->
<!--                          dark-->
<!--                          class="px-1 mx-1"-->
<!--                          @click="editOuputDocument(item.id)"-->
<!--                      >-->
<!--                        <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>-->
<!--                        Edit-->
<!--                      </v-btn>-->
                      <v-btn
                          x-small
                          color="deep-orange darken-1 white--text"
                          class="px-1 mx-1"
                          @click="deleteDialogPopup('Output Document', item.id)"
                      >
                        <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
                        Delete
                      </v-btn>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
<!--      END Output Documents -->
    </v-card>


    <!--              START Delete Dialog -->
    <v-row justify="center">
      <v-dialog
          persistent
          max-width="230"
          v-model="dialogs.delete.active"
      >
        <v-card>
          <v-card-title class="text-h5">
            Delete Test
          </v-card-title>
          <v-card-text class="text-center">
            Are you sure to delete this {{ dialogs.delete.title }}?
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                dark
                class="deep-grey"
                @click="dialogs.delete.active = false"
            >
              Close
            </v-btn>
            <v-btn
                color="deep-orange darken-1"
                dark
                class="px-1 mx-1"
                @click="deleteDialogAction()"
            >
              <v-icon size="30" class="pr-1">mdi-delete-forever</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--              END Delete Dialog -->

    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->

    <!--    START Error Message -->
    <ErrorCompo
        :active-dialog="this.errorDialogActive"
        :message="this.errorDialogMessage"
    ></ErrorCompo>
    <!--    END Error Message -->
  </v-container>

</template>

<script>
import {httpDELETE, httpGET, httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import ErrorCompo from "@/components/ErrorCompo";

export default {
  name: "InventoryManagementView.vue",
  components: {
    LoadingDialogCompo,
    ErrorCompo
  },

  data() {
    return {
      inventory: [],
      outputDocs: [],
      tab: null,
      errorDialogActive: false,
      errorDialogMessage: '',
      loading_Dialog: true,
      dialogs: {
        delete: {
          title: '',
          temp_id: null,
          active: null
        }
      }
    }
  },

  methods: {

    // START Delete Dialog and action
    deleteDialogPopup($title, $id) {
      this.dialogs.delete.title = $title
      this.dialogs.delete.temp_id = $id
      this.dialogs.delete.active = true
    },

    deleteDialogAction() {
      if (this.dialogs.delete.title === 'Input Document') {
        this.deleteInput()
      } else if (this.dialogs.delete.title === 'Output Document') {
        this.deleteOutput()
      }
    },
    // END Delete Dialog and action

    // START Delete Input Document
    deleteInput() {
        this.loading_Dialog = true
        // START Delete Item
        httpPOST('api/v1/documents/delete-input-document', {
          id: this.dialogs.delete.temp_id
        })
            .then(({data}) => {
              this.inventory = data.data
            }).catch(({response: {data}}) => {
          // Redirect to login page if not authenticated
          if (!data || data.message === "Unauthenticated.") {
            this.$store.commit('SET_AUTHENTICATED', false)
          } else {
            this.errorDialogMessage = data.message
            this.errorDialogActive = true
          }
        }).finally(() => {
          this.dialogs.delete.active = false
          this.loading_Dialog = false
          this.dialogs.delete.title = null
          this.dialogs.delete.temp_id = null
        });
    },
    // END Delete Input Document

    // START Delete Output Document
    deleteOutput() {
      this.loading_Dialog = true
      // START Delete Item
      httpPOST('api/v1/documents/delete-output-document', {
        id: this.dialogs.delete.temp_id
      })
          .then(({data}) => {
            this.outputDocs = data.data
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          this.errorDialogMessage = data.message
          this.errorDialogActive = true
        }
      }).finally(() => {
        this.dialogs.delete.active = false
        this.loading_Dialog = false
        this.dialogs.delete.title = null
        this.dialogs.delete.temp_id = null
      });
    },
    // END Delete Output Document


    // START Edit Input Documents
    editInputDocument($item) {
      this.$router.push({path: '/edit-input-document/' + $item})
    },
    // END Edit Input Documents

    // START Edit Output Documents
    editOuputDocument($item) {
      this.$router.push({path: '/edit-output-document/' + $item})
    },
    // END Edit Output Documents


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
    this.loading_Dialog = true
  },

  created() {
    // START Fetch Input Documents List
    httpGET('api/v1/documents/index-inventory')
        .then(({data}) => {
          this.inventory = data.data
        })
        .catch(({response:{data}})=>{
          // console.log(data)
        })
        .finally(() => {
          this.loading_Dialog = false
        });
    // END Fetch Input Documents List

    // START Fetch Output Documents List
    httpGET('api/v1/documents/output-document')
        .then(({data}) => {
          this.outputDocs = data.data
          // console.log(this.outputDocs)
        })
        .catch(({response:{data}})=>{
          console.log(data)
        })
        .finally(() => {
          this.loading_Dialog = false
        });
    // END Fetch Output Documents List
  }

}
</script>

<style scoped>

</style>