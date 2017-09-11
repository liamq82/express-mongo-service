var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/customerAPI');
var Customer = require('./models/customerModel');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var customerRouter = require('./routes/customerRouter')(Customer);

app.use('/api', customerRouter);
app.listen(port, function () {
    console.log('listening on port ' + port);
})