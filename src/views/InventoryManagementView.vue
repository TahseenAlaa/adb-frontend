<template>

  <v-container>

    <v-card>
      <v-tabs
          v-model="tab"
          background-color="deep-purple accent-4"
          dark
          icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-2">
          Input Documents
          <v-icon size="30">mdi-calendar-export</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Output Documents
          <v-icon size="30">mdi-calendar-import</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="i in 3"
            :key="i"
            :value="'tab-' + i"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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