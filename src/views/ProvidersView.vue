<template>

  <v-container class="mb-16" fluid>
    <v-form v-model="valid" lazy-validation ref="form" id="new-form">
      <v-card class="px-6 pb-12 mb-12">
        <v-data-table
            :headers="headers"
            :items="providers"
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
            <span>{{ item.updated_user? item.updated_user.full_name : item.user.full_name }}</span>
          </template>

          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>Provider Management</v-toolbar-title>
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
              <v-dialog
                  v-model="dialog"
                  max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      class="deep-purple white--text mb-2"
                      v-bind="attrs"
                      v-on="on"
                      v-if="can('create providers')"
                  >
                    New Provider
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row dense>
                        <v-col
                            cols="12"
                        >
                          <v-text-field
                              v-model="editedItem.title"
                              label="Title"
                              outlined
                              dense
                              required
                              :rules="[rules.required]"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="deep-purple white--text"
                        @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        color="deep-purple white--text"
                        @click="save"
                        :disabled="!valid"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
            <v-btn
                x-small
                dark
                class="deep-purple white--text px-1 mx-1"
                @click="editItem(item)"
                v-if="can('edit providers') && item.title !== 'Alhasan Diabetes Center' && item.title !== 'Pharmacy'"
            >
              <v-icon size="20" class="pr-1">mdi-lead-pencil</v-icon>
              Edit
            </v-btn>
            <v-btn
                x-small
                color="red accent-4 white--text"
                dark
                class="px-1 mx-1"
                @click="deleteItem(item)"
                v-if="can('delete providers') && item.title !== 'Alhasan Diabetes Center' && item.title !== 'Pharmacy'"
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
  name: "ProvidersView.vue",
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
      providers: [],
      search: '',
      rules: {
        required: value => !!value || 'Required Field',
      },

      dialog: false,
      dialogDelete: false,
      headers: [
        { text: '#', value: 'id', sortable: false, align: 'start' },
        { text: 'Title', value: 'title', sortable: true },
        { text: 'Created By', value: 'created_by' },
        { text: 'Created At', value: 'created_at' },
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
      return this.editedIndex === -1 ? 'New Provider' : 'Edit Provider'
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
      this.editedIndex = this.providers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.temp.deleteId = item.id
      console.log(this.temp.deleteId)
      this.editedIndex = this.providers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.loading_Dialog = true
      // START Delete Item
      httpPOST('api/v1/providers/delete', {
        id: this.temp.deleteId
      })
          .then(({data}) => {
            this.providers = data.data
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
          httpPOST('api/v1/providers/update', {
            id: this.editedItem.id,
            title: this.editedItem.title
          })
              .then(({data}) => {
                this.providers = data.data
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
          httpPOST('api/v1/providers/store', {
            title: this.editedItem.title
          })
              .then(({data}) => {
                this.providers = data.data
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

    // START Fetch All providers
    fetchProviders() {
      httpGET('api/v1/providers/index')
          .then(({data}) => {
            this.providers = data.data
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
    // END Fetch All providers

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
    // START Fetch All providers
    this.fetchProviders()
  }
  // END Fetch All providers
}
</script>

<style scoped>

</style>