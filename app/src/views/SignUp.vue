<template>
  <v-card
    class="signup mx-auto"
    color="#26c6da"
    dark
    max-width="300"
  >
    <v-card-title>
      <span class="title font-weight-light">サインアップ</span>
    </v-card-title>

    <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field
            v-model="name"
            label="Name"
            outline
            clearable
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            v-model="email"
            label="Email"
            outline
            clearable
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            v-model="Password"
            label="Password"
            outline
            clearable
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-btn color="#0288D1" @click="submit()">登録</v-btn>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'signup',
  components: {},
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submit() {

    }
  }
};
</script>

<style scoped>
.signup {
  margin-top: 40px;
}



</style>