<template>
  <div class="games-show">
<!--     <h2> {{game.title}} </h2>

    <div v-if="current_user != null">
      <div>
        <button v-on:click="interestedIn(1)">Attending</button>
      </div>

      <div>
        <button v-on:click="interestedIn(0)">Interested In</button>
      </div>

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div> -->

   <!--  <h4> {{game.start_time}} </h4>

    <router-link v-bind:to="'/users/' + game.organizer.id"> <p> {{game.organizer.first_name}} {{game.organizer.last_name}}</p> </router-link>
    <router-link v-bind:to="'/parks/' + game.park.id"> <p> {{game.park.name}} </p> </router-link>
    <p>Category: {{game.category}} || Sport: {{game.sport}} </p>
    <p>Description: {{game.description}} </p>

    <h2>Interested In</h2>
    <div v-for="interest in interests">
      <p> 
        <router-link v-bind:to="'/users/' + interest.user_id"> 
          {{interest.first_name}} {{interest.last_name}} 
        </router-link> 
        is 
        <span v-if="interest.status === 'following'">
          interested in this game.
        </span>
        <span v-else-if="interest.status === 'going_to'">
          attending this game!
        </span> 
      </p>
    </div>

    <h2>Comments</h2>
    <div>
      <form v-on:submit.prevent="submit()">
        <input type="text" placeholder="Add Comment" v-model="newComment">
        <br>
        <br>
        <input type="submit" value="Post Comment">
      </form>
    </div>

    <div v-for="comment in comments">
      <p> 
        Comment: "{{comment.content}}" by 
        <router-link v-bind:to="'/users/' + comment.user_id">
          {{comment.user_first_name}} {{comment.user_last_name}} 
        </router-link>
        at {{comment.created_at}}
        <span v-if="comment.user_id == current_user">
          <button v-on:click="deleteComment(comment.id)">Delete Message</button> 
        </span> 
      </p>
    </div>
 -->






    <!-- ------------------------------------------------------ -->



    <div class="white-page-content">
        <!-- <div class="container pt0 pb80"> -->
      <ol class="breadcrumb mb30">
          <li class="breadcrumb-item"><router-link to='/'>Home</router-link></li>
          <li class="breadcrumb-item"><router-link to='/games'>Games</router-link></li>
          <li class="breadcrumb-item">Game Detail</li>
      </ol>

      <div class="row">
        <div class="col-md-12 mb30">
          <div class="single-prp-header mb40 clearfix">

            <div class="float-right text-right">
              <br>
              <div v-if="game.category != null" 
                class="float-right btn btn-sm btn-primary text-white"> 
                {{game.category}} 
              </div>
            </div>

            <h2 class="mb10 left-title"> {{game.title}} </h2>
            <span><i class="ti-location-pin"></i> {{game.park.name}} </span>

          </div>

          <div v-if="current_user != null">
            <div>
              <button v-on:click="interestedIn(1)">Attending</button>
            </div>

            <div>
              <button v-on:click="interestedIn(0)">Interested In</button>
            </div>

            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </div>

          <div class="row">
            <div class="col-md-5">
              <h3 class="mb0">Interested In</h3><hr>
              <div v-for="interest in interests">
                <p> 
                  <router-link v-bind:to="'/users/' + interest.user_id"> 
                    {{interest.first_name}} {{interest.last_name}} 
                  </router-link> 
                  is 
                  <span v-if="interest.status === 'following'">
                    interested in this game.
                  </span>
                  <span v-else-if="interest.status === 'going_to'">
                    attending this game!
                  </span> 
                </p>
              </div>
            </div>
          </div>


          
          <div class="prp-description pt50">
            <div class="row">
              <div class="col-md-7 mb50">
                <h3 class="mb0">Summary</h3><hr>
                <ul class="list-unstyled summary">

                  <li class="clearfix">
                    <div class="float-right"> {{game.park.name}} </div>
                    <i class="fa fa-map-marker"></i> Location
                  </li>

                  <li class="clearfix">
                    <div class="float-right"> {{game.start_time}} </div>
                    <i class="fa fa-dollar"></i> Start Time
                  </li>

                  <li class="clearfix">
                    <div class="float-right"> {{game.min_participants}} </div>
                    <i class="fa fa-bed"></i> Minimum Participants
                  </li>

                  <li class="clearfix">
                    <div class="float-right"> {{game.max_participants}} </div>
                    <i class="fa fa-shower"></i> Maximum Participants
                  </li>

                  <li class="clearfix">
                    <div class="float-right">{{interests.length}}</div>
                    <i class="fa fa-square-o"></i> People Interested
                  </li>
                </ul>
              </div>

              <div class="col-md-5 mb50">
                <h3 class="mb0">Description</h3><hr>
                <p> {{game.description}} </p>
              </div>

            </div>

            <div class="row mb50">
              <div class="col-md-12">
                <h3 class="mb0">Location</h3><hr>
                <div id="markermap" style="width: 100%;height: 400px;"></div>
              </div>
            </div>

            <div class="row mb50">
              <div class="col-md-12" >
                <h3 class="mb0">Comments</h3><hr>
                <div v-for="comment in comments">
                  <p> 
                    Comment: "{{comment.content}}" by 
                    <router-link v-bind:to="'/users/' + comment.user_id">
                      {{comment.user_first_name}} {{comment.user_last_name}} 
                    </router-link>
                    at {{comment.created_at}}
                    <span v-if="comment.user_id == current_user">
                      <button v-on:click="deleteComment(comment.id)">Delete Message</button> 
                    </span> 
                  </p>
                </div>
              </div>
            </div>
              
            <div class="row">
              <div class="col-md-12">
                <h3 class="mb0">Add your Comment</h3><hr>

                <div class="smart-wrap">
                  <div class="smart-forms smart-container">
                    <form v-on:submit.prevent="submit()" id="feedback">

                      <div class="form-body">
                        <div class="section">
                          <label class="field prepend-icon">
                            <textarea v-model="newComment" class="gui-textarea" id="comment" name="comment" placeholder="Add Comment"></textarea>
                            <span class="field-icon"><i class="fa fa-comments"></i></span> 
                          </label>
                        </div><!-- end section -->

                      </div><!-- end .form-body section -->

                      <div class="form-footer">
                        <button type="submit" class="button btn-primary">Submit Comment</button>
                      </div><!-- end .form-footer section -->

                    </form>

                  </div><!-- end .smart-forms section -->
                </div><!-- end .smart-wrap section -->

              </div>
            </div>
          </div>
        </div> <!-- col-md-12 div -->
          
      </div> <!-- row div -->
        <!-- </div> -->
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
        current_user: localStorage.getItem("user_id"),
        game: {
          park: {name: ""}
        },
        interests: [],
        comments: [],
        errors: [],
        newComment: ''
      }
    },

    created: function() {

      // axios.get('/api/games/' + this.$route.params.id)
      //   .then(response => {
      //     this.game = response.data;
      //   });

      axios.get('/api/interests?game_id=' + this.$route.params.id)
        .then(response => {
          this.interests = response.data;
        });

      axios.get('/api/comments?commentable_type=Game&commentable_id=' + this.$route.params.id)
        .then(response => {
          this.comments = response.data;
        });


    },
    
    methods: {
      interestedIn: function(status) {
        var params = {
                      user_id: localStorage.getItem("user_id"),
                      game_id: this.$route.params.id,
                      status: status
        };

        axios.post('/api/interests', params)
          .then(response => {
            console.log(response.data);
            this.interests.push(response.data);
          }).catch(error => {
            this.errors = error.response.data.errors;
            console.log(this.errors);
          });

        // axios.get('/api/interests?game_id=' + this.$route.params.id)
        //   .then(response => {
        //     this.interests = response.data;
        //     console.log(this.interests);
        //   });      
      },

      submit: function() {
        var params = {
                    user_id: localStorage.getItem('user_id'),
                    commentable_id: this.game.id,
                    commentable_type: 'Game',
                    content: this.newComment
        };

        axios.post('/api/comments', params)
          .then(response => {
            console.log(response.data);
            this.newComment = '';

            axios.get('/api/comments?commentable_type=Game&commentable_id=' + this.$route.params.id)
              .then(response => {
                this.comments = response.data;
              });
        });
      },

      deleteComment: function(commentId) {
        axios.delete('/api/comments/' + commentId)
          .then(response => {
            console.log(response.data);

            axios.get('/api/comments?commentable_type=Game&commentable_id=' + this.$route.params.id)
              .then(response => {
              this.comments = response.data;
            });
          });
      }
    },

    mounted: function() {

      console.log("map mounted");
      console.log(this.game);

      // var game = {};

      axios.get('/api/games/' + this.$route.params.id)
        .then(response => {
          this.game = response.data;

          console.log(this.game);

          console.log(this.game.park.location);

          var parkCoors = this.game.park.location.split(",");

          console.log(parkCoors);

          var parkLat = parseFloat(parkCoors[0]);
          var parkLong = parseFloat(parkCoors[1]);

          console.log(parkLat);
          console.log(parkLong);

          var mapOptions = {
              zoom: 15,

              center: new google.maps.LatLng(parkLat, parkLong),

              styles: [ 
                        { "featureType": "landscape", 
                          "stylers": [ 
                                      { "hue": "#FFBB00" },
                                      { "saturation": 43.400000000000006 },
                                      { "lightness": 37.599999999999994 },
                                      { "gamma": 1 }
                                      ] 
                        },  
                        { "featureType": "road.highway",
                          "stylers": [ 
                                      { "hue": "#FFC200" },
                                      { "saturation": -61.8 },
                                      { "lightness": 45.599999999999994 },
                                      { "gamma": 1 }   
                                      ] 
                        },  
                        { "featureType": "road.arterial",
                        "stylers": [
                                    { "hue": "#FF0300" },
                                    { "saturation": -100 },
                                    { "lightness": 51.19999999999999 },
                                    { "gamma": 1 } 
                                    ] 
                        },
                        {"featureType": "road.local",
                        "stylers": [
                                    {"hue": "#FF0300" },
                                    {"saturation": -100 },
                                    {"lightness": 52},
                                    {"gamma": 1 }
                                    ] 
                        },
                        {"featureType": "water",
                        "stylers": [
                                    {"hue": "#0078FF" },
                                    {"saturation": -13.200000000000003},
                                    {"lightness": 2.4000000000000057},
                                    {"gamma": 1 }   
                                    ] 
                        },  
                        { "featureType":"poi",
                        "stylers": [ 
                                    {"hue": "#00FF6A" },
                                    {"saturation": -1.0989010989011234},
                                    {"lightness": 11.200000000000017},
                                    {"gamma": 1 } 
                                    ] 
                        }
                      ]
          };

          console.log(mapOptions.center);

          var mapElement = document.getElementById('markermap');

          var map = new google.maps.Map(mapElement, mapOptions);

          var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: 'Park'
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });

    }
  };
</script>
