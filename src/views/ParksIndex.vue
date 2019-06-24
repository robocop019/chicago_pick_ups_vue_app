<template>
  <div class="parks-index">
    <div v-for="park in parks">
      <router-link v-bind:to="'/parks/' + park.id"> <h1> {{park.name}} </h1> </router-link>
      <h3> {{park.location}} </h3>
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
        parks: []
      };
    },
    created: function() {
      axios.get('/api/parks').then(response => {
        this.parks = response.data;
      });
    },
    methods: {}
  };
</script>
