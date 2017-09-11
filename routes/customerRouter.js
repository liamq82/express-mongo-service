var express = require('express');

var routes = function (Customer) {
    var router = express.Router();

    var customerController = require('../controllers/customerController')(Customer);
    router.route('/customers')
        .get(customerController.get);

    return router;
};

module.exports = routes;