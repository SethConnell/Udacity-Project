var model = {
    names2: ["Old Home", "Current Home", "Mexican Restraunt", "Post Office", "Bank"],
    names: ["Old Home", "Current Home", "Mexican Restraunt", "Post Office", "Bank"],
    places: [{ // Places is an arrray of location info. It's referenced by searchitem function.
            state: "arkansas",
            name: "Old Home",
            windowtext: "I used to live there.",
            cords: {
                lat: 35.626017,
                lng: -92.245208
            }
        },
        {
            state: "arkansas",
            name: "Current Home",
            windowtext: "I currently live here.",
            cords: {
                lat: 35.627849,
                lng: -92.239511
            }
        }, {
            name: "Mexican Restraunt",
            state: "arkansas",
            windowtext: "This is a mexican restruant I love to eat at.",
            cords: {
                lat: 35.605847,
                lng: -92.269067
            }
        }, {
            name: "Post Office",
            state: "Arkansas",
            windowtext: "This is the post office I recieve my mail at.",
            cords: {
                lat: 35.6106,
                lng: -92.262671
            }
        }, {
            name: "Bank",
            state: "arkansas",
            windowtext: "This is the bank I earn interest at.",
            cords: {
                lat: 35.61135,
                lng: -92.262556
            }
        }
    ]
};

var view = { // The view is a list of all the functions that change the look of the page.
    appendContent: function(element, content) { // this is used to append content to certain elements with specific ids, tags, or classes
        $(element).append(content)
    },
    emptyElement: function(element) { // this function empties the items in an element.
        $(element).empty();
    },
    setIcon: function(marker, index, color) { // This changes the icon color of a marker. 
        marker[index].setIcon(color)
    },
    resetIcons: function() {
        for (var i = 0; i < markerarray.length; i++) {
            view.setIcon(markerarray, i, 'http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        }
    },
    handleError: function() {
        alert("Sorry. Google Maps is not available.");
    }
};

var ViewModel = {
    names: ko.observableArray(model.names),
    location: ko.observableArray(model.places),
    query: ko.observable(""), // Query represents the value of the search box
    searchterm: ko.observable(""), // searchterm is an observable object that saves the text from the searchbox
    variable: ko.observable(),
    abstractInfo: ko.observable("Nothing."),
    clickedItem: function (x) { // This function creates 'if clicked...' instances binding the clicks of the list items to animation effects for markers. 
        view.resetIcons();
        if (x == "Old Home") {
            view.resetIcons();
            view.setIcon(markerarray, 0, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
            marker0SetWindow();
        } 
        if (x == "Current Home") {
            view.resetIcons();
            view.setIcon(markerarray, 1, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
            marker1SetWindow();
        }
        if (x == "Mexican Restraunt") {
            view.resetIcons();
            view.setIcon(markerarray, 2, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
            marker2SetWindow();
        }
        if (x == "Post Office") {
            view.resetIcons();
            view.setIcon(markerarray, 3, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
            marker3SetWindow();
        }
        if (x == "Bank") {
            view.resetIcons();
            view.setIcon(markerarray, 4, 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png');
            marker4SetWindow();  
        }
    },
    searchitem: function(x) { // This function resets the list, going through and appending each item to the list area of the page.
        this.reset();
        for (var i = 0; i < markerarray.length; i++) {
            var names = String(model.places[i].name);
            var lowercasenames = names.toLowerCase();
            if (lowercasenames.includes(x.toLowerCase()) && (ViewModel.names().includes() != true)) {
            } else {
                ViewModel.names.remove(names);
            }
        }
    },
    search: function(value) {
        // remove all the current beers, which removes them from the view
        console.log(value);
    },
    filter: function() { // this function searches the search term.
        ViewModel.searchitem(ViewModel.searchterm());
    },
    reset: function() { // This resets the colors of the markers
        for (var i = 0; i < markerarray.length; i++) {
            view.setIcon(markerarray, i, 'http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        }
    }
};
ViewModel.searchterm.subscribe(ViewModel.filter);
ko.applyBindings(ViewModel); // This applies the bindings of the ViewModel.