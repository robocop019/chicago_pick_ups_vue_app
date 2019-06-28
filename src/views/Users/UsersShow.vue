<template>
  <div class="users-show">
    <img v-bind:src="user.avatar_url" v-bind:alt="user.first_name">
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

  li {
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