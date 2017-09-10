var customerController = function(Customer){
    var get = function(req, res){
        Customer.find(function(err, customers){
            if(err){
                res.status(500).send(err);
            }else {
                res.json(customers);
            }
        });
    }

    return {
        get: get
    }
};

module.exports = customerController;