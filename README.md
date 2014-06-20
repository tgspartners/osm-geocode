osm-geocode
===========
our task was to supply a simple js plugin for displaying location maps. our requirements were simple -
* be lightweight
* be fast
* be responsive
* be reusable
* be scalable
* be expandable
* be simple

osm-geocode.js
==============
we came up with a simple js plugin to help with loading maps for any given postal address. we needed
the maps to give accurate locations for any given street address. in the process, have tried several
mapping engines against several postcode / gps databases. currently, we have opted for the following -
* external geocode for open street map
* used for "find us" pages by simply supplying a street address
* uses client-side geocoding to avoid api limits
* uses open-source mapping data
* takes full street address (eg. uk postal address including post code)
* makes ajax call to google geocode using full street address
* reads json object for location coordinates and coordinates of viewport
* loads coordinates into openlayers
* loads viewport bounding box to centre poi
* loads openstreetmap into openlayers

usage
=====
very simple to get up and running -
* download `osm-geocode/osm-geocode.js` on your web servers root directory
* insert the following code into your HTML document
* be sure to replace the $$$ in data-address="$$$"" with the full postal address of your point of interest
```html
<div id="osm-div" style="height:600px;"></div>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="http://openlayers.org/api/2.13.1/OpenLayers.js"></script>
<script id="osm-geocode" data-address="$$$" src="/osm-geocode/osm-geocode.js"></script>
```

dependencies
============
`osm-geocode.js` depends on the following libraries / frameworks -
* google maps api
* openlayers.org
* openlayers osm layer

demo
====
<div id="osm-div" style="height:400px;width:400px;float:right;"></div>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="http://openlayers.org/api/2.13.1/OpenLayers.js"></script>
<script id="osm-geocode" data-address="Trafalgar Square, Westminster, London WC2N 5DN" src="https://raw.githubusercontent.com/tgspartners/osm-geocode/master/osm-geocode.js"></script>

you can see the script in action at http://tgspartners.com/partnership/contact/

license / attribution
=====================
released under the MIT software license. openstreetmap data is produced by a community of contributors and released under the creativecommons sharealike license.
