
var fs = require("fs");
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function (error, list) {

	list.forEach(function (file) {

		var n = file.lastIndexOf("." + ext);

		if(n !== -1) {

			console.log(file);
		}
	});
});