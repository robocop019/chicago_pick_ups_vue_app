<template>
  <div class="parks-show">
    <h1> {{park.name}} </h1>
    <p>Location: {{park.location}} </p>

    <h3>Facilities</h3>
    <div v-for="facility in facilities">
      <p> {{facility}} </p>
    </div>

    <h2>Comments</h2>
    <div>
      <form v-on:submit.prevent="submit()">
        Comment: <input type="text" placeholder="Add Comment" v-model="newComment">
        <br>
        <br>
        <select name="rating" v-model="newRating">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br>
        <br>
        <input type="submit" value="Post Comment">
      </form>
    </div>

    <div v-for="comment in comments">
      <p v-if="comment.content !== ''"> 
        Comment: "{{comment.content}}" by 
        <router-link v-bind:to="'/users/' + comment.user_id">
          {{comment.user_first_name}} {{comment.user_last_name}} 
        </router-link>
        at {{comment.created_at}} 
      </p>
      <p v-if="comment.rating !== null"> Rating: {{comment.rating}} </p>
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
        facilities: [],
        comments: [],
        newComment: '',
        newRating: null
      };
    },
    created: function() {
      axios.get('/api/parks/' + this.$route.params.id).then(response => {
        this.park = response.data;

        axios.get('https://data.cityofchicago.org/resource/eix4-gf83.json?park_no=' + this.park.api_ref)
          .then(response => {

            console.log(response.data);

            var new_fac = [];

            response.data.forEach(function(facility) {

              if (!(new_fac.includes(facility.facility_t + ' ' + facility.facility_n)) &&
                  !(new_fac.includes(facility.facility_n))) {
              
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

      axios.get('/api/comments?commentable_type=Park&commentable_id=' + this.$route.params.id)
        .then(response => {
          this.comments = response.data;
      });
    },
    methods: {
      submit: function() {

        var params = {
                    user_id: localStorage.getItem('user_id'),
                    commentable_id: this.park.id,
                    commentable_type: 'Park',
                    content: this.newComment,
                    rating: this.newRating
        };

        axios.post('/api/comments', params)
          .then(response => {
            console.log(response.data);
            this.newComment = '';
            this.newRating = null;

            axios.get('/api/comments?commentable_type=Park&commentable_id=' + this.$route.params.id)
              .then(response => {
                this.comments = response.data;
              });
        });
      }
    }
  };
</script>
