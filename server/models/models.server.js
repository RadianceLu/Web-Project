var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/cs5610project');
var db = mongoose.connect('mongodb://jielu:jielumongodb2@ds153869.mlab.com:53869/heroku_2hrq6d47');


module.exports = db;
