<template>
  <div class="users-show">
<!--     <img v-bind:src="user.avatar_url" v-bind:alt="user.first_name">
    <h1> {{user.first_name}} {{user.last_name}} </h1>

    <div v-if="current_user == user.id">
      <router-link v-bind:to="'/users/edit/' + user.id"> <button>Edit Profile</button> </router-link>
    </div>

    <div v-if="current_user != user.id">
      <button v-on:click="follow(user.id)">Follow</button>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>
    
    <div>
      <router-link v-if="current_user == user.id" v-bind:to="'/messages/view/' + user.id">
        <button>Messages</button> 
      </router-link>

      <router-link v-else-if="current_user != user.id" v-bind:to="'/messages/' + user.id">
        <button>Message User</button> 
      </router-link>
    </div>

    <p>Location: {{user.location}} </p>
    <p>Bio: {{user.bio}} </p>

    <h3>Posts</h3>
    <div v-for="game in games">
      <router-link v-bind:to="'/games/' + game.id"> <p>Post: {{game.title}} </p> </router-link>
    </div>

    <h3>Interested In</h3>
    <div v-for="interest in interests">
      <p> 
        <span v-if="interest.status === 'following'">
          Interested in 
        </span>
        <span v-else-if="interest.status === 'going_to'">
          Going to
        </span> 
        <router-link v-bind:to="'/games/' + interest.game_id"> 
          {{interest.game_name}} 
        </router-link> 
      </p>
    </div>

    <h3>Followers</h3>
    <div v-for="followee in followers">
      <router-link v-bind:to="'/users/' + followee.friender_id"> <p> {{followee.friender_first_name}} {{followee.friender_last_name}} </p> </router-link>
    </div>

    <h3>Following</h3>
    <div v-for="follower in following">
      <router-link v-bind:to="'/users/' + follower.friendee_id"> <p> {{follower.friendee_first_name}} {{follower.friendee_last_name}} </p> </router-link>
    </div>

    <h3>Comments</h3>
    <div v-for="comment in comments">
      <router-link v-if="comment.commentable_type === 'Game'" v-bind:to="'/games/' + comment.commentable_id"> 
        <p v-if="comment.content != ''">Comment: {{comment.content}} </p> 
      </router-link>

      <router-link v-if="comment.commentable_type === 'Park'" v-bind:to="'/parks/' + comment.commentable_id"> 
        <p v-if="comment.content != ''">Comment: {{comment.content}} </p> 
      </router-link>
    </div>
 -->





    <!-- ------------------------------------------------ -->


    <div class="white-page-content">
      <div class="container pt0 pb30">
        <ol class="breadcrumb mb30">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item">User Detail</li>
        </ol>

        <h3 class="left-title mt0">{{user.first_name}} {{user.last_name}} </h3>
             
        <div class="row">
          <div class="col-md-4 mb40">
            <img v-bind:src="user.avatar_url" v-bind:alt="user.first_name" class="img-fluid">
          </div>

          <div class="col-md-4 mb40">
            <h4 class="mb20 font300">About Me</h4>
            <p> {{user.bio}} </p>
            <ul class="list-unstyled contact-list-item ligh-list">
              <li>
                  <i class="ti-home"></i>
                  {{user.location}}
              </li>
              <li>
                  <i class="ti-email"></i>
                  {{user.email}}
              </li>
              <li>
                  <i class="ti-mobile"></i>
                  {{user.phone_number}}
              </li>

              <li>
                <i class="ti-sharethis"></i>
                <div class="clearfix">
                  <a href="#" class="social-icon-sm si-gray si-facebook si-gray-round">
                      <i class="fa fa-facebook"></i>
                      <i class="fa fa-facebook"></i>
                  </a>

                  <a href="#" class="social-icon-sm si-gray si-twitter si-gray-round">
                      <i class="fa fa-twitter"></i>
                      <i class="fa fa-twitter"></i>
                  </a>

                  <a href="#" class="social-icon-sm si-gray si-g-plus si-gray-round">
                      <i class="fa fa-google-plus"></i>
                      <i class="fa fa-google-plus"></i>
                  </a>

                  <a href="#" class="social-icon-sm si-gray si-skype si-gray-round">
                      <i class="fa fa-skype"></i>
                      <i class="fa fa-skype"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div class="col-md-4 mb40">
            <div class="row">
              <div class="col-sm-12 text-center">
                <div class="data-status"></div> <!-- data submit status -->
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 text-center" v-if="current_user == user.id">
                <router-link v-bind:to="'/users/edit/' + user.id"> <button class="btn btn btn-primary btn-rounded  mb20">Edit Profile</button> </router-link>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 text-center" v-if="current_user != user.id">
                <button v-on:click="follow(user.id)" class="btn btn btn-primary btn-rounded  mb20">Follow</button>
                <ul>
                  <li class="data-status error-message text-center" v-for="error in errors">{{ error }}</li>
                </ul>
              </div>
            </div>
            
            <div class="row">
              <div class="col-sm-12 text-center">
                <router-link v-if="current_user == user.id" v-bind:to="'/messages/view/' + user.id">
                  <button class="btn btn btn-primary btn-rounded  mb20">Messages</button> 
                </router-link>

                <router-link v-else-if="current_user != user.id" v-bind:to="'/messages/' + user.id">
                  <button class="btn btn btn-primary btn-rounded  mb20">Message User</button> 
                </router-link>
              </div>
            </div>

          </div>
        </div>
    </div>

    <div class="single-agent-content pt80 pb40 bg-faded">
            <div class="container">
                <h3 class="left-title">My Featured Properties</h3>
                <div class="row">
                    <div class="col-md-12 mb40">
                        <div class="owl-carousel owl-theme owl-nav-slide">
                            <div class="item">
                                <div class="listing-card">
                                    <a class="listing-thumb" href="#">
                                        <span class="featured">Featured</span>
                                        <img src="/images/prop8.jpg" alt="" class="img-fluid">
                                        <span class="listing-label sale">For Sale</span>
                                        <div class="listing-content">
                                            <h4 class="listing-title">Eastern Villa</h4>
                                            <div class="listing-price">$25,0000</div>
                                        </div>
                                    </a>
                                    <ul class="listing-meta list-inline">
                                        <li class="list-inline-item">
                                            <span>Area</span>
                                            400 Sq Ft
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Room</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Beds</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Baths</span>
                                            1
                                        </li>
                                    </ul>
                                </div><!--property-card-->
                            </div><!--property-item-->
                            <div class="item">
                                <div class="listing-card">
                                    <a class="listing-thumb" href="#">
                                        <span class="featured">Featured</span>
                                        <img src="/images/prop7.jpg" alt="" class="img-fluid">
                                        <span class="listing-label rent">For Rent</span>
                                        <div class="listing-content">
                                            <h4 class="listing-title">Rose Homes</h4>
                                            <div class="listing-price">$2700/Monthly</div>
                                        </div>
                                    </a>
                                    <ul class="listing-meta list-inline">
                                        <li class="list-inline-item">
                                            <span>Area</span>
                                            400 Sq Ft
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Room</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Beds</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Baths</span>
                                            1
                                        </li>
                                    </ul>
                                </div><!--property-card-->
                            </div><!--property-item-->
                            <div class="item">
                                <div class="listing-card">
                                    <a class="listing-thumb" href="#">
                                        <span class="featured">Featured</span>
                                        <img src="/images/prop6.jpg" alt="" class="img-fluid">
                                        <span class="listing-label rent">For Rent</span>
                                        <div class="listing-content">
                                            <h4 class="listing-title">Old House</h4>
                                            <div class="listing-price">$25,00/Monthly</div>
                                        </div>
                                    </a>
                                    <ul class="listing-meta list-inline">
                                        <li class="list-inline-item">
                                            <span>Area</span>
                                            400 Sq Ft
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Room</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Beds</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Baths</span>
                                            1
                                        </li>
                                    </ul>
                                </div><!--property-card-->
                            </div><!--property-item-->
                            <div class="item">
                                <div class="listing-card">
                                    <a class="listing-thumb" href="#">
                                        <span class="featured">Featured</span>
                                        <img src="/images/prop5.jpg" alt="" class="img-fluid">
                                        <span class="listing-label sale">For Sale</span>
                                        <div class="listing-content">
                                            <h4 class="listing-title">Sharma Apartment</h4>
                                            <div class="listing-price">$25,0000</div>
                                        </div>
                                    </a>
                                    <ul class="listing-meta list-inline">
                                        <li class="list-inline-item">
                                            <span>Area</span>
                                            400 Sq Ft
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Room</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Beds</span>
                                            3
                                        </li>
                                        <li class="list-inline-item">
                                            <span>Baths</span>
                                            1
                                        </li>
                                    </ul>
                                </div><!--property-card-->
                            </div><!--property-item-->
                        </div>
                    </div>
                </div>
            </div><!--featured properties-->
    </div>
     <div class="bg-faded pt100 pb100 bg-parallax parallax-overlay" data-jarallax='{"speed": 0.2}' style='background-image: url("/images/bg2.jpg")'>
        <div class="container">
            <div class="row">
                <div class="col-md-8 mr-auto ml-auto">
                    <div class="center-title mb60 light">
                        <h3>Customer Say about me</h3>
                        <p class="lead">
                            We collect reviews from our customers so you can easily imagine why we are the best, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="owl-carousel owl-reviews owl-theme">
                    <div class="item ">
                        <div class="review-card">
                            <div class="review-author text-center">
                                <img src='/images/author1.jpg' alt='' class='img-fluid'>
                                <h5>Emily Doe</h5>
                                <span>Assan Customer</span>
                            </div>
                            <p class='lead'>
                                " Very good package i ever seen, lot's of templates and elements that help me to create an easy website "
                            </p>
                            <ul class='rating list-inline'>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                            </ul>
                        </div>
                    </div><!--/.items-->
                    <div class="item ">
                        <div class="review-card">
                            <div class="review-author text-center">
                                <img src='/images/author2.jpg' alt='' class='img-fluid'>
                                <h5>John Doe</h5>
                                <span>Assan Customer</span>
                            </div>
                            <p class='lead'>
                                " Very good package i ever seen, lot's of templates and elements that help me to create an easy website "
                            </p>
                            <ul class='rating list-inline'>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                            </ul>
                        </div>
                    </div><!--/.items-->
                    <div class="item ">
                        <div class="review-card">
                            <div class="review-author text-center">
                                <img src='/images/author3.jpg' alt='' class='img-fluid'>
                                <h5>Robin Ambrose</h5>
                                <span>Assan Customer</span>
                            </div>
                            <p class='lead'>
                                " Very good package i ever seen, lot's of templates and elements that help me to create an easy website "
                            </p>
                            <ul class='rating list-inline'>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                            </ul>
                        </div>
                    </div><!--/.items-->
                    <div class="item ">
                        <div class="review-card">
                            <div class="review-author text-center">
                                <img src='/images/author1.jpg' alt='' class='img-fluid'>
                                <h5>Gunjan Sharma</h5>
                                <span>Assan Customer</span>
                            </div>
                            <p class='lead'>
                                " Very good package i ever seen, lot's of templates and elements that help me to create an easy website "
                            </p>
                            <ul class='rating list-inline'>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                                <li class='fa fa-star text-warning'></li>
                            </ul>
                        </div>
                    </div><!--/.items-->
                </div>

            </div>
        </div>
    </div><!--reviews-->

    </div>


  </div>
</template>

<style>
/*  img {
    max-height: 350px;
    max-width: 350px;
  }*/

  .error-message {
    list-style-type: none;
  }
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        user: {},
        games: [],
        interests: [],
        comments: [],
        followers: [],
        following: [],
        errors: [],
        current_user: localStorage.getItem("user_id")
      };
    },
    created: function() {
      axios.get('/api/users/' + this.$route.params.id).then(response => {
        this.user = response.data;
      });

      axios.get('/api/games?organizer_id=' + this.$route.params.id).then(response => {
        this.games = response.data;
      });

      axios.get('/api/interests?user_id=' + this.$route.params.id).then(response => {
        this.interests = response.data;
      });

      axios.get('/api/comments?user_id=' + this.$route.params.id).then(response => {
        this.comments = response.data;
      });

      axios.get('/api/friendships?friendee_id=' + this.$route.params.id).then(response => {
        this.followers = response.data;
        console.log(this.followers);
      });

      axios.get('/api/friendships?friender_id=' + this.$route.params.id).then(response => {
        this.following = response.data;
        console.log(this.following);
      });
    },

    methods: {
      follow: function(friendee_id) {
        var params = {
                      friendee_id: friendee_id,
                      friender_id: localStorage.getItem("user_id")
        };

        axios.post('/api/friendships', params).then(response => {
          this.followers.push(response.data)
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
      }
    },

    beforeRouteUpdate (to, from, next) {
      axios.get('/api/users/' + to.params.id).then(response => {
        this.user = response.data;
      });
      
      axios.get('/api/games?organizer_id=' + to.params.id).then(response => {
        this.games = response.data;
      });
      
      axios.get('/api/interests?user_id=' + to.params.id).then(response => {
        this.interests = response.data;
      });
      
      axios.get('/api/comments?user_id=' + to.params.id).then(response => {
        this.comments = response.data;
      });
      
      axios.get('/api/friendships?friendee_id=' + to.params.id).then(response => {
        this.followers = response.data;
      });

      axios.get('/api/friendships?friender_id=' + to.params.id).then(response => {
        this.following = response.data;
      });

      next();
    }
  };
</script>