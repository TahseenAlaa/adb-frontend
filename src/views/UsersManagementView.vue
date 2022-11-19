<template>

  <v-container class="mb-16">
    <v-form v-model="valid" lazy-validation ref="form" id="new-form">
      <v-card class="px-6 pb-12 mb-12">
        <v-data-table
            :headers="headers"
            :items="users"
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

          <template v-slot:item.last_login_at="{ item }">
            <span>{{ humanReadableDateConverter(item.last_login_at) }}</span>
          </template>

          <template v-slot:item.created_by="{ item }">
            <span>{{ users.find(v => v.id === item.created_by).full_name }}</span>
          </template>

          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>Users Management</v-toolbar-title>
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
                      v-if="can('create user')"
                  >
                    New User
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row dense>
                        <v-text-field
                            v-model="editedItem.id"
                            hidden
                            hide-details
                        ></v-text-field>
                        <v-col
                            cols="6"
                        >
                          <v-text-field
                              label="Full Name"
                              v-model="editedItem.full_name"
                              outlined
                              dense
                              :rules="[rules.required, nameRule]"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                              label="Username"
                              v-model="editedItem.username"
                              outlined
                              dense
                              :rules="[rules.required, nameRule]"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row dense>
                        <v-col cols="6">
                          <v-text-field
                              label="Job Title"
                              v-model="editedItem.job_title"
                              outlined
                              dense
                              :rules="[rules.required, nameRule]"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-autocomplete
                              label="Role"
                              :items="[
                        'Receptionist',
                        'Statistics',
                        'Doctor',
                        'Tester',
                        'Admin',
                        'Pharmacist',
                        'Pharmacy Manager',
                        'Inventory Manager',
                        ]"
                              v-model="editedItem.role"
                              outlined
                              dense
                              hint="Select Only from the List"
                              persistent-hint
                              :rules="[rules.required, nameRule]"
                          >
                          </v-autocomplete>
                        </v-col>
                      </v-row>

                      <v-row dense>
                        <v-col cols="12">
                          <v-autocomplete
                              label="Permissions"
                              :items="permissions"
                              v-model="editedItem.permissions"
                              item-value="name"
                              item-text="name"
                              clearable
                              solo
                              chips
                              small-chips
                              deletable-chips
                              multiple
                              outlined
                              dense
                              hint="Select Permissions"
                              persistent-hint
                              :rules="[rules.required, nameRule]"
                          >
                          </v-autocomplete>
                        </v-col>
                      </v-row>

                      <v-row dense>
                        <v-col cols="12">
                          <!-- Edit -->
                          <v-text-field
                              v-if="editedIndex > -1"
                              label="Password"
                              v-model="editedItem.password"
                              type="password"
                              outlined
                              dense
                          ></v-text-field>

                          <!-- New -->
                          <v-text-field
                              v-else-if="editedIndex"
                              label="Password"
                              v-model="editedItem.password"
                              type="password"
                              outlined
                              dense
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
                v-if="can('edit user')"
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
                v-if="can('delete user')"
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
  name: "UsersManagementView.vue",
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
      users: [],
      permissions: [],
      search: '',
      rules: {
        required: value => !!value || 'Required Field',
      },

      errorDialogActive: false,
      errorDialogMessage: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Username', value: 'username', align: 'start' },
        { text: 'Full Name', value: 'full_name' },
        { text: 'Job Title', value: 'job_title', sortable: true },
        { text: 'Created By', value: 'created_by' },
        { text: 'Created At', value: 'created_at' },
        { text: 'Last Login', value: 'last_login_at' },
        { text: 'Action', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        id: '',
        full_name: '',
        username: '',
        job_title: '',
        role: '',
        permissions: [],
        password: '',
      },
      defaultItem: {
        id: '',
        full_name: '',
        username: '',
        job_title: '',
        role: '',
        permissions: [],
        password: '',
      },
      temp: {
        deleteId: null
      }
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New User' : 'Edit User'
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
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.temp.deleteId = item.id
      console.log(this.temp.deleteId)
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.loading_Dialog = true
      // START Delete Item
      httpPOST('api/v1/auth/delete', {
        id: this.temp.deleteId
      })
          .then(({data}) => {
            this.users = data.data
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
      if (
          !this.editedItem.full_name ||
          !this.editedItem.username ||
          !this.editedItem.job_title ||
          !this.editedItem.role ||
          !this.editedItem.permissions
      ) {
        this.required_fields_Dialog = true
      } else {
        if (this.editedIndex > -1) {
          // START Edit Item
          httpPOST('api/v1/auth/update', {
            id: this.editedItem.id,
            full_name: this.editedItem.full_name,
            username: this.editedItem.username,
            job_title: this.editedItem.job_title,
            role: this.editedItem.role,
            password: this.editedItem.password,
            permissions: this.editedItem.permissions
          })
              .then(({data}) => {
                this.users = data.data
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
          if (!this.editedItem.password ) {
            this.required_fields_Dialog = true
          } else {
            // START Add New Item
            httpPOST('api/v1/auth/signup', {
              id: this.editedItem.id,
              full_name: this.editedItem.full_name,
              username: this.editedItem.username,
              job_title: this.editedItem.job_title,
              role: this.editedItem.role,
              password: this.editedItem.password,
              permissions: this.editedItem.permissions
            })
                .then(({data}) => {
                  this.users = data.data
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
        }
        this.close()
      }
    },

    // START Fetch All users
    fetchUsers() {
      httpGET('api/v1/auth/index')
          .then(({data}) => {
            this.users = data.data
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
    // END Fetch All users

    // START Fetch All permissions
    fetchPermissions() {
      httpGET('api/v1/auth/index')
          .then(({data}) => {
            this.permissions = data.permissions
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
    // END Fetch All permissions

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
      if (v.trim() === '' || null) return true;
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 1000000) return true;
      return 'Number Only Accepted';
    },
    // END Rules
  },

  created() {
    this.fetchUsers()
    this.fetchPermissions()
  }
}
</script>

<style scoped>

</style>