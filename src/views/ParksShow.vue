<template>
  <div class="parks-show">
    <h1> {{park.name}} </h1>
    <h3> {{park.location}} </h3>

    <h3>Games</h3>
    <div v-for="game in park.games">
      <router-link v-bind:to="'/games/' + game.id"> <h2> {{game.title}} </h2> </router-link>
    </div>

    <h3>Comments</h3>
    <div v-for="comment in park.comments">
      <p> Comment: {{comment.content}} </p>
      <p> Rating: {{comment.rating}} </p>
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
        park: []
      };
    },
    created: function() {
      axios.get('/api/parks/' + this.$route.params.id).then(response => {
        this.park = response.data;
      });
    },
    methods: {}
  };
</script>
