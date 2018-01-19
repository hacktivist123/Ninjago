const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
	res.send({type: 'GET'});

});

//add a new ninja to db
router.post('/ninjas', function(req, res, next){
	//saves to db in the Ninjas collection
	//var Ninja = new Ninja(req.body);
		//ninja.save();
							//OR
	//creates a new instance of the data and save to db in the Ninjas collection
	Ninja.create(req.body).then(function(ninja){

	res.send(ninja);

	}).catch(next);

});

		//update a ninja in db
router.put('/ninjas/:id', function(req, res, next){
   Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
   
   	Ninja.findOne({_id: req.params.id}).then(function(ninja){
   	
   		res.send(ninja);
   	})
  
  });

});

		//delete a ninja from db
router.delete('/ninjas/:id', function(req, res, next){
	
	Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
	
		res.send(ninja);
	});
});

module.exports = router;