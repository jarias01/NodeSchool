var mymodule = require('./6-make_it_modular_module.js');

mymodule(process.argv[2], process.argv[3], function (error, data) {

	data.forEach(function (file) {
		
		console.log(file);
	});
});