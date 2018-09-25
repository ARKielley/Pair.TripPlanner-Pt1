const mapbox = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png"
};

// This REGULAR func makes markers base on coordinates and location type.
// coords params is ALREADY an array
const buildMarker = (type, coords) => {
  // Don't forget to add this so it gets pushed to map!
  const markerElem = document.createElement("div");

  markerElem.style.width = "32px";
  markerElem.style.height = "39px";

  switch (type) {
    case "hotel":
      markerElem.style.backgroundImage = `url(${iconURLs.hotel})`;
    case "restaurant":
      markerElem.style.backgroundImage = `url(${iconURLs.restaurant})`;
    case "activity":
      markerElem.style.backgroundImage = `url(${iconURLs.activity})`;
  }

  return new mapbox.Marker(markerElem).setLngLat(coords);
};

module.exports = buildMarker;
