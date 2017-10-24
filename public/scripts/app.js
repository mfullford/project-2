// Create an empty Array for the hikes of a user
let userHikes = [];
// Call userID
let userId;
let $hikeBox;
let template;



// Run the map
function initMap() {
    
  // Generates a new map, focused on US
  var map = new google.maps.Map(document.getElementById('map'), {
    // zoom in just on US
    zoom: 4,
      //starting location is middle of the country
    center: {lat: 40, lng: -99.991531},
      // style map
    styles: [
            {elementType: 'geometry', stylers: [{color: '#eccf81'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#757575'}]},
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{color: '#c9b2a6'}]
            },
             {
              featureType: 'administrative.land_parcel',
              elementType: 'geometry.stroke',
              stylers: [{color: '#dcd2be'}]
            },
             {
              featureType: 'landscape.natural',
              elementType: 'geometry',
              stylers: [{color: '#eccf81'}]
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#dfd2ae'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#93817c'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#F7D86D'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#447530'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#F18F59'}]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [{color: "#F18F59"}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{color: "#F18F59"}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#806b63'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#F18F59'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: 'F18F59'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f8c967'}]
            },
             {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{color: "#dfd2ae"}]
              },
              {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{color: "#8f7d77"}]
              },
              {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{color: "#ebe3cd"}]
              },
              {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{color: "#dfd2ae"}]
              },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: "#5d8ec3"}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#92998d'}]
            },
          ]
  });

  // Allows user to drop a marker on click
  map.addListener('click', function (e) {
    placeMarkerAndPanTo(e.latLng, map);
  });

  function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });

    map.panTo(latLng);

       //when the marker is clicked, open box
    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(map, event.latLng);
    });

    function placeMarker(map, location) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });

      // show the longitude and latitude
      var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat() +
        '<br>Longitude: ' + location.lng()
      });

      infowindow.open(map, marker);
    }
      
};


$(document).ready(function() {

// define variables 
let name;
let state;
// let longlat;
let time;
let date;


// Get the ID of the user
 $.ajax({
    method: 'GET',
    url: '/user/getID',
    success: function(result) {
      userId = result;
    }
  });

  $hikeBox = $('#hikeBox');

  //compile handlebars template
  let source = $('#hike-template').html();
  template = Handlebars.compile(source);

  
    //This gets all hikes, not currently user specific
  $.ajax({
      method: 'GET',
      url: '/user/hikes',
      success: handleSuccess,
      error: handleError
    });

      //When a new hike form is submitted
    $('#hike-form').on('submit', function(event) {
      event.preventDefault();
      console.log('new hike serialized', $(this).serialize());
      $.ajax({
        method: 'POST',
        url: '/user/hikes',
        data: $(this).serialize(),
        success: newHikeSuccess,
        error: newHikeError
      });
    });

      //When a the hike delete button is clicked
    $hikeBox.on('click', '#deletebutton', function() {
      console.log('clicked delete button for ' +$(this).attr('data-id'));
      let id = $(this).attr('data-id');
      $.ajax({
        method: 'DELETE',
        url: '/user/hikes/'+id,
        success: deleteHikeSuccess,
        error: deleteHikeError
      });
    });
});


let id;

// Click edit button
$(document).on('click', '#editbutton', function() {
    id = $(this).attr('data-id');
    hikeId = $(this).attr('id');
    $('#edit-hike').val("Make edits");
    // make html modal appear
    $('#hikeModal').modal();
  });

$(document).on('click', '#saveButton', function() {

// make the new variables = the old variables
  name = $('#name').val();
  state = $('#state').val();
  longlat = $('#longlat').val();
  date = $('#date').val();
  time = $('#time').val();

  console.log("Clicked!");
    // let id = $(this).attr('data-id');
    console.log(id);
    let editedHike = $('#edit-hike').val();
    $.ajax({
      type: 'put',
      url: '/user/hikes/:id',
      data:({ id: id,
              name: name,
              state: state,
              date: date,
              time: time
               })
    });
    $('#edit-hike').val("Make edits");
    $('#hikeModal').modal('hide');
  });

}; // Document ready function

  // Render all posts to view, re-resenders every time
  function render () {
    $hikeBox.empty(); // empty existing posts from view
    let hikeHtml = template({ hike: userHikes });   // pass the user trips into the handlebars template
    $hikeBox.append(hikeHtml);    // append html to the view
  }

  function handleSuccess(json) {
    userHikes = json;
    render();
  }

  function handleError(e) {
    console.log('Something went wrong getting all hikes.');
    $('#hikeBox').text('Failure loading hikes, is the server working?');
  }

  function newHikeSuccess(hike) {
    $('.input').val('');
    userHikes.push(hike);
    render();
  }

  function newHikeError() {
    console.log('newhike error!');
  }

  function deleteHikeSuccess(hike) {
    let delHike = hike;
    console.log(hike);
    var hikeId = hike._id;
    console.log('delete hike', hikeId);
    for(var i = 0; i < userHikes.length; i++) {
      if(userHikes[i]._id === hikeId) {
        userHikes.splice(i, 1);
        break; 
      }
    }
    render();
  }

  function deleteHikeError() {
    console.log('deletehike error!');
  }