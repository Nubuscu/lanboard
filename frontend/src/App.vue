<template>
  <div id="app">
    <b-nav tabls fill>
      <b-nav-item active href='/'>Rules and Scores</b-nav-item>
      <b-nav-item href='/update'>Update Score</b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
