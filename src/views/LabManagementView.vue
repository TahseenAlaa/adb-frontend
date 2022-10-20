<template>
  <v-container>
    <v-card class="px-6 pb-12 mb-12">
      <v-card-title>Lab Tests Management</v-card-title>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">#</th>
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
            <td>{{ test.id }}</td>
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
                v-model="test_group.delete_dialog.active"
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
                      @click="test_group.delete_dialog.active = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      color="deep-orange darken-1"
                      dark
                      class="px-1 mx-1"
                      @click="deleteLabTest"
                      :loading="test_group.delete_dialog.loading"
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

<!--      START new test Dialog -->
      <v-row dense align="center" justify="center">
        <v-spacer></v-spacer>
        <div>
          <v-col>
            <v-dialog
                v-model="test_group.new_item_model"
                max-width="800px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-col>
                    <v-icon size="60">mdi-folder-plus</v-icon>
                    <h3 class="text-capitalize">Add New Test</h3>
                  </v-col>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Adding new Test</span>
                </v-card-title>
                <v-card-subtitle class="subtitle-1">Please fill the information below to add a new test.</v-card-subtitle>
                <v-card-text>
                  <v-card-subtitle class="subtitle-2">Test Information</v-card-subtitle>
                  <v-container>
                    <v-row dense>
                      <v-col
                          cols="6"
                      >
                        <v-text-field
                            label="Group Name"
                            v-model="new_test.group"
                            outlined
                            dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                          cols="6"
                      >
                        <v-text-field
                            label="Test Name"
                            v-model="new_test.name"
                            outlined
                            dense
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row dense>
                      <v-col cols="2">
                        <v-text-field
                            label="Min Range"
                            v-model="new_test.min_range"
                            outlined
                            dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field
                            label="Max Range"
                            v-model="new_test.max_range"
                            outlined
                            dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-text-field
                            label="Measurement Unit"
                            v-model="new_test.unit"
                            outlined
                            dense
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-radio-group
                            v-model="new_test.gender"
                            dense
                            row
                        >
                          <v-radio value="Male" label="Male"></v-radio>
                          <v-radio value="Female" label="Female"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      class="deep-purple white--text"
                      text
                      @click="test_group.new_item_model = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      class="deep-purple white--text"
                      text
                      @click="storeNewTest"
                      :disabled="disableSaveBTN"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </div>
      </v-row>
<!--      END new test Dialog -->

    </v-card>
    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->
  </v-container>

</template>

<script>
import {httpGET, httpDELETE, httpPOST} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";

export default {
  name: "LabManagementView.vue",
  components: {
    LoadingDialogCompo
  },
  data() {
    return {
      test_groups: [],
      loading_Dialog: true,
      disableDeleteBTN: false,
      test_group: {
        new_item_model: null,
        delete_dialog: {
          active: false,
          loading: false,
          temp_test_id: null
        }
      },
      disableSaveBTN: false,
      new_test: {
        group: null,
        name: null,
        min_range: null,
        max_range: null,
        unit: null,
        gender: null
      }
    }
  },
  methods: {
    activeDeleteDialog($testId) {
      this.test_group.delete_dialog.temp_test_id = $testId
      this.test_group.delete_dialog.active = true
    },
    deleteLabTest() {
      this.disableDeleteBTN = true
      this.loading_Dialog = true
      httpDELETE('api/v1/lab-test-groups/delete/' + this.test_group.delete_dialog.temp_test_id)
          .then(({data}) => {
            this.test_groups = data.data
            // console.log(data.data)
          }).catch(({response: {data}}) => {
            console.log(data)
          });
      this.disableDeleteBTN = false
      this.loading_Dialog = false
      this.test_group.delete_dialog.active = false
    },
    storeNewTest() {
      this.loading_Dialog = true
      this.disableSaveBTN = true
      httpPOST('api/v1/lab-test-groups/store', {
        test_group: this.new_test.group,
        test_name: this.new_test.name,
        min_range: this.new_test.min_range,
        max_range: this.new_test.max_range,
        unit: this.new_test.unit,
        gender: this.new_test.gender
      }).then(({data}) => {
        this.test_groups = data.data
        // console.log(data.data)
      }).catch(({response: {data}}) => {
        console.log(data)
      });
      this.loading_Dialog = false
      this.disableSaveBTN = false
      this.test_group.new_item_model = false
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