var express = require('express'),
    mongoose = require('mongoose');

var app = express();

var db = mongoose.connect('mongodb://localhost/customerAPI');

var Customer = require('./models/customerModel');

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    Customer.find(function(err, customers){
        if(err){
            res.status(500).send(err);
        }else {
            res.json(customers);
        }
    });
});

app.listen(port, function(){
    console.log('listening on port ' + port);
})