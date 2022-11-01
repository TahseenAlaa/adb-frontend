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
                    label="Source Reference"
                    outlined
                    dense
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    label="Destination Reference"
                    outlined
                    dense
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    label="Source Name"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="3">
                <v-text-field
                    label="Source Job title"
                    outlined
                    dense
                ></v-text-field>
              </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Destination Name"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                      label="Destination Job Title"
                      outlined
                      dense
                  ></v-text-field>
                </v-col>

              <v-col cols="3">
                <v-select
                    :items="['Yes', 'No']"
                    label="Final Approval"
                    outlined
                    dense
                ></v-select>
              </v-col>
            </v-row>

            <v-row dense>

              <v-col cols="3">
                <v-text-field
                    label="Final Approval By"
                    outlined
                    dense
                ></v-text-field>
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
          </v-card-text>
        </v-card>
      </v-card-text>

      <v-card-text>
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
              <v-btn
                  @click="addCandidate"
                  class="deep-purple white--text my-6"
              >
                Submit
              </v-btn>
            </v-card-text>
          </v-card>
      </v-card-text>
    </v-card>
    <LoadingDialogCompo :loading_-dialog="dialog.loading.active" />
  </v-container>
</template>

<script>
import {httpGET} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "NewInputDocument.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
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
      final_approval_date: null,
      dialog: {
        doc_menu: false,
        loading: {
          active: false
        }
      },
      providers: [],
      drugs: []
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
      console.log(JSON.stringify(this.newItem))
    },

    remove (index) {
      this.newItem.splice(index, 1)
    },

    addCandidate () {
      console.log(JSON.stringify(this.newItem))
      // axios
      //     .post('/candidates', {
      //       my_prop_name: JSON.stringify(this.newItem)
      //     })
      //     .then(response => {})
      //     .catch(error => {})
    },
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