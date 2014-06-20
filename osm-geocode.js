var address = document.getElementById('osm-geocode').getAttribute('data-address');                                // read street address passed in by data-* attribute
var geocoder = new google.maps.Geocoder();
if (geocoder) {
  geocoder.geocode({ 'address': address }, function (results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
        var pj_i = new OpenLayers.Projection('EPSG:4326');
        var pj_o = new OpenLayers.Projection('EPSG:900913');
        var extent = new OpenLayers.Bounds(results[0].geometry.viewport.getNorthEast().lng(),results[0].geometry.viewport.getSouthWest().lat(),results[0].geometry.viewport.getSouthWest().lng(), results[0].geometry.viewport.getNorthEast().lat()).transform(pj_i, pj_o);
        var options = { restrictedExtent: extent };
        map = new OpenLayers.Map('osm-div' , options);
        var mapnik = new OpenLayers.Layer.OSM();  
        var loc = new OpenLayers.LonLat(results[0].geometry.location.lng(),results[0].geometry.location.lat()).transform(pj_i, pj_o);
        map.addLayer(mapnik);                                                                               
        var markers = new OpenLayers.Layer.Markers('Markers');                                              
        map.addLayer(markers);                                                                              
        markers.addMarker(new OpenLayers.Marker(loc));                                                      
        map.setCenter(loc, 10);                                                                             
     }
     else {
        alert("Geocoding failed: " + status);
     }
  });
}    
