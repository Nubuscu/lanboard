<template>
  <b-card-group>
    <b-card v-for="score in scores" v-bind:key="score.user_id" class="card">
        MAKE ME PRETTY
        {{score.username}}
        {{score.score}}
    </b-card>
</b-card-group>  
</template>

<script>
export default {
    name: 'Scores',
    data () {
        return {
            scores: [{
                'user_id': 1,
                'username': 'Number Juan Champ',
                'score': 42
            }],
        }
    },
    mounted: function () {
        // TODO polling? websockets/pusher?
    }
}
</script>

<style>
.card {
    min-width: 100%;
}
</style>