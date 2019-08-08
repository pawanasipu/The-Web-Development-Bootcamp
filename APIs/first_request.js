const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
	if(!error && response.statusCode==200){
		const parsedData = JSON.parse(body);
		console.log(`${parsedData.name} lives at kolkata`); // Print the HTML for the Google homepage.
	}
});

// var rp = require('request-promise');

// rp('https://jsonplaceholder.typicode.com/users/1')
//     .then( (body) => {
//         // Process html...
// 		const parsedData = JSON.parse(body);
//  		console.log(`${parsedData.name} lives at kolkata`);
//     })
//     .catch((err) => {
//         // Crawling failed...
// 	console.log("error", err);
//     });
