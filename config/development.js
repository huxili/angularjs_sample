'use strict';

// npm package
var ejs = require('ejs');

module.exports = {
  port: 8080, 
  engine: ejs, 
  templates: __dirname + '/../templates'
};
