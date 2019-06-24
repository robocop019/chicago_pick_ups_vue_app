<template>
  <div class="games-show">
    <h2> {{game.title}} </h2>
    <router-link v-bind:to="'/users/' + game.organizer.id"> <h3> {{game.organizer.first_name}} {{game.organizer.last_name}}</h3> </router-link>
    <h5> {{game.description}} </h5>
    <h6> {{game.category}} </h6>

    <h2>Comments</h2>
    <div v-for="comment in game.comments">
      <p> Comment: {{comment.content}} </p>
    </div>

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
