<template>
  <div class="games-create">
    <form v-on:submit.prevent="submit()">
      <h1>Create A Game</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>Title:</label> 
          <input type="text" v-model="title">
          <br>

          <label>Description:</label>
          <input type="text" v-model="description">
          <br>

          <label>Park:</label>
          <select name="parks" v-model="parkId">
            <option v-for="park in parks" v-bind:value="park.id"> {{park.name}} Park</option>
          </select>
          <br>

          <label>Start Time:</label>
          <input type="datetime-local" v-model="startTime">
          <br>

          <label>Sport:</label>
          <select name="sport" v-model="sport">
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="hockey">Hockey</option>
            <option value="soccer">Soccer</option>
            <option value="softball">Softball</option>
            <option value="tennis">Tennis</option>
            <option value="volleyball">Volleyball</option>
          </select>
          <br>

          <label>Category:</label>
          <select name="category" v-model="category">
            <option value=""></option>
            <option value="casual">Casual</option>
            <option value="competitive">Competitive</option>
          </select>
          <br>

          <label>Minimum Participants:</label>
          <input type="text" v-model="minParticipants">
          <br>

          <label>Maximum Participants:</label>
          <input type="text" v-model="maxParticipants">
          <br>

          <label>Maximum Age:</label>
          <input type="text" v-model="maxAge">
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
        parks: [],
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

      axios.get('/api/parks').then(response => {
        this.parks = response.data;
        console.log(this.parks);
      });

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
                      organizer_id: this.userId
        };

        console.log(this.userId);
        console.log(params);

        axios.post('/api/games', params).then(response => {
          console.log(response.data);
          this.$router.push('/games/' + response.data.id);
        })
        .catch(error => {
            this.errors = response.data.errors;
        });

      }
    }
  };
</script>
