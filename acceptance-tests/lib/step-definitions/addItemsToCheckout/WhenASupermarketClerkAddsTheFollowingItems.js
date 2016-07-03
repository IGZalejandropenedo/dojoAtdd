'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

  this.When(/^a supermarket clerk adds the following items to the checkout "([^"]*)"$/, function (checkoutId, items, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
};
