var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var customerModel = new Schema({
    name: {
        type: String
    },
    accountNumber: {
        type: Number
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model('Customer', customerModel);