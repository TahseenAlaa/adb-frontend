<template>

  <v-container class="mb-16" fluid>
    <v-row class="mt-6">
      <v-col cols="3">
        <v-card
            class="mx-auto green"
            max-height="100px"
        >
          <v-card-text class="text-h5 font-weight-bold white--text">
            <v-icon large dark>mdi-calendar-month-outline</v-icon>
            128
            <v-card-subtitle>Total Items</v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card
            class="mx-auto deep-purple"
            max-height="100px"
        >
          <v-card-text class="text-h5 font-weight-bold white--text">
            <v-icon large dark>mdi-timer-sync-outline</v-icon>
            14
            <v-card-subtitle>Expired Items</v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card
            class="mx-auto orange"
            max-height="100px"
        >
          <v-card-text class="text-h5 font-weight-bold white--text">
            <v-icon large dark>mdi-circle-off-outline</v-icon>
            3
            <v-card-subtitle>Critical Items</v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card
            class="mx-auto brown"
            max-height="100px"
        >
          <v-card-text class="text-h5 font-weight-bold white--text">
            <v-icon large dark>mdi-pill-multiple</v-icon>
            7
            <v-card-subtitle>Items will Expire</v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="6">
          <v-card class="white">
            <v-card-subtitle><h2>Number of visits this month</h2></v-card-subtitle>
            <BarChart />
          </v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-width="100%" min-height="100%" class="white">
          <v-card-subtitle><h2>Most used drugs this month</h2></v-card-subtitle>
          <v-card-text>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col cols="6">
        <v-card min-width="100%" min-height="100%" class="white">
          <v-card-subtitle><h2>Critical Storage drugs</h2></v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="2">Storage Drug</v-col>
              <v-col cols="8"></v-col>
              <v-col cols="2">23 <v-icon size="20" color="red">mdi-arrow-bottom-right</v-icon></v-col>
            </v-row>
            <v-row>
              <v-col cols="2">Storage Drug</v-col>
              <v-col cols="8"></v-col>
              <v-col cols="2">50 <v-icon size="20" color="green">mdi-arrow-top-right</v-icon></v-col>
            </v-row>
            <v-row>
              <v-col cols="2">Storage Drug</v-col>
              <v-col cols="8"></v-col>
              <v-col cols="2">50 <v-icon size="20" color="green">mdi-arrow-top-right</v-icon></v-col>
            </v-row>
            <v-row>
              <v-col cols="2">Storage Drug</v-col>
              <v-col cols="8"></v-col>
              <v-col cols="2">23 <v-icon size="20" color="red">mdi-arrow-bottom-right</v-icon></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-width="100%" min-height="100%" class="white">
          <v-card-subtitle><h2>Nearly expired drugs</h2></v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <span>Paracetomol</span>
              </v-col>
              <v-col cols="9">
                <v-progress-linear
                    color="red darken-2"
                    rounded
                    value="50"
                ></v-progress-linear>
                <br>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <span>Saxenda</span>
              </v-col>
              <v-col cols="9">
                <v-progress-linear
                    color="indigo"
                    rounded
                    value="20"
                ></v-progress-linear>
                <br>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <span>Fuciden</span>
              </v-col>
              <v-col cols="9">
                <v-progress-linear
                    color="teal"
                    rounded
                    value="70"
                ></v-progress-linear>
                <br>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <span>Tramadol</span>
              </v-col>
              <v-col cols="9">
                <v-progress-linear
                    color="cyan darken-2"
                    rounded
                    value="30"
                ></v-progress-linear>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>

import {httpGET} from "@/utils/utils";
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import BarChart from "@/components/BarChart.vue";

export default {
  name: "Dashboard",
  components: {
    BarChart,
    LoadingDialogCompo
  },
  date() {
    return {
      loading_Dialog: false,
      value1: 30,
      value2: 80,
      value3: 20,
      value4: 10,
    }
  },
}
</script>

<style scoped>

</style>