<template>
  <div>
    <b-form-group>
      <b-form-select
        id="game-select"
        v-model="game"
        :options="games"
        required
        @change="getRulesForGame($event)"
      />
    </b-form-group>
    <b-card-group v-if="rules.length">
      <b-card
        v-for="rule in rules"
        v-bind:key="rule.id"
        class="card"
        :title="rule.name"
        bg-variant="dark"
        text-variant="white"
        align="left"
      >
        <b-row>
          <b-col>{{rule.desc}}</b-col>
          <b-col sm="1">{{rule.points}}</b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      url: process.env.LANBOARD_BACKEND_URL || "http://localhost:5000",
      game: "TTT",
      games: [],
      rules: []
    };
  },
  methods: {
    getGames: function() {
      this.$http
        .get(this.url + "/games")
        .then(function(response) {
          console.log(response.body);
          this.games = response.body;
        })
        .catch(function(reason) {
          console.log(reason);
          this.games = [];
        });
    },
    getRulesForGame: function(game) {
      this.$http
        .get(this.url + "/games/" + game + "/rules")
        .then(function(response) {
          this.rules = response.body;
        })
        .catch(function(reason) {
          console.log(reason);
          this.rules = [];
        });
    }
  },
  mounted: function() {
    this.getGames();
  }
};
</script>

<style>
.card {
  min-width: 100%;
}
</style>