var mymodule = require('./make_it_modular.js');

mymodule(process.argv[2], process.argv[3], function (error, data) {

	data.forEach(function (file) {
		
		console.log(file);
	});
});