const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
function initMap() {
  maptilersdk.config.apiKey = 'lqle0iMYPhmDhZCBimBH';
  // if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position =>{
  //     const {latitude, longitude} = position.coords;
  //     const now_position = new Location(latitude, longitude);
  // });
  // }
  // else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  // }
  //     console.log(now_position);
  const map = new maptilersdk.Map({
          container: 'map', // container's id or the HTML element to render the map
          style: "openstreetmap",
          center: [10.8826482,106.7824544], // starting position [lng, lat]
          zoom: 14, // starting zoom
    });
};
// window.initMap = initMap;