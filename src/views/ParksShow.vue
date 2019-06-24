<template>
  <div class="parks-show">
    <h1> {{park.name}} </h1>
    <h3> {{park.location}} </h3>
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
