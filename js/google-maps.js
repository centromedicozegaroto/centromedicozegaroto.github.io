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
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	        maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}).addTo(map);
        var greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        
        L.marker([initial_location.lat, initial_location.lng], {icon: greenIcon}).addTo(map)
            .bindPopup('<h6>N° 35 - sobrado</h6>')
            .openPopup();
    }
};

mapController.init();