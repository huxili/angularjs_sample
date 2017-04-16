'use strict';

module.exports = tutorial;

var basics = require("../tutorial/1. Basics.js");

//Coming soon:
//var valueInspection = require("../tutorial/2. Value Inspection.js");
//var exceptions = require("../tutorial/3. Exceptions.js");
//var breakpoints = require("../tutorial/4. Breakpoints.js");
//var scriptInspector = require("../tutorial/5. Script Inspector.js");

// Each tutorial section is put in a separate file
function tutorial (req, res, config) {
	var data = {};
	load(basics, data);

//  Coming soon:
//	load(valueInspection, data);
//	load(exceptions, data);
//	load(breakpoints, data);
//	load(scriptInspector, data);

	try {
		res.template('index.ejs', data);
	} catch (ex) {
		console.error(ex.stack);
	}
};

function load(module, data) {
	try {
		module(data);
	} catch (ex) {
		console.error(ex.stack);
	}
}
