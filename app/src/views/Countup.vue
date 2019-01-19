<template>
  <div class="home">
    <h1>Count up!!</h1>
    <h1>{{count}}</h1>
    <h1>Round {{round}}</h1>
    <h1>Number of Bull {{this.totalbull}}</h1>
    <h1>Bull rate {{this.bullrate.toFixed(1)}}</h1>
    <div class="text-xs-center">
      <v-btn color="#8BC34A" @click="three()">Hat trick!!</v-btn>
    </div>
    <div class="text-xs-center nohattrick">
      <v-btn color="#0288D1" @click="zero()">0 Bull</v-btn>
      <v-btn color="#0288D1" @click="one()">1 Bull</v-btn>
      <v-btn color="#0288D1" @click="two()">2 Bull</v-btn>
    </div>
    <v-btn class="restart" color="#9E9E9E" @click="restart()">Restart</v-btn>
    <div
      class="history"
      v-for="(v,i) in history"
      :key="i"
    >{{i + 1}} time： {{v[0]}} & totalbull : {{v[1]}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "countup",
  components: {},
  data() {
    return {
      count: 0,
      round: 0,
      totalbull: 0,
      bullrate: 0,
      history: []
    };
  },
  methods: {
    zero() {
      this.count += 30;
      this.round += 1;
      this.bullrate = (100 * this.totalbull) / (3 * this.round);
    },
    one() {
      this.count += 70;
      this.round += 1;
      this.totalbull += 1;
      this.bullrate = (100 * this.totalbull) / (3 * this.round);
    },
    two() {
      this.count += 110;
      this.round += 1;
      this.totalbull += 2;
      this.bullrate = (100 * this.totalbull) / (3 * this.round);
    },
    three() {
      this.count += 150;
      this.round += 1;
      this.totalbull += 3;
      this.bullrate = (100 * this.totalbull) / (3 * this.round);
    },
    restart() {
      this.history.push([this.count, this.totalbull]);
      (this.round = 0), (this.count = 0);
      this.totalbull = 0;
      this.bullrate = 0;
    }
  }
};
</script>

<style scoped>
.home {
  width: 375px;
  height: 667px;
  margin-top: 15px;
}

.nohattrick {
  margin-top: 10px;
}

.restart {
  margin-top: 20px;
}

.history {
  font-size: 30px;
  margin-top: 30px;
}

h1 {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>