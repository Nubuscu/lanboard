<template>
  <b-card-group>
    <b-card
      v-for="score in scores"
      v-bind:key="score.user_id"
      class="card"
      bg-variant="dark"
      text-variant="white"
      align="left"
    >
      <b-row>
        <b-col>{{score.username}}</b-col>
        <b-col sm="2">{{score.score}}</b-col>
      </b-row>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "Scores",
  data() {
    return {
      url: process.env.LANBOARD_BACKEND_URL || "http://localhost:5000",
      polling: null,

      scores: []
    }
  },
  methods: {
    fetchScoreboard: function() {
      this.$http.get(this.url + '/scores/scoreboard').then(function (res) {
        let users = res.body.map(x => {
          x.id = x._id
          delete x._id
          return x
        })
        users.sort((a, b) => {return b.score - a.score})
        this.scores = users
      })
    }
  },
  mounted: function() {
    this.fetchScoreboard()
    this.polling = setInterval(() => {
      this.fetchScoreboard()
      console.log('boop')
    }, 5e3)
  },
  destroyed: function() {
    clearInterval(this.polling)
  }
};
</script>

<style>
.card {
  min-width: 100%;
}
</style>