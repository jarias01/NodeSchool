var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (req, res) {

	var content = "";
	var reader = fs.createReadStream(path);

	reader.on("open", function () {

		reader.pipe(res);
	});
});

server.listen(port);