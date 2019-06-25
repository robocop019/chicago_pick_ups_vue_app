<template>
  <div class="parks-show">
    <h1> {{park.name}} </h1>
    <h3> {{park.location}} </h3>

    <h3>Comments</h3>
    <div v-for="comment in park.comments">
      <p> Comment: {{comment.content}} </p>
      <p> Rating: {{comment.rating}} </p>
    </div>

    <h3>Games</h3>
    <div v-for="game in park.games">
      <router-link v-bind:to="'/games/' + game.id"> <h2> {{game.title}} </h2> </router-link>
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
        park: {},
        sports: []
      };
    },
    created: function() {
      axios.get('/api/parks/' + this.$route.params.id).then(response => {
        this.park = response.data;

        console.log(this.park);

        axios.get('https://data.cityofchicago.org/resource/eix4-gf83.json?park_no=' + this.park.api_ref).then(response => {

          this.sports = response.data;
          console.log(this.sports);
        });

      });

      console.log(park)
    },
    methods: {}
  };
</script>
