<template>
  <div class="header">
    <md-tabs>
      <md-tab id="tab-Countup" md-label="Countup">
        <Countup/>
      </md-tab>
      <md-tab id="tab-pages" md-label="Cricket">
        <Cricket/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Countup from "@/views/Countup.vue";
import Cricket from "@/views/Cricket.vue";
export default {
  name: "Header",
  components:{
    Countup,
    Cricket
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
