<template>
  <div class="games-create">
   <!--  <form v-on:submit.prevent="submit()">
      <h1>Create A Game</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>Title:</label> 
          <input type="text" v-model="title">
          <br>

          <label>Description:</label>
          <input type="text" v-model="description">
          <br>

          <label>Park:</label>
          <select name="parks" v-model="parkId">
            <option v-for="park in parks" v-bind:value="park.id"> {{park.name}} Park</option>
          </select>
          <br>

          <label>Start Time:</label>
          <input type="datetime-local" v-model="startTime">
          <br>

          <label>Sport:</label>
          <select name="sport" v-model="sport">
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="hockey">Hockey</option>
            <option value="soccer">Soccer</option>
            <option value="softball">Softball</option>
            <option value="tennis">Tennis</option>
            <option value="volleyball">Volleyball</option>
          </select>
          <br>

          <label>Category:</label>
          <select name="category" v-model="category">
            <option value=""></option>
            <option value="casual">Casual</option>
            <option value="competitive">Competitive</option>
            <option value="practice">Practice</option>
          </select>
          <br>

          <label>Minimum Participants:</label>
          <input type="text" v-model="minParticipants">
          <br>

          <label>Maximum Participants:</label>
          <input type="text" v-model="maxParticipants">
          <br>

           <label>Maximum Age:</label>
          <input type="text" v-model="maxAge"> 
        </div>
        
        <input type="submit" class="button" value="Submit">
    </form> -->


    <!-- ----------------------------------------------------------- -->


    <div class="white-page-content">
      <div class="container pt0 pb00">
        <ol class="breadcrumb mb30">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item">Create a Game</li>
        </ol>
        <h3 class="left-title mb70">Submit your Game</h3> 

        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="row">
          <div class="col-md-12 form-property-add mb70">
            <div class='smart-wrap'>
              <div class='smart-forms'>

                <form v-on:submit.prevent="submit()" id="submit-property">

                  <div class="tagline mb40"><span> Information </span></div>
                  <div class='frm-row'>
                    <div class='colm colm12'>
                        <div class="section">
                            <label class="field">
                                <input type="text" name="ptitle" id="ptitle" class="gui-input" placeholder="Game Title" v-model="title">
                            </label>
                        </div>
                    </div><!--/colm-->

                    <div class='colm colm6'>
                        <div class="section">
                            <label class="field select">
                              <select name="sport" v-model="sport">
                                <option value="">Sport</option>
                                <option value="Baseball">Baseball</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Football">Football</option>
                                <option value="Hockey">Hockey</option>
                                <option value="Soccer">Soccer</option>
                                <option value="Softball">Softball</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Volleyball">Volleyball</option>
                              </select>
                              <i class="arrow double"></i>              
                            </label>
                        </div>
                    </div><!--/colm-->

                    <div class='colm colm6'>
                        <div class="section">
                            <label class="field select">
                              <select name="category" v-model="category">
                                <option value="">Category</option>
                                <option value="Casual">Casual</option>
                                <option value="Competitive">Competitive</option>
                                <option value="Practice">Practice</option>
                              </select>
                              <i class="arrow double"></i>                 
                            </label>
                        </div>
                    </div><!--/colm-->

                  </div><!--/row-->

                  <div class='frm-row'>
                    <div class='colm colm6'>
                      <div class="section">
                        <label class="field">
                          <input type="text" name="price" id="price" class="gui-input" placeholder="Minimum Participants" v-model="minParticipants">
                        </label>
                      </div>
                    </div><!--/colm-->

                    <div class='colm colm6'>
                      <div class="section">
                        <label class="field">
                          <input type="text" name="area" id="area" class="gui-input" placeholder="Maximum Participants"
                            v-model="maxParticipants">
                        </label>
                      </div>
                    </div><!--/colm-->

                    <div class='colm colm12'>
                      <div class="section">
                        <label class="field prepend-icon">
                          <textarea class="gui-textarea" id="comment" name="comment" placeholder="Description" v-model="description"></textarea>
                          <span class="field-icon"><i class="fa fa-comments"></i></span>  
                        </label>
                      </div>
                    </div><!--/col-->
                      
                  </div><!--/row-->
          
                  <div class="tagline mb40 mt40"><span>Location and Time </span></div>
                  <div class='frm-row'>
                    <div class='colm colm12'>
                      <div class="section">
                        <label class="field select">
                          <select name="parks" v-model="parkId">
                            <option value="">Park</option>
                            <option v-for="park in parks" v-bind:value="park.id"> {{park.name}} Park</option>
                          </select>
                          <i class="arrow double"></i>                 
                        </label>
                      </div>
                    </div><!--/col-->

                    <div class='colm colm12'>
                      <div class="section">
                        <label class="field select">
                          <input type="datetime-local" v-model="startTime">       
                        </label>
                      </div>
                    </div><!--/col-->
                      
                  </div><!--/row-->
                  
                       
                  <div class="form-footer text-right">
                      <button type="submit" class="button btn-primary btn-lg">Submit Game </button>
                  </div>

                </form>

              </div> <!-- smart-wrap div -->
            </div> <!-- smart-form div -->
          </div> <!-- col-md-12 form-property-add mb70 div -->
        </div> <!-- row div -->
      </div> <!-- container pt0 pb00 -->
    </div> <!-- white-page-content -->
  </div> <!-- games-create div -->
</template>

<style>
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        parks: [],
        title: "",
        description: "",
        parkId: "",
        startTime: "",
        sport: "",
        category: "",
        minParticipants: "",
        maxParticipants: "",
        maxAge: "",
        userId: localStorage.getItem("user_id"),
        errors: []
      };
    },
    created: function() {
      if (!(localStorage.getItem("jwt"))) {
        //pop up you need to be logged in to create a game
        this.$router.push('/login');
      }

      axios.get('/api/parks').then(response => {
        this.parks = response.data;
        console.log(this.parks);
      });

    },
    methods: {
      submit: function() {
        var params = {
                      title: this.title,
                      description: this.description,
                      park_id: this.parkId,
                      start_time: this.startTime,
                      sport: this.sport,
                      category: this.category,
                      min_participants: this.minParticipants,
                      max_participants: this.maxParticipants,
                      max_age: this.maxAge,
                      organizer_id: this.userId
        };

        console.log(this.userId);
        console.log(params);

        axios.post('/api/games', params).then(response => {
          console.log(response.data);
          this.$router.push('/games/' + response.data.id);
        })
        .catch(error => {
            this.errors = response.data.errors;
        });

      }
    }
  };
</script>
