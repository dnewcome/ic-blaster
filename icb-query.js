var fs = require('fs');

console.log('');
var library = JSON.parse( fs.readFileSync( __dirname + '/library.json', 'utf-8' ) );

for( var i=0; i<library.length; i++ ) {
	if( library[i].pn == process.argv[2] ) {
		console.log( library[i].desc );
		console.log( library[i].pinout );
	}	
	else {
	}
}
