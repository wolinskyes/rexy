var http = require('http'),
      fs = require('fs'),
     url = require('url');
	

var express = require('express');
var app = express();

var myarray = {
	choice1:'hi'
}

app.use(express.static('public'));

app.get('/rexy', function(req, res) {
	var mychoice = req.query;
	console.log("choice requested:",req.query);
	doThing(mychoice,function(opts){
		//send data here with res.send or other!
	})
  
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
});

function doThing(choice,callback){
	console.log("Choice Made",choice);
	// do work on var choice
	var hello = "i've done work!"+choice;
	callback(hello)
}