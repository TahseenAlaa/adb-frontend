<template>

  <v-container fluid class="mb-16">
  <v-row
      align="center"
      justify="center"
      class="mt-4"
  >
    <v-card
        v-if="can('access reception department')"
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
                  <h3 class="text-uppercase text-center text-no-wrap">Reception & Statistics</h3>
                </v-card-actions>
        </div>
      </v-col>
    </v-card>

    <v-card
        v-if="can('access antho department')"
        class="my-2 mx-2 py-2 px-2"
        max-width="250"
        max-height="250"
        min-width="250"
        min-height="250"
        @click="$router.push({path: '/search/antho'})"
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
            <h3 class="text-uppercase text-center text-no-wrap">Anthro. Measurement</h3>
          </v-card-actions>
        </div>
      </v-col>
    </v-card>

    <v-card
        v-if="can('access doctor department')"
        class="my-2 mx-2 py-2 px-2"
        max-width="250"
        max-height="250"
        min-width="250"
        min-height="250"
        @click="$router.push({path: '/search/doctors'})"
    >
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
    </v-card>
  </v-row>

    <v-row
        align="center"
        justify="center"
    >
      <v-card
          v-if="can('access medical lab department')"
          class="my-2 mx-2 py-2 px-2"
          max-width="250"
          max-height="250"
          min-width="250"
          min-height="250"
          @click="$router.push({path: '/search/lab'})"

      >
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

      </v-card>

      <v-card
          v-if="can('access pharmacy department')"
          class="my-2 mx-2 py-2 px-2"
          max-width="250"
          max-height="250"
          min-width="250"
          min-height="250"
          @click="$router.push({path: '/search/pharmacy'})"

      >

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

      </v-card>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "HomeView.vue",

  methods: {
    // START Check Permissions
    can($permit) {
      return !!this.$store.getters.user.permissions.find(v => v.name === $permit);
    },
    // END Check Permissions
  }
}
</script>

<style scoped>

</style>