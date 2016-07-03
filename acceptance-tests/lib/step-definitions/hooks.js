'use strict';

const requestPromise = require('request-promise');

module.exports = function() {

  this.Before(function (context, done) {
    const options = {
        method: 'DELETE',
        uri: 'http://localhost:3000/api/checkouts',
        solveWithFullResponse: true
    };

    requestPromise(options)
        .then(() => {done();})
        .catch(done);

  });

  this.After(function(context, done) {
    done();
  });
};
