var  fs = require('fs');

fs.readFile(process.argv[2], function (error, data) {
	var lineas = data.toString().split("\n").length -1;

	console.log(lineas);
})