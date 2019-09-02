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
      <b-card v-for="rule in rules" v-bind:key="rule.id" class="card">
        MAKE ME PRETTY
        {{rule.name}}
        {{rule.desc}}
        {{rule.points}}
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
      console.log("temp shortcut for getting games");
      this.$http
        .get(this.url + "/games")
        .then(function(response) {
          this.games = response.body
        })
        .catch(function(reason) {
          console.log(reason)
          this.games = []
        });
    },
    getRulesForGame: function(game) {
      this.$http.get(this.url + "/games/" + game + "/rules").then( function(response) {
        this.rules = response.body
      }).catch(function(reason) {
        console.log(reason)
        this.rules = []
      })
    }
  },
  mounted: function() {
    this.getGames()
  }
};
</script>

<style>
.card {
  min-width: 100%;
}
</style>