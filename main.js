const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://pawan_asipu:Pawan@1998@cluster0-kd1l2.mongodb.net/test?retryWrites=true&w=majority',{
	useNewUrlParser : true,
	useCreateIndex : true
}).then(() => {
	console.log('Connected to DB');
}).catch(err =>{
	console.log('Error ', err.message);
});