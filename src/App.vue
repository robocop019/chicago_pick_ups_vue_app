<template>
  <div id="app">

    

    <div id="nav">
      <nav class="navbar navbar-light navbar-expand-lg bg-faded fixed-top"> <!-- navbar-transparent navbar-light bg-faded-->
        <div class="container">

          <router-link class="navbar-brand" to="/">
            <img class='logo logo-dark' src="images/logo.png" alt="">
          </router-link>

          <!-- <div id="navbarNavDropdown" class="navbar-collapse collapse"> -->
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                  <router-link class="nav-link"to="/">Home</router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/games">Games</router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link" to="/games/create">Create Game</router-link>
              </li>

              <li class="nav-item">
                  <router-link class="nav-link"to="/parks">Parks</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link"to="/signup">Sign Up</router-link>
              </li>

              <li class="nav-item dropdown">
                <router-link class="nav-link" to="/logout">Logout</router-link>
              </li>
            </ul>        
          <!-- </div> -->
        </div>
      </nav>
    </div>

    <div class="container pt90 pb50">
      <router-view/>
    </div>


    <footer class="footer footer-dark pt100 pb30">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>About Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a href="#" class="btn btn-sm btn-white-outline">Learn More</a>
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Recent Post</h3>
                    <ul class="list-unstyled footer-list-item">
                        <li>
                            <a href="#">
                                Lorem ipsum dolor sit amet
                            </a><br>
                            <em>April 5, 2017</em>
                        </li>
                        <li>
                            <a href="#">
                                Consectetur adipiscing elit
                            </a><br>
                            <em>April 5, 2017</em>
                        </li>
                        <li>
                            <a href="#">
                                Sed do eiusmod tempor incididunt
                            </a><br>
                            <em>April 5, 2017</em>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Featured properties</h3>
                    <div class="clearfix">
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/prop1.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/prop2.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/prop3.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/prop4.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/prop5.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                        <a href="#" class="thumb-hover-icon">
                            <img src="images/prop6.jpg" alt="" class="img-fluid" width="90">
                            <span class="ti-plus"></span>
                        </a><!--/.hover-->
                    </div><!--/.clearfix-->
                </div>
                <div class="col-lg-3 col-md-6 mb40">
                    <h3>Contact Us</h3>
                    <ul class="list-unstyled contact-list-item">
                        <li>
                            <i class="ti-home"></i>
                            124, Monalisa Street, Lorem Ipsum, 302012
                        </li>
                        <li>
                            <i class="ti-email"></i>
                            support@assan.com
                        </li>
                        <li>
                            <i class="ti-mobile"></i>
                            1800 394 3939
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <span>&copy; Copyright 2020. All Right Reserved.</span>
                    </div>
                    <div class="col-sm-8 text-right">
                        <ul class="list-inline footer-nav">
                            <li class="list-inline-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">About</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">News</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Contact</a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer><!--/footer-->
  </div>
</template>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  display: inline-block;
}*/
</style>
