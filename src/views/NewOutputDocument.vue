<template>
  <v-container>
    <v-card class="px-6">
      <v-card-title>Output New Document</v-card-title>

      <v-card-text>
        <v-card>
          <v-card-text>
            <v-row dense>
              <v-col cols="3">
                <v-select
                    :items="['Alhasan Diabetes Center']"
                    label="Source"
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
                <v-select
                    v-model="destination"
                    :items="destinations"
                    label="Destination"
                    item-text="title"
                    item-value="id"
                    outlined
                    dense
                ></v-select>
              </v-col>

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
                    v-model="destination_name"
                    label="Destination Name"
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
            </v-row>

            <v-row dense>
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

              <v-col cols="6">
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
              <v-text-field
                  label="id"
                  v-model="item.drug_id"
                  v-show="false"
              ></v-text-field>
              <v-col cols="2">
                <v-select
                    v-model="item.name"
                    :items="drugs"
                    label="Item Name"
                    item-text="drugs.title"
                    item-value="id"
                    outlined
                    dense
                    @change="fetchItemInfo(item, k)"
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
                    v-model="item.diff"
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
                <v-col @click="storeOutputDocumentData">
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
<!--    <LoadingDialogCompo :loading_-dialog="dialog.loading.active" />-->
  </v-container>
</template>

<script>
import {httpGET, httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "NewOutputDocument.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      source_reference: null,
      source_name: null,
      source_job_title: null,
      destination: null,
      destinations: [],
      destination_reference: null,
      destination_name: null,
      destination_job_title: null,
      final_approval: null,
      final_approval_by: null,
      final_approval_date: null,
      to_pharmacy: false,
      newItem: [{
        drug_id: null,
        name: null,
        batch: null,
        expire_date: null,
        quantity: null,
        diff: null,
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
        drug_id: null,
        name: null,
        batch: null,
        expire_date: null,
        quantity: null,
        diff: null,
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

    // START Store output document data
    storeOutputDocumentData() {
      // console.log(this.newItem)
      this.dialog.loading.active = true

      if (this.destinations.find(v => v.id === this.destination).title === "Pharmacy") {
        this.to_pharmacy = true
      }

      httpPOST('api/v1/documents/store', {
        source_reference: this.source_reference,
        source_name: this.source_name,
        source_job_title: this.source_job_title,
        destination_id: this.destination,
        destination_name: this.destination_name,
        destination_reference: this.destination_reference,
        destination_job_title: this.destination_job_title,
        to_pharmacy: this.to_pharmacy,
        doc_type: 2, // Output Document
        final_approval: this.final_approval,
        approved_by: this.final_approval_by,
        approved_at: this.final_approval_date,
        newItems: this.newItem
      })
          .then(({data}) => {
            this.successAlert = true
            setTimeout(() => {
              this.$router.push({name: 'inventory_management'})
            }, 2000)
          })
          .catch(({response:{data}})=>{
            this.errorAlert = true
            console.log(data)
          })
          .finally(() => {
            this.dialog.loading.active = false
          });
    },
    // END Store output document data

    // START get Drug Id from Item ID
    drugIdFromItemId($itemId) {
      return this.drugs.find(v => v.id === this.newItem[$itemId].name).drugs.id
    },
    // END get Drug Id from Item ID

    // START Fetch New Item information
    fetchItemInfo($item, $k) {
      // console.log(this.drugIdFromItemId($k))
      this.newItem[$k].drug_id = this.drugs.find(v => v.id === this.newItem[$k].name).drug_id
      this.newItem[$k].batch = this.drugs.find(v => v.id === this.newItem[$k].name).batch_no
      this.newItem[$k].expire_date = this.drugs.find(v => v.id === this.newItem[$k].name).expire_date
      this.newItem[$k].quantity = this.drugs.find(v => v.id === this.newItem[$k].name).quantity
      this.newItem[$k].diff = this.drugs.find(v => v.id === this.newItem[$k].name).diff
      this.newItem[$k].notes = this.drugs.find(v => v.id === this.newItem[$k].name).notes
    }
    // END Fetch New Item information
  },

  mounted() {
    this.dialog.loading.active = true
  },

  created() {
    // START Fetch destinations list
    httpGET('api/v1/providers/index')
        .then(({data}) => {
          this.destinations = data.data
          // Delete (Alhasan Diabetes Center) from the destinations array
          this.destinations = this.destinations.filter(function (v) {
            return v.title !== "Alhasan Diabetes Center"
          })
        })
        .catch(({response:{data}})=>{
          console.log(data)
        })
        .finally(() => {
          this.dialog.loading.active = false
        });
    // END Fetch destinations list

    // START Fetch Drugs List
    httpGET('api/v1/documents/available-drugs')
        .then(({data}) => {
          this.drugs = data.data
          console.log(data.data)
          // console.log(data.inputInInventory)
          // console.log(data.inPharmacy)
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