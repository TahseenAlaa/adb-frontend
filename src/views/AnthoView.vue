<template>
  <v-container>
    <v-form v-model="valid" lazy-validation ref="form">
      <v-card class="px-6">
        <v-card-title>Anthropology Measurement</v-card-title>
        <v-card-subtitle>Enter the data of the patient</v-card-subtitle>
        <v-card-title class="subtitle-2">Physical Information</v-card-title>

        <v-row dense>
          <v-col cols="2">
            <v-text-field
                label="Weight in kg"
                v-model="weight"
                outlined
                dense
                :rules="[weightRule]"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Height in cm"
                v-model="height"
                outlined
                dense
                :rules="[heightRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Waist Circumference"
                v-model="waist_circumference"
                outlined
                dense
                :rules="[numberRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="HIP"
                v-model="hip"
                outlined
                dense
                :rules="[numberRule]"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-text-field
                label="BMI"
                v-model="bmi"
                outlined
                readonly
                hint="ReadOnly"
                persistent-hint
                dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="2">
            <v-text-field
                label="Father's Height"
                v-model="father_height"
                outlined
                dense
                :rules="[heightRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
                label="Mother's Height"
                v-model="mother_height"
                outlined
                dense
                :rules="[heightRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-radio-group
                v-model="gender"
                dense
                row
            >
              <v-radio value="Male" label="Male"></v-radio>
              <v-radio value="Female" label="Female"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-btn
                @click="calcMidParentAndBMI()"
                class="deep-purple white--text"
                :disabled="!valid"
            >Calculate</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="2">
            <v-text-field
                label="Mid-Parent Height"
                v-model="mid_parent_height"
                outlined
                dense
                readonly
                hint="ReadOnly"
                persistent-hint
            ></v-text-field>
          </v-col>
        </v-row>

      </v-card>

      <v-row dense align="center" justify="center">
        <v-spacer></v-spacer>
        <v-alert
            type="success"
            class="mt-10 mr-4"
            v-if="successAlert"
            dense
        >Patient Information stored successfully!</v-alert>
        <v-alert
            prominent
            type="error"
            class="mt-10 mr-4"
            v-if="errorAlert"
            dense
        >Save data Failed!
        </v-alert>

        <v-btn
            class="px-2 py-12 mt-6 mx-2 deep-purple white--text"
            :disabled="!valid"
            :loading="loading"
        >
          <v-col @click="postAnthoData">
              <v-icon size="60">mdi-content-save</v-icon>
              <h3 class="text-capitalize">SAVE CHANGES</h3>
          </v-col>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "AnthoView",
  data() {
    return {
      patient_uuid: this.$route.params.patient_uuid,
      valid: false,
      loading: false,
      weight: null,
      height: null,
      waist_circumference: null,
      bmi: null,
      hip: null,
      father_height: null,
      mother_height: null,
      mid_parent_height: null,
      gender: null,
      successAlert: false,
      errorAlert: false
    }
  },

  methods: {
    calcMidParentAndBMI() {
      // Calc Mid-Parent
      if (this.weight && this.height) {
        let weight = parseInt(this.weight)
        let height = parseInt(this.height/100)
        this.bmi = weight / (height ^ 2)
      }

      // Calc BMI
      if (this.father_height && this.mother_height) {
        this.mid_parent_height = null
        this.mid_parent_height = (this.father_height + this.mother_height) / 2
      }
    },
    roundToTwo(num) {
      return +(Math.round(num + "e+2")  + "e-2");
    },

    // START Rules
    numberRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
      return 'Number has to be between 0 and 999';
    },
    weightRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 300) return true;
      return 'Number has to be between 1 and 300';
    },
    heightRule: v  => {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 1 && v <= 210) return true;
      return 'Number has to be between 1 and 210';
    },
    // END Rules

    postAnthoData() {
      // this.loading = true
      // this.valid = false
      if (this.$refs.form.validate()) {
        console.log('Valid!')
      } else {
        console.log('Not Valid!')
      }
    }
  },
}
</script>

<style scoped>

</style>