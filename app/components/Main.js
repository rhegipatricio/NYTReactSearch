var request = require('request');
var cheerio = require('cheerio');

var target = "https://www.metacritic.com/feature/movie";

request (target, function(err, response, body){
	if(!err && response.statusCode === 200) {
		$ = cheerio.load(body);

		$("article .story_title_label")
	}
});