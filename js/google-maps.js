var map;
var marker;

var mapModel = {
    mapConfigs: {
        location: {
            lat: -22.825101,
            lng: -43.048301
        },
        zoom: 18
    }
};

var mapController = {
    init: function (){
        view.init();
    },

    getInitialLocation: function(){
        return mapModel.mapConfigs.location;
    },

    getMapZoom: function (){
        return mapModel.mapConfigs.zoom;
    }
};


var view = {
    init: function () {
        this.mapContainer = document.getElementById('map');
        this.render();
    },

    render: function (){
        var mapContainer = this.mapContainer;

        var initial_location = mapController.getInitialLocation();

        var mapZoom = mapController.getMapZoom();

        map = new google.maps.Map(mapContainer, {
            center: initial_location,
            zoom: mapZoom
        });
        
        marker = new google.maps.Marker({
            position: initial_location,
            map:map
        });
    }
};
