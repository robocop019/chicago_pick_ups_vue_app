<template>
  <div class="games-index">
    <div class="filter">
      <form v-on:submit.prevent="submit()">
        <select v-model="sport">
          <option value="0">Baseball</option>
          <option value="1">Basketball</option>
          <option value="2">Football</option>
          <option value="3">Hockey</option>
          <option value="4">Soccer</option>
          <option value="5">Softball</option>
          <option value="6">Tennis</option>
          <option value="7">Volley</option>
        </select>
        <input type="submit" class="button" value="Submit">
      </form>
    </div>
    <div v-for="game in games">
      <router-link v-bind:to="'/games/' + game.id"> <h2> {{game.title}} </h2> </router-link>
      <router-link v-bind:to="'/parks/' + game.park.id"> <h3> {{game.park.name}} </h3> </router-link>
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
        games: [],
        sport: null,
        park: ""
      };
    },
    created: function() {
      axios.get('/api/games').then(response => {
        this.games = response.data;
      });
    },
    methods: {
      submit: function() {
        var sport = this.sport;

        axios.get('/api/games?sport=' + sport).then(response => {
          console.log(response.data);
        });
      }
    }
  };
</script>