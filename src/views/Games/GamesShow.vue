<template>
  <div class="games-show">
    <h2> {{game.title}} </h2>

    <div>
      <button v-on:click="interestedIn(1)">Attending</button>
      <button v-on:click="interestedIn(0)">Interested In</button>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

    <h4> {{game.start_time}} </h4>

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
        Comment: {{comment.content}} by 
        <router-link v-bind:to="'/users/' + comment.user_id">
          {{comment.user_first_name}} {{comment.user_last_name}} 
        </router-link>
        at {{comment.created_at}} 
      </p>
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
      }
    }
  };
</script>
