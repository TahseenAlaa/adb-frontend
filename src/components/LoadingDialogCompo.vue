<template>
  <v-row justify="center">
    <v-dialog
        v-model="loading_Dialog"
        persistent
        max-width="140"
    >
      <v-card>
        <v-card-title class="text-h5">
          Loading
        </v-card-title>
        <v-card-text class="text-center">
          <v-progress-circular
              :size="70"
              :width="7"
              color="purple"
              indeterminate
          ></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "LoadingDialogCompo.vue",
  props: [
      'loading_Dialog'
  ]
}
</script>

<style scoped>

</style>