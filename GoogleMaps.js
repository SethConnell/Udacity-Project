var map,
    createMarker,
    marker0,
    marker1,
    marker2,
    marker3,
    marker4,
    markerarray; // Defined a few variables.

var getInfo = function(state) {
    var string = "";
    $.ajax({
      type: 'GET',
      url: 'https://api.duckduckgo.com/',
      data: { q: state, format: 'json', pretty: 1 },
      jsonpCallback: 'jsonp',
      listLocation: "RelatedTopics",
      dataType: 'text',
      success: function (data) {
        data = JSON.parse(data);
        var abstractURL = data.AbstractURL;
        var abstractSRC = data.AbstractSource;
        console.log(abstractURL);
        ViewModel.abstractInfo(abstractURL);
    }})
};



var initMap = function() { //This function creates the Google Map.
    try { // this code is tried. if there's an error, it's handled by the code at the bottom.
        map = new google.maps.Map(document.getElementById('map'), {
            center: ViewModel.places[2].cords,
            zoom: 13,
            styles: [{
                    elementType: 'geometry',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#242f3e'
                    }]
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#263c3f'
                    }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#6b9a76'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#38414e'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#212a37'
                    }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#9ca5b3'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#746855'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{
                        color: '#1f2835'
                    }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#f3d19c'
                    }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#2f3948'
                    }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#d59563'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{
                        color: '#17263c'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#515c6d'
                    }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{
                        color: '#17263c'
                    }]
                }
            ]
        });
        var moreInfo = function(state) { // This function uses a State Maps API to show what state the location of a marker is in.
            var string = '<br>' + "(This location is in " + state + ")" + '<br>' + '<img id = "catpic" src="http://connell.systems/StateMapsAPI/' + state.toLowerCase() +'.jpg" alt="Sorry, this image is not available.">'
            return string;
        };

        createMarker = function(cord) { // This function creates a marker for the Google Maps API.
            return new google.maps.Marker({
                position: cord,
                map: map,
                title: 'Hello World!',
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            })
        };

        marker0 = createMarker(ViewModel.places[0].cords);
        marker1 = createMarker(ViewModel.places[1].cords);
        marker2 = createMarker(ViewModel.places[2].cords);
        marker3 = createMarker(ViewModel.places[3].cords);
        marker4 = createMarker(ViewModel.places[4].cords); // Markers 0-4 are the names of the markers being defined to be used later.

        markerarray = [marker0, marker1, marker2, marker3, marker4]; // Array of markers.

        marker0.addListener("click", function(){ // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
                marker0.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({

                    content: '<h1>' + ViewModel.places[0].name + '</h1>' + '<br>' + '<h3>' + ViewModel.places[0].windowtext + '</h3>' + moreInfo(ViewModel.places[0].state)
                });
                infowindow.open(map, marker0);
            });

        marker1.addListener("click", function(){ // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
                marker1.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + ViewModel.places[1].name + '</h1>' + '<br>' + '<h3>' + ViewModel.places[1].windowtext + '</h3>' + moreInfo(ViewModel.places[1].state)
                });
                infowindow.open(map, marker1);
            });

        marker2.addListener("click", function(){ // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
                marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + ViewModel.places[2].name + '</h1>' + '<br>' + '<h3>' + ViewModel.places[2].windowtext + '</h3>' + moreInfo(ViewModel.places[2].state)
                });
                infowindow.open(map, marker2);
            });

        marker3.addListener("click", function(){ // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
                marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + ViewModel.places[3].name + '</h1>' + '<br>' + '<h3>' + ViewModel.places[3].windowtext + '</h3>' + moreInfo(ViewModel.places[3].state)
                });
                infowindow.open(map, marker3);
            });

        marker4.addListener("click", function(){ // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
                marker4.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + ViewModel.places[4].name + '</h1>' + '<br>' + '<h3>' + ViewModel.places[4].windowtext + '</h3>' + moreInfo(ViewModel.places[4].state)
                });
                infowindow.open(map, marker4);
        });
    }
    catch(err) { // if the code can't load, the user is alerted that there was an error.
        alert("Crap, there was an error: " + err);
    }
};