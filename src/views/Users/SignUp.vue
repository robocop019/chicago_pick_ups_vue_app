<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="button" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
      };
    },
    methods: {
      submit: function() {
        var params = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
        };

        axios.post("/api/users", params).then(response => {

            var loginParams = {
                          email: this.email,
                          password: this.password
            };

            axios.post("/api/sessions", loginParams).then(response => {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.jwt;
              localStorage.setItem("jwt", response.data.jwt);
              localStorage.setItem("user_id", response.data.user_id);
              this.user_id = response.data.user_id;
              this.$router.push("/users/" + this.user_id);
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  };
</script>