var ViewModel = {
    searchterm: ko.observable()
};

var model = {
    init: function() {
        for (var i = 0; i < 5; i++) {
            var names = String(this.places[i].name);
            $("#results").append("<li id ='" + i + "'" + "class = 'results'>" + names + "</li>");
        }
        this.bindClicks();
    },
    places : [{
        state: "arkansas",
        name: "Old Home",
        windowtext: "I used to live there.",
        cords: {
            lat: 35.626017,
            lng: -92.245208
        }}, 
        {
        state: "arkansas",
        name: "Current Home",
        windowtext: "I currently live here.",
        cords: {
            lat: 35.627849,
            lng: -92.239511
        }}, {
        name: "Mexican Restraunt",
        state: "arkansas",
        windowtext: "This is a mexican restruant I love to eat at.",
        cords: {
            lat: 35.605847,
            lng: -92.269067
        }}, {
        name: "Post Office",
        state: "Arkansas",
        windowtext: "This is the post office I recieve my mail at.",
        cords: {
            lat: 35.6106,
            lng: -92.262671
        }}, {
        name: "Bank",
        state: "arkansas",
        windowtext: "This is the bank I earn interest at.",
        cords: {
            lat: 35.61135,
            lng: -92.262556
        }}],
    bindClicks: function() {
        $("#0").click(function() {
            markerarray[0].setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#1").click(function() {
            markerarray[1].setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#2").click(function() {
            markerarray[2].setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#3").click(function() {
            markerarray[3].setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#4").click(function() {
            markerarray[4].setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
    },
    searchitem: function(x) {
        this.reset();
        for (var i = 0; i < markerarray.length; i++) {
            var names = String(this.places[i].name);
            var lowercasenames = names.toLowerCase();
            if (lowercasenames.includes(x.toLowerCase())) {
                $("#results").append("<li id ='" + i + "'" + "class = 'results'>" + names + "</li>");
            }
        }
        this.bindClicks();
    },
    filter: function() {
        model.searchitem(ViewModel.searchterm())
    },
    searcharray: function(x) {
        ViewModel.listResults = ko.observable(x);
    },
    reset: function() {
        for (var i = 0; i < markerarray.length; i++) {
            markerarray[i].setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
            $("#results").empty();
        }
    }
};

ko.applyBindings(ViewModel);
model.init();