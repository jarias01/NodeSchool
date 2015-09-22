var net = require("net");
var port = process.argv[2];

function formatNumber (number) {

	return (number < 10 ? "0" : "") + number;
}

var server = net.createServer(function (socket) {

	var currentDate = new Date();
	var formattedDate = 
		currentDate.getFullYear() + "-" + 
		(formatNumber(currentDate.getMonth() + 1)) + "-" +
		formatNumber(currentDate.getDate()) + " " +
		formatNumber(currentDate.getHours()) + ":" +
		formatNumber(currentDate.getMinutes()) +
		"\n";

	socket.end(formattedDate);
});

server.listen(port);