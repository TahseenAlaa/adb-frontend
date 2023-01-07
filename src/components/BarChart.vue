<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      v-if="loaded"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {httpGET} from "@/utils/utils";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
            {
              data: [],
              backgroundColor: '#f87979',
              label: 'Patients Count per Day',
            }
        ],
      },
      chartOptions: {
        responsive: true,
      }
    }
  },

  created() {
    // START Fetch dashboard index
    httpGET('api/v1/dashboard/index')
        .then(({data}) => {
          // console.log(data.data)
          data.patientsCountMonth.forEach(e => {
            this.chartData.labels.push(e.date)
            this.chartData.datasets[0].data.push(e.count)
          });

          // console.log(this.chartData.labels)
          // console.log(this.chartData.datasets)
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
  }
}
</script>


<style scoped>

</style>