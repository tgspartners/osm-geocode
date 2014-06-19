osm-geocode.js
==============
external geocode for open street map

used for "find us" pages by simply supplying a street address

uses prototype.js for lightweight ajax library

uses client-side geocoding to avoid api limits

uses open-source mapping data

takes full street address (eg. uk postal address including post code)

makes ajax call to google geocode using full street address

reads json object for location coordinates and coordinates of viewport

loads coordinates into openlayers

loads openstreetmap into openlayers

