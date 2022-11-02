<template>
  <v-container>
    <v-card class="px-6">
      <v-card-title>Input New Document</v-card-title>

      <v-card-text>
        <v-card>
          <v-card-text>
            <v-row dense>
              <v-col cols="3">
                <v-select
                    v-model="provider"
                    :items="providers"
                    label="Provider"
                    item-text="title"
                    item-value="id"
                    outlined
                    dense
                ></v-select>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    v-model="source_reference"
                    label="Source Reference"
                    outlined
                    dense
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    v-model="source_name"
                    label="Source Name"
                    outlined
                    dense
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    v-model="source_job_title"
                    label="Source Job title"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="3">
                <v-text-field
                    v-model="destination_reference"
                    label="Destination Reference"
                    outlined
                    dense
                ></v-text-field>
              </v-col>

                <v-col cols="3">
                  <v-text-field
                      v-model="destination_job_title"
                      label="Destination Job Title"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>

              <v-col cols="3">
                <v-select
                    v-model="final_approval"
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
                ></v-select>
              </v-col>

              <v-col
                  cols="3"
              >
                <v-menu
                    v-model="dialog.doc_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="final_approval_date"
                        label="Final Approval At"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="final_approval_date"
                      @input="dialog.doc_menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row dense>

              <v-col cols="12">
                <v-text-field
                    v-model="final_approval_by"
                    label="Final Approval By"
                    outlined
                    dense
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
                  v-for="(item,k) in newItem" :key="k"
              >
                <v-col cols="2">
                  <v-select
                      v-model="item.name"
                      :items="drugs"
                      label="Item Name"
                      item-text="title"
                      item-value="id"
                      outlined
                      dense
                  ></v-select>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                      v-model="item.batch"
                      label="Batch Number"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                >
                  <v-menu
                      v-model="item.dialog.expire"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="item.expire_date"
                          label="Expire Date"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          dense
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="item.expire_date"
                        @input="item.dialog.expire = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="2">
                  <v-text-field
                      v-model="item.quantity"
                      label="Quantity"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                      v-model="item.notes"
                      label="Notes"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-btn
                      @click="remove(k)" v-show="k || ( !k && newItem.length > 1)"
                      class="red white--text"
                      icon
                      elevation="2"
                      outlined
                      dense
                  >
                    X
                  </v-btn>
                </v-col>
                <v-btn
                    @click="add(k)" v-show="k === newItem.length-1"
                    class="deep-purple white--text"
                >
                  Add Item Record
                </v-btn>
              </v-row>

<!--              START Flash Message -->
              <v-row dense align="center" justify="center">
                <v-spacer></v-spacer>
                <v-alert
                    type="success"
                    class="mt-10 mr-4"
                    v-if="successAlert"
                    dense
                >Document Information stored successfully!</v-alert>
                <v-alert
                    prominent
                    type="error"
                    class="mt-10 mr-4"
                    v-if="errorAlert"
                    dense
                >Save data Failed!
                </v-alert>

                <v-btn
                    class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
                >
                  <v-col @click="storeInputDocumentData">
                    <v-icon size="60">mdi-content-save</v-icon>
                    <h3 class="text-capitalize">SAVE Document</h3>
                  </v-col>
                </v-btn>
              </v-row>
<!--              END Flash Message -->
            </v-card-text>
          </v-card>
      </v-card-text>
    </v-card>
    <LoadingDialogCompo :loading_-dialog="dialog.loading.active" />
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "NewInputDocument.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      provider: null,
      source_reference: null,
      source_name: null,
      source_job_title: null,
      destination_reference: null,
      destination_name: null,
      destination_job_title: null,
      final_approval: null,
      final_approval_by: null,
      final_approval_date: null,
      newItem: [{
        name: null,
        batch: null,
        expire_date: null,
        quantity: null,
        notes: null,
        dialog: {
          expire: false
        }
      }],
      dialog: {
        doc_menu: false,
        loading: {
          active: false
        }
      },
      providers: [],
      drugs: [],
      successAlert: false,
      errorAlert: false
    }
  },
  methods: {
    add () {
      this.newItem.push({
        name: null,
        batch: null,
        expire_date: null,
        quantity: null,
        notes: null,
        dialog: {
          expire: false
        }
      })
      // console.log(JSON.stringify(this.newItem))
    },

    remove (index) {
      this.newItem.splice(index, 1)
    },

    // START Post input document data
    storeInputDocumentData() {
      this.dialog.loading.active = true
      // console.log(JSON.stringify(this.newItem))

      httpPOST('api/v1/documents/store', {
        provider_id: this.provider,
        source_reference: this.source_reference,
        source_name: this.source_name,
        source_job_title: this.source_job_title,
        destination_reference: this.destination_reference,
        destination_job_title: this.destination_job_title,
        doc_type: 1, // Input Document
        final_approval: this.final_approval,
        approved_by: this.final_approval_by,
        approved_at: this.final_approval_date,
        newItems: this.newItem
      })
          .then(({data}) => {
            // console.log(data.data)
          })
          .catch(({response:{data}})=>{
            console.log(data)
          })
          .finally(() => {
            this.dialog.loading.active = false
          });
    }
    // END Post input document data
  },

  mounted() {
    this.dialog.loading.active = true
  },

  created() {
    // START Fetch Providers list
    httpGET('api/v1/providers/index')
        .then(({data}) => {
          this.providers = data.data
          console.log(this.providers)
        })
        .catch(({response:{data}})=>{
          console.log(data)
        })
        .finally(() => {
      this.dialog.loading.active = false
    });
    // END Fetch Providers list

    // START Fetch Drugs List
    httpGET('api/v1/drugs/index')
        .then(({data}) => {
          this.drugs = data.data
          console.log(this.drugs)
        })
        .catch(({response:{data}})=>{
          console.log(data)
        })
        .finally(() => {
          this.dialog.loading.active = false
        });
    // END Fetch Drugs List
  }
}
</script>

<style scoped>

</style>