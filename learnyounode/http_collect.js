var http = require("http");
var bl = require("bl");
var content = "";

http.get(process.argv[2], function (response) {

	response.setEncoding("utf8");
	response.setMaxListeners(0);
 	
	response.pipe(bl(function (err, data) { 

		content = content + data;
	}));

 	response.on("end", function () {

		console.log(content.length);
		console.log(content);
	});
});