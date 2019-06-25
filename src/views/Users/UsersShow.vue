<template>
  <div class="users-show">
    <img v-bind:src="user.avatar_url" v-bind:alt="user.avatar_url">
    <h1> {{user.first_name}} {{user.last_name}} </h1>

    <!-- <div v-if='user.id === (localStorage.getItem("user_id"))'> -->
    <div>
      <button>Edit Profile</button>
    </div>
    <div>
      <button>Follow</button>
    </div>

    <div>
      <button>Message</button>
    </div>

    <p>Location: {{user.location}} </p>
    <p> {{user.bio}} </p>

    <h3>Posts</h3>
    <div v-for="game in games">
      <router-link v-bind:to="'/games/' + game.id"> <p>Post: {{game.title}} </p> </router-link>
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
        user: [],
        games: [],
        comments: []
      };
    },
    created: function() {
      axios.get('/api/users/' + this.$route.params.id).then(response => {
        console.log(response.data);
        this.user = response.data;
        console.log(this.user);

        axios.get('/api/games?organizer_id=' + this.$route.params.id).then(response => {
          this.games = response.data;
        });

        axios.get('/api/comments?user_id=' + this.$route.params.id).then(response => {
          this.comments = response.data;
        });

      });
    },
    methods: {}
  };
</script>