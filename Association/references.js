var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
// 	name: "morty",
// 	email : "iammorty@gmail.com"
// });

// Post.create({
// 	title : "how to cook a pizza",
// 	content : "Actually i don't know"
// },function(err, post){
// 	if(err){
// 		console.log("Error!!");
// 	}else{
// 		console.log(post);
// 	}
// });

// Create a post and add it to user by searching by email
// Post.create({
// 	title : "how to cook a pizza2",
// 	content : "Actually i don't know this time too"
// },function(err, post){
// 	User.findOne({email:"iammorty@gmail.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

// Post.create({
// 	title : "how to cook a pizza3",
// 	content : "Actually i don't know this time too, yoooooooooooooooo"
// },function(err, post){
// 	User.findOne({email:"iammorty@gmail.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

Post.create({
	title : "how to cook a pizza4",
	content : "I am the human after all"
},function(err, post){
	User.findOne({email:"iammorty@gmail.com"}, function(err, foundUser){
		if(err){
			console.log(err);
		}else{
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if(err){
					console.log(err);
				}else{
					console.log(data);
				}
			});
		}
	});
});

// Find user 
// Find all posts for that user
// User.findOne({email:"iammorty@gmail.com"}). populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });

