var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

// POST
var postSchema = new mongoose.Schema({
	title : String,
	content : String
});

var Post = mongoose.model("Post", postSchema);

// USER
var userSchema = new mongoose.Schema({
	email : String, 
	name : String,
	posts : [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
// 	email : "iamrick@gmail.com",
// 	name : "rick",
// });

// newUser.posts.push({
// 	title : "Apples",
// 	content : "I love apples"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log("Error!!");
// 	}else{
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title : "Mango",
// 	content : "They are awsome"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log("Error!!");
// 	}else{
// 		console.log(post);
// 	}
// });

User.findOne({name : "rick"}, function(err, user){
	if(err){
		console.log("Error!!");
	}else{
		user.posts.push({
			title : "Three things i hate",
			content : "Maths Maths Maths!!!"
		});
		user.save(function(err, user){
			if(err){
				console.log("Error!!");
			}else{
				console.log(user);
			}
		});
	}
});