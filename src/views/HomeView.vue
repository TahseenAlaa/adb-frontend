<template>

  <v-container fluid>
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
        @click="$router.push({path: '/search/reception'})"
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
                  <h3 class="text-uppercase text-center">Reception & Statistics</h3>
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
    >
      <v-col>
        <router-link to="/search/doctors" class="text-decoration-none black--text">
        <v-img
            src="../assets/doctors.svg"
            max-width="160"
            max-height="160"
            class="mx-auto"
        >
        </v-img>
        <v-card-actions class="justify-center">

            <h3 class=" text-uppercase mt-2">Doctors</h3>
        </v-card-actions>
        </router-link>
      </v-col>
    </v-card>
  </v-row>

    <v-row
        align="center"
        justify="center"
    >
      <v-card
          class="my-2 mx-2 py-2 px-2"
          max-width="250"
          max-height="250"
          min-width="250"
          min-height="250"
      >
        <v-col>
          <router-link to="/search/lab" class="text-decoration-none black--text">
          <v-img
              src="../assets/lab.svg"
              max-width="160"
              max-height="160"
              class="mx-auto"
          >
          </v-img>
          <v-card-actions class="justify-center">
            <h3 class=" text-uppercase mt-2">Medical Lab</h3>

          </v-card-actions>
          </router-link>
        </v-col>
      </v-card>

      <v-card
          class="my-2 mx-2 py-2 px-2"
          max-width="250"
          max-height="250"
          min-width="250"
          min-height="250"
      >
        <v-col>
          <router-link to="/search/pharmacy" class="text-decoration-none black--text">
          <v-img
              src="../assets/pharmacy.svg"
              max-width="160"
              max-height="160"
              class="mx-auto"
          >
          </v-img>
          <v-card-actions class="justify-center">
            <h3 class=" text-uppercase mt-2">Pharmacy</h3>

          </v-card-actions>
          </router-link>
        </v-col>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "HomeView.vue"
}
</script>

<style scoped>

</style>