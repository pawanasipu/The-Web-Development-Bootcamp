var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");


var campgrounds = [
	{name :"camp1", image:"https://cdn.hiconsumption.com/wp-content/uploads/2015/09/Best-Four-Season-Tents-for-Winter-Camping.jpg"},
	{name :"camp2", image:"https://home.bt.com/images/5-best-places-to-go-camping-in-the-uk-136425069414302601-180215150057.jpg"},
	{name :"camp3", image:"https://cdn-blog.queensland.com/wp-content/uploads/2015/12/how-to-pack-for-a-summer-camping-trip.jpg"},
	{name :"camp4", image:"https://www.visitthunderbay.com/en/outdoor-adventure/resources/Camping-Night-photo.jpg"},
	{name :"camp5", image:"https://media.istockphoto.com/photos/friends-hikers-sitting-beside-camp-and-tents-in-the-night-picture-id678554980?k=6&m=678554980&s=612x612&w=0&h=WFjmXLhUEW1hGgHzo5n96X-9pR-nkdemzY8wUXmSGL4="},
	{name :"camp6", image:"http://www.selemacamping.com/wp-content/uploads/2016/05/DSCF5050-1024x683.jpeg"},
	{name :"camp7", image:"https://auip.files.wordpress.com/2013/01/whale-surfacing-in-front-of-zodiac.jpg"},
	{name :"camp8", image:"https://www.rei.com/dam/bigagnes_rei_wondercamp-balkin_083_winter_camping_checklist_lg.jpg"},
	{name :"camp9", image:"https://cdn-blog.queensland.com/wp-content/uploads/2015/12/how-to-pack-for-a-summer-camping-trip.jpg"}
];


app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds : campgrounds});
});

app.post("/campgrounds", function(req, res){
	
	// get data from form and add it to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	
	var newCampground = {name: name, image:image};
	campgrounds.push(newCampground);
	
	// redirect to campgrounds
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3000, function(){
	console.log("Server working");
});