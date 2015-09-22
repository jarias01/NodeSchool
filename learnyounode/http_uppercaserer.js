var map = require('through2-map');
var port = process.argv[2];
var http = require("http");

var server = http.createServer(function (req, res) {

	req.pipe(map(function (chunk) {
   		return chunk.toString().toUpperCase().split('').join('');
   	})).pipe(res);
});

server.listen(port);