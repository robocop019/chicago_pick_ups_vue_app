<template>
  <div class="games-create">
    <form v-on:submit.prevent="submit()">
      <h1>Create A Game</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label> 
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="description">
        </div>
        <div class="form-group">
          <label>Park Id:</label>
          <input type="text" class="form-control" v-model="parkId">
        </div>
        <div class="form-group">
          <label>Start Time:</label>
          <input type="text" class="form-control" v-model="startTime">
        </div>
        <div class="form-group">
          <label>Sport:</label>
          <input type="text" class="form-control" v-model="sport">
        </div>
        <div class="form-group">
          <label>Category:</label>
          <input type="text" class="form-control" v-model="category">
        </div>
        <div class="form-group">
          <label>Minimum Participants:</label>
          <input type="text" class="form-control" v-model="minParticipants">
        </div>
        <div class="form-group">
          <label>Maximum Participants:</label>
          <input type="text" class="form-control" v-model="maxParticipants">
        </div>
        <div class="form-group">
          <label>Maximum Age:</label>
          <input type="text" class="form-control" v-model="maxAge">
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
        title: "",
        description: "",
        parkId: "",
        startTime: "",
        sport: "",
        category: "",
        minParticipants: "",
        maxParticipants: "",
        maxAge: "",
        userId: localStorage.getItem("user_id"),
        errors: []
      };
    },
    created: function() {
      if (!(localStorage.getItem("jwt"))) {
        //pop up you need to be logged in to create a game
        this.$router.push('/login');
      }
    },
    methods: {
      submit: function() {
        var params = {
                      title: this.title,
                      description: this.description,
                      park_id: this.parkId,
                      start_time: this.startTime,
                      sport: this.sport,
                      category: this.category,
                      min_participants: this.minParticipants,
                      max_participants: this.maxParticipants,
                      max_age: this.maxAge,
                      user_id: this.userId
        };

        axios.post('/api/games', params).then(response => {
          console.log(response.data);
          // this.$router.push('/games/' + response.data.id);
        })
        .catch(error => {
            this.errors = response.data.errors;
        });

      }
    }
  };
</script>
