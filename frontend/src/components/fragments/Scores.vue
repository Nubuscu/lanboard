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
      scores: [
        {
          user_id: 1,
          username: "Number One Champ",
          score: 142
        },
        {
            user_id: 2,
            username: "Nubuscu",
            score: -3
        },
        {
            user_id: 3,
            username: "sbeve",
            score: 1
        }
      ]
    };
  },
  mounted: function() {
    // TODO polling? websockets/pusher?
  }
};
</script>

<style>
.card {
  min-width: 100%;
}
</style>