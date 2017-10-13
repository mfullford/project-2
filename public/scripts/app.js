function initMap() {



        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: new google.maps.LatLng(39.7392,-104.9903),
          mapTypeId: 'terrain'
        });

      // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
      // inserts my geoson data
        script.src = '/hikes.geojson';
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }


	map.addListener('click', function (e) {
		placeMarkerAndPanTo(e.latLng, map);
	});

	function placeMarkerAndPanTo(latLng, map) {
		var marker = new google.maps.Marker({
			position: latLng,
			map: map
		});
		map.PanTo(latLng);
	}
}