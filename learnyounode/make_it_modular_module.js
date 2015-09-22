var fs = require("fs");

module.exports = function (path, ext, callback) {

	fs.readdir(path, function (error, list) {

		if(error) {
	
			return callback(error);
		}

		var results = [];

		list.forEach(function (file) {

			var n = file.lastIndexOf("." + ext);

			if(n !== -1) {
			
				results.push(file);
			}
		});
		
		return callback(null, results);
	});
};