<template>
  <!-- <v-tabs centered color="cyan" dark icons-and-text>
  <v-tabs-slider color="yellow"></v-tabs-slider>-->
  <v-card height="120px">
    <v-btn block color="#03A9F4" @click="goToMyPage()">
      <span>My page</span>
    </v-btn>
    <v-btn block color="#03A9F4" @click="goToCountUp()">
      <span color="#FFFFFF">Count Up!!</span>
    </v-btn>

    <v-btn block color="#03A9F4" @click="goToCricket()">
      <span>Cricket!!</span>
    </v-btn>
  </v-card>

  <!-- <v-tab href="#tab-1">Count up!
      <Countup/>

    </v-tab>

    <v-tab href="#tab-2">Cricket!
      <Cricket/>

    </v-tab>
  </v-tabs>-->
  <!-- <div class="header">
    <md-tabs>
      <md-tab id="tab-Countup" md-label="Countup">
        <Countup/>
      </md-tab>
      <md-tab id="tab-pages" md-label="Cricket">
        <Cricket/>
      </md-tab>
    </md-tabs>
  </div>-->
</template>

<script>
// import Countup from "@/views/Countup.vue";
// import Cricket from "@/views/Cricket.vue";
export default {
  name: "Header",
  // components: {
  //   Countup,
  //   Cricket
  // },
  methods: {
    goToMyPage() {
      this.$router.push("/mypage");
    },
    goToCountUp() {
      this.$router.push("/");
    },
    goToCricket() {
      this.$router.push("/cricket");
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #03a9f4;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
