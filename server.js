var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var app = express();

var db = mongoose.connect('mongodb://localhost/customerAPI');

var Customer = require('./models/customerModel');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var router = express.Router();

var customerController = require('./controllers/customerController')(Customer);
router.route('/customers')
    .get(customerController.get);
app.use('/api', router);

app.listen(port, function(){
    console.log('listening on port ' + port);
})