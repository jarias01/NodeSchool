var async = require("async");
var urls = process.argv.splice(2);
var http = require("http");
var bl = require("bl");

async.mapSeries(urls, function (url, callback) {

	var content = "";

	http.get(url, function (response) {

		response.setEncoding("utf8");
		response.setMaxListeners(0);

		response.pipe(bl(function (err, data) { 

			content = content + data;
		}));

		response.on("end", function () {

			callback(null, content);
		});
	});
}, function (err, results) {

	results.forEach(function (result) {

		console.log(result);
	});
});

    Status API Training Shop Blog About Pricing 

