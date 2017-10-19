// const express = require('express');
// const router = express.Router();
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const passport = require('passport');
// const usersController = require('../controllers/users');
// const staticsController = require('../controllers/statics');
// const hikeController = require('../controllers/discover-hikes');


// // Set up ejs
// app.set('views', __dirname + "/views");
// app.engine('ejs', require('ejs').renderFile);
// app.set('view engine', 'ejs');



// function initMap() {
  

//   // Generates a new map, zoomed to country
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 3,
//       //starting location is Denver
//     center: {lat: 39.742043, lng: -104.991531}
//   });

//   // Allows user to drop a marker where they click
//   map.addListener('click', function (e) {
//     placeMarkerAndPanTo(e.latLng, map);
//   });

//   function placeMarkerAndPanTo(latLng, map) {
//     //Type of marker
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//     // recenter the map to where the marker was pinned
//     map.panTo(latLng);
//   }
  
// }

