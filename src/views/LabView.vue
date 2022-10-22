<template>

  <v-container class="mb-16">
    <v-row
        align="center"
        justify="center"
        class="mt-4"
    >
      <v-card
          class="my-2 mx-2 py-2 px-2"
          max-width="250"
          max-height="250"
          min-width="250"
          min-height="250"
          @click="$router.push({name: 'lab_sampling'})"
      >
        <v-col>
          <div class="text-decoration-none black--text">
            <v-img
                src="../assets/reception.svg"
                max-width="160"
                max-height="160"
                class="mx-auto"
            >
            </v-img>
            <v-card-actions class="justify-center">
              <h3 class="text-uppercase text-center text-no-wrap">Sampling</h3>
            </v-card-actions>
          </div>
        </v-col>
      </v-card>

      <v-card
          class="my-2 mx-2 py-2 px-2"
          max-width="250"
          max-height="250"
          min-width="250"
          min-height="250"
          @click="$router.push({name: 'lab_results'})"
      >
        <v-col>
          <div class="text-decoration-none black--text">
            <v-img
                src="../assets/measure.svg"
                max-width="160"
                max-height="160"
                class="mx-auto"
            >
            </v-img>
            <v-card-actions class="justify-center">
              <h3 class="text-uppercase text-center text-no-wrap">Results</h3>
            </v-card-actions>
          </div>
        </v-col>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>

export default {
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
    }
  },

  methods: {
    //
  },
  name: "LabView"
}
</script>

<style scoped>

</style>