var map,
    poopyitypoop,
    createMarker,
    marker0,
    marker1,
    marker2,
    marker3,
    marker4,
    markerarray; // Defined a few variables.


var initMap = function() { //This function creates the Google Map.
    try { // this code is tried. if there's an error, it's handled by the code at the bottom.
        map = new google.maps.Map(document.getElementById('map'), {
            center: model.places[2].cords,
            zoom: 13,
            styles: [ // I stole this map style from SnazzyMaps.com
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
                        });
        var moreInfo = function(state) { // This function uses a State Maps API to show what state the location of a marker is in.
            var string = '<br>' + "(This location is in " + state + ")" + '<br>' + '<img id = "catpic" src="http://connell.systems/StateMapsAPI/' + state.toLowerCase() + '.jpg" alt="Sorry, this image is not available.">'
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

        marker0 = createMarker(model.places[0].cords);
        marker1 = createMarker(model.places[1].cords);
        marker2 = createMarker(model.places[2].cords);
        marker3 = createMarker(model.places[3].cords);
        marker4 = createMarker(model.places[4].cords); // Markers 0-4 are the names of the markers being defined to be used later.

        markerarray = [marker0, marker1, marker2, marker3, marker4]; // Array of markers.

        marker0.addListener("click", function() { // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
            marker0SetWindow();
        });

        marker1.addListener("click", function() { // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
            marker1SetWindow();
        });

        marker2.addListener("click", function() { // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
            marker2SetWindow();
        });

        marker3.addListener("click", function() { // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
            marker3SetWindow();
        });

        marker4.addListener("click", function() { // Adding listener to marker to see if it's clicked. If it IS clicked, then an infowindow opens up.
            marker4SetWindow();
        });
    } catch (err) { // if the code can't load, the user is alerted that there was an error.
        alert("Crap, there was an error: " + err);
    }
};


var marker0SetWindow = function(number) { // This function toggles marker0's Info Window.
    view.resetIcons();
    marker0.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png'); // Sets icon of to blue.
    var infowindow = new google.maps.InfoWindow({
        content: "<img style = 'width: 250px; height: 200px' src='loading.gif'>"
    });
    infowindow.open(map, marker0);
    var wikiRequestTimeout = setTimeout(function() {
        var NewContent = "<h1>" + model.places[0].name + "</h1>" + "<h2>" + model.places[0].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia Not Available</h1>";
        infowindow.setContent(NewContent);
    }, 8000); // wikiRequestTimeout tells the user if there has been an error with the API.
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + model.places[0].name + "&callback=?",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (function(data) {
            try {
                var markup = data.parse.text["*"];
                var string = markup;
                string = string.replace(/<img[^>]*>/g, "");
                string = string.replaceAll("/wiki/", "https://en.wikipedia.org/wiki/");
                var NewContent = "<h1>" + model.places[0].name + "</h1>" + "<h2>" + model.places[0].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia</h1>" + "</h2>" + string;
                infowindow.setContent(NewContent);
                clearTimeout(wikiRequestTimeout);
            } catch (err) {
                var NewContent = "<h1>" + model.places[0].name + "</h1>" + "<h2>" + model.places[0].windowtext + "</h2>" + "<br><h1> No Related Data on Wikipedia</h1>";
                infowindow.setContent(NewContent);
            };
        })
    });
};

var marker1SetWindow = function(number) { // This function toggles marker1's Info Window.
    view.resetIcons();
    marker1.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    var infowindow = new google.maps.InfoWindow({
        content: "<img style = 'width: 200px; height: 200px' src='loading.gif'>"
    });
    infowindow.open(map, marker1);
    var wikiRequestTimeout = setTimeout(function() {
        var NewContent = "<h1>" + model.places[1].name + "</h1>" + "<h2>" + model.places[1].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia Not Available</h1>";
        infowindow.setContent(NewContent);
    }, 8000); // wikiRequestTimeout tells the user if there has been an error with the API.
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + model.places[1].name + "&callback=?",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (function(data) {
            try {
                var markup = data.parse.text["*"];
                var string = markup;
                var string = string.replace(/<img[^>]*>/g, "");
                string = string.replaceAll("/wiki", "https://en.wikipedia.org/wiki");
                var NewContent = "<h1>" + model.places[1].name + "</h1>" + "<h2>" + model.places[1].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia</h1>" + "</h2>" + string;
                infowindow.setContent(NewContent);
                clearTimeout(wikiRequestTimeout);
                console.log(string);
            } catch (err) {
                var NewContent = "<h1>" + model.places[1].name + "</h1>" + "<h2>" + model.places[1].windowtext + "</h2>" + "<br><h1> No Related Data on Wikipedia</h1>";
                infowindow.setContent(NewContent);
            }
        })
    });
};

var marker2SetWindow = function(number) { // This function toggles marker2's Info Window.
    view.resetIcons();
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    var infowindow = new google.maps.InfoWindow({
        content: "<img style = 'width: 250px; height: 200px' src='loading.gif'>"
    });

    infowindow.open(map, marker2);
    var wikiRequestTimeout = setTimeout(function() {
        var NewContent = "<h1>" + model.places[2].name + "</h1>" + "<h2>" + model.places[2].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia Not Available</h1>";
        infowindow.setContent(NewContent);
    }, 8000); // wikiRequestTimeout tells the user if there has been an error with the API.
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + model.places[2].name + "&callback=?",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (function(data) {
            try {
                var markup = data.parse.text["*"];
                var string = markup;
                var string = string.replace(/<img[^>]*>/g, "");
                string = string.replaceAll("/wiki", "https://en.wikipedia.org/wiki");
                var NewContent = "<h1>" + model.places[2].name + "</h1>" + "<h2>" + model.places[2].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia</h1>" + "</h2>" + string;
                infowindow.setContent(NewContent);
                clearTimeout(wikiRequestTimeout);
                console.log(string);
            } catch (err) {
                var NewContent = "<h1>" + model.places[2].name + "</h1>" + "<h2>" + model.places[2].windowtext + "</h2>" + "<br><h1> No Related Data on Wikipedia</h1>";
                infowindow.setContent(NewContent);
            }
        })
    });
};

var marker3SetWindow = function(number) { // This function toggles marker3's Info Window.
    view.resetIcons();
    marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    var infowindow = new google.maps.InfoWindow({
        content: "<img style = 'width: 250px; height: 200px' src='loading.gif'>"
    });
    infowindow.open(map, marker3);
    var wikiRequestTimeout = setTimeout(function() {
        var NewContent = "<h1>" + model.places[3].name + "</h1>" + "<h2>" + model.places[3].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia Not Available</h1>";
        infowindow.setContent(NewContent);
    }, 8000); // wikiRequestTimeout tells the user if there has been an error with the API.
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + model.places[3].name + "&callback=?",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (function(data) {
            try {
                var markup = data.parse.text["*"];
                var string = markup;
                var string = string.replace(/<img[^>]*>/g, "");
                string = string.replaceAll("/wiki", "https://en.wikipedia.org/wiki");
                var NewContent = "<h1>" + model.places[3].name + "</h1>" + "<h2>" + model.places[3].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia</h1>" + model.places[3].windowtext + "</h2>" + string;
                infowindow.setContent(NewContent);
                clearTimeout(wikiRequestTimeout);
            } catch (err) {
                var NewContent = "<h1>" + model.places[3].name + "</h1>" + "<h2>" + model.places[3].windowtext + "</h2>" + "<br><h1> No Related Data on Wikipedia</h1>";
                infowindow.setContent(NewContent);
            }
        })
    });
};

var marker4SetWindow = function(number) { // This function toggles marker4's Info Window.
    view.resetIcons();
    marker4.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    infowindow = new google.maps.InfoWindow({
        content: "<img style = 'width: 250px; height: 200px' src='loading.gif'>"
    });
    infowindow.open(map, marker4);
    var wikiRequestTimeout = setTimeout(function() {
        var NewContent = "<h1>" + model.places[4].name + "</h1>" + "<h2>" + model.places[4].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia Not Available</h1>";
        infowindow.setContent(NewContent);
    }, 8000); // wikiRequestTimeout tells the user if there has been an error with the API.
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + model.places[4].name + "&callback=?",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (function(data) {
            try {
                var markup = data.parse.text["*"];
                var string = markup;
                string = string.replaceAll("/wiki", "https://en.wikipedia.org/wiki");
                string = string.replace(/<img[^>]*>/g, "");
                var NewContent = "<h1>" + model.places[4].name + "</h1>" + "<h2>" + model.places[4].windowtext + "</h2>" + "<br><h1> Related Data Via Wikipedia</h1>" + "</h2>" + string;
                infowindow.setContent(NewContent);
                clearTimeout(wikiRequestTimeout);
            } catch (err) {
                var NewContent = "<h1>" + model.places[4].name + "</h1>" + "<h2>" + model.places[4].windowtext + "</h2>" + "<br><h1> No Related Data on Wikipedia</h1>";
                infowindow.setContent(NewContent);
            }
        })
    });
};

function setMapOnAll(map) { // This function takes all markers off the map.
    marker0.setMap(map);
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
};

function crap() {
    alert("Google Maps ain't workin' so well. Sorry about that.");
};

String.prototype.replaceAll = function(search, replacement) { // This function replaces all instances of search with replacement. It's used by each ajax request to fix the broken Wikipedia links.
    var target = this;
    return target.split(search).join(replacement);
};