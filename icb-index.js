var jsdom = require('jsdom'),
	assert = require('assert'),
	fs = require('fs'),
	util = require('util');

var library = [],
	filesprocessed = 0,
	files = fs.readdirSync( __dirname + '/giicm/html' );

function done() {
	if( filesprocessed == files.length ) {
		console.log( JSON.stringify( library ) );
	}
}

for( var i=0; i<files.length; i++ ) {
	parse(fs.readFileSync(__dirname + '/giicm/html/' + files[i], 'utf-8'));
}

function parse(html) {
  jsdom.env( html, ['http://code.jquery.com/jquery-1.5.min.js'],
    function(errors, window) {
		var parts = window.document.getElementsByTagName("h2"),
			pinouts = window.document.getElementsByTagName("pre"),
			part,
			desc,
			pinout;

		assert.equal(parts.length, pinouts.length, "parts and pinouts don't match");

		for( var i=0; i< parts.length; i++ ) {
			part = parts[i].textContent;
			desc = parts[i].nextSibling.textContent.replace(/\n/g, '');
			pinout = pinouts[i].textContent;
			try {
				assert.notEqual(part, '');
				assert.notEqual(desc, '');
				assert.notEqual(pinout, '');
			}
			catch(e) {
				console.log('error');
			}
			library.push({pn: part, desc: desc, pinout: pinout});
		}
		filesprocessed++;
		done();
    });
}
