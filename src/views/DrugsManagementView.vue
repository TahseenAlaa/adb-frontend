<template>

  <v-container>
    <v-card class="px-6 pb-12 mb-12">
      <v-card-title>Drugs Management</v-card-title>
      <v-card-subtitle>
        <v-row dense>
          <v-spacer></v-spacer>
          <v-col cols="2" class="my-4">
            <v-btn
                  color="deep-purple white--text"
                  class="px-2 py-5 mx-2"
                  @click="newDrugDialogActive"
              >
                <v-icon size="30" class="pr-1">mdi-atom</v-icon>
                New Drug
              </v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Title</th>
            <th class="text-left">Drug Type</th>
            <th class="text-left">Item Type</th>
            <th class="text-left">Created By</th>
            <th class="text-left">Created At</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in drugs"
              :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td v-if="item.drug_type === 0">Normal Drug</td>
            <td v-if="item.drug_type === 1">Committee</td>
            <td v-if="item.item_type === 0">Drugs</td>
            <td v-if="item.item_type === 1">Assets</td>
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

<!--    START New Drug Dialog -->
    <div>
      <v-col>
        <v-dialog
            v-model="drug.new.dialog"
            max-width="800px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">Add New Drug</span>
            </v-card-title>
            <v-card-subtitle class="subtitle-1">Please fill the information below to add a new drug item.</v-card-subtitle>
            <v-card-text>
              <v-card-subtitle class="subtitle-2">Drug Information</v-card-subtitle>
              <v-container>
                <v-row dense>
                  <v-col
                      cols="4"
                  >
                    <v-text-field
                        label="Drug Name"
                        v-model="drug.new.name"
                        outlined
                        dense
                        item-text="title"
                        item-value="id"
                    ></v-text-field>
                  </v-col>

                  <v-col
                      cols="4"
                  >
                    <v-select
                        label="Drug Type"
                        v-model="drug.new.drug_type"
                        :items="[
                            {
                              text: 'Normal Drug',
                              value: 0
                            },
                            {
                              text: 'Committee',
                              value: 1
                            },
                        ]"
                        outlined
                        dense
                    ></v-select>
                  </v-col>

                  <v-col
                      cols="4"
                  >
                    <v-select
                        label="Item Type"
                        v-model="drug.new.item_type"
                        :items="[
                            {
                              text: 'Drugs',
                              value: 0
                            },
                            {
                              text: 'Assets',
                              value: 1
                            },
                        ]"
                        outlined
                        dense
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  class="deep-purple white--text"
                  text
                  @click="drug.new.dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                  class="deep-purple white--text"
                  text
                  @click="postNewDrugData"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </div>
<!--    END New Drug Dialog -->

    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->
  </v-container>

</template>

<script>
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "DrugsManagementView.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      loading_Dialog: true,
      drugs: [],
      disableSaveBTN: false,
      drug: {
        new: {
          dialog: false,
          name: null,
          drug_type: null,
          item_type: null
        }
      }
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

    newDrugDialogActive() {
      this.drug.new.dialog = true
    },

    postNewDrugData() {
      this.loading_state = true

      httpPOST('api/v1/drugs/store', {
        name: this.drug.new.name,
        drug_type: this.drug.new.drug_type,
        item_type: this.drug.new.item_type,
      })
          .then(({data}) => {
            this.drugs = data.data
            this.drug.new.dialog = false

            this.drug.new.name = null
            this.drug.new.drug_type = null
            this.drug.new.item_type = null
          }).catch(({response:{data}})=>{
        console.log(data)
          });
      this.loading_state = false
    },
  },

  created() {
    // START Fetch All drugs
    httpGET('api/v1/drugs/index')
        .then(({data}) => {
          this.drugs = data.data
          // console.log(data.data)
        }).catch(({response: {data}}) => {
      console.log(data)
    }).finally(() => {
      this.loading_Dialog = false
    });
    // END Fetch All drugs
  }
}
</script>

<style scoped>

</style>