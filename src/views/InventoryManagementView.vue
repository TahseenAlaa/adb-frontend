<template>

  <v-container>

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
                  <v-btn
                      color="deep-purple white--text"
                      class="px-2 py-5 mx-2"
                  >
                    <v-icon size="30" class="pr-1">mdi-archive-arrow-down-outline</v-icon>
                    New Document
                  </v-btn>
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
                  <v-btn
                      color="deep-purple white--text"
                      class="px-2 py-5 mx-2"
                  >
                    <v-icon size="30" class="pr-1">mdi-archive-arrow-down-outline</v-icon>
                    New Document
                  </v-btn>
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



    <v-form>
      <v-card>
        <v-card-text>
          <v-row
              dense
              v-for="(input,k) in inputs" :key="k"
          >
            <v-col cols="2">
              <v-text-field
                  label="doc No."
                  outlined
                  dense
                  v-model="input.name"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-text-field
                  label="doc Date"
                  outlined
                  dense
                  v-model="input.party"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn
                  @click="remove(k)" v-show="k || ( !k && inputs.length > 1)"
                  class="red white--text"
                  icon
                  elevation="2"
                  outlined
              >
                X
              </v-btn>
            </v-col>
            <v-btn
                @click="add(k)" v-show="k === inputs.length-1"
            >
              Add Row
            </v-btn>
          </v-row>
          <v-btn
              @click="addCandidate"
          >
            Submit
          </v-btn>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>

</template>

<script>
export default {
  name: "InventoryManagementView.vue",
  data() {
    return {
      inputs: [{
        name: '',
        party: ''
      }],
      tab: null,
    }
  },

  methods: {
    add () {
      this.inputs.push({
        name: '',
        party: ''
      })
      console.log(JSON.stringify(this.inputs))
    },

    remove (index) {
      this.inputs.splice(index, 1)
    },

    addCandidate () {
      axios
          .post('/candidates', {
            my_prop_name: JSON.stringify(this.inputs)
          })
          .then(response => {})
          .catch(error => {})
    }
  }
}
</script>

<style scoped>

</style>