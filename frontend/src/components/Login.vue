<template>
  <div>
    <b-container>
      <b-form>
        <b-form-group label="Username:" label-for="username-input">
          <b-form-input
            id="username-input"
            v-model="form.username"
            required
            placeholder="Enter your username"
          />
        </b-form-group>
        <b-form-group
          label="Password:"
          label-for="password-input"
          description="please for the love of all things that are holy, don't use any of your usual passwords here"
        >
          <b-form-input
            id="password-input"
            v-model="form.rawPassword"
            required
            type="password"
            placeholder="Enter your password"
          />
        </b-form-group>
        <b-button type="button" v-on:click="onLogin">Log in</b-button>
        <b-button type="button" v-on:click="onSignup">Sign up</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
const Crypto = require("crypto-js");
const axios = require("axios");
export default {
  data() {
    return {
      form: {
        username: "",
        rawPassword: ""
      }
    };
  },
  methods: {
    onLogin: function() {
      return this.sendTo('/users/login');
    },
    onSignup: function() {
        return this.sendTo('/users/create')
    },

    sendTo: function(urlSuffix) {
      if (this.form.username === "" || this.form.rawPassword === "") {
        alert("please fill out both fields")
      } else {
        const url = process.env.LANBOARD_BACKEND_URL || "http://localhost:5000";
        this.$http
          .post(url + urlSuffix, {
            username: this.form.username,
            password: Crypto.MD5(this.form.rawPassword).toString()
          })
          .then(function(res) {
            this.$ls.set("token", res.body.token)
            this.$router.push('/')
            this.$emit('login')
          })
          .catch(function(reason) {
            alert("login failed, please try again")
          });
      }
    }
  }
};
</script>

<style>
</style>