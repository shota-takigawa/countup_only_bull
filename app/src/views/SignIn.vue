<template>
  <v-card class="signin mx-auto" color="#26c6da" dark max-width="300">
    <v-card-title>
      <span class="title font-weight-light">サインイン</span>
    </v-card-title>

    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field v-model="email" label="Email" outline clearable></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field v-model="password" label="Password" outline clearable></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-btn color="#0288D1" @click="submit()">サインイン</v-btn>
          </v-flex>
          <v-flex xs12 sm6>
            <v-btn color="#0288D1" @click="goToSignUp()">登録へ</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "signin",
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$auth.signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          alert("Success!", user.email);
          this.$router.push("/countup");
        },
        err => {
          alert(err.message);
        }
      );
    },
    goToSignUp() {
      this.$router.push("/signup");
    }
  }
};
</script>

<style scoped>
.signin {
  margin-top: 40px;
}
</style>
