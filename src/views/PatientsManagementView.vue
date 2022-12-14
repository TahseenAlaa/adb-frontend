<template>

  <v-container class="mb-16" fluid>
    <v-form v-model="valid" lazy-validation ref="form" id="new-form">
      <v-card class="px-6 pb-12 mb-12">
        <v-data-table
            :headers="headers"
            :items="patients"
            :search="search"
            sort-by="id"
            class="elevation-1"
            :footer-props="{
                'items-per-page-options': [25, 50, 100, 150, -1]
              }"
            :items-per-page="25"
        >
          <template v-slot:item.created_at="{ item }">
            <span>{{ humanReadableDateConverter(item.created_at) }}</span>
          </template>

          <template v-slot:item.created_by="{ item }">
<!--            // TODO delete 'Other'-->
            <span>{{ item.updated_user? item.updated_user.full_name : 'Other' }}</span>
          </template>

          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>Patient Management</v-toolbar-title>
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
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black white--text" @click="closeDelete">Cancel</v-btn>
                    <v-btn color="red accent-4 white--text" @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <router-link
                v-if="can('edit patient')"
                :to="'/modify-patient-info/' + item.uuid"
            >
              <v-btn
                  x-small
                  dark
                  class="deep-purple white--text px-1 mx-1"
              >
                <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
                Edit
              </v-btn>
            </router-link>
            <v-btn
                x-small
                color="red accent-4 white--text"
                dark
                class="px-1 mx-1"
                @click="deleteItem(item)"
                v-if="can('delete patient')"
            >
              <v-icon size="20" class="pr-1">mdi-delete-forever</v-icon>
              Delete
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-form>
    <!--    START Loading Dialog-->
    <LoadingDialogCompo :loading_-dialog="loading_Dialog"></LoadingDialogCompo>
    <!--    END Loading Dialog-->

    <!--    START Required Fields -->
    <RequiredFieldsCompo :required_fields_-dialog="required_fields_Dialog"></RequiredFieldsCompo>
    <!--    END Required Fields -->

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
import RequiredFieldsCompo from "@/components/RequiredFieldsCompo";
import ErrorCompo from "@/components/ErrorCompo";
import {httpGET, httpPOST} from "@/utils/utils";

export default {
  name: "PatientsManagementView.vue",
  components: {
    LoadingDialogCompo,
    RequiredFieldsCompo,
    ErrorCompo
  },
  data() {
    return {
      valid: false,
      loading_Dialog: true,
      required_fields_Dialog: false,
      errorDialogActive: false,
      errorDialogMessage: '',
      patients: [],
      search: '',
      rules: {
        required: value => !!value || 'Required Field',
      },

      dialog: false,
      dialogDelete: false,
      headers: [
        { text: '#', value: 'id', sortable: true, align: 'start' },
        { text: 'Full Name', value: 'full_name', sortable: true },
        { text: 'OLd Patient Number', value: 'patient_number', sortable: false },
        { text: 'Phone', value: 'phone', sortable: false },
        { text: 'Birthday', value: 'birthday', sortable: true },
        { text: 'Created By', value: 'created_by', sortable: true },
        { text: 'Register Date', value: 'created_at' },
        { text: 'Last Visit', value: 'last_visit' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        title: '',
      },
      defaultItem: {
        title: '',
      },
      temp: {
        deleteId: null
      }
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Patient' : 'Edit Patient'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
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


    editItem (item) {
      this.editedIndex = this.patients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.temp.deleteId = item.id
      console.log(this.temp.deleteId)
      this.editedIndex = this.patients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.loading_Dialog = true
      // START Delete Item
      httpPOST('api/v1/patients/delete', {
        id: this.temp.deleteId
      })
          .then(({data}) => {
            this.patients = data.data
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
      // END Delete Item
      this.closeDelete()
      this.temp.deleteId = null
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.temp.deleteId = null
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      this.loading_Dialog = true
      if (!this.editedItem.title) {
        this.required_fields_Dialog = true
      } else {
        if (this.editedIndex > -1) {
          // START Edit Item
          httpPOST('api/v1/patient-types/update', {
            id: this.editedItem.id,
            title: this.editedItem.title
          })
              .then(({data}) => {
                this.patients = data.data
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
          // END Edit Item
        } else {
          // START Add New Item
          httpPOST('api/v1/patient-types/store', {
            title: this.editedItem.title
          })
              .then(({data}) => {
                this.patients = data.data
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
          // END Add New Item
        }
        this.close()
      }
    },

    // START Fetch All patients
    fetchPatients() {
      httpGET('api/v1/patients/index')
          .then(({data}) => {
            this.patients = data.data
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
    // END Fetch All patients

    // START Check Permissions
    can($permit) {
      return !!this.$store.getters.user.permissions.find(v => v.name === $permit);
    },
    // END Check Permissions

    // START Rules
    nameRule: value =>  {
      const pattern = /^([^0-9]*)$/;
      return pattern.test(value) || 'Only Letters Accepted'
    },

    numberRule: v  => {
      if (v !== null) {
        if (v.trim() === '' || null) return true;
        if (!v.trim()) return true;
      }
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 1000000) return true;
      return 'Number Only Accepted';
    },
    // END Rules
  },

  created() {
    // START Fetch All patients
    this.fetchPatients()
  }
  // END Fetch All patients
}
</script>

<style scoped>

</style>