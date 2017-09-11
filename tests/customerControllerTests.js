var should = require('should'),
    sinon = require('sinon');

describe('Customer controller tests: ', function () {
    describe('POST', function () {
        it('Should return status 201 on succesful save to database', function () {
            var Customer = function (customer) { this.save = function () { } };
            var customerController = require('../controllers/customerController')(Customer);

            var req = {};
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            customerController.post(req, res);
            res.status.calledWith(201).should.equal(true);

        })
    });
});