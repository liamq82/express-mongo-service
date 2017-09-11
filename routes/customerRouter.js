var express = require('express');

var customerRoutes = function (Customer) {
    var customerController = require('../controllers/customerController')(Customer);

    var router = express.Router();
    router.route('/customers')
        .get(customerController.get);

    return router;
};

module.exports = customerRoutes;