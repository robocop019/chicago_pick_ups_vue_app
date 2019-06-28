<template>
  <div class="messages-view">
    <div>
      <h2>Recieved</h2>  
      <div v-for="recieve in recieved">
        <h4>From: 
          <router-link v-bind:to="'/users/' + recieve.sender_id"> 
            {{recieve.sender_first_name}} {{recieve.sender_last_name}}
          </router-link>
          at {{recieve.time}}
        </h4>
        <p>Message: {{recieve.content}} </p>
      </div>
    </div>

    <div>
      <h2>Sent</h2>
      <div v-for="send in sent">
        <h4>To: 
          <router-link v-bind:to="'/users/' + send.recipient_id">
            {{send.recipient_first_name}} {{send.recipient_last_name}}
          </router-link> 
           at {{send.time}}
        </h4>
        <p>Message: {{send.content}} </p>
      </div>
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
        recieved: [],
        sent: [],
        errors: []
      };
    },
    created: function() {

      axios.get('/api/messages?recipient_id=' + this.$route.params.id)
        .then(response => {
          this.recieved = response.data;
          console.log(this.recieved);
        });


      axios.get('/api/messages?sender_id=' + this.$route.params.id)
        .then(response => {
          this.sent = response.data;
          console.log(this.sent);
        });
    },
    methods: {}
  };
</script>