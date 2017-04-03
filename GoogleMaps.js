var map;
var places = [{
    name: "Seth's Current House",
    windowtext: "This is the house I currently live in.",
    cords: {
        lat: 35.626017,
        lng: -92.245208
    }}, 
    {
    name: "Seth's Old House",
    windowtext: "This is the house I USED to live in.",
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
        '<div id="siteNotice">'+
        '</div>'+
        '<h1>How are you?</h1>'

    var marker, i;
    for (i = 0; i < places.length; i++) {
        marker = new google.maps.Marker({
            position: places[i].cords,
            map: map,
            title: 'Hello World!',
        });
        marker.addListener("click", function(){
            var infowindow = new google.maps.InfoWindow({
                content: stringstring
            });
            infowindow.open(map, marker);
        });
    };
};