<template>
  <div>
    <b-container>
      <b-form>
        <b-form-group label="Change in score:" label-for="score-input">
          <b-form-input
            id="score-input"
            v-model="delta"
            required
            placeholder="insert change in score here (3, -4, 1, etc.)"
          />
        </b-form-group>
        <b-button type="button" v-on:click="onUpdateScore">Update</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delta: 0
    };
  },
  methods: {
    onUpdateScore: function() {
      if (parseInt(this.delta) == NaN) {
        alert("Please enter a number");
        return;
      }
      const url = process.env.LANBOARD_BACKEND_URL || "http://localhost:5000";
      const data = { delta: this.delta };
      const headers = { "x-authentication": this.$ls.get("token") };
      console.log(headers);
      this.$http
        .post(url + "/scores/update", data, { headers })
        .then(function(res) {
          console.log("successfully updated score");
          this.$router.push("/");
        })
        .catch(function(reason) {
          alert("update failed, please try again");
        });
    }
  }
};
</script>

<style>
</style>