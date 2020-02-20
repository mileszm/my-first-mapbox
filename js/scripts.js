mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXNtaWxlc21pbGVzIiwiYSI6ImNrNms1NGplYzAwb3gzamtnajRkZXU3NnQifQ.nWRgr-9qGhfLQrZTI4CdFA';

var initOptions = {
  container: 'mapdiv',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-74, 40.73],
  zoom: 15
}

var mapObject = new mapboxgl.Map(initOptions)

allClassLocations.forEach(
  function(classLocation) {
    new mapboxgl.Marker()
      .setLngLat([classLocation.longitude,classLocation.latitude])
      .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(`<p>${classLocation.info}</p>`)
      )
      .addTo(mapObject)
})
