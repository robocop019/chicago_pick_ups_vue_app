<template>
  <div class="messages-create">
    <form v-on:submit.prevent="submit()">
      <h3>Compose a Message</h3>
      <p> To: {{user.first_name}} {{user.last_name}} </p>
      <textarea name="message" v-model="message" cols="100" rows="15"></textarea>
      <br>
      <br>
      <input type="submit" value="Send Message">
    </form>
  </div>
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        user: {},
        sender: localStorage.getItem("user_id"),
        message: ''
      };
    },
    created: function() {

      if (!(localStorage.getItem("user_id"))) {
        this.$router.push('/login');
      } else {
        axios.get('api/users/' + this.$route.params.id)
          .then(response => {
            console.log(response.data);
            this.user = response.data;
            console.log(this.user);

          });
      }
    },
    methods: {
      submit: function() {
        var params = {
                      sender_id: this.sender,
                      recipient_id: this.user.id,
                      content: this.message
        };

        axios.post('api/messages', params)
          .then(response => {
            console.log("Message Sent!");
            this.$router.push('/messages/view/' + this.sender);
          });
      }
    }
  };
</script>
