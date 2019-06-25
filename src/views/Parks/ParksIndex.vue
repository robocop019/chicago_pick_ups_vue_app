<template>
  <div class="parks-index">
    <div>
      Search for a Park: <input v-model="nameFilter">
    </div>

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
  import Vue2Filters from 'vue2-filters';


  export default {
    data: function() {
      return {
        parks: [],
        nameFilter: ""
      };
      console.log(this.nameFilter);
      console.log('prints');

    },
    created: function() {
      axios.get('/api/parks').then(response => {
        this.parks = response.data;
      });
    },
    methods: {},

    mixins: [Vue2Filters.mixin],


  };
</script>
