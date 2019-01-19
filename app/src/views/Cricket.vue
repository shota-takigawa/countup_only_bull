<template>
  <div class="criket">
    <h1>Cricket!!</h1>
    <h1>{{count}}</h1>
    <h1>Round {{round}}</h1>
    <h1>Number of mark {{this.totalmark}}</h1>
    <!-- <h1>Triple rate {{triplerate}}</h1> -->
    <h1>Mark per round {{this.markrate.toFixed(1)}}</h1>
    <v-badge overlap color="black">
      <span slot="badge">{{twenty}}</span>
      <v-btn color="blue" @click="twentymethod()">20!</v-btn>
    </v-badge>

    <v-badge overlap color="black">
      <span slot="badge">{{nineteen}}</span>
      <v-btn color="blue" @click="nineteenmethod()">19!</v-btn>
    </v-badge>

    <v-badge overlap color="black">
      <span slot="badge">{{eighteen}}</span>
      <v-btn color="blue" @click="eighteenmethod()">18!</v-btn>
    </v-badge>

    <v-badge overlap color="black">
      <span slot="badge">{{seventeen}}</span>
      <v-btn color="blue" @click="seventeenmethod()">17!</v-btn>
    </v-badge>

    <v-badge overlap color="black">
      <span slot="badge">{{sixteen}}</span>
      <v-btn color="blue" @click="sixteenmethod()">16!</v-btn>
    </v-badge>

    <v-badge overlap color="black">
      <span slot="badge">{{fifteen}}</span>
      <v-btn color="blue" @click="fifteenmethod()">15!</v-btn>
    </v-badge>

    <v-badge overlap color="black">
      <span slot="badge">{{bull}}</span>
      <v-btn color="blue" @click="bullmethod()">Bull!</v-btn>
    </v-badge>

    <v-btn class="restart md-raised" @click="nextround()">Next Round!!</v-btn>
    <v-btn class="restart md-raised" @click="restart()">Restart</v-btn>
    <div
      class="history"
      v-for="(v,i) in history"
      :key="i"
    >{{i + 1}} time：markrate {{v[0]}} & totalmark : {{v[1]}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "cricket",
  components: {},
  data() {
    return {
      twenty: 0,
      nineteen: 0,
      eighteen: 0,
      seventeen: 0,
      sixteen: 0,
      fifteen: 0,
      bull: 0,
      count: 0,
      round: 0,
      totalmark: 0,
      markrate: 0,
      triplerate:0,
      history: []
    };
  },
  methods: {
    twentymethod() {
      this.twenty += 1;
      this.totalmark += 1;
      if (this.twenty > 3) {
        this.count += 20;
      }
    },
    nineteenmethod() {
      this.nineteen += 1;
      this.totalmark += 1;
      if (this.nineteen > 3) {
        this.count += 19;
      }
    },
    eighteenmethod() {
      this.eighteen += 1;
      this.totalmark += 1;
      if (this.eighteen > 3) {
        this.count += 18;
      }
    },
    seventeenmethod() {
      this.seventeen += 1;
      this.totalmark += 1;
      if (this.seventeen > 3) {
        this.count += 17;
      }
    },
    sixteenmethod() {
      this.sixteen += 1;
      this.totalmark += 1;
      if (this.sixteen > 3) {
        this.count += 16;
      }
    },
    fifteenmethod() {
      this.fifteen += 1;
      this.totalmark += 1;
      if (this.fifteen > 3) {
        this.count += 15;
      }
    },
    bullmethod() {
      this.bull += 1;
      this.totalmark += 1;
      if (this.bull > 3) {
        this.count += 25;
      }
    },
    nextround() {
      this.round += 1;
      this.markrate = this.totalmark / this.round;
      // this.triplerate = 
    },
    restart() {
      this.history.push([this.markrate.toFixed(1), this.totalmark]);
      (this.round = 0), (this.count = 0);
      this.totalmark = 0;
      this.markrate = 0;
      this.twenty = 0;
      this.nineteen = 0;
      this.eighteen = 0;
      this.seventeen = 0;
      this.sixteen = 0;
      this.fifteen = 0;
      this.bull = 0;
      this.triplerate = 0;
    }
  }
};
</script>

<style scoped>
.criket {
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
}

/* .md-layout-item {
  width: 10%;
} */

h1 {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>