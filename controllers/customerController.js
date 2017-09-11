var customerController = function (Customer) {
    var get = function (req, res) {
        Customer.find(function (err, customers) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(customers);
            }
        });
    };

    var post = function (req, res) {
        var customer = new Customer(req.body);
        customer.save();
        res.status(201);
        res.send(customer);
    };

    return {
        get: get,
        post: post
    }
};

module.exports = customerController;