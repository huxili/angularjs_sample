'use strict';

var path = require("path")
var fs = require("fs")

module.exports.readJSON = function (filePath) {
  var file = path.resolve(filePath)
  var json = fs.readFileSync(file, "utf8");
  json = JSON.parse(json)
  return json;
}