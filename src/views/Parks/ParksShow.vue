<template>
  <div class="parks-show">
    <h1> {{park.name}} </h1>
    <p>Location: {{park.location}} </p>

    <h3>Facilities</h3>
    <div v-for="facility in facilities">
      <p> {{facility}} </p>
    </div>

    <h3>Comments</h3>
    <div v-for="comment in park.comments">
      <p> Comment: {{comment.content}} </p>
      <p> Rating: {{comment.rating}} </p>
    </div>

    <h3>Games</h3>
    <div v-for="game in park.games">
      <router-link v-bind:to="'/games/' + game.id"> <h4> {{game.title}} </h4> </router-link>
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
        park: [],
        facilities: []
      };
    },
    created: function() {
      axios.get('/api/parks/' + this.$route.params.id).then(response => {
        this.park = response.data;

        axios.get('https://data.cityofchicago.org/resource/eix4-gf83.json?park_no=' + this.park.api_ref).then(response => {

            console.log(response.data);
            
            var new_fac = [];

            response.data.forEach(function(facility) {

              if (!(new_fac.includes(facility.facility_t + ' ' + facility.facility_n))) {
              
                if (facility.facility_t === 'SPECIAL') {
                  new_fac.push(facility.facility_n);
                } else {
                  new_fac.push(facility.facility_t + ' ' + facility.facility_n);
                }
              }

            });

            this.facilities = new_fac;
            console.log(this.facilities);
            
        });

      });
    },
    methods: {}
  };
</script>
