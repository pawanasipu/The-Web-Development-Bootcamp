console.log("Express app");
var ex = require("express");

var app = ex();

app.get("/", function(req, res){
	res.send("Hi there!");
});

app.get("/bye", function(req, res){
	res.send("Good Bye!");
});

app.get("/dog", function(req, res){
	res.send("MEOOOW!");
});

app.get("/r/:subName", function(req, res){
	var sub = req.params.subName.toUpperCase();
	res.send("Welcome to " + sub);
});

app.get("*", function(req, res){
	res.send("You are a star!!!");
});

app.listen(3000, function() { 
	console.log('Server listening on port 3000'); 
});