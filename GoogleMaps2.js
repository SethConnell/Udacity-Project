var map,
    createMarker,
    marker0,
    marker1,
    marker2,
    marker3,
    marker4,
    markerarray;

var initMap = function() {
    try {
        map = new google.maps.Map(document.getElementById('map'), {
            center: model.places[2].cords,
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
        var moreInfo = function(state) {
            var string = '<br>' + "(This location is in " + state + ")" + '<br>' + '<img id = "catpic" src="http://connell.systems/StateMapsAPI/' + state.toLowerCase() +'.jpg" alt="Sorry, this image is not available.">'
            return string;
        };

        createMarker = function(cord) {
            return new google.maps.Marker({
                position: cord,
                map: map,
                title: 'Hello World!',
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            })
        };

        marker0 = createMarker(model.places[0].cords);
        marker1 = createMarker(model.places[1].cords);
        marker2 = createMarker(model.places[2].cords);
        marker3 = createMarker(model.places[3].cords);
        marker4 = createMarker(model.places[4].cords);

        markerarray = [marker0, marker1, marker2, marker3, marker4];

        marker0.addListener("click", function(){
                marker0.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({

                    content: '<h1>' + model.places[0].name + '</h1>' + '<br>' + '<h3>' + model.places[0].windowtext + '</h3>' + moreInfo(model.places[0].state)
                });
                infowindow.open(map, marker0);
            });

        marker1.addListener("click", function(){
                marker1.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + model.places[1].name + '</h1>' + '<br>' + '<h3>' + model.places[1].windowtext + '</h3>' + moreInfo(model.places[1].state)
                });
                infowindow.open(map, marker1);
            });

        marker2.addListener("click", function(){
                marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + model.places[2].name + '</h1>' + '<br>' + '<h3>' + model.places[2].windowtext + '</h3>' + moreInfo(model.places[2].state)
                });
                infowindow.open(map, marker2);
            });

        marker3.addListener("click", function(){
                marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + model.places[3].name + '</h1>' + '<br>' + '<h3>' + model.places[3].windowtext + '</h3>' + moreInfo(model.places[3].state)
                });
                infowindow.open(map, marker3);
            });

        marker4.addListener("click", function(){
                marker4.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h1>' + model.places[4].name + '</h1>' + '<br>' + '<h3>' + model.places[4].windowtext + '</h3>' + moreInfo(model.places[4].state)
                });
                infowindow.open(map, marker4);
        });
    }
    catch(err) {
        alert("Crap, there was an error: " + err);
    }
};