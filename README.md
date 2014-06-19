osm-geocode
===========
* external geocode for open street map
* used for "find us" pages by simply supplying a street address
* uses prototype.js for lightweight ajax library
* uses client-side geocoding to avoid api limits
* uses open-source mapping data
* takes full street address (eg. uk postal address including post code)
* makes ajax call to google geocode using full street address
* reads json object for location coordinates and coordinates of viewport
* loads coordinates into openlayers
* loads openstreetmap into openlayers

usage
=====
* insert the following code into your HTML document
```html
<div id="osm-div" style="height:600px;"></div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/prototype/1.6.1.0/prototype.js"></script>
<script src="http://openlayers.org/api/2.13.1/OpenLayers.js"></script>
<script id="osm-geocode" data-addr="5-parkway-bognor-regis-po21-2xp" src="/js/osm-geocode.js"></script>
```

dependencies
============
OSM-GEOCODE.JS depends on the following libraries / frameworks
* PROTOTYPE.JS
* GOOGLE MAPS API
* OPENLAYERS.ORG
* OPENLAYERS OSM LAYER

demo
====
you can see the script in action at http://tgspartners.com/partnership/contact/