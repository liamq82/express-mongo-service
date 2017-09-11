var should = require('should'),
    sinon = require('sinon');

describe('Customer controller tests: ', function () {
    describe('GET', function () {
        it('Should return status 500 error on error', function () {
            var Customer = { find: function () { } };
            var customerController = require('../controllers/customerController')(Customer);

            var req = {};
            var res = {
                status: sinon.spy()
            };

            customerController.get(req, res);
            res.status.calledWith(500).should.equal(true, 'Bad status ' + res.status.args[0][0]);

        })
    });
});