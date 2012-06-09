var jsdom = require('jsdom');
var assert = require('assert');

var fs = require('fs');
var util = require('util');

var library = [];
var filesprocessed = 0;

var files = fs.readdirSync( __dirname + '/giicm/html' );

function done() {
	if( filesprocessed == files.length ) {
		console.log( JSON.stringify( library ) );
	}
}

for( var i=0; i<files.length; i++ ) {
	parse( fs.readFileSync( __dirname + '/giicm/html/' + files[i], 'utf-8'  ) ); 
}


function parse( html ) {
  jsdom.env( html, [ 'http://code.jquery.com/jquery-1.5.min.js' ],
    function(errors, window) {
		var parts =  window.document.getElementsByTagName( "h2" ); 
		var pinouts =  window.document.getElementsByTagName( "pre" ); 
		assert.equal( parts.length, pinouts.length, "parts and pinouts don't match" );

		for( var i=0; i< parts.length; i++ ) {
			var part = parts[i].textContent;
			var desc = parts[i].nextSibling.textContent.replace( /\n/g,'' );
			var pinout = pinouts[i].textContent;
			try {
				assert.notEqual( part, '' );
				assert.notEqual( desc, '' );
				assert.notEqual( pinout, '' );
			}
			catch( e ) {
				console.log( 'error' );
			}
			library.push( { pn: part, desc: desc, pinout: pinout } );
		}
		filesprocessed++;
		done();
    });
}
