var express = require('express');
var app = express();

var request = require('request');

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	
	
	var query = req.query.search;
	var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
	
	// res.send("Hello results working");
	request(url, function (error, response, body) {
  	// console.error('error:', error); // Print the error if one occurred
  	// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
		if(!error && response.statusCode==200){
			//res.send(body);
			const data = JSON.parse(body);
			//res.send(results.Search[0]);
			res.render("results", {data: data});
		}
	});
});

app.listen(3000, function(){
	console.log('Server Working!!');
});