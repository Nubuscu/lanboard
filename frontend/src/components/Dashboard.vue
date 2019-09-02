<template>
<b-container fluid>  
    <b-row>
        <b-col sm="8">
            <rules/>
        </b-col>
        <b-col sm="4">
            <scores/>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
import Scores from './fragments/Scores'
import Rules from './fragments/Rules'
export default {
    name: "Dashboard",
    components: {
        'rules': Rules,
        'scores': Scores
    }
}
</script>

<style scoped>

</style>