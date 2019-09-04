<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name:'dashboard'}">Dashboard</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <div v-if="loggedIn" :key="loggedIn">
            <b-nav-item :to="{ name:'update'}">Update Score</b-nav-item>
            <b-nav-item :to="{ name:'dashboard'}" v-on:click="logMeOut()">Log out</b-nav-item>
          </div>
          <div v-else>
            <b-nav-item :to="{ name:'login'}">Log in</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view @login="logMeIn()" @logout="logMeOut()" v-bind:loggedIn="loggedIn"></router-view>
  </div>
</template>)

<script>
export default {
  name: "App",
  methods: {
    logMeIn: function() {
      this.loggedIn = true
    },
    logMeOut: function() {
      this.loggedIn = false
    }
  },
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
