var request = require('request');
var cheerio = require('cheerio');

var target = "https://www.metacritic.com/feature/movie";

request (target, function(err, response, body){
	console.log(body);
});