<template>
  <v-app>
    <v-app-bar
      color="deep-purple darken-2"
      dark
    >
      <v-container class="fill-height">
        <v-row align="center" justify="center" class="fill-height">

          <v-spacer></v-spacer>

            <v-img
                :src="require('./assets/logo.png')"
                contain
                height="25"
                width="25"
                max-width="25px"
                max-height="25px"
            />
            <h3>Alhasan Diabetes Center</h3>

          <v-spacer></v-spacer>

          <div>
            <v-row>
              <v-img
                  :src="require('./assets/logo.png')"
                  contain
                  height="25"
                  width="25"
                  max-width="25px"
                  max-height="25px"
                  class="mr-6"
              />
              <h4>Username</h4>
            </v-row>
          </div>
        </v-row>
      </v-container>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
