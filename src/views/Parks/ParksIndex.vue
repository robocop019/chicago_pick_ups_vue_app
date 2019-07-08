<template>
  <div class="parks-index">
    <!-- <div class="container pt90 pb50"> -->

    <div class="text-center">
      Search for a Park: <input v-model="nameFilter">
    </div>
    
    <div v-for="park in filterBy(parks, nameFilter, 'name')">
      <router-link v-bind:to="'/parks/' + park.id"> <p> {{park.name}} </p> </router-link>
      <p>Location: {{park.location}} </p>
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

        var geocoder = new google.maps.Geocoder;

        this.parks.forEach(function(park) {


          var parkCoors = park.location.split(",");

          var parkLat = parseFloat(parkCoors[0]);
          var parkLong = parseFloat(parkCoors[1]);

          var latlng = {lat: parkLat, lng: parkLong};

          geocoder.geocode({'location': latlng}, function(results, status) {
            console.log(status);
            if (status === 'OK') {
              console.log(results[0]);
              if (results[0]) {
                park.location = results[0].formatted_address;
              }
            }
          });
        });

      });
    },
    methods: {},

    mixins: [Vue2Filters.mixin],


  };
</script>
