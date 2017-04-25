var ViewModel = {
    searchterm: ko.observable(),
    init: function() {
        for (var i = 0; i < 5; i++) {
            var names = String(this.places[i].name);
            view.appendContent("#results", "<li id ='" + i + "'" + "class = 'results'>" + names + "</li>");
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
            view.setIcon(markerarray, 0, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#1").click(function() {
            view.setIcon(markerarray, 1, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#2").click(function() {
            view.setIcon(markerarray, 2, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#3").click(function() {
            view.setIcon(markerarray, 3, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
        $("#4").click(function() {
            view.setIcon(markerarray, 4, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
        })
    },
    searchitem: function(x) {
        this.reset();
        for (var i = 0; i < markerarray.length; i++) {
            var names = String(this.places[i].name);
            var lowercasenames = names.toLowerCase();
            if (lowercasenames.includes(x.toLowerCase())) {
                view.appendContent("#results", "<li id ='" + i + "'" + "class = 'results'>" + names + "</li>");
            }
        }
        this.bindClicks();
    },
    filter: function() {
        ViewModel.searchitem(ViewModel.searchterm())
    },
    searcharray: function(x) {
        ViewModel.listResults = ko.observable(x);
    },
    reset: function() {
        for (var i = 0; i < markerarray.length; i++) {
            view.setIcon(markerarray, i, 'http://maps.google.com/mapfiles/ms/icons/red-dot.png');
            view.emptyElement("#results");
        }
    }
};

var view = {
    appendContent: function(element, content) {
        $(element).append(content)
    },
    emptyElement: function(element) {
        $(element).empty();
    },
    setIcon: function(marker, index, color) {
        marker[index].setIcon(color)
    }
};

ko.applyBindings(ViewModel);
ViewModel.init();