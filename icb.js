var fs = require('fs');
var xml = require('libxmljs');
var util = require('util');
var jath = require('./jath/jath');

var template = [ "//pre", { txt: "node()" } ];
var template2 = [ "//h3", { txt: "node()", desc: "parent::*[1]" } ];
var xmlstring = "";

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  xmlstring += chunk;
});

process.stdin.on('end', function () {
  var xmlDoc = xml.parseHtmlString( xmlstring );
  var result = jath.parse( template, xmlDoc );
  var result2 = jath.parse( template2, xmlDoc );

  console.log(JSON.stringify( result2[6], null, 4 ) );

  var database = {};
  for( var i=0; i<result.length; i++ ) {
	database[ result2[i].txt ] = result[i].txt;
  }

  // console.log( JSON.stringify( database, null, 4 ) );
});
