<template>
  <div class="messages-view">
    <div>
      <h2>Recieved</h2>  
      <div v-for="recieve in recieved">
        <p> {{recieve.content}} </p>
      </div>
    </div>

    <div>
      <h2>Sent</h2>
      <div v-for="send in sent">
        <p> {{send.content}} </p>
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