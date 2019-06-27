<template>
  <div class="users-show">
    <img v-bind:src="user.avatar_url" v-bind:alt="user.avatar_url">
    <h1> {{user.first_name}} {{user.last_name}} </h1>

    <!-- <div v-if='user.id === (localStorage.getItem("user_id"))'> -->
    <div>
      <button>Edit Profile</button>
    </div>

    <div>
      <button v-on:click="follow(user.id)">Follow</button>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

    <div>
      <button>Message</button>
    </div>

    <p>Location: {{user.location}} </p>
    <p>Bio: {{user.bio}} </p>

    <h3>Posts</h3>
    <div v-for="game in games">
      <router-link v-bind:to="'/games/' + game.id"> <p>Post: {{game.title}} </p> </router-link>
    </div>

    <h3>Interested In</h3>
    <div v-for="interest in interests">
      <!-- <router-link v-bind:to="'/games/' + game.id"> <p>Post: {{game.title}} </p> </router-link> -->
      <p> {{interest.status}} {{interest.game_id}} </p>
    </div>

    <h3>Followers</h3>
    <div v-for="followee in followers">
      <!-- <router-link v-bind:to="'/games/' + game.id"> <p>Post: {{game.title}} </p> </router-link> -->
      <router-link v-bind:to="'/users/' + followee.friender_id"> <p> {{followee.friender_id}} </p> </router-link>
    </div>

    <h3>Following</h3>
    <div v-for="follower in following">
      <!-- <router-link v-bind:to="'/games/' + game.id"> <p>Post: {{game.title}} </p> </router-link> -->
      <router-link v-bind:to="'/users/' + follower.friendee_id"> <p> {{follower.friendee_id}} </p> </router-link>
    </div>

    <h3>Comments</h3>
    <div v-for="comment in comments">
      <router-link v-if="comment.commentable_type === 'Game'" v-bind:to="'/games/' + comment.commentable_id"> 
        <p>Comment: {{comment.content}} </p> 
      </router-link>

      <router-link v-if="comment.commentable_type === 'Park'" v-bind:to="'/parks/' + comment.commentable_id"> 
        <p>Comment: {{comment.content}} </p> 
      </router-link>
    </div>
  </div>
</template>

<style>
  img {
    max-height: 350px;
    max-width: 350px;
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
        errors: []
      };
    },
    created: function() {
      axios.get('/api/users/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.user = response.data;
        console.log(this.user);

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
          console.log(this.followers);
          console.log(response.data);
          console.log(response.data.errors);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
      }
    }
  };
</script>