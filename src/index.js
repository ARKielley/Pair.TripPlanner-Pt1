console.log("Hello Amanda & Christian!");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiZWF0aW5nZm9pbCIsImEiOiJjam1pNnZma3UwMXZ3M2txbGUyNHBicjZ1In0.6NgrqdGZYKWYVhajFcRZeQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerElem = document.createElement("div");
markerElem.style.width = "32px";
markerElem.style.height = "39px";
markerElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerElem).setLngLat([-74.009, 40.705]).addTo(map);


//****CHRISTIAN: I AM IN THE BATHROOM */******************* */
