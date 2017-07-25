var cheerio = require('cheerio');
var request = require('request');

request('https://www.metacritic.com/feature/movie'), function(err, res, body) {
	var $ = cheerio.load(body);
	var stories = $('article.story');

	stories.each(function(index, story) {
		story = $(story).find('.summary').text().toString().trim();

		if ( story.length ) console.log(story);
	});
	$.each(function(story) {
		console.log(story.html());
	});
	console.log($('article.story').html());
});

$ = cheerio.load("");

console.log($.html());