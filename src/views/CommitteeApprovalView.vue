<template>

  <v-container class="mb-16">
    <v-form v-model="valid" lazy-validation ref="form" id="new-form">
      <v-card class="px-6 pb-12 mb-12">
        <v-data-table
            :headers="headers"
            :items="treatments"
            :search="search"
            sort-by="id"
            class="elevation-1"
            :footer-props="{
                'items-per-page-options': [25, 50, 100, 150, -1]
              }"
            :items-per-page="25"
        >

          <template v-slot:item.patient.last_visit="{ item }">
            <span>{{ humanReadableDateConverter(item.patient.last_visit) }}</span>
          </template>

          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>Committee Approval</v-toolbar-title>
              <v-divider
                  class="mx-4"
                  inset
                  vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  class="px-6"
                  dense
                  outlined
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn
                x-small
                color="deep-purple accent-4 white--text"
                dark
                class="px-2 py-2 mx-1"
                @click="$router.push({name: 'viewpanels', params: {patient_uuid: item.patient.uuid, patient_history_uuid: item.patient_history.uuid}})"
            >
              <v-icon size="20" class="pr-1">mdi-solar-panel</v-icon>
              View
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-form>
    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->

    <!--    START Error Message -->
    <ErrorCompo
        :active-dialog="this.errorDialogActive"
        :message="this.errorDialogMessage"
    ></ErrorCompo>
    <!--    END Error Message -->
  </v-container>

</template>

<script>
import LoadingDialogCompo from "@/components/LoadingDialogCompo";
import ErrorCompo from "@/components/ErrorCompo";
import {httpGET} from "@/utils/utils";

export default {
  name: "CommitteeApprovalView.vue",
  components: {
    LoadingDialogCompo,
    ErrorCompo
  },
  data() {
    return {
      valid: false,
      loading_Dialog: true,
      errorDialogActive: false,
      errorDialogMessage: '',
      treatments: [],
      search: '',

      dialogDelete: false,
      headers: [
        { text: '#', value: 'patient.id', sortable: false, align: 'start' },
        { text: 'Name', value: 'patient.full_name', sortable: true },
        { text: 'phone', value: 'patient.phone', sortable: true },
        { text: 'Last Visit', value: 'patient.last_visit', sortable: false },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      temp: {
        deleteId: null
      }
    }
  },

  mounted() {
    this.loading_Dialog = true
  },

  methods: {
    humanReadableDateConverter (date) {
      if (date) {
        let newDate = new Date(date)
        return newDate.toLocaleDateString('en-GB')
      } else {
        return null
      }
    },

    // START Fetch All treatments
    fetchTreatments() {
      httpGET('api/v1/committee-approval/index')
          .then(({data}) => {
            this.treatments = data.data
          }).catch(({response: {data}}) => {
        // Redirect to login page if not authenticated
        if (!data || data.message === "Unauthenticated.") {
          this.$store.commit('SET_AUTHENTICATED', false)
        } else {
          this.errorDialogMessage = data.message
          this.errorDialogActive = true
        }
      }).finally(() => {
        this.loading_Dialog = false
      });
    },
    // END Fetch All treatments
  },

  created() {
    // START Fetch All treatments
    this.fetchTreatments()
  }
  // END Fetch All treatments
}
</script>

<style scoped>

</style>