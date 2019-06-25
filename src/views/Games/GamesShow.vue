<template>
  <div class="games-show">
    <h2> {{game.title}} </h2>

    <div>
      <button>Attending</button>
    </div>

    <div>
      <button>Interested In</button>
    </div>

    <h4> {{game.start_time}} </h4>

    <router-link v-bind:to="'/users/' + game.organizer.id"> <p> {{game.organizer.first_name}} {{game.organizer.last_name}}</p> </router-link>
    <router-link v-bind:to="'/parks/' + game.park.id"> <p> {{game.park.name}} </p> </router-link>
    <p>Category: {{game.category}} || Sport: {{game.sport}} </p>
    <p>Description: {{game.description}} </p>

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
