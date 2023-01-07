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
            {{ this.drugs.total.length }}
            <v-card-subtitle>Total Drugs in Pharmacy</v-card-subtitle>
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
            {{ this.drugs.expired.length }}
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
            {{ this.drugs.critical.length }}
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
            {{ this.drugs.expire_soon.length }}
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
            <v-row v-for="item in drugs.expire_soon">
              <v-col cols="3">
                <span>{{ item.drugs.title }}</span>
              </v-col>
              <v-col cols="9">
                <v-progress-linear
                    color="red darken-2"
                    rounded
                    :value=getDaysCountFromToday(item.expire_date)*3.33
                    buffer-value="100"
                ></v-progress-linear>
                <br>
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
  data() {
    return {
      loading_Dialog: false,
      drugs: {
        total: [],
        expired: [],
        critical: [],
        expire_soon: []
      },
    }
  },

    created() {
      // START Fetch dashboard index
      httpGET('api/v1/dashboard/index')
          .then(({data}) => {
            // console.log(Object.keys(data.totalDrugsCount.original.data).length)
            // console.log(data.totalDrugsCount.original.data)

            // Total drugs
            this.drugs.total = data.totalDrugsCount.original.data.filter(item => {
              if (item.diff > 0) {
                return true
              }
            })

            // Expired drugs
            this.drugs.expired = this.drugs.total.filter(item => {
              const today = new Date()
              if ((new Date(item.expire_date)).getTime() < today.getTime()) {
                return true
              }
            })

            // Critical drugs
            this.drugs.critical = this.drugs.total.filter(item => {
              if (item.diff <= 20) {
                return true
              }
            })

            // Expire soon drugs - After one month
            this.drugs.expire_soon = this.drugs.total.filter(item => {
              const next_month = new Date()
              next_month.setMonth(next_month.getMonth() + 1);
              if ((new Date(item.expire_date)).getTime() <= next_month.getTime()) {
                return true
              }
            })


            this.loaded = true
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          console.log(data)
        }
      }).finally(() => {
        this.loading_dialog = false
      });
      // END Fetch dashboard index
    },

  methods: {
    getDaysCountFromToday($dateToCalc) {
      const currentDate = new Date();
      const targetDate = new Date($dateToCalc);
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    }
  }
}
</script>

<style scoped>

</style>