<template>
  <div class="games-index">
      <div class="filter">
        <h3>Filters</h3>
        <form v-on:submit.prevent="submit()">
          <input type="checkbox" name="Baseball" v-model="sports" value=0>Baseball
          <input type="checkbox" name="basketball" v-model="sports" value=1>Basketball
          <input type="checkbox" name="football" v-model="sports" value=2>Football
          <input type="checkbox" name="hockey" v-model="sports" value=3>Hockey
          <input type="checkbox" name="soccer" v-model="sports" value=4>Soccer
          <input type="checkbox" name="softball" v-model="sports" value=5>Softball
          <input type="checkbox" name="tennis" v-model="sports" value=6>Tennis
          <input type="checkbox" name="volleyball" v-model="sports" value=7>Volleyball
          <br>
          <br>
          <input type="radio" name="casual" v-model="category" value=0>Casual
          <input type="radio" name="competitive" v-model="category" value=1>Competitive
          <input type="radio" name="practice" v-model="category" value=2>Practice
          <br>
          <br>
          <input type="submit" class="button" value="Submit">
        </form>
      </div>
      <div v-for="game in games">
        <router-link v-bind:to="'/games/' + game.id"> <h3> {{game.title}} </h3> </router-link>
        <router-link v-bind:to="'/parks/' + game.park.id"> <p>Location: {{game.park.name}} </p> </router-link>
        <p>Start Time: {{game.start_time}} </p>
        <p>Sport: {{game.sport}} </p>
        <p>Description: {{game.description}} </p>
        <p>Category: {{game.category}} </p>



        <div class="property-listing-row">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <a class="listing-thumb" href="#">
                        <img src="images/prop1.jpg" alt="" class="img-fluid">
                        <span class="listing-label sale">{{game.category}}</span>
                    </a>
                </div>
                <div class="col-sm-7">
                    <div class="listing-content-alt">
                        <h3>
                          <router-link v-bind:to="'/games/' + game.id"> <h3> {{game.title}} </h3> </router-link>
                        </h3>
                        <span class="listing-location">
                          <router-link v-bind:to="'/parks/' + game.park.id"> <p>Location: {{game.park.name}} </p> </router-link>
                        </span>
                   <ul class="listing-meta list-inline clearfix">
                        <li class="list-inline-item">
                            <span>Start Time</span>
                            {{game.start_time}}
                        </li>
                       
                        <li class="list-inline-item">
                            <span>Sport</span>
                            {{game.sport}}
                        </li>
                        <li class="list-inline-item" v-if="game.min_participants != null">
                            <span>Minimum Participants</span>
                            {{game.min_participants}}
                        </li>
                    </ul>
                        <ul class="clearfix list-inline listing-row-inline mb0">
                            <li class="list-inline-item">
                                <a href="#"><i class="ti-user"></i> Emily Doe</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="ti-location-pin"></i> London</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="ti-sharethis"></i> Share</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="ti-heart"></i> Add to wishlist</a>
                            </li>
                        </ul>
                        <hr>
                        <div class="property-listing-footer clearfix">
                            <div class="float-right">
                                <a href="#" class="btn btn-primary">View Detail</a>
                            </div>
                            <h4 class="font400">$29,999.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--/listing row-->

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
        games: [],
        sports: [],
        category: '',
        park: ""
      };
    },
    created: function() {
      axios.get('/api/games').then(response => {
        this.games = response.data;
      });
    },
    methods: {
      submit: function() {

        if (this.sports[0]) {
          // var sport = this.sports[0];

          axios.get('/api/games?sport=' + this.sports[0]).then(response => {
            console.log(response.data);
            this.games = response.data;
          });
        }

        if (this.category) {
          axios.get('/api/games?category=' + this.category).then(response => {
            console.log(response.data);
            this.games = response.data;
          });
        }

        this.sports = [];
        this.category = '';
      }
    }
  };
</script>