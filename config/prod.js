'use strict';

// npm package
var ejs = require('ejs');

module.exports = {
  port: 80, 
  engine: ejs, 
  templates: __dirname + '/../templates'
};
