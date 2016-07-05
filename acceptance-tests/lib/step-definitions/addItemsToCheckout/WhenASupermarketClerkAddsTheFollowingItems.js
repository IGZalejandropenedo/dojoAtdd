'use strict';

const requestPromise = require('request-promise');
const _ = require('lodash');

module.exports = function() {

  this.When(/^a supermarket clerk adds the following items to the checkout "([^"]*)"$/, function (checkoutId, items, done) {
    const world = this;
    const options = {
      method: 'PUT',
      uri: 'http://localhost:3000/api/checkouts/' + checkoutId,
      json: _.map(items.hashes(), (item) => item.product),
      resolveWithFullResponse: true
    };

    requestPromise(options)
    .then(function(response) {
      world.publishValue('addItemResponse', response);
      done();
    })
    .catch(function(err) {
      done(err);
    });
  });
};
