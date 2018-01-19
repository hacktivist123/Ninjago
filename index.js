const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', { 
	useMongoClient: true,
});

//set mongose promise to the global promise in Nodejs
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

// erro handling middleware

app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});

//listen for resquests
app.listen(process.env.port || 4000, function(){  
	console.log('now listening for requests');

});

