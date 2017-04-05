var map;
var places = [{
    name: "Old Home",
    windowtext: "I used to live there.",
    cords: {
        lat: 35.626017,
        lng: -92.245208
    }}, 
    {
    name: "Current Home",
    windowtext: "I currently live here.",
    cords: {
        lat: 35.627849,
        lng: -92.239511
    }}, {
    name: "Mexican Restraunt",
    windowtext: "This is a mexican restruant I love to eat at.",
    cords: {
        lat: 35.605847,
        lng: -92.269067
    }}, {
    name: "Post Office",
    windowtext: "This is the post office I recieve my mail at.",
    cords: {
        lat: 35.6106,
        lng: -92.262671
    }}, {
    name: "Bank",
    windowtext: "This is the bank I earn interest at.",
    cords: {
        lat: 35.61135,
        lng: -92.262556
}}];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: places[2].cords,
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
    var stringstring =
        '<br>' +
        "Also, here's a cute picture of a cat." +
        '<br>' +
        '<img id = "catpic" src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="Sorry, this image is not available.">'
        
        

    
    
    var createMarker = function(cord) {
        return new google.maps.Marker({
            position: cord,
            map: map,
            title: 'Hello World!',
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });
    }
    
    var marker0 = createMarker(places[0].cords);
    var marker1 = createMarker(places[1].cords);
    var marker2 = createMarker(places[2].cords);
    var marker3 = createMarker(places[3].cords);
    var marker4 = createMarker(places[4].cords);
    
    var markerarray = [marker0, marker1, marker2, marker3, marker4];
    
    marker1.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
    
    marker0.addListener("click", function(){
            var infowindow = new google.maps.InfoWindow({
                
                content: '<br>' + '<h1>' + places[0].name + '</h1>' + '<br>' + '<h3>' + places[0].windowtext + '</h3>' + stringstring
            });
            infowindow.open(map, marker0);
        });
    
    marker1.addListener("click", function(){
            var infowindow = new google.maps.InfoWindow({
                content: '<br>' + '<h1>' + places[1].name + '</h1>' + '<br>' + '<h3>' + places[1].windowtext + '</h3>' + stringstring
            });
            infowindow.open(map, marker1);
        });
    
    marker2.addListener("click", function(){
            var infowindow = new google.maps.InfoWindow({
                content: '<br>' + '<h1>' + places[2].name + '</h1>' + '<br>' + '<h3>' + places[2].windowtext + '</h3>' + stringstring
            });
            infowindow.open(map, marker2);
        });
    
    marker3.addListener("click", function(){
            var infowindow = new google.maps.InfoWindow({
                content: '<br>' + '<h1>' + places[3].name + '</h1>' + '<br>' + '<h3>' + places[3].windowtext + '</h3>' + stringstring
            });
            infowindow.open(map, marker3);
        });
    
    marker4.addListener("click", function(){
            var infowindow = new google.maps.InfoWindow({
                content: '<br>' + '<h1>' + places[4].name + '</h1>' + '<br>' + '<h3>' + places[4].windowtext + '</h3>' + stringstring
            });
            infowindow.open(map, marker4);
        });
    
    
};