<template>

  <!--    START Required Fields Dialog-->
  <v-row justify="center">
    <v-dialog
        v-model="required_fields_Dialog"
        persistent
        max-width="450"
    >
      <v-card>
        <v-card-title class="text-h6 red">
          Error
        </v-card-title>
        <v-card-text class="text-center pt-6 text-h6">
          Please enter information before submit.
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn
              @click="required_fields_Dialog = false"
              dark
              class="deep-purple"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!--    END Required Fields Dialog-->

</template>

<script>
export default {
  name: "RequiredFieldsCompo.vue",
  props: [
      'required_fields_Dialog'
  ]
}
</script>

<style scoped>

</style>