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
                      <v-btn
                          x-small
                          color="teal darken-1"
                          dark
                          class="px-1 mx-1"
                          @click="viewInputDialogPopup(item.id)"
                      >
                        <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                        View
                      </v-btn>
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
                      <v-btn
                          x-small
                          color="teal darken-1"
                          dark
                          class="px-1 mx-1"
                          @click="viewOutputDialogPopup(item.id)"
                      >
                        <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                        View
                      </v-btn>
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


    <!--  START view input document  -->
    <v-row justify="center">
      <v-dialog
          persistent
          max-width="1256"
          v-model="viewInputDialog"
      >
        <v-card>
          <v-card-title class="text-h5">
            View Input Document
          </v-card-title>
          <v-card-text class="text-center">
            <v-card-text>
              <v-card>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="3">
                      <v-text-field
                          v-model="viewInput.provider"
                          label="Provider"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewInput.source_reference"
                          label="Source Reference"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewInput.source_name"
                          label="Source Name"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewInput.source_job_title"
                          label="Source Job title"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row dense>
                    <v-col cols="3">
                      <v-text-field
                          v-model="viewInput.destination_reference"
                          label="Destination Reference"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewInput.destination_job_title"
                          label="Destination Job Title"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-select
                          v-model="viewInput.final_approval"
                          :items="[
                        {
                          text: 'Yes',
                          value: 1
                        },
                        {
                          text: 'No',
                          value: 0
                        },
                    ]"
                          label="Final Approval"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-select>
                    </v-col>

                    <v-col
                        cols="3"
                    >
                      <v-text-field
                          v-model="viewInput.final_approval_date"
                          label="Final Approval At"
                          prepend-inner-icon="mdi-calendar"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row dense>

                    <v-col cols="12">
                      <v-text-field
                          v-model="viewInput.final_approval_by"
                          label="Final Approval By"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card-text>

            <v-card-text class="mb-12">
              <v-card>
                <v-card-text>
                  <v-row
                      dense
                      v-for="item in viewInput.items"
                  >
                    <v-col cols="2">
                      <v-text-field
                          v-model="item.drugs.title"
                          label="Item Name"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-text-field
                          v-model="item.batch_no"
                          label="Batch Number"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col
                        cols="2"
                    >
                      <v-text-field
                        v-model="item.expire_date"
                        label="Expire Date"
                        prepend-inner-icon="mdi-calendar"
                        outlined
                        dense
                        readonly
                        persistent-hint
                        hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-text-field
                          v-model="item.quantity"
                          label="Quantity"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <v-text-field
                          v-model="item.notes"
                          label="Notes"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card-text>


          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                dark
                class="deep-grey"
                @click="viewInputDialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--  END view input document    -->


    <!--  START view output document  -->
    <v-row justify="center">
      <v-dialog
          persistent
          max-width="1256"
          v-model="viewOutputDialog"
      >
        <v-card>
          <v-card-title class="text-h5">
            View Output Document
          </v-card-title>
          <v-card-text class="text-center">
            <v-card-text>
              <v-card>
                <v-card-text>
                  <v-row dense>
                    <v-col cols="3">
                      <v-text-field
                          v-model="viewOutput.source_reference"
                          label="Source Reference"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewOutput.source_name"
                          label="Source Name"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewOutput.source_job_title"
                          label="Source Job title"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewOutput.destination_name"
                          label="Destination Name"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row dense>
                    <v-col cols="3">
                      <v-text-field
                          v-model="viewOutput.destination_reference"
                          label="Destination Reference"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-text-field
                          v-model="viewOutput.destination_job_title"
                          label="Destination Job Title"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                      <v-select
                          v-model="viewOutput.final_approval"
                          :items="[
                        {
                          text: 'Yes',
                          value: 1
                        },
                        {
                          text: 'No',
                          value: 0
                        },
                    ]"
                          label="Final Approval"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-select>
                    </v-col>

                    <v-col
                        cols="3"
                    >
                      <v-text-field
                          v-model="viewOutput.final_approval_date"
                          label="Final Approval At"
                          prepend-inner-icon="mdi-calendar"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row dense>

                    <v-col cols="12">
                      <v-text-field
                          v-model="viewOutput.final_approval_by"
                          label="Final Approval By"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card-text>

            <v-card-text class="mb-12">
              <v-card>
                <v-card-text>
                  <v-row
                      dense
                      v-for="item in viewOutput.items"
                  >
                    <v-col cols="2">
                      <v-text-field
                          v-model="item.drugs.title"
                          label="Item Name"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-text-field
                          v-model="item.batch_no"
                          label="Batch Number"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col
                        cols="2"
                    >
                      <v-text-field
                          v-model="item.expire_date"
                          label="Expire Date"
                          prepend-inner-icon="mdi-calendar"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-text-field
                          v-model="item.quantity"
                          label="Quantity"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                      <v-text-field
                          v-model="item.notes"
                          label="Notes"
                          outlined
                          dense
                          readonly
                          persistent-hint
                          hint="ReadOnly"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card-text>


          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn
                dark
                class="deep-grey"
                @click="viewOutputDialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--  END view output document    -->

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
import {httpGET, httpPOST} from "@/utils/utils";
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
      },
      viewInputDialog: false,
      viewOutputDialog: false,
      viewInput: {
        provider: null,
        source_reference: null,
        source_name: null,
        source_job_title: null,
        destination_reference: null,
        destination_job_title: null,
        final_approval: null,
        final_approval_date: null,
        final_approval_by: null,
        items: []
      },
      viewOutput: {
        provider: null,
        destination_name: null,
        source_reference: null,
        source_name: null,
        source_job_title: null,
        destination_reference: null,
        destination_job_title: null,
        final_approval: null,
        final_approval_date: null,
        final_approval_by: null,
        items: []
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

    // START view dialog
    viewInputDialogPopup($id) {
      this.loading_Dialog = false
      this.viewInputDialog = true
      // console.log($id)

      httpPOST('api/v1/documents/show-document-with-details', {
        doc_id: $id
      })
          .then(({data}) => {
            this.viewInput.provider = data.data.source.title
            this.viewInput.source_reference = data.data.source_ref
            this.viewInput.source_name = data.data.source_name
            this.viewInput.source_job_title = data.data.source_job_title
            this.viewInput.destination_reference = data.data.destination_ref
            this.viewInput.destination_job_title = data.data.destination_job_title
            this.viewInput.final_approval = data.data.final_approval
            this.viewInput.final_approval_date = this.humanReadableDateConverter(data.data.approved_at)
            this.viewInput.final_approval_by = data.data.approved_by
            this.viewInput.items = data.data.items
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          this.errorDialogMessage = data.message
          this.errorDialogActive = true
        }
      }).finally(() => {
        this.loading_Dialog = false
      });
    },

    viewOutputDialogPopup($id) {
      this.loading_Dialog = false
      this.viewOutputDialog = true
      // console.log($id)

      httpPOST('api/v1/documents/show-document-with-details', {
        doc_id: $id
      })
          .then(({data}) => {
            this.viewOutput.destination_name = data.data.destination_name
            this.viewOutput.source_reference = data.data.source_ref
            this.viewOutput.source_name = data.data.source_name
            this.viewOutput.source_job_title = data.data.source_job_title
            this.viewOutput.destination_reference = data.data.destination_ref
            this.viewOutput.destination_job_title = data.data.destination_job_title
            this.viewOutput.final_approval = data.data.final_approval
            this.viewOutput.final_approval_date = this.humanReadableDateConverter(data.data.approved_at)
            this.viewOutput.final_approval_by = data.data.approved_by
            this.viewOutput.items = data.data.items
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          this.errorDialogMessage = data.message
          this.errorDialogActive = true
        }
      }).finally(() => {
        this.loading_Dialog = false
      });
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