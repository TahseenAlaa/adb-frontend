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
                    :items="[1, 2, 3]"
                    label="Provider"
                    outlined
                ></v-select>
              </v-col>

              <v-col cols="3">
                <v-select
                    :items="[1, 2, 3]"
                    label="Destination"
                    outlined
                ></v-select>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    label="Source Reference"
                    outlined
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    label="Destination Reference"
                    outlined
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row
                dense
            >
              <v-col cols="3">
                <v-text-field
                    label="Source Name"
                    outlined
                ></v-text-field>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    label="Source Job title"
                    outlined
                ></v-text-field>
              </v-col>
                <v-col cols="3">
                  <v-text-field
                      label="Destination Name"
                      outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                      label="Destination Job Title"
                      outlined
                  ></v-text-field>
                </v-col>
            </v-row>

            <v-row
                dense
            >
              <v-col cols="3">
                <v-select
                    :items="['Yes', 'No']"
                    label="Final Approval"
                    outlined
                ></v-select>
              </v-col>

              <v-col cols="3">
                <v-text-field
                    label="Final Approval By"
                    outlined
                ></v-text-field>
              </v-col>

              <v-col
                  cols="3"
                  sm="6"
                  md="4"
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
                        label="Picker without buttons"
                        prepend-inner-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
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
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "NewInputDocument.vue",
  data() {
    return {
      inputs: [{
        name: '',
        party: ''
      }],
      final_approval_date: null,
      dialog: {
        doc_menu: false
      }
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
    },
  }
}
</script>

<style scoped>

</style>