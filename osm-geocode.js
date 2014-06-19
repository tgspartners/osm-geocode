var addr = document.getElementById('osm-geocode').getAttribute('data-addr');                                // read street address passed in by data-* attribute
new Ajax.Request('http://maps.googleapis.com/maps/api/geocode/json?address=' + addr, {                      // ajax call to google geocode
    method: 'get',
    onSuccess: function(transport) {
        success = true;
        var response = transport.responseText || "no response text";                                        // read in json response
        var data = transport.responseText.evalJSON();
        var loc_x = data.results[0].geometry.location.lng;                                                  // parse coordinates of location
        var loc_y = data.results[0].geometry.location.lat;
        var vp_left = data.results[0].geometry.viewport.northeast.lng;                                      // parse coordinates of viewport
        var vp_bottom = data.results[0].geometry.viewport.southwest.lat;
        var vp_right = data.results[0].geometry.viewport.southwest.lng;
        var vp_top = data.results[0].geometry.viewport.northeast.lat;
        var pj_i = new OpenLayers.Projection('EPSG:4326');                                                  // transform projection from input to output
        var pj_o = new OpenLayers.Projection('EPSG:900913');
        var extent = new OpenLayers.Bounds(vp_left, vp_bottom, vp_right, vp_top).transform(pj_i, pj_o);     // make a bounding box using viewport coordinates
        var options = { restrictedExtent: extent };                                                         // set option to restrict map extent to our bounding box
        map = new OpenLayers.Map('osm-div', options);                                                       // load the map into our <div> and set options
        var mapnik = new OpenLayers.Layer.OSM();                                                            // load the openstreetmap layer
        var loc = new OpenLayers.LonLat(loc_x, loc_y).transform(pj_i, pj_o);                                // set location using long/lat and apply projection transform
        map.addLayer(mapnik);                                                                               // add openstreemap layer to map
        var markers = new OpenLayers.Layer.Markers('Markers');                                              // create markers layer
        map.addLayer(markers);                                                                              // add markers layer to map
        markers.addMarker(new OpenLayers.Marker(loc));                                                      // set marker for place of interest
        map.setCenter(loc, 10);                                                                             // set map centre and zoom level
        },
        onFailure: function() { alert('error fetching coordinates...'); }
});