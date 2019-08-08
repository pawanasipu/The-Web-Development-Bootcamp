console.log("Express app");
var ex = require("express");

var app = ex();

app.get("/", function(req, res){
	res.send("Hi there!");
});

app.get("/:p/:k", function(req, res){
	var x = req.params.p;
	var y = Number(req.params.k);
	var ans = "";
	for(var i=0;i<y;i++){
		ans += x + " ";
	}
	
	res.send(ans);
});

app.listen(3000, function() { 
	console.log('Server listening on port 3000'); 
});