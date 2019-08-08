var cat = require("cat-me");
var joke = require("knock-knock-jokes");
var faker = require("faker");

for(var i=0;i<10;i++){
	console.log(faker.fake("{{commerce.productName}} - {{commerce.price}}"));
}