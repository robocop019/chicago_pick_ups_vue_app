<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors"> {{ error }} </li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <input type="submit" class="button" value="Submit">
    </form>
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        email: "",
        password: "",
        user_id: "",
        errors: []
      };
    },
    created: function() {
      if (localStorage.getItem("jwt")) {
        this.$router.push('/users/' + localStorage.getItem("user_id"));
      }
    },
    methods: {
      submit: function() {
        var params = {
          email: this.email,
          password: this.password
        };

        axios.post("/api/sessions", params).then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          console.log(response.data);
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.user_id = response.data.user_id;
          this.$router.push("/users/" + this.user_id);
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
      }
    }
  };
</script>