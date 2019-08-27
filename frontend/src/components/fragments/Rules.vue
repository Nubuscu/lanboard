<template>
<b-card-group>
    <b-card v-for="rule in rules" v-bind:key="rule.id" class="card">
        MAKE ME PRETTY
        {{rule.name}}
        {{rule.desc}}
        {{rule.points}}
    </b-card>
</b-card-group>  
</template>

<script>
export default {
    name: "Rules",
    data() {
        return {
            rules: [{
                'id': 1,
                'name': 'This is a placeholder',
                'desc': "every time you a thing, something or other, get a point I guess. I'm rambling again, aren't I?",
                'points': 1
            },
            {
                'id': 2,
                'name': 'This another is a placeholder',
                'desc': "every time you a thing, something or other, get a point I guess. I'm rambling again, aren't I?",
                'points': 1
            }
            ]
        }
    },
    methods: {
        getRulesForGame: function (game) {
            //TODO fetch rules from backend
            // this.data = 
        }   
    }
}
</script>

<style>
.card {
    min-width: 100%;
}
</style>