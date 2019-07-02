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
        <div class="container pt0 pb80">
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
                          <div class="float-right btn btn-sm btn-primary text-white"> {{game.category}} </div>
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

                    
                    <div class="prp-description pt50">
                        <div class="row">
                            <div class="col-md-7 mb50">
                                <h3 class="mb0">Summary</h3><hr>
                                <ul class="list-unstyled summary">
                                    <li class="clearfix"><div class="float-right"> {{game.park.name}} </div>
                                        <i class="fa fa-map-marker"></i> Location
                                    </li>
                                    <li class="clearfix"><div class="float-right"> {{game.start_time}} </div>
                                        <i class="fa fa-dollar"></i> Start Time
                                    </li>
                                    <li class="clearfix"><div class="float-right">3</div>
                                        <i class="fa fa-bed"></i> Minimum Participants
                                    </li>
                                    <li class="clearfix"><div class="float-right">2</div>
                                        <i class="fa fa-shower"></i> Maximum Participants
                                    </li>
                                    <li class="clearfix"><div class="float-right">350 Sq Ft</div>
                                        <i class="fa fa-square-o"></i> People Interested
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-5 mb50">
                                <h3 class="mb0">Description</h3><hr>
                                <p>
                                    {{game.description}}
                                </p>
                                
                            </div>
                        </div>

                        <div class="row mb50">
                            <div class="col-md-12">
                                <h3 class="mb0">Location</h3><hr>
                                <div id="markermap" style="width: 100%; height: 250px;"></div>
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
                </div>
                
            </div>
        </div>
    </div>



  </div>
</template>

<style>
</style>
<!-- 
<script type="text/javascript" src="/js/plugins/plugins.js"></script> 
        <script type="text/javascript" src="/js/assan.custom.js"></script> 
        <script type="text/javascript" src="/cubeportfolio/js/jquery.cubeportfolio.min.js"></script> -->
        <script type="text/javascript" src="/js/cube-thumbSlider.js"></script> 
        <!--google map-->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMwVpUj3-oHHW8N21819BhKttOga2Rj2s"></script>
        <script src="/js/jquery.gmap.min.js"></script> 
        <script>
            // Marker Map
            $(document).ready(function () {
                map = new GMaps({
                    scrollwheel: false,
                    el: '#markermap',
                    lat: 26.981942,
                    lng: 75.684486

                });
                map.addMarker({
                    lat: 26.981942,
                    lng: 75.684486,
                    title: 'Marker with InfoWindow',
                    infoWindow: {
                        content: '<h4>GUNJAN Land & builders</h4><p>We build your dreams</p>'
                    }
                });
            });
        </script> 
        <!--Contact script-->
        <script src="/js/contact.js" type="text/javascript"></script>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        current_user: localStorage.getItem("user_id"),
        game: [],
        interests: [],
        comments: [],
        errors: [],
        newComment: ''
      }
    },

    created: function() {

      axios.get('/api/games/' + this.$route.params.id)
        .then(response => {
          this.game = response.data;
        });

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
    }
  };
</script>
