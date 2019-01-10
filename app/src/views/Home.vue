<template>
  <div class="home">
    <h1>Count up!!</h1>
    <h1>{{count}}</h1>
    <h1>Round {{round}}</h1>
    <h1>Number of Bull {{this.totalbull}}</h1>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-button class="md-raised" @click="zero()">0</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised" @click="one()">1</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised" @click="two()">2</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised" @click="three()">3</md-button>
      </div>
    </div>
    <md-button class="restart md-raised" @click="restart()">Restart</md-button>
    <div
      class="history"
      v-for="(v,i) in history"
      :key="i"
    >{{i}} time： {{v[0]}} & totalbull : {{v[1]}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      count: 0,
      round: 0,
      totalbull: 0,
      history: []
    };
  },
  methods: {
    zero() {
      this.count += 30;
      this.round += 1;
    },
    one() {
      this.count += 70;
      this.round += 1;
      this.totalbull += 1;
    },
    two() {
      this.count += 110;
      this.round += 1;
      this.totalbull += 2;
    },
    three() {
      this.count += 150;
      this.round += 1;
      this.totalbull += 3;
    },
    restart() {
      this.history.push([this.count, this.totalbull]);
      (this.round = 0), (this.count = 0);
      this.totalbull = 0;
    }
  }
};
</script>

<style scoped>
.home {
  width: 375px;
  height: 667px;
  /* background-color: aqua; */
}

.restart {
  margin-top: 50px;
}

.history {
  font-size: 30px;
  text-decoration-color: blue;
  margin-top: 50px;
}

.md-layout {
  margin-top: 50px;
  width: 100%;
}

.md-layout-item {
  width: 10%;
}

h1 {
  margin-top: 30px;
  margin-bottom: 30px;
}

md-button {
  background-color: blueviolet;
}
</style>