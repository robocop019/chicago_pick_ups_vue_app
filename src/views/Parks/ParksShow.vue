<template>
  <div class="parks-show">
    <!-- <h1> {{park.name}} </h1>
    <p>Location: {{park.location}} </p>

    <h3>Facilities</h3>
    <div v-for="facility in facilities">
      <p> {{facility}} </p>
    </div>

    <h2>Comments</h2>
    <div v-if="current_user != null">
      <form v-on:submit.prevent="submit()">
        Comment: <input type="text" placeholder="Add Comment" v-model="newComment">
        <br>
        <br>
        <select name="rating" v-model="newRating">
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br>
        <br>
        <input type="submit" value="Post Comment">
      </form>
    </div>

    <div v-for="comment in comments">
      <p v-if="comment.content !== ''"> 
        Comment: "{{comment.content}}" by 
        <router-link v-bind:to="'/users/' + comment.user_id">
          {{comment.user_first_name}} {{comment.user_last_name}} 
        </router-link>
        at {{comment.created_at}} 
      </p>
      <p v-if="comment.rating !== null"> Rating: {{comment.rating}} </p>
    </div>

    <h3>Games</h3>
    <div v-for="game in park.games">
      <router-link v-bind:to="'/games/' + game.id"> <h4> {{game.title}} </h4> </router-link>
    </div> -->



    <!-- ------------------------------------------------- -->


    <div class="white-page-content">
      <div class="container pt0 pb40">

        <ol class="breadcrumb mb30">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/parks">Parks</router-link></li>
          <li class="breadcrumb-item">Park Detail</li>
        </ol>

        <div class="row">
          <div class="col-md-12 mb30">

            <h1> {{park.name}} </h1>

            <div id="js-grid-slider-thumbnail" class="cbp">
              <div class="cbp-item">
                <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                        <img src="/images/birmingham.jpg" alt="">
                    </div>
                </div>
              </div>
              <div class="cbp-item">
                <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                        <img src="/images/home2.jpg" alt="">
                    </div>
                </div>
              </div>
              <div class="cbp-item">
                <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                        <img src="/images/home3.jpg" alt="">
                    </div>
                </div>
              </div>
              <div class="cbp-item">
                <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                        <img src="/images/home4.jpg" alt="">
                    </div>
                </div>
              </div>
            </div>

            <div id="js-pagination-slider">
                <div class="cbp-pagination-item cbp-pagination-active">
                    <img src="/images/birmingham.jpg" alt="">
                </div>
                <div class="cbp-pagination-item">
                    <img src="/images/home2.jpg" alt="">
                </div>
                <div class="cbp-pagination-item">
                    <img src="/images/home3.jpg" alt="">
                </div>
                <div class="cbp-pagination-item">
                    <img src="/images/home4.jpg" alt="">
                </div>
            </div>

            <div class="prp-description pt50">

              <div class="row">
                <div class="col-md-12 mb50">
                  <h3 class="mb0">Summary</h3><hr>
                  <ul class="list-unstyled summary">

                    <li class="clearfix"><div id="park-address" class="float-right"></div>
                      <i class="fa fa-map-marker"></i> Location
                    </li>

                    <li class="clearfix"><div class="float-right">3</div>
                      <i class="fa fa-bed"></i> Rooms
                    </li>

                    <li class="clearfix"><div class="float-right">2</div>
                      <i class="fa fa-shower"></i> Baths
                    </li>

                    <li class="clearfix"><div class="float-right">350 Sq Ft</div>
                      <i class="fa fa-square-o"></i> Area
                    </li>

                  </ul>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-12 mb50">
                    <h3 class="mb0">Games</h3><hr>
                    <div v-for="game in park.games">
                      <router-link v-bind:to="'/games/' + game.id"> <h4> {{game.title}} </h4> </router-link>
                    </div>
                </div>
              </div>

              <div class="row mb50">
                  <div class="col-md-12">
                      <h3 class="mb0">Location</h3><hr>
                      <div id="markermap" style="width: 100%;height: 400px;"></div>
                  </div>
              </div>

              <div class="row mb50">
                <div class="col-md-12 mb50">
                  <h3 class="mb0">Facilities</h3><hr>
                  <ul class="list-unstyled summary" v-for="facility in facilities">
                    <li class="clearfix">
                      {{facility}}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <h3 class="mb0">Comments</h3><hr>

                  <div class="park-comments item" v-for="comment in comments">
                    <div class="review-card">
                      
                      <p class="lead" v-if="comment.content !== ''"> 
                        Comment: "{{comment.content}}" by 
                        <router-link v-bind:to="'/users/' + comment.user_id">
                          {{comment.user_first_name}} {{comment.user_last_name}} 
                        </router-link>
                        at {{comment.created_at}} 
                      </p>

                      <div v-if="comment.rating !== null">
                        <p class="lead" v-if="comment.content === ''">  
                          <router-link v-bind:to="'/users/' + comment.user_id">
                            {{comment.user_first_name}} {{comment.user_last_name}} 
                          </router-link>
                          at {{comment.created_at}} 
                        </p>

                        <ul>
                          <li class="clearfix star">
                            <div class="text-center">
                              <span class="rating">
                                <i v-for="n in comment.rating" class="fa fa-star lead"></i>
                              </span>
                            </div>
                          </li>
                        </ul>
                    </div>
                    </div>
                  </div>

                  <div class="smart-wrap">
                    <div class="smart-forms smart-container">

                      <form v-on:submit.prevent="submit()" id="feedback">
                        <div class="form-body">

                          <div class="frm-row">                   

                            <div class="section">
                              <label class="field prepend-icon">
                                <textarea class="gui-textarea" id="comment" name="comment" placeholder="Comment" v-model="newComment"></textarea>
                                <span class="field-icon"><i class="fa fa-comments"></i></span>  
                              </label>
                            </div><!-- end section -->

                            <div class="spacer spacer-b20"></div> 

                            <div class="section">

                              <span class="rating block">

                                <span class="lbl-text">Choose your rating</span>

                                <input class="rating-input" id="five-stars" type="radio"  name="product-rate" v-model="newRating" value="5">
                                <label class="rating-star" for="five-stars"><i class="fa fa-star"></i></label>

                                <input class="rating-input" id="four-stars" type="radio"  name="product-rate" v-model="newRating" value="4">
                                <label class="rating-star" for="four-stars"><i class="fa fa-star"></i></label>

                                <input class="rating-input" id="three-stars" type="radio"  name="product-rate" v-model="newRating" value="3" checked>
                                <label class="rating-star" for="three-stars"><i class="fa fa-star"></i></label>

                                <input class="rating-input" id="two-stars" type="radio"  name="product-rate" v-model="newRating" value="2">
                                <label class="rating-star" for="two-stars"><i class="fa fa-star"></i></label>

                                <input class="rating-input" id="one-star" type="radio"  name="product-rate" v-model="newRating" value="1">
                                <label class="rating-star" for="one-star"><i class="fa fa-star"></i></label>

                              </span>


                            </div><!-- end  section -->
                          </div>

                        </div><!-- end .form-body section -->

                        <div class="form-footer">
                            <button type="submit" class="button btn-primary">Submit Review</button>
                        </div><!-- end .form-footer section -->
                      </form>

                    </div><!-- end .smart-forms section -->
                  </div><!-- end .smart-wrap section -->

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  .park-comments {
    border: solid;
    /*/*padding: 15px;*/
    margin: 15px;
  }

  .star {
    list-style-type: none;
  }
</style>

<script>
  import axios from 'axios';

  console.log(process.env.VUE_APP_MAP_API_KEY);


  export default {
    data: function() {
      return {
        current_user: localStorage.getItem("user_id"),
        park: [],
        parkAddress: "",
        facilities: [],
        comments: [],
        newComment: '',
        newRating: null
      };
    },
    created: function() {
      axios.get('/api/parks/' + this.$route.params.id).then(response => {
        this.park = response.data;

        axios.get('https://data.cityofchicago.org/resource/eix4-gf83.json?park_no=' + this.park.api_ref)
          .then(response => {

            var new_fac = [];

            response.data.forEach(function(facility) {

              if (!(new_fac.includes(facility.facility_t + ' ' + facility.facility_n)) &&
                  !(new_fac.includes(facility.facility_n))) {
              
                if (facility.facility_t === 'SPECIAL') {
                  new_fac.push(facility.facility_n);
                } else {
                  new_fac.push(facility.facility_t + ' ' + facility.facility_n);
                }
              }

            });

            this.facilities = new_fac;
            
        });

      });

      axios.get('/api/comments?commentable_type=Park&commentable_id=' + this.$route.params.id)
        .then(response => {
          this.comments = response.data;
      });
    },
    methods: {
      submit: function() {

        var params = {
                    user_id: localStorage.getItem('user_id'),
                    commentable_id: this.park.id,
                    commentable_type: 'Park',
                    content: this.newComment,
                    rating: this.newRating
        };

        console.log(this.parkAddress);

        axios.post('/api/comments', params)
          .then(response => {
            console.log(response.data);
            this.newComment = '';
            this.newRating = null;

            axios.get('/api/comments?commentable_type=Park&commentable_id=' + this.$route.params.id)
              .then(response => {
                this.comments = response.data;
              });
        });
      }
    },

    mounted: function() {

      var park = {};

      axios.get('/api/parks/' + this.$route.params.id)
        .then(response => {
          park = response.data;

          var parkCoors = park.location.split(",");

          var parkLat = parseFloat(parkCoors[0]);
          var parkLong = parseFloat(parkCoors[1]);

          var mapOptions = {
            zoom: 15,

            center: new google.maps.LatLng(parkLat, parkLong),

            styles: [ 
                      { "featureType": "landscape", 
                        "stylers": [ 
                                    { "hue": "#FFBB00" },
                                    { "saturation": 43.400000000000006 },
                                    { "lightness": 37.599999999999994 },
                                    { "gamma": 1 }
                                    ] 
                      },  
                      { "featureType": "road.highway",
                        "stylers": [ 
                                    { "hue": "#FFC200" },
                                    { "saturation": -61.8 },
                                    { "lightness": 45.599999999999994 },
                                    { "gamma": 1 }   
                                    ] 
                      },  
                      { "featureType": "road.arterial",
                      "stylers": [
                                  { "hue": "#FF0300" },
                                  { "saturation": -100 },
                                  { "lightness": 51.19999999999999 },
                                  { "gamma": 1 } 
                                  ] 
                      },
                      {"featureType": "road.local",
                      "stylers": [
                                  {"hue": "#FF0300" },
                                  {"saturation": -100 },
                                  {"lightness": 52},
                                  {"gamma": 1 }
                                  ] 
                      },
                      {"featureType": "water",
                      "stylers": [
                                  {"hue": "#0078FF" },
                                  {"saturation": -13.200000000000003},
                                  {"lightness": 2.4000000000000057},
                                  {"gamma": 1 }   
                                  ] 
                      },  
                      { "featureType":"poi",
                      "stylers": [ 
                                  {"hue": "#00FF6A" },
                                  {"saturation": -1.0989010989011234},
                                  {"lightness": 11.200000000000017},
                                  {"gamma": 1 } 
                                  ] 
                      }
                    ]
          };

          console.log(mapOptions.center);

          var mapElement = document.getElementById('markermap');

          var map = new google.maps.Map(mapElement, mapOptions);

          var marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: 'Park'
          });

          var geocoder = new google.maps.Geocoder;
          var infowindow = new google.maps.InfoWindow;

          var parkAddress = '';

          var latlng = {lat: parkLat, lng: parkLong};

          geocoder.geocode({'location': latlng}, function(results, status) {
              if (status === 'OK') {
                if (results[0]) {
                  // map.setZoom(11);
                  var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                  });
                  infowindow.setContent(results[0].formatted_address);
                  parkAddress = results[0].formatted_address;
                  document.getElementById('park-address').innerHTML = parkAddress;
                  infowindow.open(map, marker);
                } else {
                  window.alert('No results found');
                }
              } else {
                window.alert('Geocoder failed due to: ' + status);
              }
            });

          var request = {
              location: map.getCenter(),
              radius: '300',
              query: `${parkAddress}`
            };

                  console.log(parkAddress);


            console.log(request.query);

          var service = new google.maps.places.PlacesService(map);
          service.textSearch(request, callback);

          // Checks that the PlacesServiceStatus is OK, and adds a marker
          // using the place ID and location from the PlacesService.
          function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                place: {
                  placeId: results[0].place_id,
                  location: results[0].geometry.location
                }
              });


              console.log(results);
            }
          }

        });
    }
  };
</script>
