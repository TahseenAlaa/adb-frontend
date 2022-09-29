<template>

  <v-container>
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
  </v-container>

</template>

<script>

export default {
  name: "Dashboard",
}
</script>

<style scoped>

</style>