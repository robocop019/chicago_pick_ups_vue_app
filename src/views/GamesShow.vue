<template>
  <div class="games-show">
    <h2> {{game.title}} </h2>
    <h5> {{game.description}} </h5>
    <h6> {{game.category}} </h6>

    <router-link v-bind:to="'/parks/' + game.park.id"> <h2> {{game.park.name}} </h2> </router-link>
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        game: []
      };
    },
    created: function() {
      axios.get('/api/games/' + this.$route.params.id).then(response => {
        this.game = response.data;
      });
    },
    methods: {}
  };
</script>
