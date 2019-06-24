<template>
  <div class="users-show">
    <h1> {{user.first_name}} {{user.last_name}} </h1>
    <h3> {{user.email}}  {{user.phone_number}} </h3>
    <h5> {{user.bio}} </h5>
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        user: []
      };
    },
    created: function() {
      axios.get('/api/users/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.user = response.data;
        console.log(this.user);
      });
    },
    methods: {}
  };
</script>