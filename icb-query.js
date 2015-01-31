var fs = require('fs'),
	library = JSON.parse(fs.readFileSync(__dirname + '/library.json', 'utf-8')),
	term = process.argv[2],
	item,
	re;

if(!term) {
	console.log('usage: icb {part|desc}');
	process.exit();
}

// yes, print a blank line 
console.log('');

for(var i = 0; i < library.length; i++) {
	item = library[i],
	re = new RegExp(term);

	if (item.pn === term || re.test(item.desc) === true) {
		console.log(library[i].desc);
		console.log(library[i].pinout);
	}	
}
