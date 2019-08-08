express = require("express");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/fellinlove/:name", function(req, res){
	var thing = req.params.name;
	res.render("love.ejs",{pawan : thing});
});

app.get("/post", function(req, res){
	var pawan = [
		{title : "one", author : "one one"},
		{title : "two", author : "two two"},
		{title : "two", author : "otwo two"},
	];
	
	res.render("posts.ejs", {pawans : pawan});
});

app.listen(3000, function(){
	console.log("working");
});