<template>
  <div class="home">
    <div class="container pt90 pb50">

    <h3 class="left-title">Games</h3>
    <div v-for="game in games">
      <router-link v-bind:to="'/games/' + game.id"> <h3> {{game.title}} </h3> </router-link>
      <router-link v-bind:to="'/parks/' + game.park.id"> <p> {{game.park.name}} </p> </router-link>
      <p> {{game.start_time}} </p>
      <p> {{game.description}} </p>
      <p> {{game.category}} </p>
    </div>
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