var map;
var marker;

var mapModel = {
    mapConfigs: {
        location: {
            lat: -22.825101,
            lng: -43.048301
        },
        zoom: 16
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

        map = L.map('map').setView([initial_location.lat, initial_location.lng], mapZoom);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	        maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoiZ2FicmllbHNsaW1hYnVzaW5lc3MiLCJhIjoiY2txcGVsYXgyMHRzOTJ1cjE5YWN1cXBkcCJ9.3u4MWJ2o594I3aUa4sv4KA'}).addTo(map);
        var greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        
        L.marker([initial_location.lat, initial_location.lng], {icon: greenIcon}).addTo(map)
            .openPopup();
    }
};

mapController.init();