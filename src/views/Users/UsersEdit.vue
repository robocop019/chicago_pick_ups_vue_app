<template>
  <div class="users-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Profile</h1>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

      <div>
        <label>First Name:</label> 
        <input type="text"  v-model="user.first_name">
        <br>
        <br>          
        <label>Last Name:</label> 
        <input type="text" v-model="user.last_name">
        <br>
        <br>  
        <label>Email:</label>
        <input type="email" v-model="user.email">
        <br>
        <br>     
        <label>Phone Number:</label>
        <input type="text" v-model="user.phone_number">
        <br>
        <br>
        <label>Avatar Url:</label>
        <input type="text" v-model="user.avatar_url">
        <br>
        <br>
        <label>Bio:</label>
        <input type="text" v-model="user.bio">
        <br>
        <br>
        <label>Location:</label>
        <input type="text" v-model="user.location">
        <br>
        <br>
        <input type="submit" value="Update Profile">
      </div>
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
        user: {},
        errors: []
      };
    },
    created: function() {
      axios.get('/api/users/' + localStorage.getItem("user_id")).then(response => {
        this.user = response.data;
      });
    },
    methods: {
      submit: function() {

        var params = {
                      first_name: this.user.first_name,
                      last_name: this.user.last_name,
                      email: this.user.email,
                      phone_number: this.user.phone_number,
                      bio: this.user.bio,
                      avatar_url: this.user.avatar_url,
                      location: this.user.location
        };

        axios.patch('/api/users/' + localStorage.getItem("user_id"), params)
          .then(response => {
            this.$router.push('/users/' + localStorage.getItem("user_id"));
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  };
</script>
