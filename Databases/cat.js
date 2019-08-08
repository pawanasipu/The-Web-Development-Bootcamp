var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({	
	name : String,
	age : Number,
	temperament : String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to a Database
// var george = new Cat({
// 	name : "Mrs. Norris",
// 	age : 1,
// 	temperament : "Evail"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("Something wnet wrong!!");
// 	}else{
// 		console.log("We just added a cat to the database");
// 		console.log(cat);
// 	}
// });

// we can create and save a cat in a single function
Cat.create({
	name : "Snow white",
	age : 15,
	temperament : "Bland"
}, function(err, cat){
	if(err){
		console.log("Something wnet wrong!!");
	}else{
		console.log("We just added a cat to the database");
		console.log(cat);
	}
});
 
// retriving all cats from the database
Cat.find({}, function(err, cats){
	if(err){
		console.log("Something wnet wrong!!");
	}else{
		console.log("All the cats.....");
		console.log(cats);
	}
});