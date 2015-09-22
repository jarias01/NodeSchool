var http = require("http");
var urlParser = require("url");
var port = process.argv[2];

var server = http.createServer(function (req, res) {

	var parsedUrl = urlParser.parse(req.url, true);
	var requestDate = new Date(parsedUrl.query.iso);
	var result;

	if(parsedUrl.pathname === "/api/parsetime") {

		result = {
	 		"hour": requestDate.getHours(),
			"minute": requestDate.getMinutes(),
			"second": requestDate.getSeconds()
		}

	} else if (parsedUrl.pathname === "/api/unixtime") {

		result = {
			"unixtime": requestDate.getTime()
		}
	}

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify(result));
	res.end();
});

server.listen(port);