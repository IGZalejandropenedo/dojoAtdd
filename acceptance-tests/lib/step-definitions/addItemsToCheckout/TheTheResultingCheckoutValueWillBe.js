'use strict';

require('chai').should();

module.exports = function() {

  this.Then(/^the resulting value for checkout "([^"]*)" will be "([^"]*)"$/, function (checkoutCode, value, done) {
    const world = this;

    const checkoutValue = Number(value);
    const response = JSON.parse(world.getValue('checkoutRequestResponse').body);

    response.total.value.should.be.equal(Number(value));

    done();
  });

};
