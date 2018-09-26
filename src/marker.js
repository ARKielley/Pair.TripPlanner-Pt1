const mapbox = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  const markerElem = document.createElement("div");
  markerElem.style.width = "32px";
  markerElem.style.height = "39px";
  markerElem.style.backgroundImage = `url(${iconURLs[type] || iconURLs.activity})`

  return new mapbox.Marker(markerElem).setLngLat(coords);
};

module.exports = buildMarker;
