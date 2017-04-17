'use strict';

module.exports = tutorial;

function tutorial (req, res, config) {
	var data = {};
	try {
		res.template('index.ejs', data);
	} catch (ex) {
		console.error(ex.stack);
	}
};
