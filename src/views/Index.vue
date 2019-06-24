<template>
  <div class="home">
    <div v-for="game in games">
      <router-link v-bind:to="'/games/' + game.id"> <h2> {{game.title}} </h2> </router-link>
      <router-link v-bind:to="'/users/' + game.organizer.id"> <h3> {{game.organizer.first_name}} {{game.organizer.last_name}}</h3> </router-link>
      <h5> {{game.description}} </h5>
      <h6> {{game.category}} </h6>
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
        games: []
      };
    },
    created: function() {
      axios.get('/api/games').then(response => {
        console.log(response.data);
        this.games = response.data;
        console.log(this.games);
      });
    },
    methods: {}
  };
</script>