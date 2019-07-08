<template>
  <div class="signup">
    <!-- <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="button" value="Submit">
      </form>
    </div> -->


    <!-- ------------------------------------------------------------------------ -->

    <div class="white-page-content">
      <div class="container pt0 pb30">
        <ol class="breadcrumb mt30 mb30">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item">Sign Up</li>
        </ol>


        <div class="row mb80 pt40">
          <div class="col-lg-12">
            <h3 class=" text-center mb60">Create your account</h3>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>  

            <div class="smart-wrap">

              <div class="smart-forms smart-container wrap-2">
                <form v-on:submit.prevent="submit()">
                  <div class="form-body theme-black">
                    <div class="frm-row"> 

                      <div class="colm colm6">     



                        <div class="section">
                          <label class="field prepend-icon">
                            <input type="text" name="firstname" id="firstname" class="gui-input" placeholder="Enter First Name" v-model="firstName">
                            <span class="field-icon"><i class="fa fa-user"></i></span>  
                          </label>
                        </div><!-- end section -->  

                        <div class="section">
                          <label class="field prepend-icon">
                            <input type="text" name="lastname" id="lastname" class="gui-input" placeholder="Enter Last Name" v-model="lastName">
                            <span class="field-icon"><i class="fa fa-user"></i></span>  
                          </label>
                        </div><!-- end section -->  

                        <div class="section">
                          <label class="field prepend-icon">
                            <input type="email" name="email" id="email" class="gui-input" placeholder="Enter Email" v-model="email">
                            <span class="field-icon"><i class="fa fa-envelope"></i></span>  
                          </label>
                        </div><!-- end section -->     

                        <div class="section">
                          <label class="field prepend-icon">
                            <input type="password" name="password" id="password" class="gui-input" placeholder="Enter password" v-model="password">
                            <span class="field-icon"><i class="fa fa-lock"></i></span>  
                          </label>
                        </div><!-- end section --> 

                        <div class="section">
                          <label class="field prepend-icon">
                            <input type="password" name="cpassword" id="cpassword" class="gui-input" placeholder="Confirm password" v-model="passwordConfirmation">
                            <span class="field-icon"><i class="fa fa-lock"></i></span>  
                          </label>
                        </div><!-- end section --> 

                        <div class="form-footer text-center">
                          <button type="submit" class="button btn-primary">Sign Up</button>
                        </div><!-- end .form-footer section -->

                      </div><!-- end .colm section -->

                    </div><!-- end .frm-row section -->                                                          

                  </div><!-- end .form-body section -->

                </form>

              </div><!-- end .smart-forms section -->
            </div><!-- end .smart-wrap section -->


          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
      };
    },
    created: function() {
      if (localStorage.getItem("jwt")) {
        this.$router.push('/users/' + localStorage.getItem("user_id"));
      }
    },
    methods: {
      submit: function() {
        var params = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
        };

        axios.post("/api/users", params).then(response => {

            var loginParams = {
                          email: this.email,
                          password: this.password
            };

            axios.post("/api/sessions", loginParams).then(response => {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.jwt;
              localStorage.setItem("jwt", response.data.jwt);
              localStorage.setItem("user_id", response.data.user_id);
              this.user_id = response.data.user_id;
              this.$router.push("/users/" + this.user_id);
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  };
</script>