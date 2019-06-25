<!-- <template>
  <div class="users-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Profile</h1>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label>First Name:</label> 
        <input type="text" class="form-control" v-bind:value="user.first_name" v-model="newFirstName">
      </div>

      <div class="form-group">
        <label>Last Name:</label> 
        <input type="text" class="form-control" v-bind:value="user.last_name" v-model="newLastName">
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-bind:value="user.email" v-model="newEmail">
      </div>

      <div class="form-group">
        <label>New Password:</label>
        <input type="password" class="form-control" v-bind:value="user.password" v-model="newPassword">
      </div>

      <div class="form-group">
        <label>Confirm New Password:</label>
        <input type="password" class="form-control" v-bind:value="user.password" v-model="newPasswordConfirmation">
      </div>
      
      <div class="form-group">
        <label>Phone Number:</label>
        <input type="text" class="form-control" v-bind:value="user.phoneNumber" v-model="newPhoneNumber">
      </div>

      <div class="form-group">
        <label>Avatar Url:</label>
        <input type="text" class="form-control" v-bind:value="user.avatarUrl" v-model="newAvatarUrl">
      </div>

      <div class="form-group">
        <label>Bio:</label>
        <input type="text" class="form-control" v-bind:value="user.bio" v-model="newBio">
      </div>

      <div class="form-group">
        <label>Location:</label>
        <input type="text" class="form-control" v-bind:value="user.location" v-model="newLocation">
      </div>

      <input type="submit" class="button" value="Submit">
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
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        bio: "",
        location: "",
        password: "",
        passwordConfirmation: "",
        errors: []
      };
    },
    created: function() {
      axios.get('/api/users/' + localStorage.getItem("user_id")).then(response => {
        this.user = response.data;
      });
    },
    methods: {}
  };
</script>
 -->