<template>
  <div class="games-show">
    <h2> {{game.title}} </h2>

    <div>
      <button v-on:click="interestedIn(1)">Attending</button>
    </div>

    <div>
      <button v-on:click="interestedIn(0)">Interested In</button>
    </div>

    <h4> {{game.start_time}} </h4>

    <router-link v-bind:to="'/users/' + game.organizer.id"> <p> {{game.organizer.first_name}} {{game.organizer.last_name}}</p> </router-link>
    <router-link v-bind:to="'/parks/' + game.park.id"> <p> {{game.park.name}} </p> </router-link>
    <p>Category: {{game.category}} || Sport: {{game.sport}} </p>
    <p>Description: {{game.description}} </p>

    <h2>Interested In</h2>
    <div v-for="interest in interests">
      <p> {{interest.user_id}} is {{interest.status}} </p>
    </div>

    <h2>Comments</h2>
    <div v-for="comment in game.comments">
      <p> Comment: {{comment.content}} </p>
    </div>

  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        game: [],
        interests: []
      };
    },
    created: function() {
      axios.get('/api/games/' + this.$route.params.id).then(response => {
        this.game = response.data;
      });

      axios.get('/api/interests?game_id=' + this.$route.params.id).then(response => {
        this.interests = response.data;
      });
    },
    methods: {
      interestedIn: function(status) {
        var params = {
                      user_id: localStorage.getItem("user_id"),
                      game_id: this.$route.params.id,
                      status: status
        };

        axios.post('/api/interests', params).then(response => {
          console.log(response.data);
        });

        axios.get('/api/interests?game_id=' + this.$route.params.id).then(response => {
          this.interests = response.data;
        });
      }
    }
  };
</script>
