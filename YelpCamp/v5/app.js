var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", { useNewUrlParser: true });

//app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");

seedDB();

// Campground.create({
// 	name : "Night camp",
// 	image : "https://cdn.hiconsumption.com/wp-content/uploads/2015/09/Best-Four-Season-Tents-for-Winter-Camping.jpg",
// 	description : "This is a beautiful campground!!! Wow!!"
// }, function(err, campground){
// 	if(err){
// 		console.log("Something wnet wrong!!");
// 	}else{
// 		console.log("We just added a camp to the database");
// 		console.log(campground);
// 	}
// });


app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	
	// get all campgrounds from db
		Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log("Something wnet wrong!!");
		}else{
			res.render("campgrounds/index", {campgrounds : allCampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res){
	
	// get data from form and add it to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	
	var newCampground = {name: name, image:image, description:description};
	
	// create a new campground and add it to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log("Something wnet wrong!!");
		}else{
			// redirect to campgrounds
			res.redirect("/campgrounds");
		}
	});
});

app.get("/campgrounds/new", function(req, res){
	res.render("campgrounds/new");
});


// Shows more info about campground
app.get("/campgrounds/:id", function(req, res){
	// Find campgrounds with provided id
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log("Something wnet wrong!!");
		}else{
			console.log(foundCampground);
			res.render("campgrounds/show", {campground:foundCampground});
		}
	});
});

app.get("/campgrounds/:id/comments/new", function(req, res){
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		}else{
			res.render("comments/new", {campground : campground});
		}
	});
});

app.post("/campgrounds/:id/comments", function(req, res){
	//loookup campground using id
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		}else{
			// Create new comment
			Comment.create(req.body.comment,function(err, comment){
				if(err){
					console.log(err);
				}else{
					campground.comments.push(comment);
					campground.save();
					res.redirect("/campgrounds/" + campground._id);
				}
			});
		}
	});
});

app.listen(3000, function(){
	console.log("Server working");
});